import { JsonRpcRequest } from "./jsonRpcRequest";
export interface JsonRpcCall {
    data: JsonRpcRequest;
    call: (unwrapResponse?: boolean) => void;
}
