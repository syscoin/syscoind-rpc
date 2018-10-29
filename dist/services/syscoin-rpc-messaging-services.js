"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.syscoinRpcMessagingServices = syscoinRpcMessagingServices;

var _endpointDecorators = require("../endpoint-decorators");

var _syscoinOw = require("syscoin-ow");

var _syscoinOw2 = _interopRequireDefault(_syscoinOw);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function syscoinRpcMessagingServices(callRpc) {
    var signMessage = function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                privateKey = _ref2.privateKey,
                message = _ref2.message;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            (0, _syscoinOw2.default)(privateKey, _syscoinOw2.default.string.label("signMessage:privateKey").not.empty);
                            (0, _syscoinOw2.default)(message, _syscoinOw2.default.string.label("signMessage:message").not.empty);
                            _context.next = 4;
                            return callRpc('signmessagewithprivkey', [privateKey, message]);

                        case 4:
                            return _context.abrupt("return", _context.sent);

                        case 5:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function signMessage() {
            return _ref.apply(this, arguments);
        };
    }();

    var verifyMessage = function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                address = _ref4.address,
                signature = _ref4.signature,
                message = _ref4.message;

            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            (0, _syscoinOw2.default)(address, _syscoinOw2.default.string.label("verifyMessage:address").not.empty);
                            (0, _syscoinOw2.default)(signature, _syscoinOw2.default.string.label("verifyMessage:signature").not.empty);
                            (0, _syscoinOw2.default)(message, _syscoinOw2.default.string.label("verifyMessage:message").not.empty);
                            _context2.next = 5;
                            return callRpc('verifymessage', [address, signature, message]);

                        case 5:
                            return _context2.abrupt("return", _context2.sent);

                        case 6:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        return function verifyMessage() {
            return _ref3.apply(this, arguments);
        };
    }();

    return {
        signMessage: (0, _endpointDecorators.post)(signMessage),
        verifyMessage: (0, _endpointDecorators.post)(verifyMessage)
    };
}