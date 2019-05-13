export default class NonSpecificNetworkErrorHandler {
    public url?: string;
    public logger?: any;
    public createCustomErrorResponse: any;

    constructor(url, logger, createCustomErrorResponse) {
        this.url = url;
        this.logger = logger;
        this.createCustomErrorResponse = createCustomErrorResponse;
    }

    matchesType(rpcError) {
        return rpcError.message === "Network Error";
    }

    logAndReturn() {
        let networkErrorResponse = this.createCustomErrorResponse(`Encountered an unknown network error.  Please verify that ${this.url} is active and that the Syscoin core instance running is version 3.2 or above.`);
        this.logger.logCustomErrorResponse(networkErrorResponse);
        return networkErrorResponse;
    }
}