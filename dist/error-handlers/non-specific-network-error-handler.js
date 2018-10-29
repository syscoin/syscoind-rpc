"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NonSpecificNetworkErrorHandler = function () {
    function NonSpecificNetworkErrorHandler(url, logger, createCustomErrorResponse) {
        (0, _classCallCheck3.default)(this, NonSpecificNetworkErrorHandler);

        this.url = url;
        this.logger = logger;
        this.createCustomErrorResponse = createCustomErrorResponse;
    }

    (0, _createClass3.default)(NonSpecificNetworkErrorHandler, [{
        key: "matchesType",
        value: function matchesType(rpcError) {
            return rpcError.message === "Network Error";
        }
    }, {
        key: "logAndReturn",
        value: function logAndReturn() {
            var networkErrorResponse = this.createCustomErrorResponse("Encountered an unknown network error.  Please verify that " + this.url + " is active and that the Syscoin core instance running is version 3.2 or above.");
            this.logger.logCustomErrorResponse(networkErrorResponse);
            return networkErrorResponse;
        }
    }]);
    return NonSpecificNetworkErrorHandler;
}();

exports.default = NonSpecificNetworkErrorHandler;