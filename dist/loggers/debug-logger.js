'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _util = require('util');

var util = _interopRequireWildcard(_util);

var _loggingSupportMethods = require('./logging-support-methods');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DebugLogger = function () {
    function DebugLogger(logger, methodListing) {
        (0, _classCallCheck3.default)(this, DebugLogger);

        this.listing = methodListing;
        this.log = logger;
    }

    (0, _createClass3.default)(DebugLogger, [{
        key: 'logRpcCall',
        value: function logRpcCall(callData) {
            if (!(0, _loggingSupportMethods.methodShouldBeLogged)(callData.method, this.listing)) return;
            this.log(callData, 'RPC call');
        }
    }, {
        key: 'logCustomErrorResponse',
        value: function logCustomErrorResponse(errorResponse) {
            this.log(errorResponse, 'Custom error response sent');
        }
    }, {
        key: 'logDataFromRpc',
        value: function logDataFromRpc(methodName, data) {
            if (!(0, _loggingSupportMethods.methodShouldBeLogged)(methodName, this.listing)) return;
            this.log({ methodName: methodName, data: data }, 'Received standard data response');
        }
    }, {
        key: 'logAlternateResponseFromRpc',
        value: function logAlternateResponseFromRpc(methodName, response) {
            if (!(0, _loggingSupportMethods.methodShouldBeLogged)(methodName, this.listing)) return;
            this.log({ methodName: methodName, res: response }, 'Received alternate data response');
        }
    }, {
        key: 'logError',
        value: function logError(methodName, errorObject) {
            if (errorObject.error) {
                this.log({ methodName: methodName, err: errorObject }, 'Standard error');
            } else {
                this.log({ methodName: methodName, err: errorObject }, 'Non-standard format error');
            }
        }
    }]);
    return DebugLogger;
}(); // has no default export


exports.default = DebugLogger;