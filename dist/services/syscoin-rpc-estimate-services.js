"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.syscoinRpcEstimateServices = syscoinRpcEstimateServices;

var _endpointDecorators = require("../endpoint-decorators");

var _syscoinOw = require("syscoin-ow");

var _syscoinOw2 = _interopRequireDefault(_syscoinOw);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function syscoinRpcEstimateServices(callRpc) {
    var estimateFee = function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                numberOfBlocks = _ref2.numberOfBlocks;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            (0, _syscoinOw2.default)(numberOfBlocks, _syscoinOw2.default.number.label("estimateFee:numberOfBlocks").integer.greaterThan(0));
                            _context.next = 3;
                            return callRpc('estimatefee', [numberOfBlocks]);

                        case 3:
                            return _context.abrupt("return", _context.sent);

                        case 4:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function estimateFee() {
            return _ref.apply(this, arguments);
        };
    }();

    var estimatePriority = function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                numberOfBlocks = _ref4.numberOfBlocks;

            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            (0, _syscoinOw2.default)(numberOfBlocks, _syscoinOw2.default.number.label("estimatePriority:numberOfBlocks").integer.greaterThan(0));
                            console.warn("WARNING:  Estimatepriority is a deprecated method.");
                            _context2.next = 4;
                            return callRpc('estimatepriority', [numberOfBlocks]);

                        case 4:
                            return _context2.abrupt("return", _context2.sent);

                        case 5:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        return function estimatePriority() {
            return _ref3.apply(this, arguments);
        };
    }();

    var estimateSmartFee = function () {
        var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
            var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                numberOfBlocks = _ref6.numberOfBlocks;

            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            (0, _syscoinOw2.default)(numberOfBlocks, _syscoinOw2.default.number.label("estimateSmartFee:numberOfBlocks").integer.greaterThan(0));
                            console.warn("WARNING: This interface is unstable and may disappear or change!");
                            _context3.next = 4;
                            return callRpc('estimatesmartfee', [numberOfBlocks]);

                        case 4:
                            return _context3.abrupt("return", _context3.sent);

                        case 5:
                        case "end":
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        return function estimateSmartFee() {
            return _ref5.apply(this, arguments);
        };
    }();

    var estimateSmartPriority = function () {
        var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
            var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                numberOfBlocks = _ref8.numberOfBlocks;

            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            (0, _syscoinOw2.default)(numberOfBlocks, _syscoinOw2.default.number.label("estimateSmartPriority:numberOfBlocks").integer.greaterThan(0));
                            console.warn("WARNING: This interface is unstable and may disappear or change!");
                            _context4.next = 4;
                            return callRpc('estimatesmartpriority', [numberOfBlocks]);

                        case 4:
                            return _context4.abrupt("return", _context4.sent);

                        case 5:
                        case "end":
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        return function estimateSmartPriority() {
            return _ref7.apply(this, arguments);
        };
    }();

    var aliasNewEstimatedFee = function () {
        var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
            var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                aliasName = _ref10.aliasName,
                publicValue = _ref10.publicValue,
                transfersFlag = _ref10.transfersFlag,
                expireTimestamp = _ref10.expireTimestamp,
                address = _ref10.address,
                encPrivateKey = _ref10.encPrivateKey,
                encPublicKey = _ref10.encPublicKey,
                witness = _ref10.witness;

            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            (0, _syscoinOw2.default)(aliasName, _syscoinOw2.default.string.label("aliasNewEstimatedFee:aliasName").not.empty);
                            (0, _syscoinOw2.default)(publicValue, _syscoinOw2.default.string.label("aliasNewEstimatedFee:publicValue").minLength(0));
                            (0, _syscoinOw2.default)(transfersFlag, _syscoinOw2.default.number.label("aliasNewEstimatedFee:transfersFlag").is(function (x) {
                                return x >= 0 && x <= 3;
                            }));
                            (0, _syscoinOw2.default)(expireTimestamp, _syscoinOw2.default.number.label("aliasNewEstimatedFee:expireTimestamp").integer.greaterThan(0));
                            (0, _syscoinOw2.default)(address, _syscoinOw2.default.string.label("aliasNewEstimatedFee:address").minLength(0));
                            (0, _syscoinOw2.default)(encPrivateKey, _syscoinOw2.default.string.label("aliasNewEstimatedFee:encPrivateKey").minLength(0));
                            (0, _syscoinOw2.default)(encPublicKey, _syscoinOw2.default.string.label("aliasNewEstimatedFee:encPublicKey").minLength(0));
                            (0, _syscoinOw2.default)(witness, _syscoinOw2.default.string.label("aliasNewEstimatedFee:witness").minLength(0));
                            _context5.next = 10;
                            return callRpc('aliasnewestimatedfee', [aliasName, publicValue, transfersFlag, expireTimestamp, address, encPrivateKey, encPublicKey, witness]);

                        case 10:
                            return _context5.abrupt("return", _context5.sent);

                        case 11:
                        case "end":
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        return function aliasNewEstimatedFee() {
            return _ref9.apply(this, arguments);
        };
    }();

    var aliasUpdateEstimatedFee = function () {
        var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
            var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                aliasName = _ref12.aliasName,
                publicValue = _ref12.publicValue,
                address = _ref12.address,
                transfersFlag = _ref12.transfersFlag,
                expireTimestamp = _ref12.expireTimestamp,
                encPrivateKey = _ref12.encPrivateKey,
                encPublicKey = _ref12.encPublicKey,
                witness = _ref12.witness;

            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            (0, _syscoinOw2.default)(aliasName, _syscoinOw2.default.string.label("aliasNewEstimatedFee:aliasName").not.empty);
                            (0, _syscoinOw2.default)(publicValue, _syscoinOw2.default.string.label("aliasNewEstimatedFee:publicValue").minLength(0));
                            (0, _syscoinOw2.default)(transfersFlag, _syscoinOw2.default.number.label("aliasNewEstimatedFee:transfersFlag").is(function (x) {
                                return x >= 0 && x <= 3;
                            }));
                            (0, _syscoinOw2.default)(expireTimestamp, _syscoinOw2.default.number.label("aliasNewEstimatedFee:expireTimestamp").integer.greaterThan(0));
                            (0, _syscoinOw2.default)(address, _syscoinOw2.default.string.label("aliasNewEstimatedFee:address").minLength(0));
                            (0, _syscoinOw2.default)(encPrivateKey, _syscoinOw2.default.string.label("aliasNewEstimatedFee:encPrivateKey").minLength(0));
                            (0, _syscoinOw2.default)(encPublicKey, _syscoinOw2.default.string.label("aliasNewEstimatedFee:encPublicKey").minLength(0));
                            (0, _syscoinOw2.default)(witness, _syscoinOw2.default.string.label("aliasNewEstimatedFee:witness").minLength(0));
                            _context6.next = 10;
                            return callRpc('aliasupdateestimatedfee', [aliasName, publicValue, address, transfersFlag, expireTimestamp, encPrivateKey, encPublicKey, witness]);

                        case 10:
                            return _context6.abrupt("return", _context6.sent);

                        case 11:
                        case "end":
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        return function aliasUpdateEstimatedFee() {
            return _ref11.apply(this, arguments);
        };
    }();

    return {
        estimateFee: (0, _endpointDecorators.get)(estimateFee),
        estimatePriority: (0, _endpointDecorators.get)(estimatePriority),
        estimateSmartFee: (0, _endpointDecorators.get)(estimateSmartFee),
        estimateSmartPriority: (0, _endpointDecorators.get)(estimateSmartPriority),
        aliasNewEstimatedFee: (0, _endpointDecorators.get)(aliasNewEstimatedFee),
        aliasUpdateEstimatedFee: (0, _endpointDecorators.get)(aliasUpdateEstimatedFee)
    };
}