import { JsonRpcCall, RpcConfigOptions } from "./index";
import { JsonRpcRequest } from "./model/request/jsonRpcRequest";
import { HelpServices } from "./services/HelpServices";
export declare class SyscoinRpcClient {
    private configOptions;
    private readonly instance;
    private readonly url;
    helpService: HelpServices;
    logging: boolean;
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
