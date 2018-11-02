"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.walletAssetServices = walletAssetServices;

var _syscoinOw = require("syscoin-ow");

var _syscoinOw2 = _interopRequireDefault(_syscoinOw);

var _endpointDecorators = require("../../endpoint-decorators");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function walletAssetServices(callRpc) {
    var assetInfo = function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                asset = _ref2.asset,
                getInputs = _ref2.getInputs;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            (0, _syscoinOw2.default)(asset, _syscoinOw2.default.string.label("assetInfo:asset").not.empty);
                            (0, _syscoinOw2.default)(getInputs, _syscoinOw2.default.boolean.label("assetInfo:getInputs").is(function (x) {
                                return x == true || x == false;
                            }));
                            _context.next = 4;
                            return callRpc('assetinfo', [asset, getInputs]);

                        case 4:
                            return _context.abrupt("return", _context.sent);

                        case 5:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function assetInfo() {
            return _ref.apply(this, arguments);
        };
    }();

    var assetNew = function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                symbol = _ref4.symbol,
                owner = _ref4.owner,
                publicValue = _ref4.publicValue,
                category = _ref4.category,
                precision = _ref4.precision,
                useInputRanges = _ref4.useInputRanges,
                supply = _ref4.supply,
                maxSupply = _ref4.maxSupply,
                interestRate = _ref4.interestRate,
                canAdjustInterestRate = _ref4.canAdjustInterestRate,
                _ref4$witness = _ref4.witness,
                witness = _ref4$witness === undefined ? '' : _ref4$witness;

            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            (0, _syscoinOw2.default)(symbol, _syscoinOw2.default.string.label("assetNew:symbol").not.empty);
                            (0, _syscoinOw2.default)(owner, _syscoinOw2.default.string.label("assetNew:owner").not.empty);
                            (0, _syscoinOw2.default)(publicValue, _syscoinOw2.default.string.label("assetNew:publicValue").string.minLength(0));
                            (0, _syscoinOw2.default)(category, _syscoinOw2.default.string.label("assetNew:category").not.empty);
                            (0, _syscoinOw2.default)(precision, _syscoinOw2.default.number.label("assetNew:precision").is(function (x) {
                                return 0 <= x && x <= 8;
                            }));
                            (0, _syscoinOw2.default)(useInputRanges, _syscoinOw2.default.boolean.label("assetNew:useInputRanges").is(function (x) {
                                return x == true && x == false;
                            }));
                            (0, _syscoinOw2.default)(supply, _syscoinOw2.default.number.label("assetNew:supply").integer.greaterThan(0));
                            (0, _syscoinOw2.default)(maxSupply, _syscoinOw2.default.numer.label("assetNew:maxSupply").integer.greaterThan(0));
                            (0, _syscoinOw2.default)(interestRate, _syscoinOw2.default.number.label("assetNew:interestRate").integer.greaterThan(0));
                            (0, _syscoinOw2.default)(canAdjustInterestRate, _syscoinOw2.default.string.label("assetNew:canAdjustInterestRate").is(function (x) {
                                return x == true && x == false;
                            }));
                            (0, _syscoinOw2.default)(witness, _syscoinOw2.default.string.label("assetNew:witness").string.minLength(0));
                            _context2.next = 13;
                            return callRpc('assetnew', [symbol, owner, publicValue, category, precision, useInputRanges, supply, maxSupply, interestRate, canAdjustInterestRate, witness]);

                        case 13:
                            return _context2.abrupt("return", _context2.sent);

                        case 14:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        return function assetNew() {
            return _ref3.apply(this, arguments);
        };
    }();

    var assetSend = function () {
        var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
            var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                asset = _ref6.asset,
                aliasFrom = _ref6.aliasFrom,
                aliasTo = _ref6.aliasTo,
                amount = _ref6.amount,
                ranges = _ref6.ranges,
                memo = _ref6.memo;

            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            (0, _syscoinOw2.default)(asset, _syscoinOw2.default.string.label("assetSend:asset").not.empty);
                            (0, _syscoinOw2.default)(aliasFrom, _syscoinOw2.default.string.label("assetSend:aliasFrom").not.empty);
                            (0, _syscoinOw2.default)(aliasTo, _syscoinOw2.default.string.label("assetSend:aliasTo").not.empty);
                            (0, _syscoinOw2.default)(amount, _syscoinOw2.default.number.label("assetSend:amount").integer.greaterThan(0));
                            (0, _syscoinOw2.default)(ranges, _syscoinOw2.default.object.label("assetSend:ranges").not.empty);
                            (0, _syscoinOw2.default)(memo, _syscoinOw2.default.string.label("assetSend:memo").minLength(0));
                            _context3.next = 8;
                            return callRpc('assetsend', [asset, aliasFrom, aliasTo, amount, ranges, memo]);

                        case 8:
                            return _context3.abrupt("return", _context3.sent);

                        case 9:
                        case "end":
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        return function assetSend() {
            return _ref5.apply(this, arguments);
        };
    }();

    var assetTransfer = function () {
        var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
            var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                asset = _ref8.asset,
                newOwner = _ref8.newOwner,
                _ref8$witness = _ref8.witness,
                witness = _ref8$witness === undefined ? '' : _ref8$witness;

            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            (0, _syscoinOw2.default)(asset, _syscoinOw2.default.string.label("assetTransfer:asset").not.empty);
                            (0, _syscoinOw2.default)(newOwner, _syscoinOw2.default.string.label("assetTransfer:newOwner").not.empty);
                            (0, _syscoinOw2.default)(witness, _syscoinOw2.default.string.label("assetTransfer:witness").minLength(0));
                            _context4.next = 5;
                            return callRpc('assettransfer', [asset, ownerTo, witness]);

                        case 5:
                            return _context4.abrupt("return", _context4.sent);

                        case 6:
                        case "end":
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        return function assetTransfer() {
            return _ref7.apply(this, arguments);
        };
    }();

    var assetUpdate = function () {
        var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
            var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                asset = _ref10.asset,
                publicValue = _ref10.publicValue,
                category = _ref10.category,
                supply = _ref10.supply,
                interestRate = _ref10.interestRate,
                _ref10$witness = _ref10.witness,
                witness = _ref10$witness === undefined ? '' : _ref10$witness;

            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            (0, _syscoinOw2.default)(asset, _syscoinOw2.default.string.label("assetUpdate:asset").not.empty);
                            (0, _syscoinOw2.default)(publicValue, _syscoinOw2.default.string.label("assetUpdate:publicValue").minLength(0));
                            (0, _syscoinOw2.default)(category, _syscoinOw2.default.string.label("assetUpdate:category").not.empty);
                            (0, _syscoinOw2.default)(supply, _syscoinOw2.default.number.label("assetUpdate:supply").integer.greaterThan(0));
                            (0, _syscoinOw2.default)(interestRate, _syscoinOw2.default.number.label("assetUpdate:interestRate").integer.greaterThan(0));
                            (0, _syscoinOw2.default)(witness, _syscoinOw2.default.string.label("assetUpdate:witness").minLength(0));
                            _context5.next = 8;
                            return callRpc('assetUpdate', [asset, publicValue, category, supply, interestRate, witness]);

                        case 8:
                            return _context5.abrupt("return", _context5.sent);

                        case 9:
                        case "end":
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        return function assetUpdate() {
            return _ref9.apply(this, arguments);
        };
    }();

    var listAssets = function () {
        var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
            var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                count = _ref12.count,
                from = _ref12.from,
                options = _ref12.options;

            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            if (count) {
                                (0, _syscoinOw2.default)(count, _syscoinOw2.default.number.label("listAssets:count").integer.greaterThan(0));
                            }
                            if (from) {
                                (0, _syscoinOw2.default)(from, _syscoinOw2.default.number.label("listAssets:from").integer.greaterThan(0));
                            }
                            if (options) {
                                (0, _syscoinOw2.default)(options, _syscoinOw2.default.objects.label("listAssets:options").not.empty);
                            }
                            _context6.next = 5;
                            return callRpc('listassets', [count, from, options]);

                        case 5:
                            return _context6.abrupt("return", _context6.sent);

                        case 6:
                        case "end":
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        return function listAssets() {
            return _ref11.apply(this, arguments);
        };
    }();

    var listAssetsAfterBlock = function () {
        var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
            var _ref14 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                blockNumber = _ref14.blockNumber;

            var options, assets;
            return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            (0, _syscoinOw2.default)(blockNumber, _syscoinOw2.default.number.label("blockNumber:blockNumber").integer.greaterThan(0));
                            options = {
                                startblock: blockNumber
                            };
                            _context7.next = 4;
                            return listAssets({ count: 0, from: 0, options: options });

                        case 4:
                            assets = _context7.sent;
                            return _context7.abrupt("return", assets);

                        case 6:
                        case "end":
                            return _context7.stop();
                    }
                }
            }, _callee7, this);
        }));

        return function listAssetsAfterBlock() {
            return _ref13.apply(this, arguments);
        };
    }();

    return {
        info: (0, _endpointDecorators.get)(assetInfo),
        list: (0, _endpointDecorators.get)(listAssets),
        listAfterBlock: (0, _endpointDecorators.get)(listAssetsAfterBlock),
        create: (0, _endpointDecorators.get)(assetNew),
        send: (0, _endpointDecorators.post)(assetSend),
        transfer: (0, _endpointDecorators.get)(assetTransfer),
        update: (0, _endpointDecorators.get)(assetUpdate)
    };
}