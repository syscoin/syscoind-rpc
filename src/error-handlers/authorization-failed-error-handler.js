export default class AuthorizationFailedErrorHandler {
    constructor(url, logger, createCustomErrorResponse) {
        this.url = url;
        this.logger = logger;
        this.createCustomErrorResponse = createCustomErrorResponse;
    }

    matchesType(rpcError) {
        return (rpcError.response && 
                rpcError.response.status &&
                rpcError.response.status === 401);
    }

    logAndReturn() {
        let authErrorResponse = this.createCustomErrorResponse(`Service is up at ${this.url}, but authorization failed.  Please check the username and password credentials you used when instantiating the SyscoinRpcClient object.`);
        this.logger.logCustomErrorResponse(authErrorResponse);
        return authErrorResponse;
    }
}
