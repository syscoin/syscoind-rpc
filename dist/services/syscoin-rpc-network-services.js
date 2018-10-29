'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.syscoinRpcNetworkServices = syscoinRpcNetworkServices;

var _endpointDecorators = require('../endpoint-decorators');

var _syscoinOw = require('syscoin-ow');

var _syscoinOw2 = _interopRequireDefault(_syscoinOw);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function syscoinRpcNetworkServices(callRpc) {
    var activateNetwork = function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return callRpc('setnetworkactive', [true]);

                        case 2:
                            return _context.abrupt('return', _context.sent);

                        case 3:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function activateNetwork() {
            return _ref.apply(this, arguments);
        };
    }();

    var showCurrentSporkValues = function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return callRpc('spork', ['all']);

                        case 2:
                            return _context2.abrupt('return', _context2.sent);

                        case 3:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        return function showCurrentSporkValues() {
            return _ref2.apply(this, arguments);
        };
    }();

    var showSporkActivationStatus = function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return callRpc('spork', ['active']);

                        case 2:
                            return _context3.abrupt('return', _context3.sent);

                        case 3:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        return function showSporkActivationStatus() {
            return _ref3.apply(this, arguments);
        };
    }();

    var sentinelPing = function () {
        var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
            var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                version = _ref5.version;

            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            (0, _syscoinOw2.default)(version, _syscoinOw2.default.string.label("sentinelPing:version").not.empty);
                            _context4.next = 3;
                            return callRpc('sentinelping', [version]);

                        case 3:
                            return _context4.abrupt('return', _context4.sent);

                        case 4:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        return function sentinelPing() {
            return _ref4.apply(this, arguments);
        };
    }();

    var addNode = function () {
        var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
            var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                nodeAddress = _ref7.nodeAddress;

            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            (0, _syscoinOw2.default)(nodeAddress, _syscoinOw2.default.string.label("addNode:nodeAddress").not.empty);
                            _context5.next = 3;
                            return callRpc('addnode', [nodeAddress, 'add']);

                        case 3:
                            return _context5.abrupt('return', _context5.sent);

                        case 4:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        return function addNode() {
            return _ref6.apply(this, arguments);
        };
    }();

    var getInfo = function () {
        var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            _context6.next = 2;
                            return callRpc('getinfo');

                        case 2:
                            return _context6.abrupt('return', _context6.sent);

                        case 3:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        return function getInfo() {
            return _ref8.apply(this, arguments);
        };
    }();

    var stop = function () {
        var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
            return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            _context7.next = 2;
                            return callRpc('stop');

                        case 2:
                            return _context7.abrupt('return', _context7.sent);

                        case 3:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _callee7, this);
        }));

        return function stop() {
            return _ref9.apply(this, arguments);
        };
    }();

    var banNodeForLengthOfTime = function () {
        var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8() {
            var _ref11 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                subnetOrIp = _ref11.subnetOrIp,
                _ref11$banTimeInSecon = _ref11.banTimeInSeconds,
                banTimeInSeconds = _ref11$banTimeInSecon === undefined ? 0 : _ref11$banTimeInSecon;

            var AbsoluteTime;
            return _regenerator2.default.wrap(function _callee8$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            (0, _syscoinOw2.default)(subnetOrIp, _syscoinOw2.default.string.label("banNodeUntilDate:subnetOrIp").not.empty);
                            (0, _syscoinOw2.default)(banTimeInSeconds, _syscoinOw2.default.number.label("banNodeForLengthOfTime:banTimeInSeconds").integer.greaterThan(0));
                            AbsoluteTime = false;
                            _context8.next = 5;
                            return callRpc('setban', [subnetOrIp, 'add', banTimeInSeconds, AbsoluteTime]);

                        case 5:
                            return _context8.abrupt('return', _context8.sent);

                        case 6:
                        case 'end':
                            return _context8.stop();
                    }
                }
            }, _callee8, this);
        }));

        return function banNodeForLengthOfTime() {
            return _ref10.apply(this, arguments);
        };
    }();

    var banNodeUntilDate = function () {
        var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9() {
            var _ref13 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                subnetOrIp = _ref13.subnetOrIp,
                banDateTimeEpoch = _ref13.banDateTimeEpoch;

            var AbsoluteTime;
            return _regenerator2.default.wrap(function _callee9$(_context9) {
                while (1) {
                    switch (_context9.prev = _context9.next) {
                        case 0:
                            (0, _syscoinOw2.default)(subnetOrIp, _syscoinOw2.default.string.label("banNodeUntilDate:subnetOrIp").not.empty);
                            (0, _syscoinOw2.default)(banDateTimeEpoch, _syscoinOw2.default.number.label("banNodeUntilDate:banDateTimeEpoch").integer.greaterThan(0));
                            AbsoluteTime = true;
                            _context9.next = 5;
                            return callRpc('n', [subnetOrIp, 'add', banDateTimeEpoch, AbsoluteTime]);

                        case 5:
                            return _context9.abrupt('return', _context9.sent);

                        case 6:
                        case 'end':
                            return _context9.stop();
                    }
                }
            }, _callee9, this);
        }));

        return function banNodeUntilDate() {
            return _ref12.apply(this, arguments);
        };
    }();

    var clearBannedIps = function () {
        var _ref14 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10() {
            return _regenerator2.default.wrap(function _callee10$(_context10) {
                while (1) {
                    switch (_context10.prev = _context10.next) {
                        case 0:
                            _context10.next = 2;
                            return callRpc('clearbanned');

                        case 2:
                            return _context10.abrupt('return', _context10.sent);

                        case 3:
                        case 'end':
                            return _context10.stop();
                    }
                }
            }, _callee10, this);
        }));

        return function clearBannedIps() {
            return _ref14.apply(this, arguments);
        };
    }();

    var deactivateNetwork = function () {
        var _ref15 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11() {
            return _regenerator2.default.wrap(function _callee11$(_context11) {
                while (1) {
                    switch (_context11.prev = _context11.next) {
                        case 0:
                            _context11.next = 2;
                            return callRpc('setnetworkactive', [false]);

                        case 2:
                            return _context11.abrupt('return', _context11.sent);

                        case 3:
                        case 'end':
                            return _context11.stop();
                    }
                }
            }, _callee11, this);
        }));

        return function deactivateNetwork() {
            return _ref15.apply(this, arguments);
        };
    }();

    var disconnectNode = function () {
        var _ref16 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee12() {
            var _ref17 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                nodeAddress = _ref17.nodeAddress;

            return _regenerator2.default.wrap(function _callee12$(_context12) {
                while (1) {
                    switch (_context12.prev = _context12.next) {
                        case 0:
                            (0, _syscoinOw2.default)(nodeAddress, _syscoinOw2.default.string.label("disconnectNode:nodeAddress").not.empty);
                            _context12.next = 3;
                            return callRpc('disconnectnode', [nodeAddress]);

                        case 3:
                            return _context12.abrupt('return', _context12.sent);

                        case 4:
                        case 'end':
                            return _context12.stop();
                    }
                }
            }, _callee12, this);
        }));

        return function disconnectNode() {
            return _ref16.apply(this, arguments);
        };
    }();

    var getAddedNodeInfo = function () {
        var _ref18 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee13() {
            var _ref19 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                nodeAddress = _ref19.nodeAddress;

            return _regenerator2.default.wrap(function _callee13$(_context13) {
                while (1) {
                    switch (_context13.prev = _context13.next) {
                        case 0:
                            if (nodeAddress) {
                                (0, _syscoinOw2.default)(nodeAddress, _syscoinOw2.default.string.label("getAddedNodeInfo:nodeAddress").not.empty);
                            }

                            if (!nodeAddress) {
                                _context13.next = 7;
                                break;
                            }

                            _context13.next = 4;
                            return callRpc('getaddednodeinfo', [nodeAddress]);

                        case 4:
                            _context13.t0 = _context13.sent;
                            _context13.next = 10;
                            break;

                        case 7:
                            _context13.next = 9;
                            return callRpc('getaddednodeinfo');

                        case 9:
                            _context13.t0 = _context13.sent;

                        case 10:
                            return _context13.abrupt('return', _context13.t0);

                        case 11:
                        case 'end':
                            return _context13.stop();
                    }
                }
            }, _callee13, this);
        }));

        return function getAddedNodeInfo() {
            return _ref18.apply(this, arguments);
        };
    }();

    var aliasClearWhiteList = function () {
        var _ref20 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee14() {
            var _ref21 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                ownerAddress = _ref21.ownerAddress,
                witness = _ref21.witness;

            return _regenerator2.default.wrap(function _callee14$(_context14) {
                while (1) {
                    switch (_context14.prev = _context14.next) {
                        case 0:
                            (0, _syscoinOw2.default)(ownerAddress, _syscoinOw2.default.string.label("aliasClearWhiteList:ownerAddress").not.empty);
                            (0, _syscoinOw2.default)(witness, _syscoinOw2.default.string.label("aliasClearWhiteList:witness").not.empty);
                            _context14.next = 4;
                            return callRpc('aliasclearwhitelist', [ownerAddress, witness]);

                        case 4:
                            return _context14.abrupt('return', _context14.sent);

                        case 5:
                        case 'end':
                            return _context14.stop();
                    }
                }
            }, _callee14, this);
        }));

        return function aliasClearWhiteList() {
            return _ref20.apply(this, arguments);
        };
    }();

    var getConnectionCount = function () {
        var _ref22 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee15() {
            return _regenerator2.default.wrap(function _callee15$(_context15) {
                while (1) {
                    switch (_context15.prev = _context15.next) {
                        case 0:
                            _context15.next = 2;
                            return callRpc('getconnectioncount');

                        case 2:
                            return _context15.abrupt('return', _context15.sent);

                        case 3:
                        case 'end':
                            return _context15.stop();
                    }
                }
            }, _callee15, this);
        }));

        return function getConnectionCount() {
            return _ref22.apply(this, arguments);
        };
    }();

    var getNetTotals = function () {
        var _ref23 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee16() {
            return _regenerator2.default.wrap(function _callee16$(_context16) {
                while (1) {
                    switch (_context16.prev = _context16.next) {
                        case 0:
                            _context16.next = 2;
                            return callRpc('getnettotals');

                        case 2:
                            return _context16.abrupt('return', _context16.sent);

                        case 3:
                        case 'end':
                            return _context16.stop();
                    }
                }
            }, _callee16, this);
        }));

        return function getNetTotals() {
            return _ref23.apply(this, arguments);
        };
    }();

    var getNetworkInfo = function () {
        var _ref24 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee17() {
            return _regenerator2.default.wrap(function _callee17$(_context17) {
                while (1) {
                    switch (_context17.prev = _context17.next) {
                        case 0:
                            _context17.next = 2;
                            return callRpc('getnetworkinfo');

                        case 2:
                            return _context17.abrupt('return', _context17.sent);

                        case 3:
                        case 'end':
                            return _context17.stop();
                    }
                }
            }, _callee17, this);
        }));

        return function getNetworkInfo() {
            return _ref24.apply(this, arguments);
        };
    }();

    var getPeerInfo = function () {
        var _ref25 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee18() {
            return _regenerator2.default.wrap(function _callee18$(_context18) {
                while (1) {
                    switch (_context18.prev = _context18.next) {
                        case 0:
                            _context18.next = 2;
                            return callRpc('getpeerinfo');

                        case 2:
                            return _context18.abrupt('return', _context18.sent);

                        case 3:
                        case 'end':
                            return _context18.stop();
                    }
                }
            }, _callee18, this);
        }));

        return function getPeerInfo() {
            return _ref25.apply(this, arguments);
        };
    }();

    var getMemoryInfo = function () {
        var _ref26 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee19() {
            return _regenerator2.default.wrap(function _callee19$(_context19) {
                while (1) {
                    switch (_context19.prev = _context19.next) {
                        case 0:
                            _context19.next = 2;
                            return callRpc('getmemoryinfo');

                        case 2:
                            return _context19.abrupt('return', _context19.sent);

                        case 3:
                        case 'end':
                            return _context19.stop();
                    }
                }
            }, _callee19, this);
        }));

        return function getMemoryInfo() {
            return _ref26.apply(this, arguments);
        };
    }();

    var listBannedIps = function () {
        var _ref27 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee20() {
            return _regenerator2.default.wrap(function _callee20$(_context20) {
                while (1) {
                    switch (_context20.prev = _context20.next) {
                        case 0:
                            _context20.next = 2;
                            return callRpc('listbanned');

                        case 2:
                            return _context20.abrupt('return', _context20.sent);

                        case 3:
                        case 'end':
                            return _context20.stop();
                    }
                }
            }, _callee20, this);
        }));

        return function listBannedIps() {
            return _ref27.apply(this, arguments);
        };
    }();

    var ping = function () {
        var _ref28 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee21() {
            return _regenerator2.default.wrap(function _callee21$(_context21) {
                while (1) {
                    switch (_context21.prev = _context21.next) {
                        case 0:
                            _context21.next = 2;
                            return callRpc('ping');

                        case 2:
                            return _context21.abrupt('return', _context21.sent);

                        case 3:
                        case 'end':
                            return _context21.stop();
                    }
                }
            }, _callee21, this);
        }));

        return function ping() {
            return _ref28.apply(this, arguments);
        };
    }();

    var removeNode = function () {
        var _ref29 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee22() {
            var _ref30 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                nodeAddress = _ref30.nodeAddress;

            return _regenerator2.default.wrap(function _callee22$(_context22) {
                while (1) {
                    switch (_context22.prev = _context22.next) {
                        case 0:
                            (0, _syscoinOw2.default)(nodeAddress, _syscoinOw2.default.string.label("removeNode:nodeAddress").not.empty);
                            _context22.next = 3;
                            return callRpc('addnode', [nodeAddress, 'remove']);

                        case 3:
                            return _context22.abrupt('return', _context22.sent);

                        case 4:
                        case 'end':
                            return _context22.stop();
                    }
                }
            }, _callee22, this);
        }));

        return function removeNode() {
            return _ref29.apply(this, arguments);
        };
    }();

    var tryToConnectToNode = function () {
        var _ref31 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee23() {
            var _ref32 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                nodeAddress = _ref32.nodeAddress;

            return _regenerator2.default.wrap(function _callee23$(_context23) {
                while (1) {
                    switch (_context23.prev = _context23.next) {
                        case 0:
                            (0, _syscoinOw2.default)(nodeAddress, _syscoinOw2.default.string.label("tryToConnectToNode:nodeAddress").not.empty);
                            _context23.next = 3;
                            return callRpc('addnode', [nodeAddress, 'onetry']);

                        case 3:
                            return _context23.abrupt('return', _context23.sent);

                        case 4:
                        case 'end':
                            return _context23.stop();
                    }
                }
            }, _callee23, this);
        }));

        return function tryToConnectToNode() {
            return _ref31.apply(this, arguments);
        };
    }();

    var unbanNode = function () {
        var _ref33 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee24() {
            var _ref34 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                subnetOrIp = _ref34.subnetOrIp;

            return _regenerator2.default.wrap(function _callee24$(_context24) {
                while (1) {
                    switch (_context24.prev = _context24.next) {
                        case 0:
                            (0, _syscoinOw2.default)(subnetOrIp, _syscoinOw2.default.string.label("unbanNode:subnetOrIp").not.empty);
                            _context24.next = 3;
                            return callRpc('setban', [subnetOrIp, 'remove']);

                        case 3:
                            return _context24.abrupt('return', _context24.sent);

                        case 4:
                        case 'end':
                            return _context24.stop();
                    }
                }
            }, _callee24, this);
        }));

        return function unbanNode() {
            return _ref33.apply(this, arguments);
        };
    }();

    var getChainTxStats = function () {
        var _ref35 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee25() {
            var _ref36 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                nBlocks = _ref36.nBlocks,
                blockHash = _ref36.blockHash;

            return _regenerator2.default.wrap(function _callee25$(_context25) {
                while (1) {
                    switch (_context25.prev = _context25.next) {
                        case 0:
                            if (!nBlocks) {
                                _context25.next = 5;
                                break;
                            }

                            (0, _syscoinOw2.default)(nBlocks, _syscoinOw2.default.number.label("getChainTxStats:nBlocks").integer.greaterThan(0));
                            _context25.next = 4;
                            return callRpc('getchaintxstats', [nBlocks]);

                        case 4:
                            return _context25.abrupt('return', _context25.sent);

                        case 5:
                            if (!blockHash) {
                                _context25.next = 10;
                                break;
                            }

                            (0, _syscoinOw2.default)(blockHash, _syscoinOw2.default.string.label("getChainTxStats:blockHash").not.empty);
                            _context25.next = 9;
                            return callRpc('getchaintxstats', [nBlocks, blockHash]);

                        case 9:
                            return _context25.abrupt('return', _context25.sent);

                        case 10:
                        case 'end':
                            return _context25.stop();
                    }
                }
            }, _callee25, this);
        }));

        return function getChainTxStats() {
            return _ref35.apply(this, arguments);
        };
    }();

    return {
        activateNetwork: (0, _endpointDecorators.post)(activateNetwork),
        aliasClearWhiteList: (0, _endpointDecorators.post)(aliasClearWhiteList),
        addNode: (0, _endpointDecorators.post)(addNode),
        banNodeForLengthOfTime: (0, _endpointDecorators.post)(banNodeForLengthOfTime),
        banNodeUntilDate: (0, _endpointDecorators.post)(banNodeUntilDate),
        clearBannedIps: (0, _endpointDecorators.post)(clearBannedIps),
        deactivateNetwork: (0, _endpointDecorators.post)(deactivateNetwork),
        disconnectNode: (0, _endpointDecorators.post)(disconnectNode),
        getAddedNodeInfo: (0, _endpointDecorators.get)(getAddedNodeInfo),
        getConnectionCount: (0, _endpointDecorators.get)(getConnectionCount),
        getChainTxStats: (0, _endpointDecorators.get)(getChainTxStats),
        getInfo: (0, _endpointDecorators.get)(getInfo),
        getMemoryInfo: (0, _endpointDecorators.get)(getMemoryInfo),
        getNetTotals: (0, _endpointDecorators.get)(getNetTotals),
        getNetworkInfo: (0, _endpointDecorators.get)(getNetworkInfo),
        getPeerInfo: (0, _endpointDecorators.get)(getPeerInfo),
        listBannedIps: (0, _endpointDecorators.get)(listBannedIps),
        ping: (0, _endpointDecorators.post)(ping),
        removeNode: (0, _endpointDecorators.post)(removeNode),
        sentinelPing: (0, _endpointDecorators.post)(sentinelPing),
        sporks: {
            showCurrentValues: (0, _endpointDecorators.get)(showCurrentSporkValues),
            showActivationStatus: (0, _endpointDecorators.get)(showSporkActivationStatus)
        },
        stop: (0, _endpointDecorators.post)(stop),
        tryToConnectToNode: (0, _endpointDecorators.post)(tryToConnectToNode),
        unbanNode: (0, _endpointDecorators.post)(unbanNode)
    };
}