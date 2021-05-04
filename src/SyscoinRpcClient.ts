import axios, { AxiosInstance } from 'axios';
import { JsonRpcCall, RpcConfigOptions } from "./index";
import { JsonRpcRequest } from "./model/request/jsonRpcRequest";
import { HelpServices } from "./services/HelpServices";

export class SyscoinRpcClient {

  private readonly instance: AxiosInstance;
  private readonly url: string;

  public helpService: HelpServices;
  public logging: boolean = false;

  constructor(private configOptions: RpcConfigOptions) {

    this.instance = axios.create(SyscoinRpcClient.createConfigurationObject(
      this.configOptions.username,
      this.configOptions.password,
      this.configOptions.useSsl,
      this.configOptions.timeout,
      this.configOptions.customHttpAgent));

    this.url = `${this.configOptions.useSsl ? "https" : "http"}://${this.configOptions.host}:${this.configOptions.rpcPort}`;

    this.callRpc = this.callRpc.bind(this);
    this.batch = this.batch.bind(this);

    // init services
    this.helpService = new HelpServices(this.callRpc);

    if (this.configOptions.logging) {
      this.logging = true;
    }
  }

  private getStandardResponseFromRpcResponse(response) {
    return response.result ? response.result : response;
  }

  private getRequestObject<ReturnType>(methodName: string, args?: any[]): JsonRpcCall<ReturnType> {
    const instance = this.instance;
    const url = this.url;
    const getStandardResponseFromRpcResponse = this.getStandardResponseFromRpcResponse;
    return {
      jsonrpc: "1.0",
      method: methodName.toLowerCase(),
      params: args ? Array.from(args).filter(element => element !== undefined) : [],
      call: async function(unwrap: boolean = true): Promise<ReturnType> {
        let responseFromRpc;
        try {
          responseFromRpc = await instance.post(url, {...this});
          if (unwrap) {
            return getStandardResponseFromRpcResponse(responseFromRpc.data);
          } else {
            return responseFromRpc.data;
          }
        } catch(e) {
          if (this.logging) {
            console.log('caught error', e);
          }
          if (unwrap && e.response.data.error !== undefined) {
            if (this.logging) {
              console.error("rpc error:", e.response);
            }
            if(e.response.data.error.message.indexOf('ERRCODE') > -1) {
              throw new Error(e.response.data.error.message.substr(e.response.data.error.message.indexOf('ERRCODE')));
            }else {
              throw new Error(e.response.data.error.message);
            }
          } else {
            throw new Error(JSON.stringify(e.response));
          }
        }
      }
    };
  }

  static createConfigurationObject(username, password, useSsl, timeout, customHttpAgent) {
    let configurationObject = {
      auth: {
        username: username,
        password: password
      },
      timeout: timeout
    };

    if (customHttpAgent) {
      let agentProperty = useSsl ? "httpsAgent" : "httpAgent";
      configurationObject[agentProperty] = customHttpAgent;
    }

    return configurationObject;
  }

  public callRpc<ReturnType>(methodName: string, args?: Array<any>): JsonRpcCall<ReturnType> {
    return this.getRequestObject<ReturnType>(methodName, args);
  }


  public async batch(requests: JsonRpcRequest[], unwrapResponses: boolean = true): Promise<any[]> {
    let responseFromRpc = await this.instance.post(this.url, requests);

    if (unwrapResponses) {
      let dataFromRPC = [];
      for(let result of responseFromRpc.data) {
        dataFromRPC.push(this.getStandardResponseFromRpcResponse(result))
      }

      return dataFromRPC;
    }

    return responseFromRpc.data;
  }
}
