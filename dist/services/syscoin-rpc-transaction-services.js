"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.syscoinRpcTransactionServices = syscoinRpcTransactionServices;

var _endpointDecorators = require("../endpoint-decorators");

var _syscoinOw = require("syscoin-ow");

var _syscoinOw2 = _interopRequireDefault(_syscoinOw);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function syscoinRpcTransactionServices(callRpc) {
    var createRawTransaction = function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
            var inputs = _ref.inputs,
                outputs = _ref.outputs,
                _ref$lockTime = _ref.lockTime,
                lockTime = _ref$lockTime === undefined ? 0 : _ref$lockTime;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            (0, _syscoinOw2.default)(inputs, _syscoinOw2.default.array.label("createRawTransaction:inputs").not.empty);
                            (0, _syscoinOw2.default)(outputs, _syscoinOw2.default.object.label("createRawTransaction:outputs").not.empty);
                            (0, _syscoinOw2.default)(lockTime, _syscoinOw2.default.number.label("createRawTransaction:lockTime").greaterThan(0));
                            _context.next = 5;
                            return callRpc('createrawtransaction', [inputs, outputs, lockTime]);

                        case 5:
                            return _context.abrupt("return", _context.sent);

                        case 6:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function createRawTransaction(_x) {
            return _ref2.apply(this, arguments);
        };
    }();

    var decodeRawTransaction = function () {
        var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(_ref3) {
            var hexString = _ref3.hexString;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            (0, _syscoinOw2.default)(hexString, _syscoinOw2.default.string.label("decodeRawTransaction:hexString").not.empty);
                            _context2.next = 3;
                            return callRpc('decoderawtransaction', [hexString]);

                        case 3:
                            return _context2.abrupt("return", _context2.sent);

                        case 4:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        return function decodeRawTransaction(_x2) {
            return _ref4.apply(this, arguments);
        };
    }();

    var decodeScript = function () {
        var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(_ref5) {
            var hexString = _ref5.hexString;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            (0, _syscoinOw2.default)(hexString, _syscoinOw2.default.string.label("decodeScript:hexString").not.empty);
                            _context3.next = 3;
                            return callRpc('decodescript', [hexString]);

                        case 3:
                            return _context3.abrupt("return", _context3.sent);

                        case 4:
                        case "end":
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        return function decodeScript(_x3) {
            return _ref6.apply(this, arguments);
        };
    }();

    var fundRawTransaction = function () {
        var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(_ref7) {
            var hexString = _ref7.hexString,
                options = _ref7.options;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            (0, _syscoinOw2.default)(hexString, _syscoinOw2.default.string.label("fundRawTransaction:hexString").not.empty);
                            if (options) {
                                (0, _syscoinOw2.default)(options, _syscoinOw2.default.object.label("fundRawTransaction:options").not.empty);
                            }
                            _context4.next = 4;
                            return callRpc('fundrawtransaction', [hexString, options]);

                        case 4:
                            return _context4.abrupt("return", _context4.sent);

                        case 5:
                        case "end":
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        return function fundRawTransaction(_x4) {
            return _ref8.apply(this, arguments);
        };
    }();

    var getRawTransaction = function () {
        var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(_ref9) {
            var txId = _ref9.txId;
            var verbose;
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            (0, _syscoinOw2.default)(txId, _syscoinOw2.default.string.label("getRawTransaction:txId").not.empty);
                            verbose = false;
                            _context5.next = 4;
                            return callRpc('getrawtransaction', [txId, verbose]);

                        case 4:
                            return _context5.abrupt("return", _context5.sent);

                        case 5:
                        case "end":
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        return function getRawTransaction(_x5) {
            return _ref10.apply(this, arguments);
        };
    }();

    var getRawTransactionVerbose = function () {
        var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(_ref11) {
            var txId = _ref11.txId;
            var verbose;
            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            (0, _syscoinOw2.default)(txId, _syscoinOw2.default.string.label("getRawTransactionVerbose:txId").not.empty);
                            verbose = true;
                            _context6.next = 4;
                            return callRpc('getrawtransaction', [txId, verbose]);

                        case 4:
                            return _context6.abrupt("return", _context6.sent);

                        case 5:
                        case "end":
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        return function getRawTransactionVerbose(_x6) {
            return _ref12.apply(this, arguments);
        };
    }();

    var sendRawTransaction = function () {
        var _ref14 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(_ref13) {
            var hexString = _ref13.hexString,
                _ref13$allowHighFees = _ref13.allowHighFees,
                allowHighFees = _ref13$allowHighFees === undefined ? false : _ref13$allowHighFees,
                _ref13$instantSend = _ref13.instantSend,
                instantSend = _ref13$instantSend === undefined ? false : _ref13$instantSend,
                _ref13$bypassLimits = _ref13.bypassLimits,
                bypassLimits = _ref13$bypassLimits === undefined ? false : _ref13$bypassLimits;
            var _args7 = arguments;
            return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            (0, _syscoinOw2.default)(hexString, _syscoinOw2.default.string.label("sendRawTransaction:hexString").not.empty);
                            (0, _syscoinOw2.default)(allowHighFees, _syscoinOw2.default.boolean.label("sendRawTransaction:allowHighFees").is(function (x) {
                                return x == true || x == false;
                            }));
                            (0, _syscoinOw2.default)(instantSend, _syscoinOw2.default.boolean.label("sendRawTransaction:instantSend").is(function (x) {
                                return x == true || x == false;
                            }));
                            (0, _syscoinOw2.default)(bypassLimits, _syscoinOw2.default.boolean.label("sendRawTransaction:bypassLimits").is(function (x) {
                                return x == true || x == false;
                            }));
                            _context7.next = 6;
                            return callRpc('sendrawtransaction', _args7);

                        case 6:
                            return _context7.abrupt("return", _context7.sent);

                        case 7:
                        case "end":
                            return _context7.stop();
                    }
                }
            }, _callee7, this);
        }));

        return function sendRawTransaction(_x7) {
            return _ref14.apply(this, arguments);
        };
    }();

    // Not sure the documentation explains this one appropriately.  Reference for later.


    var signRawTransaction = function () {
        var _ref16 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(_ref15) {
            var hexString = _ref15.hexString,
                previousTransactionOutputs = _ref15.previousTransactionOutputs,
                privateKeys = _ref15.privateKeys,
                _ref15$signatureHashT = _ref15.signatureHashType,
                signatureHashType = _ref15$signatureHashT === undefined ? 'ALL' : _ref15$signatureHashT;
            return _regenerator2.default.wrap(function _callee8$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            (0, _syscoinOw2.default)(hexString, _syscoinOw2.default.string.label("signRawTransaction:hexString").not.empty);

                            if (!(previousTransactionOutputs && privateKeys)) {
                                _context8.next = 7;
                                break;
                            }

                            (0, _syscoinOw2.default)(previousTransactionOutputs, _syscoinOw2.default.array.label("signRawTransaction:previousTransactionOutputs").not.empty);
                            (0, _syscoinOw2.default)(privateKeys, _syscoinOw2.default.array.label("signRawTransaction:privateKeys").not.empty);
                            _context8.next = 6;
                            return callRpc('signrawtransaction', [hexString, previousTransactionOutputs, privateKeys, signatureHashType]);

                        case 6:
                            return _context8.abrupt("return", _context8.sent);

                        case 7:
                            _context8.next = 9;
                            return callRpc('signrawtransaction', [hexString]);

                        case 9:
                            return _context8.abrupt("return", _context8.sent);

                        case 10:
                        case "end":
                            return _context8.stop();
                    }
                }
            }, _callee8, this);
        }));

        return function signRawTransaction(_x8) {
            return _ref16.apply(this, arguments);
        };
    }();

    return {
        createRawTransaction: (0, _endpointDecorators.post)(createRawTransaction),
        decodeRawTransaction: (0, _endpointDecorators.post)(decodeRawTransaction),
        decodeScript: (0, _endpointDecorators.post)(decodeScript),
        fundRawTransaction: (0, _endpointDecorators.post)(fundRawTransaction),
        getRawTransaction: (0, _endpointDecorators.get)(getRawTransaction),
        getRawTransactionVerbose: (0, _endpointDecorators.get)(getRawTransactionVerbose),
        sendRawTransaction: (0, _endpointDecorators.post)(sendRawTransaction),
        signRawTransaction: (0, _endpointDecorators.post)(signRawTransaction)
    };
}