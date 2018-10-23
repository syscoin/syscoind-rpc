import * as util from 'util' // has no default export
import * as loggingSupportMethods from './logging-support-methods'

export default class WarnLogger {

    constructor(logger) {
        this.log = logger;
    }

    logRpcCall(callData) {
    }

    logCustomErrorResponse(errorResponse) {
        this.log(errorResponse, 'Custom error response sent');
    }

    logDataFromRpc(methodName, data) {
    }

    logAlternateResponseFromRpc(methodName, response) {
    }

    logError(methodName, errorObject) {
        if (errorObject.error) {
            this.log({methodName, err: errorObject}, 'Standard error');
        }
        else {
            this.log({methodName, err: errorObject}, 'Non-standard format error');
        }
    }
}