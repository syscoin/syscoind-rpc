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

var loggingSupportMethods = _interopRequireWildcard(_loggingSupportMethods);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WarnLogger = function () {
    function WarnLogger(logger) {
        (0, _classCallCheck3.default)(this, WarnLogger);

        this.log = logger;
    }

    (0, _createClass3.default)(WarnLogger, [{
        key: 'logRpcCall',
        value: function logRpcCall(callData) {}
    }, {
        key: 'logCustomErrorResponse',
        value: function logCustomErrorResponse(errorResponse) {
            this.log(errorResponse, 'Custom error response sent');
        }
    }, {
        key: 'logDataFromRpc',
        value: function logDataFromRpc(methodName, data) {}
    }, {
        key: 'logAlternateResponseFromRpc',
        value: function logAlternateResponseFromRpc(methodName, response) {}
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
    return WarnLogger;
}(); // has no default export


exports.default = WarnLogger;