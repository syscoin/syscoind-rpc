import { JsonRpcCall } from "../model";
export declare class HelpServices {
    private callRpc;
    constructor(callRpc: <ReturnType>(methodName: string, args?: Array<any>) => JsonRpcCall<ReturnType>);
    getAllRawRpcMethods(): Promise<{
        method: string;
        arguments: string;
    }[]>;
    helpLineIsHeader(helpDefinition: any): any;
    helpForRpcCommand({ commandName }: {
        commandName: any;
    }): Promise<JsonRpcCall<{}>>;
}
