import axios, { AxiosInstance } from 'axios';
import { RpcConfigOptions } from "./index";

export class SyscoinRpcClient {

  private instance: AxiosInstance;
  private configOptions: RpcConfigOptions;
  public callRpc: (method: string, params?: Array<any>) => Promise<any>;

  constructor({baseUrl="localhost",
                port=8368,
                username='',
                password='',
                useSsl=false,
                timeout=30000,
                customHttpAgent=null} = {}) {

    this.configOptions = { baseUrl, port, username, password, useSsl, timeout, customHttpAgent };

    this.instance = axios.create(SyscoinRpcClient.createConfigurationObject(
      this.configOptions.username,
      this.configOptions.password,
      this.configOptions.useSsl,
      this.configOptions.timeout,
      this.configOptions.customHttpAgent));

    //this needs to be defined in constructor so the THIS references get setup
    this.callRpc = async (methodName: string, args?: Array<any>) => {
      let url = `${this.configOptions.useSsl ? "https" : "http"}://${this.configOptions.baseUrl}:${this.configOptions.port}`;
      let data = {
        jsonrpc: "1.0",
        method: methodName.toLowerCase(),  // safety check: the RPC expects methods in all lowercase,
                                           // so we'll take that knowledge burden here instead of making
                                           // the consuming methods worry about it
        params: args ? Array.from(args).filter(element => element !== undefined): []
      };

      return await this.getResponseFromRpcCall(url, data);
    };

  }

  private async getResponseFromRpcCall(url, data) {
    let responseFromRpc = await this.instance.post(url, data);
    let dataFromRpc = responseFromRpc.data;

    if (dataFromRpc) {
      return dataFromRpc.result ? dataFromRpc.result : dataFromRpc
    } else {
      return responseFromRpc;
    }
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
}
