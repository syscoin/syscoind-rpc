'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.syscoinRpcAddressIndexServices = syscoinRpcAddressIndexServices;

var _endpointDecorators = require('../endpoint-decorators');

var _syscoinOw = require('syscoin-ow');

var _syscoinOw2 = _interopRequireDefault(_syscoinOw);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function syscoinRpcAddressIndexServices(callRpc) {
    var getAddressDeltas = function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                addresses = _ref2.addresses,
                startingBlockHeight = _ref2.startingBlockHeight,
                endingBlockHeight = _ref2.endingBlockHeight;

            var addressJsonCollection;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            (0, _syscoinOw2.default)(addresses, _syscoinOw2.default.string.label("getAddressDeltas:addresses").not.empty);
                            addressJsonCollection = {
                                addresses: [addresses]
                            };
                            //getAddressDeltas currently is not working with it's numerical arguments at core level
                            //return await callRpc('getaddressdeltas',[addressJsonCollection, startingBlockHeight, endingBlockHeight])

                            _context.next = 4;
                            return callRpc('getaddressdeltas', [addressJsonCollection]);

                        case 4:
                            return _context.abrupt('return', _context.sent);

                        case 5:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function getAddressDeltas() {
            return _ref.apply(this, arguments);
        };
    }();

    var getAddressBalancesAsArray = function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                addresses = _ref4.addresses;

            var separateOutputsIntoArray;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            (0, _syscoinOw2.default)(addresses, _syscoinOw2.default.string.label("getAddressBalancesAsArray:addresses").not.empty);
                            separateOutputsIntoArray = true;
                            _context2.next = 4;
                            return callRpc('getaddressbalance', [addresses, separateOutputsIntoArray]);

                        case 4:
                            return _context2.abrupt('return', _context2.sent);

                        case 5:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        return function getAddressBalancesAsArray() {
            return _ref3.apply(this, arguments);
        };
    }();

    var getSummedAddressBalance = function () {
        var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
            var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                addresses = _ref6.addresses;

            var separateOutputsIntoArray;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            (0, _syscoinOw2.default)(addresses, _syscoinOw2.default.string.label("getSummedAddressBalance:addresses").not.empty);
                            separateOutputsIntoArray = false;
                            _context3.next = 4;
                            return callRpc('getaddressbalance', [addresses, separateOutputsIntoArray]);

                        case 4:
                            return _context3.abrupt('return', _context3.sent);

                        case 5:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        return function getSummedAddressBalance() {
            return _ref5.apply(this, arguments);
        };
    }();

    var getAddressMempool = function () {
        var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
            var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                addresses = _ref8.addresses;

            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            (0, _syscoinOw2.default)(addresses, _syscoinOw2.default.string.label("getAddressMempool:addresses").not.empty);
                            _context4.next = 3;
                            return callRpc('getaddressmempool', [addresses]);

                        case 3:
                            return _context4.abrupt('return', _context4.sent);

                        case 4:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        return function getAddressMempool() {
            return _ref7.apply(this, arguments);
        };
    }();

    var getAddressTxids = function () {
        var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
            var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                addresses = _ref10.addresses,
                startingBlockHeight = _ref10.startingBlockHeight,
                endingBlockHeight = _ref10.endingBlockHeight;

            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            (0, _syscoinOw2.default)(addresses, _syscoinOw2.default.string.label("getAddressTxids:addresses").not.empty);

                            if (!startingBlockHeight) {
                                _context5.next = 5;
                                break;
                            }

                            _context5.next = 4;
                            return callRpc('getaddresstxids', [addresses, startingBlockHeight]);

                        case 4:
                            return _context5.abrupt('return', _context5.sent);

                        case 5:
                            if (!endingBlockHeight) {
                                _context5.next = 9;
                                break;
                            }

                            _context5.next = 8;
                            return callRpc('getaddresstxids', [addresses, startingBlockHeight, endingBlockHeight]);

                        case 8:
                            return _context5.abrupt('return', _context5.sent);

                        case 9:
                            _context5.next = 11;
                            return callRpc('getaddresstxids', [addresses]);

                        case 11:
                            return _context5.abrupt('return', _context5.sent);

                        case 12:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        return function getAddressTxids() {
            return _ref9.apply(this, arguments);
        };
    }();

    var getAddressUtxos = function () {
        var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
            var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                addresses = _ref12.addresses;

            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            (0, _syscoinOw2.default)(addresses, _syscoinOw2.default.string.label("getAddressUtxos:addresses").not.empty);
                            _context6.next = 3;
                            return callRpc('getaddressutxos', [addresses]);

                        case 3:
                            return _context6.abrupt('return', _context6.sent);

                        case 4:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        return function getAddressUtxos() {
            return _ref11.apply(this, arguments);
        };
    }();

    return {
        getAddressBalancesAsArray: (0, _endpointDecorators.get)(getAddressBalancesAsArray),
        getSummedAddressBalance: (0, _endpointDecorators.get)(getSummedAddressBalance),
        getAddressDeltas: (0, _endpointDecorators.get)(getAddressDeltas),
        getAddressMempool: (0, _endpointDecorators.get)(getAddressMempool),
        getAddressTxids: (0, _endpointDecorators.get)(getAddressTxids),
        getAddressUtxos: (0, _endpointDecorators.get)(getAddressUtxos)
    };
}