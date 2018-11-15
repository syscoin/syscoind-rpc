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
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                guid = _ref2.guid;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            (0, _syscoinOw2.default)(guid, _syscoinOw2.default.string.label("offerInfo:guid").not.empty);
                            _context.next = 3;
                            return callRpc('offerinfo', [guid]);

                        case 3:
                            return _context.abrupt("return", _context.sent);

                        case 4:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function offerInfo() {
            return _ref.apply(this, arguments);
        };
    }();

    var offerLink = function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                alias = _ref4.alias,
                guid = _ref4.guid,
                commission = _ref4.commission,
                description = _ref4.description,
                _ref4$witness = _ref4.witness,
                witness = _ref4$witness === undefined ? '' : _ref4$witness;

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
                            return callRpc('offerlink', [alias, guid, commission, description, witness]);

                        case 7:
                            return _context2.abrupt("return", _context2.sent);

                        case 8:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        return function offerLink() {
            return _ref3.apply(this, arguments);
        };
    }();

    var offerNew = function () {
        var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
            var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                alias = _ref6.alias,
                category = _ref6.category,
                title = _ref6.title,
                quantity = _ref6.quantity,
                price = _ref6.price,
                description = _ref6.description,
                currency = _ref6.currency,
                certGuid = _ref6.certGuid,
                paymentOptions = _ref6.paymentOptions,
                priv = _ref6.priv,
                units = _ref6.units,
                offerType = _ref6.offerType,
                auctionExpires = _ref6.auctionExpires,
                auctionReserve = _ref6.auctionReserve,
                auctionRequireWitness = _ref6.auctionRequireWitness,
                auctionDeposit = _ref6.auctionDeposit,
                _ref6$witness = _ref6.witness,
                witness = _ref6$witness === undefined ? '' : _ref6$witness;

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
                            (0, _syscoinOw2.default)(units, _syscoinOw2.default.number.label("offerNew:units").integer.greaterThan(0));
                            (0, _syscoinOw2.default)(offerType, _syscoinOw2.default.string.label("offerNew:offerType").not.empty);
                            (0, _syscoinOw2.default)(auctionExpires, _syscoinOw2.default.string.label("offerNew:auctionExpires").not.empty);
                            (0, _syscoinOw2.default)(auctionReserve, _syscoinOw2.default.string.label("offerNew:auctionReserve").not.empty);
                            (0, _syscoinOw2.default)(auctionRequireWitness, _syscoinOw2.default.boolean.label("offerNew:priv").is(function (x) {
                                return x == true || x == false;
                            }));
                            (0, _syscoinOw2.default)(auctionDeposit, _syscoinOw2.default.number.label("offerNew:units").integer.greaterThan(0));
                            (0, _syscoinOw2.default)(witness, _syscoinOw2.default.string.label("offerNew:witness").not.empty);
                            _context3.next = 19;
                            return callRpc('offernew', [alias, category, title, quantity, price, description, currency, certGuid, paymentOptions, priv, units, offerType, auctionExpires, auctionReserve, auctionRequireWitness, auctionDeposit, witness]);

                        case 19:
                            return _context3.abrupt("return", _context3.sent);

                        case 20:
                        case "end":
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        return function offerNew() {
            return _ref5.apply(this, arguments);
        };
    }();

    var offerUpdate = function () {
        var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
            var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                alias = _ref8.alias,
                guid = _ref8.guid,
                category = _ref8.category,
                title = _ref8.title,
                quantity = _ref8.quantity,
                price = _ref8.price,
                description = _ref8.description,
                currency = _ref8.currency,
                certGuid = _ref8.certGuid,
                paymentOptions = _ref8.paymentOptions,
                priv = _ref8.priv,
                units = _ref8.units,
                offerType = _ref8.offerType,
                auctionExpires = _ref8.auctionExpires,
                auctionReserve = _ref8.auctionReserve,
                auctionRequireWitness = _ref8.auctionRequireWitness,
                auctionDeposit = _ref8.auctionDeposit,
                witness = _ref8.witness;

            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            (0, _syscoinOw2.default)(alias, _syscoinOw2.default.string.label("offerUpdate:alias").not.empty);
                            (0, _syscoinOw2.default)(guid, _syscoinOw2.default.string.label("offerUpdate:guid").not.empty);
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
                            (0, _syscoinOw2.default)(units, _syscoinOw2.default.number.label("offerUpdate:units").integer.greaterThan(0));
                            (0, _syscoinOw2.default)(offerType, _syscoinOw2.default.string.label("offerUpdate:offerType").not.empty);
                            (0, _syscoinOw2.default)(auctionExpires, _syscoinOw2.default.string.label("offerUpdate:auctionExpires").not.empty);
                            (0, _syscoinOw2.default)(auctionReserve, _syscoinOw2.default.string.label("offerUpdate:auctionReserve").not.empty);
                            (0, _syscoinOw2.default)(auctionRequireWitness, _syscoinOw2.default.boolean.label("offerUpdate:priv").is(function (x) {
                                return x == true || x == false;
                            }));
                            (0, _syscoinOw2.default)(auctionDeposit, _syscoinOw2.default.number.label("offerUpdate:units").integer.greaterThan(0));
                            (0, _syscoinOw2.default)(witness, _syscoinOw2.default.string.label("offerUpdate:witness").not.empty);
                            _context4.next = 20;
                            return callRpc('offerupdate', [alias, guid, category, title, quantity, price, description, currency, certGuid, paymentOptions, priv, units, offerType, auctionExpires, auctionReserve, auctionRequireWitness, auctionDeposit, witness]);

                        case 20:
                            return _context4.abrupt("return", _context4.sent);

                        case 21:
                        case "end":
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        return function offerUpdate() {
            return _ref7.apply(this, arguments);
        };
    }();

    var listOffers = function () {
        var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
            var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                count = _ref10.count,
                from = _ref10.from,
                options = _ref10.options;

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

        return function listOffers() {
            return _ref9.apply(this, arguments);
        };
    }();

    var listOffersAfterBlock = function () {
        var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
            var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                blockNumber = _ref12.blockNumber;

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
                            return listOffers({ count: 0, from: 0, options: options });

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

        return function listOffersAfterBlock() {
            return _ref11.apply(this, arguments);
        };
    }();

    return {
        info: (0, _endpointDecorators.get)(offerInfo),
        link: (0, _endpointDecorators.post)(offerLink),
        list: (0, _endpointDecorators.get)(listOffers),
        listAfterBlock: (0, _endpointDecorators.get)(listOffersAfterBlock),
        create: (0, _endpointDecorators.post)(offerNew),
        update: (0, _endpointDecorators.post)(offerUpdate)
    };
}