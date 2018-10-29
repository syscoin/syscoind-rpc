"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.syscoinRpcMiningServices = syscoinRpcMiningServices;

var _endpointDecorators = require("../endpoint-decorators");

var _syscoinOw = require("syscoin-ow");

var _syscoinOw2 = _interopRequireDefault(_syscoinOw);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function syscoinRpcMiningServices(callRpc) {
    var createAuxBlock = function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                address = _ref2.address;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            (0, _syscoinOw2.default)(address, _syscoinOw2.default.string.label("createAuxBlock:address").not.empty);
                            _context.next = 3;
                            return callRpc('createauxblock', [address]);

                        case 3:
                            return _context.abrupt("return", _context.sent);

                        case 4:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function createAuxBlock() {
            return _ref.apply(this, arguments);
        };
    }();

    var getAuxBlock = function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                blockHash = _ref4.blockHash,
                auxPow = _ref4.auxPow;

            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            if (blockHash) {
                                (0, _syscoinOw2.default)(blockHash, _syscoinOw2.default.string.label("getAuxBlock:blockHash").not.empty);
                            }
                            if (blockHash && auxPow) {
                                (0, _syscoinOw2.default)(auxPow, _syscoinOw2.default.string.label("getAuxBlock:auxPow").not.empty);
                            }
                            _context2.next = 4;
                            return callRpc('getauxblock', [blockHash, auxPow]);

                        case 4:
                            return _context2.abrupt("return", _context2.sent);

                        case 5:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        return function getAuxBlock() {
            return _ref3.apply(this, arguments);
        };
    }();

    var getBlockTemplate = function () {
        var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
            var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                blockTemplate = _ref6.blockTemplate;

            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            if (blockTemplate) {
                                (0, _syscoinOw2.default)(blockTemplate, _syscoinOw2.default.string.label("getBlockTemplate:blockTemplate").not.empty);
                            }
                            _context3.next = 3;
                            return callRpc('getblocktemplate', [blockTemplate]);

                        case 3:
                            return _context3.abrupt("return", _context3.sent);

                        case 4:
                        case "end":
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        return function getBlockTemplate() {
            return _ref5.apply(this, arguments);
        };
    }();

    var getMiningInfo = function () {
        var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return callRpc('getmininginfo');

                        case 2:
                            return _context4.abrupt("return", _context4.sent);

                        case 3:
                        case "end":
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        return function getMiningInfo() {
            return _ref7.apply(this, arguments);
        };
    }();

    var getPoolInfo = function () {
        var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _context5.next = 2;
                            return callRpc('getpoolinfo');

                        case 2:
                            return _context5.abrupt("return", _context5.sent);

                        case 3:
                        case "end":
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        return function getPoolInfo() {
            return _ref8.apply(this, arguments);
        };
    }();

    var getNetworkHashesPerSecond = function () {
        var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
            var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { numberOfBlocks: 120, blockHeight: -1 },
                _ref10$numberOfBlocks = _ref10.numberOfBlocks,
                numberOfBlocks = _ref10$numberOfBlocks === undefined ? 120 : _ref10$numberOfBlocks,
                _ref10$blockHeight = _ref10.blockHeight,
                blockHeight = _ref10$blockHeight === undefined ? -1 : _ref10$blockHeight;

            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            (0, _syscoinOw2.default)(numberOfBlocks, _syscoinOw2.default.number.label("getNetworkHashesPerSecond:numberOfBlocks").greaterThan(0));
                            (0, _syscoinOw2.default)(blockHeight, _syscoinOw2.default.number.label("getNetworkHashesPerSecond:blockHeight").greaterThan(0));
                            _context6.next = 4;
                            return callRpc('getnetworkhashps', [numberOfBlocks, blockHeight]);

                        case 4:
                            return _context6.abrupt("return", _context6.sent);

                        case 5:
                        case "end":
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        return function getNetworkHashesPerSecond() {
            return _ref9.apply(this, arguments);
        };
    }();

    var prioritiseTransaction = function () {
        var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
            var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                txid = _ref12.txid,
                priorityDelta = _ref12.priorityDelta,
                feeDeltaInSatoshis = _ref12.feeDeltaInSatoshis;

            return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            (0, _syscoinOw2.default)(txid, _syscoinOw2.default.string.label("prioritiseTransaction:txid").not.empty);
                            (0, _syscoinOw2.default)(priorityDelta, _syscoinOw2.default.number.label("prioritiseTransaction:priorityDelta").greaterThan(0));
                            (0, _syscoinOw2.default)(feeDeltaInSatoshis, _syscoinOw2.default.number.label("prioritiseTransaction:feeDelaInSatoshis").greaterThan(0));
                            _context7.next = 5;
                            return callRpc('prioritisetransaction', [txid, priorityDelta, feeDeltaInSatoshis]);

                        case 5:
                            return _context7.abrupt("return", _context7.sent);

                        case 6:
                        case "end":
                            return _context7.stop();
                    }
                }
            }, _callee7, this);
        }));

        return function prioritiseTransaction() {
            return _ref11.apply(this, arguments);
        };
    }();

    var submitAuxBlock = function () {
        var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8() {
            var _ref14 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                blockHash = _ref14.blockHash,
                auxPow = _ref14.auxPow;

            return _regenerator2.default.wrap(function _callee8$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            (0, _syscoinOw2.default)(blockHash, _syscoinOw2.default.string.label("submitAuxBlock:blockHash").not.empty);
                            (0, _syscoinOw2.default)(auxPow, _syscoinOw2.default.string.label("submitAuxBlock:auxPow").not.empty);
                            _context8.next = 4;
                            return callRpc('submitauxblock', [blockHash, auxPow]);

                        case 4:
                            return _context8.abrupt("return", _context8.sent);

                        case 5:
                        case "end":
                            return _context8.stop();
                    }
                }
            }, _callee8, this);
        }));

        return function submitAuxBlock() {
            return _ref13.apply(this, arguments);
        };
    }();

    var submitBlock = function () {
        var _ref15 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9() {
            var _ref16 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                hexDataToSubmit = _ref16.hexDataToSubmit;

            return _regenerator2.default.wrap(function _callee9$(_context9) {
                while (1) {
                    switch (_context9.prev = _context9.next) {
                        case 0:
                            (0, _syscoinOw2.default)(hexDataToSubmit, _syscoinOw2.default.string.label("submitBlock:hexDataToSubmit").not.empty);
                            // submitblock "hexdata" ( "jsonparametersobject" )

                            // Attempts to submit new block to network.
                            // The 'jsonparametersobject' parameter is currently ignored.
                            // See https://en.syscoin.it/wiki/BIP_0022 for full specification.
                            _context9.next = 3;
                            return callRpc('submitblock', [hexDataToSubmit]);

                        case 3:
                            return _context9.abrupt("return", _context9.sent);

                        case 4:
                        case "end":
                            return _context9.stop();
                    }
                }
            }, _callee9, this);
        }));

        return function submitBlock() {
            return _ref15.apply(this, arguments);
        };
    }();

    return {
        createAuxBlock: (0, _endpointDecorators.post)(createAuxBlock),
        getAuxBlock: (0, _endpointDecorators.get)(getAuxBlock),
        getBlockTemplate: (0, _endpointDecorators.get)(getBlockTemplate),
        getMiningInfo: (0, _endpointDecorators.get)(getMiningInfo),
        getNetworkHashesPerSecond: (0, _endpointDecorators.get)(getNetworkHashesPerSecond),
        prioritiseTransaction: (0, _endpointDecorators.post)(prioritiseTransaction),
        submitAuxBlock: (0, _endpointDecorators.post)(submitAuxBlock),
        submitBlock: (0, _endpointDecorators.post)(submitBlock),
        getPoolInfo: (0, _endpointDecorators.get)(getPoolInfo)
    };
}