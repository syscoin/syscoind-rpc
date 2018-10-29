"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.walletEscrowServices = walletEscrowServices;

var _syscoinOw = require("syscoin-ow");

var _syscoinOw2 = _interopRequireDefault(_syscoinOw);

var _endpointDecorators = require("../../endpoint-decorators");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function walletEscrowServices(callRpc) {
    var escrowAcknowledge = function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(escrowGuid, witness) {
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            (0, _syscoinOw2.default)(escrowGuid, _syscoinOw2.default.string.label("escrowAcknowledge:escrowGuid").not.empty);
                            (0, _syscoinOw2.default)(witness, _syscoinOw2.default.string.label("escrowAcknowledge:alias").not.empty);
                            _context.next = 4;
                            return callRpc('escrowacknowledge', [escrowGuid, witness]);

                        case 4:
                            return _context.abrupt("return", _context.sent);

                        case 5:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function escrowAcknowledge(_x, _x2) {
            return _ref.apply(this, arguments);
        };
    }();

    var escrowBid = function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(alias, escrow, bidInPaymentOption, bidInOfferCurrency, witness) {
            var _args2 = arguments;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            (0, _syscoinOw2.default)(alias, _syscoinOw2.default.string.label("escrowBid:alias").not.empty);
                            (0, _syscoinOw2.default)(escrow, _syscoinOw2.default.string.label("escrowBid:escrow").not.empty);
                            (0, _syscoinOw2.default)(bidInPaymentOption, _syscoinOw2.default.string.label("escrowBid:bidInPaymentOption").not.empty);
                            (0, _syscoinOw2.default)(bidInOfferCurrency, _syscoinOw2.default.number.label("escrowBid:bidInOfferCurrency").integer.greaterThan(0));
                            (0, _syscoinOw2.default)(witness, _syscoinOw2.default.string.label("escrowBid:witness").not.empty);
                            _context2.next = 7;
                            return callRpc('escrowbid', _args2);

                        case 7:
                            return _context2.abrupt("return", _context2.sent);

                        case 8:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        return function escrowBid(_x3, _x4, _x5, _x6, _x7) {
            return _ref2.apply(this, arguments);
        };
    }();

    var escrowCompleteRefund = function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(escrowGuid, rawTx, witness) {
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            (0, _syscoinOw2.default)(escrowGuid, _syscoinOw2.default.string.label("escrowCompleteRefund:escrowGuid").not.empty);
                            (0, _syscoinOw2.default)(rawTx, _syscoinOw2.default.string.label("escrowCompleteRefund:rawTx").not.empty);
                            (0, _syscoinOw2.default)(witness, _syscoinOw2.default.string.label("escrowCompleteRefund:witness").not.empty);
                            _context3.next = 5;
                            return callRpc('escrowcompleterefund', [escrowGuid, rawTx, witness]);

                        case 5:
                            return _context3.abrupt("return", _context3.sent);

                        case 6:
                        case "end":
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        return function escrowCompleteRefund(_x8, _x9, _x10) {
            return _ref3.apply(this, arguments);
        };
    }();

    var escrowCreateRawTransaction = function () {
        var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(type, escrowGuid, inputs, userRole) {
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            (0, _syscoinOw2.default)(type, _syscoinOw2.default.string.label("escrowCreateRawTransaction:type").not.empty);
                            (0, _syscoinOw2.default)(escrowGuid, _syscoinOw2.default.string.label("escrowCreateRawTransaction:escrowGuid").not.empty);
                            (0, _syscoinOw2.default)(inputs, _syscoinOw2.default.object.label("escrowCreateRawTransaction:inputs").not.empty);
                            (0, _syscoinOw2.default)(userRole, _syscoinOw2.default.string.label("escrowCreateRawTransaction:userRole").not.empty);
                            _context4.next = 6;
                            return callRpc('escrowcreaterawtransaction', [type, escrowGuid, inputs, userRole]);

                        case 6:
                            return _context4.abrupt("return", _context4.sent);

                        case 7:
                        case "end":
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        return function escrowCreateRawTransaction(_x11, _x12, _x13, _x14) {
            return _ref4.apply(this, arguments);
        };
    }();

    var escrowCompleteRelease = function () {
        var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(escrowGuid, rawTx, witness) {
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            (0, _syscoinOw2.default)(escrowGuid, _syscoinOw2.default.string.label("escrowCompleteRelease:escrowGuid").not.empty);
                            (0, _syscoinOw2.default)(rawTx, _syscoinOw2.default.string.label("escrowCompleteRelease:rawTx").not.empty);
                            (0, _syscoinOw2.default)(witness, _syscoinOw2.default.string.label("escrowCompleteRelease:witness").not.empty);
                            _context5.next = 5;
                            return callRpc('escrowcompleterelease', [escrowGuid, rawTx, witness]);

                        case 5:
                            return _context5.abrupt("return", _context5.sent);

                        case 6:
                        case "end":
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        return function escrowCompleteRelease(_x15, _x16, _x17) {
            return _ref5.apply(this, arguments);
        };
    }();

    var escrowFeedback = function () {
        var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(escrowGuid, userFrom, feedback, rating, userTo, witness) {
            var _args6 = arguments;
            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            (0, _syscoinOw2.default)(escrowGuid, _syscoinOw2.default.string.label("escrowCompleteRelease:escrowGuid").not.empty);
                            (0, _syscoinOw2.default)(userFrom, _syscoinOw2.default.string.label("escrowCompleteRelease:userFrom").not.empty);
                            (0, _syscoinOw2.default)(feedback, _syscoinOw2.default.string.label("escrowCompleteRelease:feedback").string.minLength(0));
                            (0, _syscoinOw2.default)(rating, _syscoinOw2.default.number.label("escrowCompleteRelease:rating").integer.greaterThan(0));
                            (0, _syscoinOw2.default)(userTo, _syscoinOw2.default.string.label("escrowCompleteRelease:userTo").not.empty);
                            (0, _syscoinOw2.default)(witness, _syscoinOw2.default.string.label("escrowCompleteRelease:witness").not.empty);
                            _context6.next = 8;
                            return callRpc('escrowfeedback', _args6);

                        case 8:
                            return _context6.abrupt("return", _context6.sent);

                        case 9:
                        case "end":
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        return function escrowFeedback(_x18, _x19, _x20, _x21, _x22, _x23) {
            return _ref6.apply(this, arguments);
        };
    }();

    var escrowInfo = function () {
        var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(guid) {
            var _args7 = arguments;
            return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            (0, _syscoinOw2.default)(guid, _syscoinOw2.default.string.label("escrowInfo:guid").not.empty);
                            _context7.next = 3;
                            return callRpc('escrowinfo', _args7);

                        case 3:
                            return _context7.abrupt("return", _context7.sent);

                        case 4:
                        case "end":
                            return _context7.stop();
                    }
                }
            }, _callee7, this);
        }));

        return function escrowInfo(_x24) {
            return _ref7.apply(this, arguments);
        };
    }();

    var escrowNew = function () {
        var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(getAmountAndAddress, alias, arbiterAlias, offer, quantity, buyNow, pricePerUnitInPaymentOption, shippingAmount, networkFee, arbiterFee, witnessFee, extTx, payment, option, bidInPaymentOption, bidInOfferCurrency, witness) {
            var _args8 = arguments;
            return _regenerator2.default.wrap(function _callee8$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            (0, _syscoinOw2.default)(getAmountAndAddress, _syscoinOw2.default.boolean.label("escrowNew:getAmountAndAddress").so(function (x) {
                                return x == true || x == false;
                            }));
                            (0, _syscoinOw2.default)(alias, _syscoinOw2.default.string.label("escrowNew:alias").not.empty);
                            (0, _syscoinOw2.default)(offer, _syscoinOw2.default.string.label("escrowNew:offer").not.empty);
                            (0, _syscoinOw2.default)(quantity, _syscoinOw2.default.number.label("escrowNew:quantity").integer.greaterThan(0));
                            (0, _syscoinOw2.default)(buyNow, _syscoinOw2.default.boolean.label("escrowNew:buyNow").so(function (x) {
                                return x == true || x == false;
                            }));
                            (0, _syscoinOw2.default)(pricePerUnitInPaymentOption, _syscoinOw2.default.number.label("escrowNew:pricePerUnitInPaymentOption").integer.greaterThan(0));
                            (0, _syscoinOw2.default)(shippingAmount, _syscoinOw2.default.number.label("escrowNew:shippingAmount").integer.greaterThan(0));
                            (0, _syscoinOw2.default)(networkFee, _syscoinOw2.default.number.label("escrowNew:networkFee").integer.greaterThan(0));
                            (0, _syscoinOw2.default)(arbiterFee, _syscoinOw2.default.number.label("escrowNew:arbiterFee").integer.greaterThan(0));
                            (0, _syscoinOw2.default)(witnessFee, _syscoinOw2.default.number.label("escrowNew:witnessFee").integer.greaterThan(0));
                            (0, _syscoinOw2.default)(exTx, _syscoinOw2.default.string.label("escrowNew:exTx").not.empty);
                            (0, _syscoinOw2.default)(payment, _syscoinOw2.default.string.label("escrowNew:payment").not.empty);
                            (0, _syscoinOw2.default)(option, _syscoinOw2.default.string.label("escrowNew:option").not.empty);
                            (0, _syscoinOw2.default)(bidInPaymentOption, _syscoinOw2.default.string.label("escrowNew:bidInPaymentOption").not.empty);
                            (0, _syscoinOw2.default)(bidInOfferCurrency, _syscoinOw2.default.string.label("escrowNew:bidInOfferCurrency").not.empty);
                            (0, _syscoinOw2.default)(witness, _syscoinOw2.default.string.label("escrowNew:witness").not.empty);
                            _context8.next = 18;
                            return callRpc('escrownew', _args8);

                        case 18:
                            return _context8.abrupt("return", _context8.sent);

                        case 19:
                        case "end":
                            return _context8.stop();
                    }
                }
            }, _callee8, this);
        }));

        return function escrowNew(_x25, _x26, _x27, _x28, _x29, _x30, _x31, _x32, _x33, _x34, _x35, _x36, _x37, _x38, _x39, _x40, _x41) {
            return _ref8.apply(this, arguments);
        };
    }();

    var escrowRefund = function () {
        var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(escrowGuid, userRole, rawTx, witness) {
            var _args9 = arguments;
            return _regenerator2.default.wrap(function _callee9$(_context9) {
                while (1) {
                    switch (_context9.prev = _context9.next) {
                        case 0:
                            (0, _syscoinOw2.default)(escrowGuid, _syscoinOw2.default.string.label("escrowRefund:escrowGuid").not.empty);
                            (0, _syscoinOw2.default)(userRole, _syscoinOw2.default.string.label("escrowRefund:userRole").not.empty);
                            (0, _syscoinOw2.default)(rawTx, _syscoinOw2.default.string.label("escrowRefund:rawTx").not.empty);
                            (0, _syscoinOw2.default)(witness, _syscoinOw2.default.string.label("escrowRefund:witness").not.empty);
                            _context9.next = 6;
                            return callRpc('escrowrefund', _args9);

                        case 6:
                            return _context9.abrupt("return", _context9.sent);

                        case 7:
                        case "end":
                            return _context9.stop();
                    }
                }
            }, _callee9, this);
        }));

        return function escrowRefund(_x42, _x43, _x44, _x45) {
            return _ref9.apply(this, arguments);
        };
    }();

    var escrowRelease = function () {
        var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10(escrowGuid, userRole, rawTx, witness) {
            var _args10 = arguments;
            return _regenerator2.default.wrap(function _callee10$(_context10) {
                while (1) {
                    switch (_context10.prev = _context10.next) {
                        case 0:
                            (0, _syscoinOw2.default)(escrowGuid, _syscoinOw2.default.string.label("escrowRelease:escrowGuid").not.empty);
                            (0, _syscoinOw2.default)(userRole, _syscoinOw2.default.string.label("escrowRelease:userRole").not.empty);
                            (0, _syscoinOw2.default)(rawTx, _syscoinOw2.default.string.label("escrowRelease:rawTx").not.empty);
                            (0, _syscoinOw2.default)(witness, _syscoinOw2.default.string.label("escrowRelease:witness").not.empty);
                            _context10.next = 6;
                            return callRpc('escrowrelease', _args10);

                        case 6:
                            return _context10.abrupt("return", _context10.sent);

                        case 7:
                        case "end":
                            return _context10.stop();
                    }
                }
            }, _callee10, this);
        }));

        return function escrowRelease(_x46, _x47, _x48, _x49) {
            return _ref10.apply(this, arguments);
        };
    }();

    var listEscrows = function () {
        var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11(count, from, options) {
            var _args11 = arguments;
            return _regenerator2.default.wrap(function _callee11$(_context11) {
                while (1) {
                    switch (_context11.prev = _context11.next) {
                        case 0:
                            if (count) {
                                (0, _syscoinOw2.default)(count, _syscoinOw2.default.number.label("listEscrows:count").integer.greaterThan(0));
                            }
                            if (from) {
                                (0, _syscoinOw2.default)(from, _syscoinOw2.default.number.label("listEscrows:from").integer.greaterThan(0));
                            }
                            if (options) {
                                (0, _syscoinOw2.default)(options, _syscoinOw2.default.objects.label("listEscrows:options").not.empty);
                            }
                            _context11.next = 5;
                            return callRpc('listescrows', _args11);

                        case 5:
                            return _context11.abrupt("return", _context11.sent);

                        case 6:
                        case "end":
                            return _context11.stop();
                    }
                }
            }, _callee11, this);
        }));

        return function listEscrows(_x50, _x51, _x52) {
            return _ref11.apply(this, arguments);
        };
    }();

    var listEscrowsAfterBlock = function () {
        var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee12(blockNumber) {
            var options, escrows;
            return _regenerator2.default.wrap(function _callee12$(_context12) {
                while (1) {
                    switch (_context12.prev = _context12.next) {
                        case 0:
                            (0, _syscoinOw2.default)(blockNumber, _syscoinOw2.default.number.label("listEscrowsAfterBlock:blockNumber").integer.greaterThan(0));
                            options = {
                                startblock: blockNumber
                            };
                            _context12.next = 4;
                            return listEscrows(0, 0, options);

                        case 4:
                            escrows = _context12.sent;
                            return _context12.abrupt("return", escrows);

                        case 6:
                        case "end":
                            return _context12.stop();
                    }
                }
            }, _callee12, this);
        }));

        return function listEscrowsAfterBlock(_x53) {
            return _ref12.apply(this, arguments);
        };
    }();

    return {
        acknowledge: (0, _endpointDecorators.post)(escrowAcknowledge),
        bid: (0, _endpointDecorators.post)(escrowBid),
        completeRefund: (0, _endpointDecorators.post)(escrowCompleteRefund),
        createRawTransaction: (0, _endpointDecorators.post)(escrowCreateRawTransaction),
        completeRelease: (0, _endpointDecorators.post)(escrowCompleteRelease),
        feedback: (0, _endpointDecorators.post)(escrowFeedback),
        info: (0, _endpointDecorators.get)(escrowInfo),
        list: (0, _endpointDecorators.get)(listEscrows),
        listAfterBlock: (0, _endpointDecorators.get)(listEscrowsAfterBlock),
        new: (0, _endpointDecorators.post)(escrowNew),
        refund: (0, _endpointDecorators.post)(escrowRefund),
        release: (0, _endpointDecorators.post)(escrowRelease)
    };
}