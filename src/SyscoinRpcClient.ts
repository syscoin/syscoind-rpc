import axios, { AxiosInstance } from 'axios';
import { JsonRpcRequest, JsonRpcCall, RpcConfigOptions } from "./index";

export class SyscoinRpcClient {

  private instance: AxiosInstance;
  private readonly url: string;

  constructor(private configOptions: RpcConfigOptions) {

    this.instance = axios.create(SyscoinRpcClient.createConfigurationObject(
      this.configOptions.username,
      this.configOptions.password,
      this.configOptions.useSsl,
      this.configOptions.timeout,
      this.configOptions.customHttpAgent));

    this.url = `${this.configOptions.useSsl ? "https" : "http"}://${this.configOptions.host}:${this.configOptions.rpcPort}`;

    this.callRpc = this.callRpc.bind(this);
    this.batchCallRpc = this.batchCallRpc.bind(this);
  }

  private getStandardResponseFromRpcResponse(response) {
    let dataFromRpc = response.data;

    if (dataFromRpc) {
      return dataFromRpc.result ? dataFromRpc.result : dataFromRpc
    } else {
      return response;
    }
  }

  private getRequestObject(methodName: string, args?: any[]): JsonRpcCall {
    const instance = this.instance;
    const url = this.url;
    const getStandardResponseFromRpcResponse = this.getStandardResponseFromRpcResponse;
    return {
      data: {
        jsonrpc: "1.0",
        method: methodName.toLowerCase(),
        params: args ? Array.from(args).filter(element => element !== undefined) : []
      },
      call: async function(unwrap: boolean = true) {
        let responseFromRpc = await instance.post(url, this.data);
        if (unwrap) {
          return getStandardResponseFromRpcResponse(responseFromRpc);
        } else {
          return responseFromRpc.data;
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

  //this needs to be defined in constructor so the THIS references get setup
  public callRpc(methodName: string, args?: Array<any>): JsonRpcCall {
    return this.getRequestObject(methodName, args);
  }


  //this needs to be defined in constructor so the THIS references get setup
  public async batchCallRpc(requests: JsonRpcRequest[]) {
    let responseFromRpc = await this.instance.post(this.url, requests);

    let dataFromRPC = [];
    for(let result of <any>responseFromRpc) {
      dataFromRPC.push(this.getStandardResponseFromRpcResponse(result))
    }

    // make the request and then
    return dataFromRPC;
  }
}
