import { RpcConfigOptions } from "./index";
export declare class SyscoinRpcClient {
    private configOptions;
    private instance;
    callRpc: (method: string, params?: Array<any>) => Promise<any>;
    constructor(configOptions: RpcConfigOptions);
    private getResponseFromRpcCall;
    static createConfigurationObject(username: any, password: any, useSsl: any, timeout: any, customHttpAgent: any): {
        auth: {
            username: any;
            password: any;
        };
        timeout: any;
    };
}
