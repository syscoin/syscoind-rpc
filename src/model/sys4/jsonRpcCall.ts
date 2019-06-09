import { JsonRpcRequest } from "./jsonRpcRequest";

export interface JsonRpcCall<ReturnType> {
  data: JsonRpcRequest;
  call: (unwrapResponse?:boolean) => Promise<ReturnType>;
}
