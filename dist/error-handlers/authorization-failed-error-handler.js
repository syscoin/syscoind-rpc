"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AuthorizationFailedErrorHandler = function () {
    function AuthorizationFailedErrorHandler(url, logger, createCustomErrorResponse) {
        (0, _classCallCheck3.default)(this, AuthorizationFailedErrorHandler);

        this.url = url;
        this.logger = logger;
        this.createCustomErrorResponse = createCustomErrorResponse;
    }

    (0, _createClass3.default)(AuthorizationFailedErrorHandler, [{
        key: "matchesType",
        value: function matchesType(rpcError) {
            return rpcError.response && rpcError.response.status && rpcError.response.status === 401;
        }
    }, {
        key: "logAndReturn",
        value: function logAndReturn() {
            var authErrorResponse = this.createCustomErrorResponse("Service is up at " + this.url + ", but authorization failed.  Please check the username and password credentials you used when instantiating the SyscoinRpcClient object.");
            this.logger.logCustomErrorResponse(authErrorResponse);
            return authErrorResponse;
        }
    }]);
    return AuthorizationFailedErrorHandler;
}();

exports.default = AuthorizationFailedErrorHandler;