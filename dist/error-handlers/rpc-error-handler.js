'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _knownErrors = require('./known-errors');

var _rpcException = require('../rpc-exception');

var _rpcException2 = _interopRequireDefault(_rpcException);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RpcErrorHandler = function () {
    function RpcErrorHandler(methodName, logger) {
        (0, _classCallCheck3.default)(this, RpcErrorHandler);

        this.methodName = methodName;
        this.logger = logger;
    }

    (0, _createClass3.default)(RpcErrorHandler, [{
        key: 'matchesType',
        value: function matchesType(rpcError) {
            return rpcError.response && rpcError.response.data;
        }
    }, {
        key: 'logAndReturn',
        value: function logAndReturn(rpcError) {

            // If it's none of these, we've encountered something totally unknown.
            var errorResponse = rpcError.response;
            if (errorResponse && errorResponse.data) {
                var dataFromResponse = errorResponse.data;
                this.logger.logError(this.methodName, dataFromResponse);
                if (dataFromResponse.error) {
                    return new _rpcException2.default({
                        result: null,
                        error: dataFromResponse.error.message,
                        code: dataFromResponse.error.code,
                        methodName: this.methodName
                    });
                } else {
                    return new _rpcException2.default({
                        result: dataFromResponse,
                        error: 'An RPC error with a non-standard format occurred.  Please inspect the \'result\' field for details.',
                        code: -2000,
                        methodName: this.methodName
                    });
                }
            }
        }
    }]);
    return RpcErrorHandler;
}();

exports.default = RpcErrorHandler;