export default class NonSpecificNetworkErrorHandler {
    constructor(url, logger, createCustomErrorResponse) {
        this.url = url;
        this.logger = logger;
        this.createCustomErrorResponse = createCustomErrorResponse;
    }

    matchesType(rpcError) {
        return rpcError.message === "Network Error";
    }

    logAndReturn() {

        if (rpcError.message === "Network Error") {
            throw new RpcException({
                result: rpcError.message,
                error: `syscoin-js encounted an unknown network error.  Please verify your Syscoin core instance is running version 3.2 or above.`,
                code: -3000
            })
        }
        let networkErrorResponse = this.createCustomErrorResponse(`Encountered an unknown network error.  Please verify that ${this.url} is active and that the Syscoin core instance running is version 3.2 or above.`);
        this.logger.logCustomErrorResponse(networkErrorResponse);
        return networkErrorResponse;
    }
}