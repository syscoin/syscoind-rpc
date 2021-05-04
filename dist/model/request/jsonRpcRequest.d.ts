export interface JsonRpcRequest {
    jsonrpc: string;
    method: string;
    params: any[];
}
