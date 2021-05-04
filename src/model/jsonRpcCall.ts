import { JsonRpcRequest } from "./request/jsonRpcRequest";

export interface JsonRpcCall<ReturnType> extends JsonRpcRequest {
  call: (unwrapResponse?:boolean) => Promise<ReturnType>;
}
