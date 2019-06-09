import axios, { AxiosInstance } from 'axios';
import { JsonRpcRequest, RpcConfigOptions } from "./index";

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

  private async getResponseFromRpcCall(response) {
    let dataFromRpc = response.data;

    if (dataFromRpc) {
      return dataFromRpc.result ? dataFromRpc.result : dataFromRpc
    } else {
      return response;
    }
  }

  private getRequestObject(methodName: string, args?: any[]) {
    return {
      jsonrpc: "1.0",
      method: methodName.toLowerCase(),
      params: args ? Array.from(args).filter(element => element !== undefined): []
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
  public async callRpc(methodName: string, args?: Array<any>) {
    let data = this.getRequestObject(methodName, args);
    let responseFromRpc = await this.instance.post(this.url, data);

    return this.getResponseFromRpcCall(responseFromRpc);
  }


  //this needs to be defined in constructor so the THIS references get setup
  public async batchCallRpc(requests: JsonRpcRequest[]) {
    let responseFromRpc = await this.instance.post(this.url, requests);

    let dataFromRPC = [];
    for(let result of <any>responseFromRpc) {
      dataFromRPC.push(this.getResponseFromRpcCall(result))
    }

    // make the request and then
    return dataFromRPC;
  }
}
