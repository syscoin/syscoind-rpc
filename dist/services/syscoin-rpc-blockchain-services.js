'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.syscoinRpcBlockchainServices = syscoinRpcBlockchainServices;

var _syscoinOw = require('syscoin-ow');

var _syscoinOw2 = _interopRequireDefault(_syscoinOw);

var _endpointDecorators = require('../endpoint-decorators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function syscoinRpcBlockchainServices(callRpc) {
    var getBestBlockHash = function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return callRpc('getbestblockhash');

                        case 2:
                            return _context.abrupt('return', _context.sent);

                        case 3:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function getBestBlockHash() {
            return _ref.apply(this, arguments);
        };
    }();

    // GetBlock has been split into getBlock and getBlockVerbose, since the methods
    // return two entirely different objects.


    var getBlock = function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                blockHash = _ref3.blockHash;

            var Verbose;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            (0, _syscoinOw2.default)(blockHash, _syscoinOw2.default.string.label("getBlock:blockHash").not.empty);
                            Verbose = false;
                            _context2.next = 4;
                            return callRpc('getblock', [blockHash, Verbose]);

                        case 4:
                            return _context2.abrupt('return', _context2.sent);

                        case 5:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        return function getBlock() {
            return _ref2.apply(this, arguments);
        };
    }();

    var getBlockVerbose = function () {
        var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
            var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                blockHash = _ref5.blockHash;

            var Verbose;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            (0, _syscoinOw2.default)(blockHash, _syscoinOw2.default.string.label("getBlockVerbose:blockHash").not.empty);
                            Verbose = true;
                            _context3.next = 4;
                            return callRpc('getblock', [blockHash, Verbose]);

                        case 4:
                            return _context3.abrupt('return', _context3.sent);

                        case 5:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        return function getBlockVerbose() {
            return _ref4.apply(this, arguments);
        };
    }();

    var getBlockchainInfo = function () {
        var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return callRpc('getblockchaininfo');

                        case 2:
                            return _context4.abrupt('return', _context4.sent);

                        case 3:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        return function getBlockchainInfo() {
            return _ref6.apply(this, arguments);
        };
    }();

    var getBlockCount = function () {
        var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _context5.next = 2;
                            return callRpc('getblockcount');

                        case 2:
                            return _context5.abrupt('return', _context5.sent);

                        case 3:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        return function getBlockCount() {
            return _ref7.apply(this, arguments);
        };
    }();

    var getBlockHash = function () {
        var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
            var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                height = _ref9.height;

            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            (0, _syscoinOw2.default)(height, _syscoinOw2.default.number.label("getBlockHash:height").integer.greaterThan(0));
                            _context6.next = 3;
                            return callRpc('getblockhash', [height]);

                        case 3:
                            return _context6.abrupt('return', _context6.sent);

                        case 4:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        return function getBlockHash() {
            return _ref8.apply(this, arguments);
        };
    }();

    var getBlockAtHeight = function () {
        var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
            var _ref11 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                height = _ref11.height;

            var blockHash;
            return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            (0, _syscoinOw2.default)(height, _syscoinOw2.default.number.label("getBlockAtHeight:blockHeight").integer.greaterThan(0));
                            _context7.next = 3;
                            return getBlockHash({ height: height });

                        case 3:
                            blockHash = _context7.sent;

                            if (blockHash.error) {
                                _context7.next = 10;
                                break;
                            }

                            _context7.next = 7;
                            return getBlock({ blockHash: blockHash });

                        case 7:
                            return _context7.abrupt('return', _context7.sent);

                        case 10:
                            return _context7.abrupt('return', blockHash);

                        case 11:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _callee7, this);
        }));

        return function getBlockAtHeight() {
            return _ref10.apply(this, arguments);
        };
    }();

    var getBlockAtHeightVerbose = function () {
        var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8() {
            var _ref13 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                height = _ref13.height;

            var blockHash;
            return _regenerator2.default.wrap(function _callee8$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            (0, _syscoinOw2.default)(height, _syscoinOw2.default.number.label("getBlockAtHeightVerbose:blockHeight").integer.greaterThan(0));
                            _context8.next = 3;
                            return getBlockHash({ height: height });

                        case 3:
                            blockHash = _context8.sent;

                            if (blockHash.error) {
                                _context8.next = 10;
                                break;
                            }

                            _context8.next = 7;
                            return getBlockVerbose({ blockHash: blockHash });

                        case 7:
                            return _context8.abrupt('return', _context8.sent);

                        case 10:
                            return _context8.abrupt('return', blockHash);

                        case 11:
                        case 'end':
                            return _context8.stop();
                    }
                }
            }, _callee8, this);
        }));

        return function getBlockAtHeightVerbose() {
            return _ref12.apply(this, arguments);
        };
    }();

    var getBlockHashes = function () {
        var _ref14 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9() {
            var _ref15 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                timestampHigh = _ref15.timestampHigh,
                timestampLow = _ref15.timestampLow;

            return _regenerator2.default.wrap(function _callee9$(_context9) {
                while (1) {
                    switch (_context9.prev = _context9.next) {
                        case 0:
                            (0, _syscoinOw2.default)(timestampHigh, _syscoinOw2.default.number.label("getBlockHashes:timestamp").integer.greaterThan(0));
                            (0, _syscoinOw2.default)(timestampLow, _syscoinOw2.default.number.label("getBlockHashes:timestamp").integer.greaterThan(0));
                            _context9.next = 4;
                            return callRpc('getblockhashes', [timestampHigh, timestampLow]);

                        case 4:
                            return _context9.abrupt('return', _context9.sent);

                        case 5:
                        case 'end':
                            return _context9.stop();
                    }
                }
            }, _callee9, this);
        }));

        return function getBlockHashes() {
            return _ref14.apply(this, arguments);
        };
    }();

    var getBlockHeader = function () {
        var _ref16 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10() {
            var _ref17 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                hash = _ref17.hash;

            var Verbose;
            return _regenerator2.default.wrap(function _callee10$(_context10) {
                while (1) {
                    switch (_context10.prev = _context10.next) {
                        case 0:
                            (0, _syscoinOw2.default)(hash, _syscoinOw2.default.string.label("getBlockHeader:hash").not.empty);
                            Verbose = false;
                            _context10.next = 4;
                            return callRpc('getblockheader', [hash, Verbose]);

                        case 4:
                            return _context10.abrupt('return', _context10.sent);

                        case 5:
                        case 'end':
                            return _context10.stop();
                    }
                }
            }, _callee10, this);
        }));

        return function getBlockHeader() {
            return _ref16.apply(this, arguments);
        };
    }();

    var getBlockHeaderVerbose = function () {
        var _ref18 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11() {
            var _ref19 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                hash = _ref19.hash;

            var Verbose;
            return _regenerator2.default.wrap(function _callee11$(_context11) {
                while (1) {
                    switch (_context11.prev = _context11.next) {
                        case 0:
                            (0, _syscoinOw2.default)(hash, _syscoinOw2.default.string.label("getBlockHeaderVerbose:hash").not.empty);
                            Verbose = true;
                            _context11.next = 4;
                            return callRpc('getblockheader', [hash, Verbose]);

                        case 4:
                            return _context11.abrupt('return', _context11.sent);

                        case 5:
                        case 'end':
                            return _context11.stop();
                    }
                }
            }, _callee11, this);
        }));

        return function getBlockHeaderVerbose() {
            return _ref18.apply(this, arguments);
        };
    }();

    var getBlockHeaders = function () {
        var _ref20 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee12() {
            var _ref21 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                hash = _ref21.hash,
                _ref21$headerCount = _ref21.headerCount,
                headerCount = _ref21$headerCount === undefined ? 2000 : _ref21$headerCount;

            var Verbose;
            return _regenerator2.default.wrap(function _callee12$(_context12) {
                while (1) {
                    switch (_context12.prev = _context12.next) {
                        case 0:
                            (0, _syscoinOw2.default)(hash, _syscoinOw2.default.string.label("getBlockHeaders:hash").not.empty);
                            (0, _syscoinOw2.default)(headerCount, _syscoinOw2.default.number.label("getBlockHeader:headerCount").integer.greaterThan(0));
                            Verbose = false;
                            _context12.next = 5;
                            return callRpc('getblockheaders', [hash, headerCount, Verbose]);

                        case 5:
                            return _context12.abrupt('return', _context12.sent);

                        case 6:
                        case 'end':
                            return _context12.stop();
                    }
                }
            }, _callee12, this);
        }));

        return function getBlockHeaders() {
            return _ref20.apply(this, arguments);
        };
    }();

    var getBlockHeadersVerbose = function () {
        var _ref22 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee13() {
            var _ref23 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                hash = _ref23.hash,
                _ref23$headerCount = _ref23.headerCount,
                headerCount = _ref23$headerCount === undefined ? 2000 : _ref23$headerCount;

            var Verbose;
            return _regenerator2.default.wrap(function _callee13$(_context13) {
                while (1) {
                    switch (_context13.prev = _context13.next) {
                        case 0:
                            (0, _syscoinOw2.default)(hash, _syscoinOw2.default.string.label("getBlockHeadersVerbose:hash").not.empty);
                            (0, _syscoinOw2.default)(headerCount, _syscoinOw2.default.number.label("getBlockHeadersVerbose:headerCount").integer.greaterThan(0));
                            Verbose = true;
                            _context13.next = 5;
                            return callRpc('getblockheaders', [hash, headerCount, Verbose]);

                        case 5:
                            return _context13.abrupt('return', _context13.sent);

                        case 6:
                        case 'end':
                            return _context13.stop();
                    }
                }
            }, _callee13, this);
        }));

        return function getBlockHeadersVerbose() {
            return _ref22.apply(this, arguments);
        };
    }();

    var getChainTips = function () {
        var _ref24 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee14() {
            var _ref25 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                count = _ref25.count,
                branchLength = _ref25.branchLength;

            return _regenerator2.default.wrap(function _callee14$(_context14) {
                while (1) {
                    switch (_context14.prev = _context14.next) {
                        case 0:
                            if (count) {
                                (0, _syscoinOw2.default)(count, _syscoinOw2.default.number.label("getChainTips:count").integer.greaterThan(0));
                            }
                            if (branchLength) {
                                (0, _syscoinOw2.default)(branchLength, _syscoinOw2.default.number.label("getChainTips:branchLength").integer.greaterThan(0));
                            }
                            _context14.next = 4;
                            return callRpc('getchaintips', [count, branchLength]);

                        case 4:
                            return _context14.abrupt('return', _context14.sent);

                        case 5:
                        case 'end':
                            return _context14.stop();
                    }
                }
            }, _callee14, this);
        }));

        return function getChainTips() {
            return _ref24.apply(this, arguments);
        };
    }();

    var getChainVersion = function () {
        var _ref26 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee15() {
            var miningInfo;
            return _regenerator2.default.wrap(function _callee15$(_context15) {
                while (1) {
                    switch (_context15.prev = _context15.next) {
                        case 0:
                            _context15.next = 2;
                            return callRpc('getmininginfo');

                        case 2:
                            miningInfo = _context15.sent;
                            return _context15.abrupt('return', { chainVersion: miningInfo.chain });

                        case 4:
                        case 'end':
                            return _context15.stop();
                    }
                }
            }, _callee15, this);
        }));

        return function getChainVersion() {
            return _ref26.apply(this, arguments);
        };
    }();

    var getDifficulty = function () {
        var _ref27 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee16() {
            return _regenerator2.default.wrap(function _callee16$(_context16) {
                while (1) {
                    switch (_context16.prev = _context16.next) {
                        case 0:
                            _context16.next = 2;
                            return callRpc('getdifficulty');

                        case 2:
                            return _context16.abrupt('return', _context16.sent);

                        case 3:
                        case 'end':
                            return _context16.stop();
                    }
                }
            }, _callee16, this);
        }));

        return function getDifficulty() {
            return _ref27.apply(this, arguments);
        };
    }();

    var getMemPoolAncestors = function () {
        var _ref28 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee17() {
            var _ref29 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                txid = _ref29.txid;

            var Verbose;
            return _regenerator2.default.wrap(function _callee17$(_context17) {
                while (1) {
                    switch (_context17.prev = _context17.next) {
                        case 0:
                            (0, _syscoinOw2.default)(txid, _syscoinOw2.default.string.label("getMemPoolAncestors:txid").not.empty);
                            Verbose = false;
                            _context17.next = 4;
                            return callRpc('getMemPoolAncestors', [txid, Verbose]);

                        case 4:
                            return _context17.abrupt('return', _context17.sent);

                        case 5:
                        case 'end':
                            return _context17.stop();
                    }
                }
            }, _callee17, this);
        }));

        return function getMemPoolAncestors() {
            return _ref28.apply(this, arguments);
        };
    }();

    var getMemPoolAncestorsVerbose = function () {
        var _ref30 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee18() {
            var _ref31 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                txid = _ref31.txid;

            var Verbose;
            return _regenerator2.default.wrap(function _callee18$(_context18) {
                while (1) {
                    switch (_context18.prev = _context18.next) {
                        case 0:
                            (0, _syscoinOw2.default)(txid, _syscoinOw2.default.string.label("getMemPoolAncestorsVerbose:txid").not.empty);
                            Verbose = true;
                            _context18.next = 4;
                            return callRpc('getmempoolancestors', [txid, Verbose]);

                        case 4:
                            return _context18.abrupt('return', _context18.sent);

                        case 5:
                        case 'end':
                            return _context18.stop();
                    }
                }
            }, _callee18, this);
        }));

        return function getMemPoolAncestorsVerbose() {
            return _ref30.apply(this, arguments);
        };
    }();

    var getMemPoolDescendants = function () {
        var _ref32 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee19() {
            var _ref33 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                txid = _ref33.txid;

            var Verbose;
            return _regenerator2.default.wrap(function _callee19$(_context19) {
                while (1) {
                    switch (_context19.prev = _context19.next) {
                        case 0:
                            (0, _syscoinOw2.default)(txid, _syscoinOw2.default.string.label("getMemPoolDescendants:txid").not.empty);
                            Verbose = false;
                            _context19.next = 4;
                            return callRpc('getmempooldescendants', [txid, Verbose]);

                        case 4:
                            return _context19.abrupt('return', _context19.sent);

                        case 5:
                        case 'end':
                            return _context19.stop();
                    }
                }
            }, _callee19, this);
        }));

        return function getMemPoolDescendants() {
            return _ref32.apply(this, arguments);
        };
    }();

    var getMemPoolDescendantsVerbose = function () {
        var _ref34 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee20() {
            var _ref35 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                txid = _ref35.txid;

            var Verbose;
            return _regenerator2.default.wrap(function _callee20$(_context20) {
                while (1) {
                    switch (_context20.prev = _context20.next) {
                        case 0:
                            (0, _syscoinOw2.default)(txid, _syscoinOw2.default.string.label("getMemPoolDescendantsVerbose:txid").not.empty);
                            Verbose = true;
                            _context20.next = 4;
                            return callRpc('getmempooldescendants', [txid, Verbose]);

                        case 4:
                            return _context20.abrupt('return', _context20.sent);

                        case 5:
                        case 'end':
                            return _context20.stop();
                    }
                }
            }, _callee20, this);
        }));

        return function getMemPoolDescendantsVerbose() {
            return _ref34.apply(this, arguments);
        };
    }();

    var getMemPoolEntry = function () {
        var _ref36 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee21() {
            var _ref37 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                txid = _ref37.txid;

            return _regenerator2.default.wrap(function _callee21$(_context21) {
                while (1) {
                    switch (_context21.prev = _context21.next) {
                        case 0:
                            (0, _syscoinOw2.default)(txid, _syscoinOw2.default.string.label("getMemPoolEntry:txid").not.empty);
                            _context21.next = 3;
                            return callRpc('getmempoolentry', [txid]);

                        case 3:
                            return _context21.abrupt('return', _context21.sent);

                        case 4:
                        case 'end':
                            return _context21.stop();
                    }
                }
            }, _callee21, this);
        }));

        return function getMemPoolEntry() {
            return _ref36.apply(this, arguments);
        };
    }();

    var getMemPoolInfo = function () {
        var _ref38 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee22() {
            return _regenerator2.default.wrap(function _callee22$(_context22) {
                while (1) {
                    switch (_context22.prev = _context22.next) {
                        case 0:
                            _context22.next = 2;
                            return callRpc('getmempoolinfo');

                        case 2:
                            return _context22.abrupt('return', _context22.sent);

                        case 3:
                        case 'end':
                            return _context22.stop();
                    }
                }
            }, _callee22, this);
        }));

        return function getMemPoolInfo() {
            return _ref38.apply(this, arguments);
        };
    }();

    var getRawMemPool = function () {
        var _ref39 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee23() {
            return _regenerator2.default.wrap(function _callee23$(_context23) {
                while (1) {
                    switch (_context23.prev = _context23.next) {
                        case 0:
                            _context23.next = 2;
                            return callRpc('getrawmempool');

                        case 2:
                            return _context23.abrupt('return', _context23.sent);

                        case 3:
                        case 'end':
                            return _context23.stop();
                    }
                }
            }, _callee23, this);
        }));

        return function getRawMemPool() {
            return _ref39.apply(this, arguments);
        };
    }();

    var getRawMemPoolVerbose = function () {
        var _ref40 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee24() {
            return _regenerator2.default.wrap(function _callee24$(_context24) {
                while (1) {
                    switch (_context24.prev = _context24.next) {
                        case 0:
                            _context24.next = 2;
                            return callRpc('getrawmempoolverbose');

                        case 2:
                            return _context24.abrupt('return', _context24.sent);

                        case 3:
                        case 'end':
                            return _context24.stop();
                    }
                }
            }, _callee24, this);
        }));

        return function getRawMemPoolVerbose() {
            return _ref40.apply(this, arguments);
        };
    }();

    var getSpentInfo = function () {
        var _ref41 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee25() {
            var _ref42 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                txid = _ref42.txid,
                startingBlockHeight = _ref42.startingBlockHeight;

            var _args25 = arguments;
            return _regenerator2.default.wrap(function _callee25$(_context25) {
                while (1) {
                    switch (_context25.prev = _context25.next) {
                        case 0:
                            (0, _syscoinOw2.default)(txid, _syscoinOw2.default.string.label("getSpentInfo:txid").not.empty);
                            if (startingBlockHeight) {
                                (0, _syscoinOw2.default)(startingBlockHeight, _syscoinOw2.default.number.label("getSpentInfo:startingBlockHeight").integer.greaterThan(0));
                            }
                            _context25.next = 4;
                            return callRpc('getspentinfo', _args25);

                        case 4:
                            return _context25.abrupt('return', _context25.sent);

                        case 5:
                        case 'end':
                            return _context25.stop();
                    }
                }
            }, _callee25, this);
        }));

        return function getSpentInfo() {
            return _ref41.apply(this, arguments);
        };
    }();

    var getTxOut = function () {
        var _ref43 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee26() {
            var _ref44 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                txid = _ref44.txid,
                voutNumber = _ref44.voutNumber,
                _ref44$includeMempool = _ref44.includeMempool,
                includeMempool = _ref44$includeMempool === undefined ? false : _ref44$includeMempool;

            var _args26 = arguments;
            return _regenerator2.default.wrap(function _callee26$(_context26) {
                while (1) {
                    switch (_context26.prev = _context26.next) {
                        case 0:
                            (0, _syscoinOw2.default)(txid, _syscoinOw2.default.string.label("getTxOut:txid").not.empty);
                            (0, _syscoinOw2.default)(includeMempool, _syscoinOw2.default.number.label("getTxOut:includeMempool").integer.greaterThan(0));
                            _context26.next = 4;
                            return callRpc('gettxout', _args26);

                        case 4:
                            return _context26.abrupt('return', _context26.sent);

                        case 5:
                        case 'end':
                            return _context26.stop();
                    }
                }
            }, _callee26, this);
        }));

        return function getTxOut() {
            return _ref43.apply(this, arguments);
        };
    }();

    var getTxOutProof = function () {
        var _ref45 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee27() {
            var _ref46 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                txids = _ref46.txids,
                blockHash = _ref46.blockHash;

            var _args27 = arguments;
            return _regenerator2.default.wrap(function _callee27$(_context27) {
                while (1) {
                    switch (_context27.prev = _context27.next) {
                        case 0:
                            _context27.next = 2;
                            return callRpc('gettxoutproof', _args27);

                        case 2:
                            return _context27.abrupt('return', _context27.sent);

                        case 3:
                        case 'end':
                            return _context27.stop();
                    }
                }
            }, _callee27, this);
        }));

        return function getTxOutProof() {
            return _ref45.apply(this, arguments);
        };
    }();

    var getUnspentTxOutputSetInfo = function () {
        var _ref47 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee28() {
            return _regenerator2.default.wrap(function _callee28$(_context28) {
                while (1) {
                    switch (_context28.prev = _context28.next) {
                        case 0:
                            _context28.next = 2;
                            return callRpc('gettxoutsetinfo');

                        case 2:
                            return _context28.abrupt('return', _context28.sent);

                        case 3:
                        case 'end':
                            return _context28.stop();
                    }
                }
            }, _callee28, this);
        }));

        return function getUnspentTxOutputSetInfo() {
            return _ref47.apply(this, arguments);
        };
    }();

    var getSuperBlockBudget = function () {
        var _ref48 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee29() {
            var _ref49 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                index = _ref49.index;

            return _regenerator2.default.wrap(function _callee29$(_context29) {
                while (1) {
                    switch (_context29.prev = _context29.next) {
                        case 0:
                            _context29.next = 2;
                            return callRpc('getsuperblockbudget', index);

                        case 2:
                            return _context29.abrupt('return', _context29.sent);

                        case 3:
                        case 'end':
                            return _context29.stop();
                    }
                }
            }, _callee29, this);
        }));

        return function getSuperBlockBudget() {
            return _ref48.apply(this, arguments);
        };
    }();

    var preciousBlock = function () {
        var _ref50 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee30() {
            var _ref51 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                blockHash = _ref51.blockHash;

            return _regenerator2.default.wrap(function _callee30$(_context30) {
                while (1) {
                    switch (_context30.prev = _context30.next) {
                        case 0:
                            _context30.next = 2;
                            return callRpc('preciousblock', [blockHash]);

                        case 2:
                            return _context30.abrupt('return', _context30.sent);

                        case 3:
                        case 'end':
                            return _context30.stop();
                    }
                }
            }, _callee30, this);
        }));

        return function preciousBlock() {
            return _ref50.apply(this, arguments);
        };
    }();

    var pruneBlockchain = function () {
        var _ref52 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee31() {
            var _ref53 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                blockHeight = _ref53.blockHeight;

            return _regenerator2.default.wrap(function _callee31$(_context31) {
                while (1) {
                    switch (_context31.prev = _context31.next) {
                        case 0:
                            _context31.next = 2;
                            return callRpc('pruneblockchain', [blockHeight]);

                        case 2:
                            return _context31.abrupt('return', _context31.sent);

                        case 3:
                        case 'end':
                            return _context31.stop();
                    }
                }
            }, _callee31, this);
        }));

        return function pruneBlockchain() {
            return _ref52.apply(this, arguments);
        };
    }();

    var verifyChain = function () {
        var _ref54 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee32() {
            var _ref55 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref55$thoroughnessLe = _ref55.thoroughnessLevel,
                thoroughnessLevel = _ref55$thoroughnessLe === undefined ? 4 : _ref55$thoroughnessLe,
                _ref55$numberOfBlocks = _ref55.numberOfBlocksToCheck,
                numberOfBlocksToCheck = _ref55$numberOfBlocks === undefined ? 6 : _ref55$numberOfBlocks;

            var _args32 = arguments;
            return _regenerator2.default.wrap(function _callee32$(_context32) {
                while (1) {
                    switch (_context32.prev = _context32.next) {
                        case 0:
                            _context32.next = 2;
                            return callRpc('verifychain', _args32);

                        case 2:
                            return _context32.abrupt('return', _context32.sent);

                        case 3:
                        case 'end':
                            return _context32.stop();
                    }
                }
            }, _callee32, this);
        }));

        return function verifyChain() {
            return _ref54.apply(this, arguments);
        };
    }();

    var verifyTxOutProof = function () {
        var _ref56 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee33() {
            var _ref57 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                proof = _ref57.proof;

            return _regenerator2.default.wrap(function _callee33$(_context33) {
                while (1) {
                    switch (_context33.prev = _context33.next) {
                        case 0:
                            _context33.next = 2;
                            return callRpc('verifytxoutproof', [proof]);

                        case 2:
                            return _context33.abrupt('return', _context33.sent);

                        case 3:
                        case 'end':
                            return _context33.stop();
                    }
                }
            }, _callee33, this);
        }));

        return function verifyTxOutProof() {
            return _ref56.apply(this, arguments);
        };
    }();

    var verifyTxOut = function () {
        var _ref58 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee34() {
            var _ref59 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                txids = _ref59.txids,
                blockHash = _ref59.blockHash;

            var proof;
            return _regenerator2.default.wrap(function _callee34$(_context34) {
                while (1) {
                    switch (_context34.prev = _context34.next) {
                        case 0:
                            _context34.next = 2;
                            return getTxOutProof(txids, blockHash);

                        case 2:
                            proof = _context34.sent;
                            _context34.next = 5;
                            return verifyTxOutProof(proof);

                        case 5:
                            return _context34.abrupt('return', _context34.sent);

                        case 6:
                        case 'end':
                            return _context34.stop();
                    }
                }
            }, _callee34, this);
        }));

        return function verifyTxOut() {
            return _ref58.apply(this, arguments);
        };
    }();

    return {
        getBestBlockHash: (0, _endpointDecorators.get)(getBestBlockHash),
        getChainVersion: (0, _endpointDecorators.get)(getChainVersion),
        getBlock: (0, _endpointDecorators.get)(getBlock),
        getBlockVerbose: (0, _endpointDecorators.get)(getBlockVerbose),
        getBlockchainInfo: (0, _endpointDecorators.get)(getBlockchainInfo),
        getBlockCount: (0, _endpointDecorators.get)(getBlockCount),
        getBlockHash: (0, _endpointDecorators.get)(getBlockHash),
        getBlockAtHeight: (0, _endpointDecorators.get)(getBlockAtHeight),
        getBlockAtHeightVerbose: (0, _endpointDecorators.get)(getBlockAtHeightVerbose),
        getBlockHashes: (0, _endpointDecorators.get)(getBlockHashes),
        getBlockHeader: (0, _endpointDecorators.get)(getBlockHeader),
        getBlockHeaderVerbose: (0, _endpointDecorators.get)(getBlockHeaderVerbose),
        getBlockHeaders: (0, _endpointDecorators.get)(getBlockHeaders),
        getBlockHeadersVerbose: (0, _endpointDecorators.get)(getBlockHeadersVerbose),
        getChainTips: (0, _endpointDecorators.get)(getChainTips),
        getDifficulty: (0, _endpointDecorators.get)(getDifficulty),
        getMemPoolAncestors: (0, _endpointDecorators.get)(getMemPoolAncestors),
        getMemPoolAncestorsVerbose: (0, _endpointDecorators.get)(getMemPoolAncestorsVerbose),
        getMemPoolDescendants: (0, _endpointDecorators.get)(getMemPoolDescendants),
        getMemPoolDescendantsVerbose: (0, _endpointDecorators.get)(getMemPoolDescendantsVerbose),
        getMemPoolEntry: (0, _endpointDecorators.get)(getMemPoolEntry),
        getMemPoolInfo: (0, _endpointDecorators.get)(getMemPoolInfo),
        getRawMemPool: (0, _endpointDecorators.get)(getRawMemPool),
        getRawMemPoolVerbose: (0, _endpointDecorators.get)(getRawMemPoolVerbose),
        getSpentInfo: (0, _endpointDecorators.get)(getSpentInfo),
        getTxOut: (0, _endpointDecorators.get)(getTxOut),
        getTxOutProof: (0, _endpointDecorators.get)(getTxOutProof),
        getUnspentTxOutputSetInfo: (0, _endpointDecorators.get)(getUnspentTxOutputSetInfo),
        preciousBlock: (0, _endpointDecorators.post)(preciousBlock),
        pruneBlockchain: (0, _endpointDecorators.post)(pruneBlockchain),
        verifyChain: (0, _endpointDecorators.post)(verifyChain),
        verifyTxOutProof: (0, _endpointDecorators.post)(verifyTxOutProof),
        verifyTxOut: (0, _endpointDecorators.post)(verifyTxOut),
        getSuperBlockBudget: (0, _endpointDecorators.get)(getSuperBlockBudget)
    };
}