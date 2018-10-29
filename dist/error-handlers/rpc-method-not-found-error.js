'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _knownErrors = require('./known-errors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RpcMethodNotFoundErrorHandler = function () {
    function RpcMethodNotFoundErrorHandler(methodName, logger, createCustomErrorResponse) {
        (0, _classCallCheck3.default)(this, RpcMethodNotFoundErrorHandler);

        this.methodName = methodName;
        this.logger = logger;
        this.createCustomErrorResponse = createCustomErrorResponse;
    }

    (0, _createClass3.default)(RpcMethodNotFoundErrorHandler, [{
        key: 'matchesType',
        value: function matchesType(rpcError) {
            try {
                return rpcError.response.data.error.code === _knownErrors.KnownErrors.RpcMethodNotFound;
            } catch (err) {
                // Assume that if something went wrong here, it's because one of the above nested
                // properties was null, thereby this doesn't match
                return false;
            }
        }
    }, {
        key: 'logAndReturn',
        value: function logAndReturn() {
            var methodNotFoundErrorResponse = this.createCustomErrorResponse('There is no method titled "' + this.methodName + '" in the Syscoin RPC.  Please verify that your method name is correct and corresponds to the appropriate RPC version.');
            this.logger.logCustomErrorResponse(methodNotFoundErrorResponse);
            return methodNotFoundErrorResponse;
        }
    }]);
    return RpcMethodNotFoundErrorHandler;
}();

exports.default = RpcMethodNotFoundErrorHandler;