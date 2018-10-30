'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.walletAssetAllocationServices = walletAssetAllocationServices;

var _syscoinOw = require('syscoin-ow');

var _syscoinOw2 = _interopRequireDefault(_syscoinOw);

var _endpointDecorators = require('../../endpoint-decorators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function walletAssetAllocationServices(callRpc) {
    var assetAllocationCollectInterest = function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                asset = _ref2.asset,
                owner = _ref2.owner,
                _ref2$witness = _ref2.witness,
                witness = _ref2$witness === undefined ? '' : _ref2$witness;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            (0, _syscoinOw2.default)(asset, _syscoinOw2.default.string.label("assetAllocationCollectInterest:asset").not.empty);
                            (0, _syscoinOw2.default)(owner, _syscoinOw2.default.string.label("assetAllocationCollectInterest:owner").not.empty);
                            (0, _syscoinOw2.default)(witness, _syscoinOw2.default.string.label("assetAllocationCollectInterest:witness").minLength(0));
                            _context.next = 5;
                            return callRpc('assetallocationcollectinterest', [asset, owner, witness]);

                        case 5:
                            return _context.abrupt('return', _context.sent);

                        case 6:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function assetAllocationCollectInterest() {
            return _ref.apply(this, arguments);
        };
    }();

    var assetAllocationInfo = function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                asset = _ref4.asset,
                owner = _ref4.owner,
                getInputs = _ref4.getInputs;

            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            (0, _syscoinOw2.default)(asset, _syscoinOw2.default.string.label("assetAllocationInfo:asset").not.empty);
                            (0, _syscoinOw2.default)(owner, _syscoinOw2.default.string.label("assetAllocationInfo:owner").not.empty);
                            (0, _syscoinOw2.default)(getInputs, _syscoinOw2.default.boolean.label("assetAllocationInfo:getInputs").is(function (x) {
                                return x == true || x == false;
                            }));
                            _context2.next = 5;
                            return callRpc('assetallocationinfo', [asset, owner, getInputs]);

                        case 5:
                            return _context2.abrupt('return', _context2.sent);

                        case 6:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        return function assetAllocationInfo() {
            return _ref3.apply(this, arguments);
        };
    }();

    var listAssetAllocations = function () {
        var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
            var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                count = _ref6.count,
                from = _ref6.from,
                options = _ref6.options;

            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            if (count) {
                                (0, _syscoinOw2.default)(count, _syscoinOw2.default.number.label("listAssetAllocations:count").integer.greaterThan(0));
                            }
                            if (from) {
                                (0, _syscoinOw2.default)(from, _syscoinOw2.default.number.label("listAssetAllocations:from").integer.greaterThan(0));
                            }
                            if (options) {
                                (0, _syscoinOw2.default)(options, _syscoinOw2.default.objects.label("listAssetAllocations:options").not.empty);
                            }
                            _context3.next = 5;
                            return callRpc('listassetallocations', [count, from, options]);

                        case 5:
                            return _context3.abrupt('return', _context3.sent);

                        case 6:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        return function listAssetAllocations() {
            return _ref5.apply(this, arguments);
        };
    }();

    var listAssetAllocationTransactions = function () {
        var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
            var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                count = _ref8.count,
                from = _ref8.from,
                options = _ref8.options;

            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            if (count) {
                                (0, _syscoinOw2.default)(count, _syscoinOw2.default.number.label("listAssetAllocationTransactions:count").integer.greaterThan(0));
                            }
                            if (from) {
                                (0, _syscoinOw2.default)(from, _syscoinOw2.default.number.label("listAssetAllocationTransactions:from").integer.greaterThan(0));
                            }
                            if (options) {
                                (0, _syscoinOw2.default)(options, _syscoinOw2.default.objects.label("listAssetAllocationTransactions:options").not.empty);
                            }
                            _context4.next = 5;
                            return callRpc('listassetallocationtransactions', [count, from, options]);

                        case 5:
                            return _context4.abrupt('return', _context4.sent);

                        case 6:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        return function listAssetAllocationTransactions() {
            return _ref7.apply(this, arguments);
        };
    }();

    var listAssetAllocationsAfterBlock = function () {
        var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(_ref9) {
            var blockNumber = _ref9.blockNumber;
            var options, assetAllocations;
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            (0, _syscoinOw2.default)(blockNumber, _syscoinOw2.default.number.label("listAssetAllocationsAfterBlock:blockNumber").integer.greaterThan(0));

                            options = {
                                startblock: blockNumber
                            };
                            _context5.next = 4;
                            return listAssetAllocations({ count: 0, from: 0, options: options });

                        case 4:
                            assetAllocations = _context5.sent;
                            return _context5.abrupt('return', assetAllocations);

                        case 6:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        return function listAssetAllocationsAfterBlock(_x5) {
            return _ref10.apply(this, arguments);
        };
    }();

    var assetAllocationSend = function () {
        var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
            var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                asset = _ref12.asset,
                owner = _ref12.owner,
                ownerTo = _ref12.ownerTo,
                ranges = _ref12.ranges,
                memo = _ref12.memo,
                _ref12$witness = _ref12.witness,
                witness = _ref12$witness === undefined ? '' : _ref12$witness;

            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            (0, _syscoinOw2.default)(asset, _syscoinOw2.default.string.label("assetAllocationSend:asset").not.empty);
                            (0, _syscoinOw2.default)(owner, _syscoinOw2.default.string.label("assetAllocationSend:owner").not.empty);
                            (0, _syscoinOw2.default)(ownerTo, _syscoinOw2.default.string.label("assetAllocationSend:ownerTo").not.empty);
                            (0, _syscoinOw2.default)(ranges, _syscoinOw2.default.object.label("assetAllocationCollectInterest:ranges").not.empty);
                            (0, _syscoinOw2.default)(memo, _syscoinOw2.default.string.label("assetAllocationSend:memo").minLength(0));
                            (0, _syscoinOw2.default)(witness, _syscoinOw2.default.string.label("assetAllocationSend:witness").minLength(0));
                            _context6.next = 8;
                            return callRpc('assetallocationsend', [asset, owner, ownerTo, ranges, memo, witness]);

                        case 8:
                            return _context6.abrupt('return', _context6.sent);

                        case 9:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        return function assetAllocationSend() {
            return _ref11.apply(this, arguments);
        };
    }();

    var assetAllocationSenderStatus = function () {
        var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
            var _ref14 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                asset = _ref14.asset,
                owner = _ref14.owner,
                txId = _ref14.txId;

            return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            (0, _syscoinOw2.default)(asset, _syscoinOw2.default.string.label("assetAllocationSenderStatus:asset").not.empty);
                            (0, _syscoinOw2.default)(owner, _syscoinOw2.default.string.label("assetAllocationSenderStatus:owner").not.empty);
                            (0, _syscoinOw2.default)(txId, _syscoinOw2.default.string.label("assetAllocationSenderStatus:txId").not.empty);
                            _context7.next = 5;
                            return callRpc('assetallocationsenderstatus', [asset, owner, txId]);

                        case 5:
                            return _context7.abrupt('return', _context7.sent);

                        case 6:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _callee7, this);
        }));

        return function assetAllocationSenderStatus() {
            return _ref13.apply(this, arguments);
        };
    }();

    return {
        collectInterest: (0, _endpointDecorators.post)(assetAllocationCollectInterest),
        info: (0, _endpointDecorators.get)(assetAllocationInfo),
        list: (0, _endpointDecorators.get)(listAssetAllocations),
        listTransactions: (0, _endpointDecorators.get)(listAssetAllocationTransactions),
        listAfterBlock: (0, _endpointDecorators.get)(listAssetAllocationsAfterBlock),
        send: (0, _endpointDecorators.post)(assetAllocationSend),
        senderStatus: (0, _endpointDecorators.get)(assetAllocationSenderStatus)
    };
}