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

// If the error is an ECONNECT REFUSED, notify the user that the library can't connect
// and calls will fail.
var ConnectionRefusedErrorHandler = function () {
    function ConnectionRefusedErrorHandler(url, logger, createCustomErrorResponse) {
        (0, _classCallCheck3.default)(this, ConnectionRefusedErrorHandler);

        this.url = url;
        this.logger = logger;
        this.createCustomErrorResponse = createCustomErrorResponse;
    }

    (0, _createClass3.default)(ConnectionRefusedErrorHandler, [{
        key: 'matchesType',
        value: function matchesType(rpcError) {
            return rpcError.code && rpcError.code === _knownErrors.KnownErrors.ConnectionRefused;
        }
    }, {
        key: 'logAndReturn',
        value: function logAndReturn() {
            var cannotConnectErrorResponse = this.createCustomErrorResponse('Could not connect to the Syscoin RPC service.  Please verify that ' + this.url + ' is operational.');
            this.logger.logCustomErrorResponse(cannotConnectErrorResponse);
            return cannotConnectErrorResponse;
        }
    }]);
    return ConnectionRefusedErrorHandler;
}();

exports.default = ConnectionRefusedErrorHandler;