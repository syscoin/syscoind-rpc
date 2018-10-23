import * as util from 'util' // has no default export

export default class ErrorLogger {

    constructor(logger) {
        this.log = logger;
    }

    logRpcCall(callData) {
        //no-op
    }

    logCustomErrorResponse(errorResponse) {
        this.log(errorResponse, 'Custom error response sent');
    }

    logError(methodName, errorObject) {
        if (errorObject.error) {
            this.log({methodName, err: errorObject}, 'Standard error');
        }
        else {
            this.log({methodName, err: errorObject}, 'Non-standard format error');
        }
    }

    logDataFromRpc(methodName, data) {
        // no-op
    }

    logAlternateResponseFromRpc(methodName, response) {
        // no-op
    }
}