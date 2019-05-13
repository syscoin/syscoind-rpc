import {KnownErrors} from './known-errors';

// If the error is an ECONNECT REFUSED, notify the user that the library can't connect
// and calls will fail.
export default class ConnectionRefusedErrorHandler {
    public url?: string;
    public logger?: any;
    public createCustomErrorResponse: any;

    constructor(url, logger, createCustomErrorResponse) {
        this.url = url;
        this.logger = logger;
        this.createCustomErrorResponse = createCustomErrorResponse;
    }

    matchesType(rpcError) {
        return rpcError.code && rpcError.code === KnownErrors.ConnectionRefused;
    }

    logAndReturn() {
        let cannotConnectErrorResponse = this.createCustomErrorResponse(`Could not connect to the Syscoin RPC service.  Please verify that ${this.url} is operational.`);
        this.logger.logCustomErrorResponse(cannotConnectErrorResponse);
        return cannotConnectErrorResponse;
    }
}