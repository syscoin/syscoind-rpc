import { JsonRpcCall, RpcConfigOptions } from "./index";
import { JsonRpcRequest } from "./model/request/jsonRpcRequest";
export declare class SyscoinRpcClient {
    private configOptions;
    private instance;
    private readonly url;
    constructor(configOptions: RpcConfigOptions);
    private getStandardResponseFromRpcResponse;
    private getRequestObject;
    static createConfigurationObject(username: any, password: any, useSsl: any, timeout: any, customHttpAgent: any): {
        auth: {
            username: any;
            password: any;
        };
        timeout: any;
    };
    callRpc<ReturnType>(methodName: string, args?: Array<any>): JsonRpcCall<ReturnType>;
    batch(requests: JsonRpcRequest[], unwrapResponses?: boolean): Promise<any[]>;
}
