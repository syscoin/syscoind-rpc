"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.walletOfferServices = walletOfferServices;

var _syscoinOw = require("syscoin-ow");

var _syscoinOw2 = _interopRequireDefault(_syscoinOw);

var _endpointDecorators = require("../../endpoint-decorators");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function walletOfferServices(callRpc) {
    var offerInfo = function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(guid) {
            var _args = arguments;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            (0, _syscoinOw2.default)(guid, _syscoinOw2.default.string.label("offerInfo:guid").not.empty);
                            _context.next = 3;
                            return callRpc('offerinfo', _args);

                        case 3:
                            return _context.abrupt("return", _context.sent);

                        case 4:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function offerInfo(_x) {
            return _ref.apply(this, arguments);
        };
    }();

    var offerLink = function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(alias, guid, commission, description, witness) {
            var _args2 = arguments;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            (0, _syscoinOw2.default)(alias, _syscoinOw2.default.string.label("offerLink:alias").not.empty);
                            (0, _syscoinOw2.default)(guid, _syscoinOw2.default.string.label("offerLink:guid").not.empty);
                            (0, _syscoinOw2.default)(commission, _syscoinOw2.default.string.label("offerLink:commission").not.empty);
                            (0, _syscoinOw2.default)(description, _syscoinOw2.default.string.label("offerLink:description").string.minLength(0));
                            (0, _syscoinOw2.default)(witness, _syscoinOw2.default.string.label("offerLink:witness").not.empty);

                            _context2.next = 7;
                            return callRpc('offerlink', _args2);

                        case 7:
                            return _context2.abrupt("return", _context2.sent);

                        case 8:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        return function offerLink(_x2, _x3, _x4, _x5, _x6) {
            return _ref2.apply(this, arguments);
        };
    }();

    var offerNew = function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(alias, category, title, quantity, price, description, currency, certGuid, paymentOptions, priv, units, offerType, auctionExpires, auctionReserve, auctionRequireWitness, auctionDeposit, witness) {
            var _args3 = arguments;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            (0, _syscoinOw2.default)(alias, _syscoinOw2.default.string.label("offerNew:alias").not.empty);
                            (0, _syscoinOw2.default)(category, _syscoinOw2.default.string.label("offerNew:category").not.empty);
                            (0, _syscoinOw2.default)(title, _syscoinOw2.default.string.label("offerNew:title").not.empty);
                            (0, _syscoinOw2.default)(quantity, _syscoinOw2.default.number.label("offerNew:quantity").integer.greaterThan(0));
                            (0, _syscoinOw2.default)(price, _syscoinOw2.default.number.label("offerNew:price").integer.greaterThan(0));
                            (0, _syscoinOw2.default)(description, _syscoinOw2.default.string.label("offerNew:description").string.minLength(0));
                            (0, _syscoinOw2.default)(currency, _syscoinOw2.default.string.label("offerNew:currency").not.empty);
                            (0, _syscoinOw2.default)(certGuid, _syscoinOw2.default.string.label("offerNew:certGuid").not.empty);
                            (0, _syscoinOw2.default)(paymentOptions, _syscoinOw2.default.string.label("offerNew:paymentOptions").not.empty);
                            (0, _syscoinOw2.default)(priv, _syscoinOw2.default.boolean.label("offerNew:priv").is(function (x) {
                                return x == true || x == false;
                            }));
                            (0, _syscoinOw2.default)(units, _syscoinOw2.default.string.label("offerNew:units").not.empty);
                            (0, _syscoinOw2.default)(offerType, _syscoinOw2.default.string.label("offerNew:offerType").not.empty);
                            (0, _syscoinOw2.default)(auctionExpires, _syscoinOw2.default.string.label("offerNew:auctionExpires").not.empty);
                            (0, _syscoinOw2.default)(auctionReserve, _syscoinOw2.default.string.label("offerNew:auctionReserve").not.empty);
                            (0, _syscoinOw2.default)(auctionRequireWitness, _syscoinOw2.default.string.label("offerNew:auctionRequireWitness").not.empty);
                            (0, _syscoinOw2.default)(auctionDeposit, _syscoinOw2.default.string.label("offerNew:auctionDeposit").not.empty);
                            (0, _syscoinOw2.default)(witness, _syscoinOw2.default.string.label("offerNew:witness").not.empty);
                            _context3.next = 19;
                            return callRpc('offernew', _args3);

                        case 19:
                            return _context3.abrupt("return", _context3.sent);

                        case 20:
                        case "end":
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        return function offerNew(_x7, _x8, _x9, _x10, _x11, _x12, _x13, _x14, _x15, _x16, _x17, _x18, _x19, _x20, _x21, _x22, _x23) {
            return _ref3.apply(this, arguments);
        };
    }();

    var offerUpdate = function () {
        var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(alias, category, title, quantity, price, description, currency, certGuid, paymentOptions, priv, units, offerType, auctionExpires, auctionReserve, auctionRequireWitness, auctionDeposit, witness) {
            var _args4 = arguments;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            (0, _syscoinOw2.default)(alias, _syscoinOw2.default.string.label("offerUpdate:alias").not.empty);
                            (0, _syscoinOw2.default)(category, _syscoinOw2.default.string.label("offerUpdate:category").not.empty);
                            (0, _syscoinOw2.default)(title, _syscoinOw2.default.string.label("offerUpdate:title").not.empty);
                            (0, _syscoinOw2.default)(quantity, _syscoinOw2.default.number.label("offerUpdate:quantity").integer.greaterThan(0));
                            (0, _syscoinOw2.default)(price, _syscoinOw2.default.number.label("offerUpdate:price").integer.greaterThan(0));
                            (0, _syscoinOw2.default)(description, _syscoinOw2.default.string.label("offerUpdate:description").string.minLength(0));
                            (0, _syscoinOw2.default)(currency, _syscoinOw2.default.string.label("offerUpdate:currency").not.empty);
                            (0, _syscoinOw2.default)(certGuid, _syscoinOw2.default.string.label("offerUpdate:certGuid").not.empty);
                            (0, _syscoinOw2.default)(paymentOptions, _syscoinOw2.default.string.label("offerUpdate:paymentOptions").not.empty);
                            (0, _syscoinOw2.default)(priv, _syscoinOw2.default.boolean.label("offerUpdate:priv").is(function (x) {
                                return x == true || x == false;
                            }));
                            (0, _syscoinOw2.default)(units, _syscoinOw2.default.string.label("offerUpdate:units").not.empty);
                            (0, _syscoinOw2.default)(offerType, _syscoinOw2.default.string.label("offerUpdate:offerType").not.empty);
                            (0, _syscoinOw2.default)(auctionExpires, _syscoinOw2.default.string.label("offerUpdate:auctionExpires").not.empty);
                            (0, _syscoinOw2.default)(auctionReserve, _syscoinOw2.default.string.label("offerUpdate:auctionReserve").not.empty);
                            (0, _syscoinOw2.default)(auctionRequireWitness, _syscoinOw2.default.string.label("offerUpdate:auctionRequireWitness").not.empty);
                            (0, _syscoinOw2.default)(auctionDeposit, _syscoinOw2.default.string.label("offerUpdate:auctionDeposit").not.empty);
                            (0, _syscoinOw2.default)(witness, _syscoinOw2.default.string.label("offerUpdate:witness").not.empty);
                            _context4.next = 19;
                            return callRpc('offerUpdate', _args4);

                        case 19:
                            return _context4.abrupt("return", _context4.sent);

                        case 20:
                        case "end":
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        return function offerUpdate(_x24, _x25, _x26, _x27, _x28, _x29, _x30, _x31, _x32, _x33, _x34, _x35, _x36, _x37, _x38, _x39, _x40) {
            return _ref4.apply(this, arguments);
        };
    }();

    var listOffers = function () {
        var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(count, from, options) {
            var _args5 = arguments;
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            if (count) {
                                (0, _syscoinOw2.default)(count, _syscoinOw2.default.number.label("listOffers:count").integer.greaterThan(0));
                            }
                            if (from) {
                                (0, _syscoinOw2.default)(from, _syscoinOw2.default.number.label("listOffers:from").integer.greaterThan(0));
                            }
                            if (options) {
                                (0, _syscoinOw2.default)(options, _syscoinOw2.default.objects.label("listOffers:options").not.empty);
                            }
                            _context5.next = 5;
                            return callRpc('listoffers', _args5);

                        case 5:
                            return _context5.abrupt("return", _context5.sent);

                        case 6:
                        case "end":
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        return function listOffers(_x41, _x42, _x43) {
            return _ref5.apply(this, arguments);
        };
    }();

    var listOffersAfterBlock = function () {
        var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(blockNumber) {
            var options, offers;
            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            (0, _syscoinOw2.default)(blockNumber, _syscoinOw2.default.number.label("listOffersAfterBlock:blockNumber").integer.greaterThan(0));
                            options = {
                                startblock: blockNumber
                            };
                            _context6.next = 4;
                            return listOffers(0, 0, options);

                        case 4:
                            offers = _context6.sent;
                            return _context6.abrupt("return", offers);

                        case 6:
                        case "end":
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        return function listOffersAfterBlock(_x44) {
            return _ref6.apply(this, arguments);
        };
    }();

    return {
        info: (0, _endpointDecorators.get)(offerInfo),
        link: (0, _endpointDecorators.post)(offerLink),
        list: (0, _endpointDecorators.get)(listOffers),
        listAfterBlock: (0, _endpointDecorators.get)(listOffersAfterBlock),
        new: (0, _endpointDecorators.post)(offerNew),
        update: (0, _endpointDecorators.post)(offerUpdate)
    };
}