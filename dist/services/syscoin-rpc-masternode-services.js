'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.syscoinRpcMasternodeServices = syscoinRpcMasternodeServices;

var _endpointDecorators = require('../endpoint-decorators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function syscoinRpcMasternodeServices(callRpc) {
    var _this = this;

    var callMasterNodeCommand = function () {
        var _ref56 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee34(command, params) {
            var args;
            return _regenerator2.default.wrap(function _callee34$(_context34) {
                while (1) {
                    switch (_context34.prev = _context34.next) {
                        case 0:
                            args = params ? [command].concat((0, _toConsumableArray3.default)(params)) : [command];
                            _context34.next = 3;
                            return callRpc('masternode', args);

                        case 3:
                            return _context34.abrupt('return', _context34.sent);

                        case 4:
                        case 'end':
                            return _context34.stop();
                    }
                }
            }, _callee34, this);
        }));

        return function callMasterNodeCommand(_x23, _x24) {
            return _ref56.apply(this, arguments);
        };
    }();

    var callMasterNodeBroadcastCommand = function () {
        var _ref57 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee35(command, params) {
            var args;
            return _regenerator2.default.wrap(function _callee35$(_context35) {
                while (1) {
                    switch (_context35.prev = _context35.next) {
                        case 0:
                            args = params ? [command].concat((0, _toConsumableArray3.default)(params)) : [command];
                            _context35.next = 3;
                            return callRpc('masternodebroadcast', args);

                        case 3:
                            return _context35.abrupt('return', _context35.sent);

                        case 4:
                        case 'end':
                            return _context35.stop();
                    }
                }
            }, _callee35, this);
        }));

        return function callMasterNodeBroadcastCommand(_x25, _x26) {
            return _ref57.apply(this, arguments);
        };
    }();

    var listMasterNodeCall = function () {
        var _ref58 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee36() {
            var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "json";
            var filter = arguments[1];
            return _regenerator2.default.wrap(function _callee36$(_context36) {
                while (1) {
                    switch (_context36.prev = _context36.next) {
                        case 0:
                            if (!filter) {
                                _context36.next = 6;
                                break;
                            }

                            _context36.next = 3;
                            return callRpc('masternodelist', [mode, filter]);

                        case 3:
                            _context36.t0 = _context36.sent;
                            _context36.next = 9;
                            break;

                        case 6:
                            _context36.next = 8;
                            return callRpc('masternodelist', [mode]);

                        case 8:
                            _context36.t0 = _context36.sent;

                        case 9:
                            return _context36.abrupt('return', _context36.t0);

                        case 10:
                        case 'end':
                            return _context36.stop();
                    }
                }
            }, _callee36, this);
        }));

        return function listMasterNodeCall() {
            return _ref58.apply(this, arguments);
        };
    }();

    return {
        broadcastByAssignedName: (0, _endpointDecorators.post)((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                name = _ref2.name;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return callMasterNodeBroadcastCommand('create-name', [name]);

                        case 2:
                            return _context.abrupt('return', _context.sent);

                        case 3:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this);
        }))),
        broadcastForAllMasternodes: (0, _endpointDecorators.post)((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return callMasterNodeBroadcastCommand('create-all');

                        case 2:
                            return _context2.abrupt('return', _context2.sent);

                        case 3:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this);
        }))),
        count: (0, _endpointDecorators.get)((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
            var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                format = _ref5.format;

            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return callMasterNodeCommand('count', format ? [format] : []);

                        case 2:
                            return _context3.abrupt('return', _context3.sent);

                        case 3:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, _this);
        }))),
        decodeMessage: (0, _endpointDecorators.post)((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
            var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                message = _ref7.message;

            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return callMasterNodeBroadcastCommand('decode', [message]);

                        case 2:
                            return _context4.abrupt('return', _context4.sent);

                        case 3:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, _this);
        }))),
        generatePrivateKey: (0, _endpointDecorators.post)((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _context5.next = 2;
                            return callMasterNodeCommand('genkey');

                        case 2:
                            return _context5.abrupt('return', _context5.sent);

                        case 3:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, _this);
        }))),
        getConfiguration: (0, _endpointDecorators.get)((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            _context6.next = 2;
                            return callMasterNodeCommand('list-conf');

                        case 2:
                            return _context6.abrupt('return', _context6.sent);

                        case 3:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, _this);
        }))),
        getCurrentMasternodeWinner: (0, _endpointDecorators.get)((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
            return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            _context7.next = 2;
                            return callMasterNodeCommand('current');

                        case 2:
                            return _context7.abrupt('return', _context7.sent);

                        case 3:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _callee7, _this);
        }))),
        initialize: (0, _endpointDecorators.post)((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8() {
            var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                name = _ref12.name;

            return _regenerator2.default.wrap(function _callee8$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            _context8.next = 2;
                            return callMasterNodeCommand('initialize', [name]);

                        case 2:
                            return _context8.abrupt('return', _context8.sent);

                        case 3:
                        case 'end':
                            return _context8.stop();
                    }
                }
            }, _callee8, _this);
        }))),
        list: {
            activeSeconds: (0, _endpointDecorators.get)((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9() {
                var _ref14 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                    filter = _ref14.filter;

                return _regenerator2.default.wrap(function _callee9$(_context9) {
                    while (1) {
                        switch (_context9.prev = _context9.next) {
                            case 0:
                                _context9.next = 2;
                                return listMasterNodeCall('activeseconds', filter);

                            case 2:
                                return _context9.abrupt('return', _context9.sent);

                            case 3:
                            case 'end':
                                return _context9.stop();
                        }
                    }
                }, _callee9, _this);
            }))),
            address: (0, _endpointDecorators.get)((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10() {
                var _ref16 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                    filter = _ref16.filter;

                return _regenerator2.default.wrap(function _callee10$(_context10) {
                    while (1) {
                        switch (_context10.prev = _context10.next) {
                            case 0:
                                _context10.next = 2;
                                return listMasterNodeCall('addr', filter);

                            case 2:
                                return _context10.abrupt('return', _context10.sent);

                            case 3:
                            case 'end':
                                return _context10.stop();
                        }
                    }
                }, _callee10, _this);
            }))),
            daemon: (0, _endpointDecorators.get)((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11() {
                var _ref18 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                    filter = _ref18.filter;

                return _regenerator2.default.wrap(function _callee11$(_context11) {
                    while (1) {
                        switch (_context11.prev = _context11.next) {
                            case 0:
                                _context11.next = 2;
                                return listMasterNodeCall('daemon', filter);

                            case 2:
                                return _context11.abrupt('return', _context11.sent);

                            case 3:
                            case 'end':
                                return _context11.stop();
                        }
                    }
                }, _callee11, _this);
            }))),
            info: (0, _endpointDecorators.get)((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee12() {
                var _ref20 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                    filter = _ref20.filter;

                return _regenerator2.default.wrap(function _callee12$(_context12) {
                    while (1) {
                        switch (_context12.prev = _context12.next) {
                            case 0:
                                _context12.next = 2;
                                return listMasterNodeCall('info', filter);

                            case 2:
                                return _context12.abrupt('return', _context12.sent);

                            case 3:
                            case 'end':
                                return _context12.stop();
                        }
                    }
                }, _callee12, _this);
            }))),
            json: (0, _endpointDecorators.get)((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee13() {
                var _ref22 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                    filter = _ref22.filter;

                return _regenerator2.default.wrap(function _callee13$(_context13) {
                    while (1) {
                        switch (_context13.prev = _context13.next) {
                            case 0:
                                _context13.next = 2;
                                return listMasterNodeCall('json', filter);

                            case 2:
                                return _context13.abrupt('return', _context13.sent);

                            case 3:
                            case 'end':
                                return _context13.stop();
                        }
                    }
                }, _callee13, _this);
            }))),
            lastPaidBlock: (0, _endpointDecorators.get)((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee14() {
                var _ref24 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                    filter = _ref24.filter;

                return _regenerator2.default.wrap(function _callee14$(_context14) {
                    while (1) {
                        switch (_context14.prev = _context14.next) {
                            case 0:
                                _context14.next = 2;
                                return listMasterNodeCall('lastpaidblock', filter);

                            case 2:
                                return _context14.abrupt('return', _context14.sent);

                            case 3:
                            case 'end':
                                return _context14.stop();
                        }
                    }
                }, _callee14, _this);
            }))),
            lastPaidTime: (0, _endpointDecorators.get)((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee15() {
                var _ref26 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                    filter = _ref26.filter;

                return _regenerator2.default.wrap(function _callee15$(_context15) {
                    while (1) {
                        switch (_context15.prev = _context15.next) {
                            case 0:
                                _context15.next = 2;
                                return listMasterNodeCall('lastpaidtime', filter);

                            case 2:
                                return _context15.abrupt('return', _context15.sent);

                            case 3:
                            case 'end':
                                return _context15.stop();
                        }
                    }
                }, _callee15, _this);
            }))),
            lastSeen: (0, _endpointDecorators.get)((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee16() {
                var _ref28 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                    filter = _ref28.filter;

                return _regenerator2.default.wrap(function _callee16$(_context16) {
                    while (1) {
                        switch (_context16.prev = _context16.next) {
                            case 0:
                                _context16.next = 2;
                                return listMasterNodeCall('lastseen', filter);

                            case 2:
                                return _context16.abrupt('return', _context16.sent);

                            case 3:
                            case 'end':
                                return _context16.stop();
                        }
                    }
                }, _callee16, _this);
            }))),
            payee: (0, _endpointDecorators.get)((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee17() {
                var _ref30 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                    filter = _ref30.filter;

                return _regenerator2.default.wrap(function _callee17$(_context17) {
                    while (1) {
                        switch (_context17.prev = _context17.next) {
                            case 0:
                                _context17.next = 2;
                                return listMasterNodeCall('payee', filter);

                            case 2:
                                return _context17.abrupt('return', _context17.sent);

                            case 3:
                            case 'end':
                                return _context17.stop();
                        }
                    }
                }, _callee17, _this);
            }))),
            protocol: (0, _endpointDecorators.get)((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee18() {
                var _ref32 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                    filter = _ref32.filter;

                return _regenerator2.default.wrap(function _callee18$(_context18) {
                    while (1) {
                        switch (_context18.prev = _context18.next) {
                            case 0:
                                _context18.next = 2;
                                return listMasterNodeCall('protocol', filter);

                            case 2:
                                return _context18.abrupt('return', _context18.sent);

                            case 3:
                            case 'end':
                                return _context18.stop();
                        }
                    }
                }, _callee18, _this);
            }))),
            pubkey: (0, _endpointDecorators.get)((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee19() {
                var _ref34 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                    filter = _ref34.filter;

                return _regenerator2.default.wrap(function _callee19$(_context19) {
                    while (1) {
                        switch (_context19.prev = _context19.next) {
                            case 0:
                                _context19.next = 2;
                                return listMasterNodeCall('pubkey', filter);

                            case 2:
                                return _context19.abrupt('return', _context19.sent);

                            case 3:
                            case 'end':
                                return _context19.stop();
                        }
                    }
                }, _callee19, _this);
            }))),
            rank: (0, _endpointDecorators.get)((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee20() {
                var _ref36 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                    filter = _ref36.filter;

                return _regenerator2.default.wrap(function _callee20$(_context20) {
                    while (1) {
                        switch (_context20.prev = _context20.next) {
                            case 0:
                                _context20.next = 2;
                                return listMasterNodeCall('rank', filter);

                            case 2:
                                return _context20.abrupt('return', _context20.sent);

                            case 3:
                            case 'end':
                                return _context20.stop();
                        }
                    }
                }, _callee20, _this);
            }))),
            sentinel: (0, _endpointDecorators.get)((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee21() {
                var _ref38 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                    filter = _ref38.filter;

                return _regenerator2.default.wrap(function _callee21$(_context21) {
                    while (1) {
                        switch (_context21.prev = _context21.next) {
                            case 0:
                                _context21.next = 2;
                                return listMasterNodeCall('sentinel', filter);

                            case 2:
                                return _context21.abrupt('return', _context21.sent);

                            case 3:
                            case 'end':
                                return _context21.stop();
                        }
                    }
                }, _callee21, _this);
            }))),
            status: (0, _endpointDecorators.get)((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee22() {
                var _ref40 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                    filter = _ref40.filter;

                return _regenerator2.default.wrap(function _callee22$(_context22) {
                    while (1) {
                        switch (_context22.prev = _context22.next) {
                            case 0:
                                _context22.next = 2;
                                return listMasterNodeCall('status', filter);

                            case 2:
                                return _context22.abrupt('return', _context22.sent);

                            case 3:
                            case 'end':
                                return _context22.stop();
                        }
                    }
                }, _callee22, _this);
            }))),
            full: (0, _endpointDecorators.get)((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee23() {
                var _ref42 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                    filter = _ref42.filter;

                return _regenerator2.default.wrap(function _callee23$(_context23) {
                    while (1) {
                        switch (_context23.prev = _context23.next) {
                            case 0:
                                _context23.next = 2;
                                return listMasterNodeCall('full', filter);

                            case 2:
                                return _context23.abrupt('return', _context23.sent);

                            case 3:
                            case 'end':
                                return _context23.stop();
                        }
                    }
                }, _callee23, _this);
            })))
        },
        outputs: (0, _endpointDecorators.get)((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee24() {
            return _regenerator2.default.wrap(function _callee24$(_context24) {
                while (1) {
                    switch (_context24.prev = _context24.next) {
                        case 0:
                            _context24.next = 2;
                            return callMasterNodeCommand('outputs');

                        case 2:
                            return _context24.abrupt('return', _context24.sent);

                        case 3:
                        case 'end':
                            return _context24.stop();
                    }
                }
            }, _callee24, _this);
        }))),
        relayMessage: (0, _endpointDecorators.post)((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee25() {
            var _ref45 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                msg = _ref45.msg;

            return _regenerator2.default.wrap(function _callee25$(_context25) {
                while (1) {
                    switch (_context25.prev = _context25.next) {
                        case 0:
                            _context25.next = 2;
                            return callMasterNodeBroadcastCommand('relay', [msg]);

                        case 2:
                            return _context25.abrupt('return', _context25.sent);

                        case 3:
                        case 'end':
                            return _context25.stop();
                    }
                }
            }, _callee25, _this);
        }))),
        startAll: (0, _endpointDecorators.post)((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee26() {
            return _regenerator2.default.wrap(function _callee26$(_context26) {
                while (1) {
                    switch (_context26.prev = _context26.next) {
                        case 0:
                            _context26.next = 2;
                            return callMasterNodeCommand('start-all');

                        case 2:
                            return _context26.abrupt('return', _context26.sent);

                        case 3:
                        case 'end':
                            return _context26.stop();
                    }
                }
            }, _callee26, _this);
        }))),
        startMissing: (0, _endpointDecorators.post)((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee27() {
            return _regenerator2.default.wrap(function _callee27$(_context27) {
                while (1) {
                    switch (_context27.prev = _context27.next) {
                        case 0:
                            _context27.next = 2;
                            return callMasterNodeCommand('start-missing');

                        case 2:
                            return _context27.abrupt('return', _context27.sent);

                        case 3:
                        case 'end':
                            return _context27.stop();
                    }
                }
            }, _callee27, _this);
        }))),
        startDisabled: (0, _endpointDecorators.post)((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee28() {
            return _regenerator2.default.wrap(function _callee28$(_context28) {
                while (1) {
                    switch (_context28.prev = _context28.next) {
                        case 0:
                            _context28.next = 2;
                            return callMasterNodeCommand('start-disabled');

                        case 2:
                            return _context28.abrupt('return', _context28.sent);

                        case 3:
                        case 'end':
                            return _context28.stop();
                    }
                }
            }, _callee28, _this);
        }))),
        status: (0, _endpointDecorators.get)((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee29() {
            return _regenerator2.default.wrap(function _callee29$(_context29) {
                while (1) {
                    switch (_context29.prev = _context29.next) {
                        case 0:
                            _context29.next = 2;
                            return callMasterNodeCommand('status');

                        case 2:
                            return _context29.abrupt('return', _context29.sent);

                        case 3:
                        case 'end':
                            return _context29.stop();
                    }
                }
            }, _callee29, _this);
        }))),
        winner: (0, _endpointDecorators.get)((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee30() {
            return _regenerator2.default.wrap(function _callee30$(_context30) {
                while (1) {
                    switch (_context30.prev = _context30.next) {
                        case 0:
                            _context30.next = 2;
                            return callMasterNodeCommand('winner');

                        case 2:
                            return _context30.abrupt('return', _context30.sent);

                        case 3:
                        case 'end':
                            return _context30.stop();
                    }
                }
            }, _callee30, _this);
        }))),
        winners: (0, _endpointDecorators.get)((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee31() {
            return _regenerator2.default.wrap(function _callee31$(_context31) {
                while (1) {
                    switch (_context31.prev = _context31.next) {
                        case 0:
                            _context31.next = 2;
                            return callMasterNodeCommand('winners');

                        case 2:
                            return _context31.abrupt('return', _context31.sent);

                        case 3:
                        case 'end':
                            return _context31.stop();
                    }
                }
            }, _callee31, _this);
        }))),
        masternodeList: (0, _endpointDecorators.get)((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee32() {
            var _ref53 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                mode = _ref53.mode,
                filter = _ref53.filter;

            return _regenerator2.default.wrap(function _callee32$(_context32) {
                while (1) {
                    switch (_context32.prev = _context32.next) {
                        case 0:
                            _context32.next = 2;
                            return listMasterNodeCall(mode, filter);

                        case 2:
                            return _context32.abrupt('return', _context32.sent);

                        case 3:
                        case 'end':
                            return _context32.stop();
                    }
                }
            }, _callee32, _this);
        }))),
        masternodeBroadcast: (0, _endpointDecorators.post)((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee33() {
            var _ref55 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                command = _ref55.command,
                arg = _ref55.arg;

            return _regenerator2.default.wrap(function _callee33$(_context33) {
                while (1) {
                    switch (_context33.prev = _context33.next) {
                        case 0:
                            _context33.next = 2;
                            return callMasterNodeBroadcastCommand(command, arg);

                        case 2:
                            return _context33.abrupt('return', _context33.sent);

                        case 3:
                        case 'end':
                            return _context33.stop();
                    }
                }
            }, _callee33, _this);
        })))
    };
}