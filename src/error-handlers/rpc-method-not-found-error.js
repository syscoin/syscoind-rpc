
import {KnownErrors} from './known-errors';

export default class RpcMethodNotFoundErrorHandler {
    constructor(methodName, logger, createCustomErrorResponse) {
        this.methodName = methodName;
        this.logger = logger;
        this.createCustomErrorResponse = createCustomErrorResponse;
    }

    matchesType(rpcError) {
        try {
            return (rpcError.response.data.error.code === KnownErrors.RpcMethodNotFound)
        }
        catch (err) {
            // Assume that if something went wrong here, it's because one of the above nested
            // properties was null, thereby this doesn't match
            return false;
        }
    }

    logAndReturn() {
        let methodNotFoundErrorResponse = this.createCustomErrorResponse(`There is no method titled "${this.methodName}" in the Syscoin RPC.  Please verify that your method name is correct and corresponds to the appropriate RPC version.`);
        this.logger.logCustomErrorResponse(methodNotFoundErrorResponse);
        return methodNotFoundErrorResponse;
    }
}