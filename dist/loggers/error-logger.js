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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// has no default export

var ErrorLogger = function () {
    function ErrorLogger(logger) {
        (0, _classCallCheck3.default)(this, ErrorLogger);

        this.log = logger;
    }

    (0, _createClass3.default)(ErrorLogger, [{
        key: 'logRpcCall',
        value: function logRpcCall(callData) {
            //no-op
        }
    }, {
        key: 'logCustomErrorResponse',
        value: function logCustomErrorResponse(errorResponse) {
            this.log(errorResponse, 'Custom error response sent');
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
    }, {
        key: 'logDataFromRpc',
        value: function logDataFromRpc(methodName, data) {
            // no-op
        }
    }, {
        key: 'logAlternateResponseFromRpc',
        value: function logAlternateResponseFromRpc(methodName, response) {
            // no-op
        }
    }]);
    return ErrorLogger;
}();

exports.default = ErrorLogger;