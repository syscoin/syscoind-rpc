"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.syscoinRpcUtilityServices = syscoinRpcUtilityServices;

var _endpointDecorators = require("../endpoint-decorators");

var _syscoinOw = require("syscoin-ow");

var _syscoinOw2 = _interopRequireDefault(_syscoinOw);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function syscoinRpcUtilityServices(callRpc) {
    var createMultiSig = function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                numberOfRequiredSignatures = _ref2.numberOfRequiredSignatures,
                keys = _ref2.keys;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            (0, _syscoinOw2.default)(numberOfRequiredSignatures, _syscoinOw2.default.number.label("createMultiSig:numberOfRequiredSignatures").integer.greaterThan(0));
                            (0, _syscoinOw2.default)(keys, _syscoinOw2.default.array.label("createMultiSig:keys").not.empty);
                            _context.next = 4;
                            return callRpc('createmultisig', [numberOfRequiredSignatures, keys]);

                        case 4:
                            return _context.abrupt("return", _context.sent);

                        case 5:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function createMultiSig() {
            return _ref.apply(this, arguments);
        };
    }();

    var validateAddress = function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                address = _ref4.address;

            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            (0, _syscoinOw2.default)(address, _syscoinOw2.default.string.label("validateAddress:address").minLength(0));
                            _context2.next = 3;
                            return callRpc('validateaddress', [address]);

                        case 3:
                            return _context2.abrupt("return", _context2.sent);

                        case 4:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        return function validateAddress() {
            return _ref3.apply(this, arguments);
        };
    }();

    var debug = function () {
        var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
            var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                category = _ref6.category;

            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            (0, _syscoinOw2.default)(category, _syscoinOw2.default.string.label("debug:category").minLength(0));
                            _context3.next = 3;
                            return callRpc('debug', [category]);

                        case 3:
                            return _context3.abrupt("return", _context3.sent);

                        case 4:
                        case "end":
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        return function debug() {
            return _ref5.apply(this, arguments);
        };
    }();

    var help = function () {
        var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
            var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                command = _ref8.command;

            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            (0, _syscoinOw2.default)(command, _syscoinOw2.default.string.label("help:command").not.empty);
                            _context4.next = 3;
                            return callRpc('help', [command]);

                        case 3:
                            return _context4.abrupt("return", _context4.sent);

                        case 4:
                        case "end":
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        return function help() {
            return _ref7.apply(this, arguments);
        };
    }();

    var tpsTestSetEnabled = function () {
        var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
            var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                enabled = _ref10.enabled;

            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            (0, _syscoinOw2.default)(enabled, _syscoinOw2.default.boolean.label("tpsTestSetEnabled:enabled").is(function (x) {
                                return x == true || x == false;
                            }));
                            _context5.next = 3;
                            return callRpc('tpstestsetenabled', [enabled]);

                        case 3:
                            return _context5.abrupt("return", _context5.sent);

                        case 4:
                        case "end":
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        return function tpsTestSetEnabled() {
            return _ref9.apply(this, arguments);
        };
    }();

    var tpsTestAdd = function () {
        var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
            var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                startTime = _ref12.startTime,
                rawTx = _ref12.rawTx;

            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            (0, _syscoinOw2.default)(startTime, _syscoinOw2.default.number.label("tpsTestAdd:startTime").integer.greaterThan(0));
                            (0, _syscoinOw2.default)(rawTx, _syscoinOw2.default.array.label("tpsTestAdd:rawTx").not.empty);
                            _context6.next = 4;
                            return callRpc('tpstestadd', [startTime, rawTx]);

                        case 4:
                            return _context6.abrupt("return", _context6.sent);

                        case 5:
                        case "end":
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        return function tpsTestAdd() {
            return _ref11.apply(this, arguments);
        };
    }();

    return {
        createMultiSig: (0, _endpointDecorators.post)(createMultiSig),
        validateAddress: (0, _endpointDecorators.post)(validateAddress),
        debug: (0, _endpointDecorators.post)(debug),
        help: (0, _endpointDecorators.get)(help),
        tpsTestSetEnabled: (0, _endpointDecorators.post)(tpsTestSetEnabled),
        tpsTestAdd: (0, _endpointDecorators.post)(tpsTestAdd)
    };
}