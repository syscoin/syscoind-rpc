import { JsonRpcRequest } from "./jsonRpcRequest";

export interface JsonRpcCall<ReturnType> extends JsonRpcRequest {
  call: (unwrapResponse?:boolean) => Promise<ReturnType>;
}
