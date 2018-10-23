import {KnownErrors} from './known-errors';
import RpcException from '../rpc-exception';

export default class RpcErrorHandler {
    
    constructor(methodName, logger) {
        this.methodName = methodName;
        this.logger = logger;
    }

    matchesType(rpcError) { 
        return (rpcError.response && 
                rpcError.response.data);  
    }

    logAndReturn(rpcError) {

        // If it's none of these, we've encountered something totally unknown.
        let errorResponse = rpcError.response;
        if (errorResponse && errorResponse.data) {
            let dataFromResponse = errorResponse.data;
            this.logger.logError(this.methodName, dataFromResponse);
            if (dataFromResponse.error) {
                return new RpcException({
                    result: null,
                    error: dataFromResponse.error.message,
                    code: dataFromResponse.error.code,
                    methodName: this.methodName
                });
            }
            else {
                return new RpcException({
                    result: dataFromResponse,
                    error: `An RPC error with a non-standard format occurred.  Please inspect the 'result' field for details.`,
                    code: -2000,
                    methodName: this.methodName
                })
            }
        }
    }
}