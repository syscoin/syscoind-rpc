import * as util from 'util' // has no default export
import {methodShouldBeLogged} from './logging-support-methods'

export default class DebugLogger {

    constructor(logger, methodListing) {
        this.listing = methodListing;
        this.log = logger;
    }

    logRpcCall(callData) {
        if (!methodShouldBeLogged(callData.method, this.listing)) return;
        this.log(callData, 'RPC call');
    }

    logCustomErrorResponse(errorResponse) {
        this.log(errorResponse, 'Custom error response sent');
    }

    logDataFromRpc(methodName, data) {
        if (!methodShouldBeLogged(methodName, this.listing)) return;
        this.log({methodName, data}, 'Received standard data response');
    }

    logAlternateResponseFromRpc(methodName, response) {
        if (!methodShouldBeLogged(methodName, this.listing)) return;
        this.log({methodName, res: response}, 'Received alternate data response');
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