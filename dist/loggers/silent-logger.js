"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SilentLogger = function () {
    function SilentLogger() {
        (0, _classCallCheck3.default)(this, SilentLogger);
    }

    (0, _createClass3.default)(SilentLogger, [{
        key: "logRpcCall",
        value: function logRpcCall(callData) {
            // No op.
        }
    }, {
        key: "logCustomErrorResponse",
        value: function logCustomErrorResponse(errorResponse) {}
    }, {
        key: "logError",
        value: function logError(methodName, errorObject) {}
    }, {
        key: "logDataFromRpc",
        value: function logDataFromRpc(methodName, data) {
            // no-op
        }
    }, {
        key: "logAlternateResponseFromRpc",
        value: function logAlternateResponseFromRpc(methodName, response) {
            // no-op
        }
    }]);
    return SilentLogger;
}();

exports.default = SilentLogger;