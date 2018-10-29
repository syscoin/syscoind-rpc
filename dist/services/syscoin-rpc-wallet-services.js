'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.syscoinRpcWalletServices = syscoinRpcWalletServices;
exports.getPercentageFromWalletInfo = getPercentageFromWalletInfo;

var _util = require('util');

var util = _interopRequireWildcard(_util);

var _constants = require('./constants');

var _syscoinOw = require('syscoin-ow');

var _syscoinOw2 = _interopRequireDefault(_syscoinOw);

var _syscoinRpcWalletAliasServices = require('./wallet/syscoin-rpc-wallet-alias-services');

var _syscoinRpcWalletAssetAllocationServices = require('./wallet/syscoin-rpc-wallet-asset-allocation-services');

var _syscoinRpcWalletAssetServices = require('./wallet/syscoin-rpc-wallet-asset-services');

var _syscoinRpcWalletCertificateServices = require('./wallet/syscoin-rpc-wallet-certificate-services');

var _syscoinRpcWalletEscrowServices = require('./wallet/syscoin-rpc-wallet-escrow-services');

var _syscoinRpcWalletOfferServices = require('./wallet/syscoin-rpc-wallet-offer-services');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// has no default export
function syscoinRpcWalletServices(callRpc, utilityServices) {
    var abandonTransaction = function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(txId) {
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            (0, _syscoinOw2.default)(txId, _syscoinOw2.default.string.label("abandonTransaction:txId").not.empty);
                            _context.next = 3;
                            return callRpc('abandontransaction', [txId]);

                        case 3:
                            return _context.abrupt('return', _context.sent);

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function abandonTransaction(_x) {
            return _ref.apply(this, arguments);
        };
    }();

    var addMultiSigAddress = function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(nRequired, keys, account) {
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            (0, _syscoinOw2.default)(nRequired, _syscoinOw2.default.number.label("addMultiSigAddress:nRequired").integer.greaterThan(0));
                            (0, _syscoinOw2.default)(keys, _syscoinOw2.default.array.label("addMultiSigAddress:keys").not.empty);
                            if (account) {
                                (0, _syscoinOw2.default)(account, _syscoinOw2.default.string.label("addMultiSigAddress: account").not.empty);
                            }

                            if (!account) {
                                _context2.next = 9;
                                break;
                            }

                            _context2.next = 6;
                            return callRpc('addmultiSigAddress', [nRequired, keys, account]);

                        case 6:
                            _context2.t0 = _context2.sent;
                            _context2.next = 12;
                            break;

                        case 9:
                            _context2.next = 11;
                            return callRpc('addmultisigaddress', [nRequired, keys]);

                        case 11:
                            _context2.t0 = _context2.sent;

                        case 12:
                            return _context2.abrupt('return', _context2.t0);

                        case 13:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        return function addMultiSigAddress(_x2, _x3, _x4) {
            return _ref2.apply(this, arguments);
        };
    }();

    var backupWallet = function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(destination) {
            var _args3 = arguments;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            (0, _syscoinOw2.default)(destination, _syscoinOw2.default.string.label("backupWallet:destination").not.empty);
                            _context3.next = 3;
                            return callRpc('backupwallet', _args3);

                        case 3:
                            return _context3.abrupt('return', _context3.sent);

                        case 4:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        return function backupWallet(_x5) {
            return _ref3.apply(this, arguments);
        };
    }();

    var dumpHdInfo = function () {
        var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return callRpc('dumphdinfo');

                        case 2:
                            return _context4.abrupt('return', _context4.sent);

                        case 3:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        return function dumpHdInfo() {
            return _ref4.apply(this, arguments);
        };
    }();

    var dumpPrivKey = function () {
        var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(address) {
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            (0, _syscoinOw2.default)(address, _syscoinOw2.default.string.label("dumpPrivKey:address").not.empty);
                            _context5.next = 3;
                            return callRpc('dumpprivkey', [address]);

                        case 3:
                            return _context5.abrupt('return', _context5.sent);

                        case 4:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        return function dumpPrivKey(_x6) {
            return _ref5.apply(this, arguments);
        };
    }();

    var dumpWallet = function () {
        var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(fileName) {
            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            (0, _syscoinOw2.default)(fileName, _syscoinOw2.default.string.label("dumpWallet:fileName").not.empty);
                            _context6.next = 3;
                            return callRpc('dumpwallet', [fileName]);

                        case 3:
                            return _context6.abrupt('return', _context6.sent);

                        case 4:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        return function dumpWallet(_x7) {
            return _ref6.apply(this, arguments);
        };
    }();

    var getAccount = function () {
        var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(address) {
            return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            (0, _syscoinOw2.default)(address, _syscoinOw2.default.string.label("getAccount:address").not.empty);
                            _context7.next = 3;
                            return callRpc('getaccount', [address]);

                        case 3:
                            return _context7.abrupt('return', _context7.sent);

                        case 4:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _callee7, this);
        }));

        return function getAccount(_x8) {
            return _ref7.apply(this, arguments);
        };
    }();

    var getAccountAddress = function () {
        var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(account) {
            var _args8 = arguments;
            return _regenerator2.default.wrap(function _callee8$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            (0, _syscoinOw2.default)(account, _syscoinOw2.default.string.label("getAccountAddress:account").not.empty);
                            _context8.next = 3;
                            return callRpc('getaccountaddress', _args8);

                        case 3:
                            return _context8.abrupt('return', _context8.sent);

                        case 4:
                        case 'end':
                            return _context8.stop();
                    }
                }
            }, _callee8, this);
        }));

        return function getAccountAddress(_x9) {
            return _ref8.apply(this, arguments);
        };
    }();

    var getAddressesByAccount = function () {
        var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(account) {
            var _args9 = arguments;
            return _regenerator2.default.wrap(function _callee9$(_context9) {
                while (1) {
                    switch (_context9.prev = _context9.next) {
                        case 0:
                            (0, _syscoinOw2.default)(account, _syscoinOw2.default.string.label("getAddressesByAccount:account").not.empty);
                            _context9.next = 3;
                            return callRpc('getaddressesbyaccount', _args9);

                        case 3:
                            return _context9.abrupt('return', _context9.sent);

                        case 4:
                        case 'end':
                            return _context9.stop();
                    }
                }
            }, _callee9, this);
        }));

        return function getAddressesByAccount(_x10) {
            return _ref9.apply(this, arguments);
        };
    }();

    var getBalance = function () {
        var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10(account, minConf, addLocked, includeWatchOnly) {
            var _args10 = arguments;
            return _regenerator2.default.wrap(function _callee10$(_context10) {
                while (1) {
                    switch (_context10.prev = _context10.next) {
                        case 0:
                            (0, _syscoinOw2.default)(account, _syscoinOw2.default.string.label("getBalance:account").not.empty);
                            if (minConf) {
                                (0, _syscoinOw2.default)(minConf, _syscoinOw2.default.number.label("getBalance:minConf").integer.greaterThanOrEqual(1));
                            }
                            if (addLocked) {
                                (0, _syscoinOw2.default)(addLocked, _syscoinOw2.default.boolean.label("getBalance:addLocked").is(function (x) {
                                    return x == true || x == false;
                                }));
                            }
                            if (includeWatchOnly) {
                                (0, _syscoinOw2.default)(includeWatchOnly, _syscoinOw2.default.boolean.label("getBalance:includeWatchOnly").is(function (x) {
                                    return x == true || x == false;
                                }));
                            }
                            _context10.next = 6;
                            return callRpc('getbalance', _args10);

                        case 6:
                            return _context10.abrupt('return', _context10.sent);

                        case 7:
                        case 'end':
                            return _context10.stop();
                    }
                }
            }, _callee10, this);
        }));

        return function getBalance(_x11, _x12, _x13, _x14) {
            return _ref10.apply(this, arguments);
        };
    }();

    var getNewAddress = function () {
        var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11(account) {
            var _args11 = arguments;
            return _regenerator2.default.wrap(function _callee11$(_context11) {
                while (1) {
                    switch (_context11.prev = _context11.next) {
                        case 0:
                            if (account) {
                                (0, _syscoinOw2.default)(account, _syscoinOw2.default.string.label("getNewAddress:account").not.empty);
                            }
                            _context11.next = 3;
                            return callRpc('getnewaddress', _args11);

                        case 3:
                            return _context11.abrupt('return', _context11.sent);

                        case 4:
                        case 'end':
                            return _context11.stop();
                    }
                }
            }, _callee11, this);
        }));

        return function getNewAddress(_x15) {
            return _ref11.apply(this, arguments);
        };
    }();

    var getRawChangeAddress = function () {
        var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee12(address) {
            return _regenerator2.default.wrap(function _callee12$(_context12) {
                while (1) {
                    switch (_context12.prev = _context12.next) {
                        case 0:
                            (0, _syscoinOw2.default)(address, _syscoinOw2.default.string.label("getRawChangeAddress:address").not.empty);
                            _context12.next = 3;
                            return callRpc('getrawchangeaddress', [address]);

                        case 3:
                            return _context12.abrupt('return', _context12.sent);

                        case 4:
                        case 'end':
                            return _context12.stop();
                    }
                }
            }, _callee12, this);
        }));

        return function getRawChangeAddress(_x16) {
            return _ref12.apply(this, arguments);
        };
    }();

    var getReceivedByAccount = function () {
        var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee13(account, minConf, addLocked) {
            var _args13 = arguments;
            return _regenerator2.default.wrap(function _callee13$(_context13) {
                while (1) {
                    switch (_context13.prev = _context13.next) {
                        case 0:
                            (0, _syscoinOw2.default)(account, _syscoinOw2.default.string.label("getReceivedByAccount:account").not.empty);
                            if (minConf) {
                                (0, _syscoinOw2.default)(minConf, _syscoinOw2.default.number.label("getReceivedByAccount:minConf").integer.greaterThanOrEqual(1));
                            }
                            if (addLocked) {
                                (0, _syscoinOw2.default)(addLocked, _syscoinOw2.default.boolean.label("getReceivedByAccount:addLocked").is(function (x) {
                                    return x == true || x == false;
                                }));
                            }
                            _context13.next = 5;
                            return callRpc('getreceivedbyaccount', _args13);

                        case 5:
                            return _context13.abrupt('return', _context13.sent);

                        case 6:
                        case 'end':
                            return _context13.stop();
                    }
                }
            }, _callee13, this);
        }));

        return function getReceivedByAccount(_x17, _x18, _x19) {
            return _ref13.apply(this, arguments);
        };
    }();

    var getReceivedByAddress = function () {
        var _ref14 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee14(account, minConf, addLocked) {
            var _args14 = arguments;
            return _regenerator2.default.wrap(function _callee14$(_context14) {
                while (1) {
                    switch (_context14.prev = _context14.next) {
                        case 0:
                            (0, _syscoinOw2.default)(account, _syscoinOw2.default.string.label("getReceivedByAddress:account").not.empty);
                            if (minConf) {
                                (0, _syscoinOw2.default)(minConf, _syscoinOw2.default.number.label("getReceivedByAddress:minConf").integer.greaterThanOrEqual(1));
                            }
                            if (addLocked) {
                                (0, _syscoinOw2.default)(addLocked, _syscoinOw2.default.boolean.label("getReceivedByAddress:addLocked").is(function (x) {
                                    return x == true || x == false;
                                }));
                            }
                            _context14.next = 5;
                            return callRpc('getreceivedbyaddress', _args14);

                        case 5:
                            return _context14.abrupt('return', _context14.sent);

                        case 6:
                        case 'end':
                            return _context14.stop();
                    }
                }
            }, _callee14, this);
        }));

        return function getReceivedByAddress(_x20, _x21, _x22) {
            return _ref14.apply(this, arguments);
        };
    }();

    var getTransaction = function () {
        var _ref15 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee15(txId, includeWatchOnly) {
            var _args15 = arguments;
            return _regenerator2.default.wrap(function _callee15$(_context15) {
                while (1) {
                    switch (_context15.prev = _context15.next) {
                        case 0:
                            (0, _syscoinOw2.default)(txId, _syscoinOw2.default.string.label("getTransaction:txId").not.empty);
                            if (includeWatchOnly) {
                                (0, _syscoinOw2.default)(script, _syscoinOw2.default.boolean.label("getTransaction:includeWatchOnly").is(function (x) {
                                    return x == true || x == false;
                                }));
                            }
                            _context15.next = 4;
                            return callRpc('gettransaction', _args15);

                        case 4:
                            return _context15.abrupt('return', _context15.sent);

                        case 5:
                        case 'end':
                            return _context15.stop();
                    }
                }
            }, _callee15, this);
        }));

        return function getTransaction(_x23, _x24) {
            return _ref15.apply(this, arguments);
        };
    }();

    var getUnconfirmedBalance = function () {
        var _ref16 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee16() {
            return _regenerator2.default.wrap(function _callee16$(_context16) {
                while (1) {
                    switch (_context16.prev = _context16.next) {
                        case 0:
                            _context16.next = 2;
                            return callRpc('getunconfirmedbalance');

                        case 2:
                            return _context16.abrupt('return', _context16.sent);

                        case 3:
                        case 'end':
                            return _context16.stop();
                    }
                }
            }, _callee16, this);
        }));

        return function getUnconfirmedBalance() {
            return _ref16.apply(this, arguments);
        };
    }();

    var getWalletInfo = function () {
        var _ref17 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee17() {
            return _regenerator2.default.wrap(function _callee17$(_context17) {
                while (1) {
                    switch (_context17.prev = _context17.next) {
                        case 0:
                            _context17.next = 2;
                            return callRpc('getwalletinfo');

                        case 2:
                            return _context17.abrupt('return', _context17.sent);

                        case 3:
                        case 'end':
                            return _context17.stop();
                    }
                }
            }, _callee17, this);
        }));

        return function getWalletInfo() {
            return _ref17.apply(this, arguments);
        };
    }();

    var importAddress = function () {
        var _ref18 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee18(script, label, rescan, p2sh) {
            var _args18 = arguments;
            return _regenerator2.default.wrap(function _callee18$(_context18) {
                while (1) {
                    switch (_context18.prev = _context18.next) {
                        case 0:
                            (0, _syscoinOw2.default)(script, _syscoinOw2.default.string.label("importAddress:script").not.empty);
                            if (label) {
                                (0, _syscoinOw2.default)(label, _syscoinOw2.default.array.label("importAddress:label").not.empty);
                            }
                            if (recan) {
                                (0, _syscoinOw2.default)(rescan, _syscoinOw2.default.boolean.label("importAddress:rescan").is(function (x) {
                                    return x == true || x == false;
                                }));
                            }
                            if (p2sh) {
                                (0, _syscoinOw2.default)(p2sh, _syscoinOw2.default.boolean.label("importAddress:p2sh").is(function (x) {
                                    return x == true || x == false;
                                }));
                            }
                            _context18.next = 6;
                            return callRpc('importaddress', _args18);

                        case 6:
                            return _context18.abrupt('return', _context18.sent);

                        case 7:
                        case 'end':
                            return _context18.stop();
                    }
                }
            }, _callee18, this);
        }));

        return function importAddress(_x25, _x26, _x27, _x28) {
            return _ref18.apply(this, arguments);
        };
    }();

    var importElectrumWallet = function () {
        var _ref19 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee19(fileName, index) {
            var _args19 = arguments;
            return _regenerator2.default.wrap(function _callee19$(_context19) {
                while (1) {
                    switch (_context19.prev = _context19.next) {
                        case 0:
                            (0, _syscoinOw2.default)(fileName, _syscoinOw2.default.string.label("importMulti:requests").not.empty);
                            if (index) {
                                (0, _syscoinOw2.default)(index, _syscoinOw2.default.number.label("importMulti:index").integer.greaterThan(0));
                            }
                            _context19.next = 4;
                            return callRpc('importelectrumwallet', _args19);

                        case 4:
                            return _context19.abrupt('return', _context19.sent);

                        case 5:
                        case 'end':
                            return _context19.stop();
                    }
                }
            }, _callee19, this);
        }));

        return function importElectrumWallet(_x29, _x30) {
            return _ref19.apply(this, arguments);
        };
    }();

    var importMulti = function () {
        var _ref20 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee20(requests, options) {
            var _args20 = arguments;
            return _regenerator2.default.wrap(function _callee20$(_context20) {
                while (1) {
                    switch (_context20.prev = _context20.next) {
                        case 0:
                            (0, _syscoinOw2.default)(requests, _syscoinOw2.default.array.label("importMulti:requests").not.empty);
                            if (options) {
                                (0, _syscoinOw2.default)(options, _syscoinOw2.default.array.label("importMulti:options").not.empty);
                            }
                            _context20.next = 4;
                            return callRpc('importmulti', _args20);

                        case 4:
                            return _context20.abrupt('return', _context20.sent);

                        case 5:
                        case 'end':
                            return _context20.stop();
                    }
                }
            }, _callee20, this);
        }));

        return function importMulti(_x31, _x32) {
            return _ref20.apply(this, arguments);
        };
    }();

    var importPrivKey = function () {
        var _ref21 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee21(syscoinPrivKey, label, rescan) {
            var _args21 = arguments;
            return _regenerator2.default.wrap(function _callee21$(_context21) {
                while (1) {
                    switch (_context21.prev = _context21.next) {
                        case 0:
                            (0, _syscoinOw2.default)(syscoinPrivKey, _syscoinOw2.default.string.label("importPrivKey:syscoinPrivKey").not.empty);
                            if (label) {
                                (0, _syscoinOw2.default)(label, _syscoinOw2.default.string.label("importPrivKey:label").not.empty);
                            }
                            if (rescan) {
                                (0, _syscoinOw2.default)(rescan, _syscoinOw2.default.boolean.label("importPrivKey:rescan").is(function (x) {
                                    return x == true || x == false;
                                }));
                            }
                            _context21.next = 5;
                            return callRpc('importprivkey', _args21);

                        case 5:
                            return _context21.abrupt('return', _context21.sent);

                        case 6:
                        case 'end':
                            return _context21.stop();
                    }
                }
            }, _callee21, this);
        }));

        return function importPrivKey(_x33, _x34, _x35) {
            return _ref21.apply(this, arguments);
        };
    }();

    var importPrunedFunds = function () {
        var _ref22 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee22(rawTransaction, txOutProof) {
            return _regenerator2.default.wrap(function _callee22$(_context22) {
                while (1) {
                    switch (_context22.prev = _context22.next) {
                        case 0:
                            (0, _syscoinOw2.default)(rawTransaction, _syscoinOw2.default.string.label("importPrunedFunds:rawTransaction").not.empty);
                            (0, _syscoinOw2.default)(txOutProof, _syscoinOw2.default.string.label("importPrunedFunds:txOutProof").not.empty);
                            _context22.next = 4;
                            return callRpc('importprunedfunds', [rawTransaction, txOutProof]);

                        case 4:
                            return _context22.abrupt('return', _context22.sent);

                        case 5:
                        case 'end':
                            return _context22.stop();
                    }
                }
            }, _callee22, this);
        }));

        return function importPrunedFunds(_x36, _x37) {
            return _ref22.apply(this, arguments);
        };
    }();

    var importPubKey = function () {
        var _ref23 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee23(pubKey, label, rescan) {
            var _args23 = arguments;
            return _regenerator2.default.wrap(function _callee23$(_context23) {
                while (1) {
                    switch (_context23.prev = _context23.next) {
                        case 0:
                            (0, _syscoinOw2.default)(pubKey, _syscoinOw2.default.string.label("importPubKey:pubKey").not.empty);
                            if (label) {
                                (0, _syscoinOw2.default)(label, _syscoinOw2.default.string.label("importPubKey:label").not.empty);
                            }
                            if (rescan) {
                                (0, _syscoinOw2.default)(rescan, _syscoinOw2.default.boolean.label("importPubKey:rescan").is(function (x) {
                                    return x == true || x == false;
                                }));
                            }
                            _context23.next = 5;
                            return callRpc('importpubkey', _args23);

                        case 5:
                            return _context23.abrupt('return', _context23.sent);

                        case 6:
                        case 'end':
                            return _context23.stop();
                    }
                }
            }, _callee23, this);
        }));

        return function importPubKey(_x38, _x39, _x40) {
            return _ref23.apply(this, arguments);
        };
    }();

    var importWallet = function () {
        var _ref24 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee24(fileName) {
            return _regenerator2.default.wrap(function _callee24$(_context24) {
                while (1) {
                    switch (_context24.prev = _context24.next) {
                        case 0:
                            (0, _syscoinOw2.default)(fileName, _syscoinOw2.default.string.label("importWallet:fileName").not.empty);
                            _context24.next = 3;
                            return callRpc('importwallet', [fileName]);

                        case 3:
                            return _context24.abrupt('return', _context24.sent);

                        case 4:
                        case 'end':
                            return _context24.stop();
                    }
                }
            }, _callee24, this);
        }));

        return function importWallet(_x41) {
            return _ref24.apply(this, arguments);
        };
    }();

    var instantSendToAddress = function () {
        var _ref25 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee25(address, amount, comment, commentTo, subtractFeeFromAmount) {
            var _args25 = arguments;
            return _regenerator2.default.wrap(function _callee25$(_context25) {
                while (1) {
                    switch (_context25.prev = _context25.next) {
                        case 0:
                            (0, _syscoinOw2.default)(minConf, _syscoinOw2.default.string.label("listUnspent:minConf").not.empty);
                            (0, _syscoinOw2.default)(amount, _syscoinOw2.default.number.label("listUnspent:amount").integer.greaterThan(0));
                            if (comment) {
                                (0, _syscoinOw2.default)(comment, _syscoinOw2.default.string.label("listUnspent:comment").minLength(0));
                            }
                            if (commentTo) {
                                (0, _syscoinOw2.default)(commentTo, _syscoinOw2.default.string.label("listUnspent:commentTo").minLength(0));
                            }
                            if (subtractFeeFromAmount) {
                                (0, _syscoinOw2.default)(subtractFeeFromAmount, _syscoinOw2.default.boolean.label("listUnspent:subtractFeeFromAmount").is(function (x) {
                                    return x == true || x == false;
                                }));
                            }
                            _context25.next = 7;
                            return callRpc('instantsendtoaddress', _args25);

                        case 7:
                            return _context25.abrupt('return', _context25.sent);

                        case 8:
                        case 'end':
                            return _context25.stop();
                    }
                }
            }, _callee25, this);
        }));

        return function instantSendToAddress(_x42, _x43, _x44, _x45, _x46) {
            return _ref25.apply(this, arguments);
        };
    }();

    var keePass = function () {
        var _ref26 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee26(genKey) {
            return _regenerator2.default.wrap(function _callee26$(_context26) {
                while (1) {
                    switch (_context26.prev = _context26.next) {
                        case 0:
                            if (genKey) {
                                (0, _syscoinOw2.default)(genKey, _syscoinOw2.default.number.label("keePassn:genKey").integer.greaterThanOrEqual(1));
                            }
                            _context26.next = 3;
                            return callRpc('keepass', genKey);

                        case 3:
                            return _context26.abrupt('return', _context26.sent);

                        case 4:
                        case 'end':
                            return _context26.stop();
                    }
                }
            }, _callee26, this);
        }));

        return function keePass(_x47) {
            return _ref26.apply(this, arguments);
        };
    }();

    var keyPoolRefill = function () {
        var _ref27 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee27(newSize) {
            var _args27 = arguments;
            return _regenerator2.default.wrap(function _callee27$(_context27) {
                while (1) {
                    switch (_context27.prev = _context27.next) {
                        case 0:
                            if (newSize) {
                                (0, _syscoinOw2.default)(newSize, _syscoinOw2.default.number.label("keyPoolRefill:newSize").integer.greaterThanOrEqual(1));
                            }
                            _context27.next = 3;
                            return callRpc('keypoolrefill', _args27);

                        case 3:
                            return _context27.abrupt('return', _context27.sent);

                        case 4:
                        case 'end':
                            return _context27.stop();
                    }
                }
            }, _callee27, this);
        }));

        return function keyPoolRefill(_x48) {
            return _ref27.apply(this, arguments);
        };
    }();

    var listAccounts = function () {
        var _ref28 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee28(minConf, addLocked, includeWatchOnly) {
            var _args28 = arguments;
            return _regenerator2.default.wrap(function _callee28$(_context28) {
                while (1) {
                    switch (_context28.prev = _context28.next) {
                        case 0:
                            if (minConf) {
                                (0, _syscoinOw2.default)(minConf, _syscoinOw2.default.number.label("listAccounts:minConf").integer.greaterThanOrEqual(1));
                            }
                            if (addLocked) {
                                (0, _syscoinOw2.default)(addLocked, _syscoinOw2.default.boolean.label("listAccounts:addLocked").is(function (x) {
                                    return x == true || x == false;
                                }));
                            }
                            if (includeWatchOnly) {
                                (0, _syscoinOw2.default)(includeWatchOnly, _syscoinOw2.default.boolean.label("listAccounts:includeWatchOnly").is(function (x) {
                                    return x == true || x == false;
                                }));
                            }
                            _context28.next = 5;
                            return callRpc('listaccounts', _args28);

                        case 5:
                            return _context28.abrupt('return', _context28.sent);

                        case 6:
                        case 'end':
                            return _context28.stop();
                    }
                }
            }, _callee28, this);
        }));

        return function listAccounts(_x49, _x50, _x51) {
            return _ref28.apply(this, arguments);
        };
    }();

    var listAddressBalances = function () {
        var _ref29 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee29(minAmount) {
            var _args29 = arguments;
            return _regenerator2.default.wrap(function _callee29$(_context29) {
                while (1) {
                    switch (_context29.prev = _context29.next) {
                        case 0:
                            if (minAmount) {
                                (0, _syscoinOw2.default)(minAmount, _syscoinOw2.default.number.label("listAddressBalances:minAmount").integer.greaterThan(0));
                            }
                            _context29.next = 3;
                            return callRpc('listaddressbalances', _args29);

                        case 3:
                            return _context29.abrupt('return', _context29.sent);

                        case 4:
                        case 'end':
                            return _context29.stop();
                    }
                }
            }, _callee29, this);
        }));

        return function listAddressBalances(_x52) {
            return _ref29.apply(this, arguments);
        };
    }();

    var listAddressGroupings = function () {
        var _ref30 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee30() {
            return _regenerator2.default.wrap(function _callee30$(_context30) {
                while (1) {
                    switch (_context30.prev = _context30.next) {
                        case 0:
                            _context30.next = 2;
                            return callRpc('listaddressgroupings');

                        case 2:
                            return _context30.abrupt('return', _context30.sent);

                        case 3:
                        case 'end':
                            return _context30.stop();
                    }
                }
            }, _callee30, this);
        }));

        return function listAddressGroupings() {
            return _ref30.apply(this, arguments);
        };
    }();

    var listLockUnspent = function () {
        var _ref31 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee31() {
            return _regenerator2.default.wrap(function _callee31$(_context31) {
                while (1) {
                    switch (_context31.prev = _context31.next) {
                        case 0:
                            _context31.next = 2;
                            return callRpc('listlockunspent');

                        case 2:
                            return _context31.abrupt('return', _context31.sent);

                        case 3:
                        case 'end':
                            return _context31.stop();
                    }
                }
            }, _callee31, this);
        }));

        return function listLockUnspent() {
            return _ref31.apply(this, arguments);
        };
    }();

    var listReceivedByAccount = function () {
        var _ref32 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee32(minConf, addLocked, includeEmpty, includeWatchOnly) {
            var _args32 = arguments;
            return _regenerator2.default.wrap(function _callee32$(_context32) {
                while (1) {
                    switch (_context32.prev = _context32.next) {
                        case 0:
                            if (minConf) {
                                (0, _syscoinOw2.default)(minConf, _syscoinOw2.default.number.label("listReceivedByAccount:minConf").integer.greaterThanOrEqual(1));
                            }
                            if (addLocked) {
                                (0, _syscoinOw2.default)(addLocked, _syscoinOw2.default.boolean.label("listReceivedByAccount:addLocked").is(function (x) {
                                    return x == true || x == false;
                                }));
                            }
                            if (addressess) {
                                (0, _syscoinOw2.default)(includeEmpty, _syscoinOw2.default.boolean.label("listReceivedByAccount:includeEmpty").is(function (x) {
                                    return x == true || x == false;
                                }));
                            }
                            if (includeUnsafe) {
                                (0, _syscoinOw2.default)(includeWatchOnly, _syscoinOw2.default.boolean.label("listReceivedByAccount:includeWatchOnly").is(function (x) {
                                    return x == true || x == false;
                                }));
                            }
                            _context32.next = 6;
                            return callRpc('listreceivedbyaccount', _args32);

                        case 6:
                            return _context32.abrupt('return', _context32.sent);

                        case 7:
                        case 'end':
                            return _context32.stop();
                    }
                }
            }, _callee32, this);
        }));

        return function listReceivedByAccount(_x53, _x54, _x55, _x56) {
            return _ref32.apply(this, arguments);
        };
    }();

    var listReceivedByAddress = function () {
        var _ref33 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee33(minConf, addLocked, includeEmpty, includeWatchOnly) {
            var _args33 = arguments;
            return _regenerator2.default.wrap(function _callee33$(_context33) {
                while (1) {
                    switch (_context33.prev = _context33.next) {
                        case 0:
                            if (minConf) {
                                (0, _syscoinOw2.default)(minConf, _syscoinOw2.default.number.label("listReceivedByAddress:minConf").integer.greaterThanOrEqual(1));
                            }
                            if (addLocked) {
                                (0, _syscoinOw2.default)(addLocked, _syscoinOw2.default.boolean.label("listReceivedByAddress:addLocked").is(function (x) {
                                    return x == true || x == false;
                                }));
                            }
                            if (addressess) {
                                (0, _syscoinOw2.default)(includeEmpty, _syscoinOw2.default.boolean.label("listReceivedByAddress:includeEmpty").is(function (x) {
                                    return x == true || x == false;
                                }));
                            }
                            if (includeUnsafe) {
                                (0, _syscoinOw2.default)(includeWatchOnly, _syscoinOw2.default.boolean.label("listReceivedByAddress:includeWatchOnly").is(function (x) {
                                    return x == true || x == false;
                                }));
                            }
                            _context33.next = 6;
                            return callRpc('listreceivedbyaddress', _args33);

                        case 6:
                            return _context33.abrupt('return', _context33.sent);

                        case 7:
                        case 'end':
                            return _context33.stop();
                    }
                }
            }, _callee33, this);
        }));

        return function listReceivedByAddress(_x57, _x58, _x59, _x60) {
            return _ref33.apply(this, arguments);
        };
    }();

    var listSinceBlock = function () {
        var _ref34 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee34(blockHash, targetConfirmations, includeWatchOnly) {
            var _args34 = arguments;
            return _regenerator2.default.wrap(function _callee34$(_context34) {
                while (1) {
                    switch (_context34.prev = _context34.next) {
                        case 0:
                            if (blockHash) {
                                (0, _syscoinOw2.default)(blockHash, _syscoinOw2.default.string.label("listSinceBlock:blockHash").not.empty);
                            }
                            if (targetConfirmations) {
                                (0, _syscoinOw2.default)(targetConfirmations, _syscoinOw2.default.number.label("listSinceBlock:targetConfirmations").integer.greaterThan(0));
                            }
                            if (includeWatchOnly) {
                                (0, _syscoinOw2.default)(includeWatchOnly, _syscoinOw2.default.boolean.label("listSinceBlock:includeWatchOnly").is(function (x) {
                                    return x == true || x == false;
                                }));
                            }
                            _context34.next = 5;
                            return callRpc('listsinceblock', _args34);

                        case 5:
                            return _context34.abrupt('return', _context34.sent);

                        case 6:
                        case 'end':
                            return _context34.stop();
                    }
                }
            }, _callee34, this);
        }));

        return function listSinceBlock(_x61, _x62, _x63) {
            return _ref34.apply(this, arguments);
        };
    }();

    var listTransactions = function () {
        var _ref35 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee35() {
            var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
            var skip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var includeWatchOnly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            return _regenerator2.default.wrap(function _callee35$(_context35) {
                while (1) {
                    switch (_context35.prev = _context35.next) {
                        case 0:
                            if (count) {
                                (0, _syscoinOw2.default)(count, _syscoinOw2.default.number.label("listUnspent:count").integer.greaterThan(0));
                            }
                            if (skip) {
                                (0, _syscoinOw2.default)(skip, _syscoinOw2.default.number.label("listUnspent:skip").integer.greaterThan(0));
                            }
                            if (includeWatchOnly) {
                                (0, _syscoinOw2.default)(includeUnsafe, _syscoinOw2.default.boolean.label("listUnspent:includeUnsafe").is(function (x) {
                                    return x == true || x == false;
                                }));
                            }
                            _context35.next = 5;
                            return callRpc('listtransactions', ["*", count, skip, includeWatchOnly]);

                        case 5:
                            return _context35.abrupt('return', _context35.sent);

                        case 6:
                        case 'end':
                            return _context35.stop();
                    }
                }
            }, _callee35, this);
        }));

        return function listTransactions() {
            return _ref35.apply(this, arguments);
        };
    }();

    var listUnspent = function () {
        var _ref36 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee36(minConf, maxConf, addresses, includeUnsafe) {
            var _args36 = arguments;
            return _regenerator2.default.wrap(function _callee36$(_context36) {
                while (1) {
                    switch (_context36.prev = _context36.next) {
                        case 0:
                            if (minConf) {
                                (0, _syscoinOw2.default)(minConf, _syscoinOw2.default.number.label("listUnspent:minConf").integer.greaterThanOrEqual(1));
                            }
                            if (maxConf) {
                                (0, _syscoinOw2.default)(maxConf, _syscoinOw2.default.number.label("listUnspent:maxConf").integer.greaterThanOrEqual(1));
                            }
                            if (addressess) {
                                (0, _syscoinOw2.default)(addresses, _syscoinOw2.default.object.label("listUnspent:addresses").not.empty);
                            }
                            if (includeUnsafe) {
                                (0, _syscoinOw2.default)(includeUnsafe, _syscoinOw2.default.boolean.label("listUnspent:includeUnsafe").is(function (x) {
                                    return x == true || x == false;
                                }));
                            }
                            _context36.next = 6;
                            return callRpc('listunspent', _args36);

                        case 6:
                            return _context36.abrupt('return', _context36.sent);

                        case 7:
                        case 'end':
                            return _context36.stop();
                    }
                }
            }, _callee36, this);
        }));

        return function listUnspent(_x67, _x68, _x69, _x70) {
            return _ref36.apply(this, arguments);
        };
    }();

    var lockUnspent = function () {
        var _ref37 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee37(unlock, transactions) {
            var _args37 = arguments;
            return _regenerator2.default.wrap(function _callee37$(_context37) {
                while (1) {
                    switch (_context37.prev = _context37.next) {
                        case 0:
                            (0, _syscoinOw2.default)(unlock, _syscoinOw2.default.string.label("lockUnspent:unlock").not.empty);
                            (0, _syscoinOw2.default)(transactions, _syscoinOw2.default.string.label("lockUnspent:transactions").not.empty);
                            _context37.next = 4;
                            return callRpc('lockunspent', _args37);

                        case 4:
                            return _context37.abrupt('return', _context37.sent);

                        case 5:
                        case 'end':
                            return _context37.stop();
                    }
                }
            }, _callee37, this);
        }));

        return function lockUnspent(_x71, _x72) {
            return _ref37.apply(this, arguments);
        };
    }();

    var move = function () {
        var _ref38 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee38(fromAccount, toAccount, amount, dummy, comment) {
            var _args38 = arguments;
            return _regenerator2.default.wrap(function _callee38$(_context38) {
                while (1) {
                    switch (_context38.prev = _context38.next) {
                        case 0:
                            (0, _syscoinOw2.default)(fromAccount, _syscoinOw2.default.string.label("move:fromAccount").not.empty);
                            (0, _syscoinOw2.default)(toAccount, _syscoinOw2.default.string.label("move:toAccount").not.empty);
                            (0, _syscoinOw2.default)(amount, _syscoinOw2.default.number.label("move:amount").integer.greaterThan(0));
                            (0, _syscoinOw2.default)(dummy, _syscoinOw2.default.string.label("move:dummy").not.empty);
                            (0, _syscoinOw2.default)(comment, _syscoinOw2.default.string.label("move:comment").string.minLength(0));
                            _context38.next = 7;
                            return callRpc('move', _args38);

                        case 7:
                            return _context38.abrupt('return', _context38.sent);

                        case 8:
                        case 'end':
                            return _context38.stop();
                    }
                }
            }, _callee38, this);
        }));

        return function move(_x73, _x74, _x75, _x76, _x77) {
            return _ref38.apply(this, arguments);
        };
    }();

    var pruneSyscoinServices = function () {
        var _ref39 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee39() {
            return _regenerator2.default.wrap(function _callee39$(_context39) {
                while (1) {
                    switch (_context39.prev = _context39.next) {
                        case 0:
                            _context39.next = 2;
                            return callRpc('prunesyscoinservices');

                        case 2:
                            return _context39.abrupt('return', _context39.sent);

                        case 3:
                        case 'end':
                            return _context39.stop();
                    }
                }
            }, _callee39, this);
        }));

        return function pruneSyscoinServices() {
            return _ref39.apply(this, arguments);
        };
    }();

    var removePrunedFunds = function () {
        var _ref40 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee40(txId) {
            return _regenerator2.default.wrap(function _callee40$(_context40) {
                while (1) {
                    switch (_context40.prev = _context40.next) {
                        case 0:
                            (0, _syscoinOw2.default)(txId, _syscoinOw2.default.string.label("removePrunedFunds:txId").not.empty);
                            _context40.next = 3;
                            return callRpc('removeprunedfunds', [txId]);

                        case 3:
                            return _context40.abrupt('return', _context40.sent);

                        case 4:
                        case 'end':
                            return _context40.stop();
                    }
                }
            }, _callee40, this);
        }));

        return function removePrunedFunds(_x78) {
            return _ref40.apply(this, arguments);
        };
    }();

    var sendFrom = function () {
        var _ref41 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee41(fromAccount, toAddress, amount, minConf, addLocked, comment, commentTo) {
            var _args41 = arguments;
            return _regenerator2.default.wrap(function _callee41$(_context41) {
                while (1) {
                    switch (_context41.prev = _context41.next) {
                        case 0:
                            (0, _syscoinOw2.default)(fromAccount, _syscoinOw2.default.string.label("sendFrom:fromAccount").not.empty);
                            (0, _syscoinOw2.default)(toAddress, _syscoinOw2.default.string.label("sendFrom:fromAccount").not.empty);
                            (0, _syscoinOw2.default)(amount, _syscoinOw2.default.number.label("sendFrom:fromAccount").not.empty);
                            if (minConf) {
                                (0, _syscoinOw2.default)(number, _syscoinOw2.default.number.label("sendFrom:minConf").integer.greaterThanOrEqual(1));
                            }
                            if (addLocked) {
                                (0, _syscoinOw2.default)(addLocked, _syscoinOw2.default.boolean.label("sendFrom:addLocked").is(function (x) {
                                    return x == true || x == false;
                                }));
                            }
                            if (comment) {
                                (0, _syscoinOw2.default)(comment, _syscoinOw2.default.string.label("sendFrom:comment").string.minLength(0));
                            }
                            if (commentTo) {
                                (0, _syscoinOw2.default)(comment, _syscoinOw2.default.string.label("sendFrom:comment").string.minLength(0));
                            }
                            _context41.next = 9;
                            return callRpc('sendfrom', _args41);

                        case 9:
                            return _context41.abrupt('return', _context41.sent);

                        case 10:
                        case 'end':
                            return _context41.stop();
                    }
                }
            }, _callee41, this);
        }));

        return function sendFrom(_x79, _x80, _x81, _x82, _x83, _x84, _x85) {
            return _ref41.apply(this, arguments);
        };
    }();

    var sendMany = function () {
        var _ref42 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee42(fromAccount, amounts, minConf, addLocked, comment, subtractFeeFromAmount, useIs, usePs) {
            var _args42 = arguments;
            return _regenerator2.default.wrap(function _callee42$(_context42) {
                while (1) {
                    switch (_context42.prev = _context42.next) {
                        case 0:
                            (0, _syscoinOw2.default)(fromAccount, _syscoinOw2.default.string.label("sendMany:fromAccount").not.empty);
                            (0, _syscoinOw2.default)(amounts, _syscoinOw2.default.number.label("sendMany:amounts").integer.greaterThan(0));
                            if (minConf) {
                                (0, _syscoinOw2.default)(minConf, _syscoinOw2.default.number.label("sendMany:minConf").integer.greaterThanOrEqual(1));
                            }
                            if (addLocked) {
                                (0, _syscoinOw2.default)(addLocked, _syscoinOw2.default.string.label("sendMany:addLocked").not.empty);
                            }
                            if (comment) {
                                (0, _syscoinOw2.default)(comment, _syscoinOw2.default.string.label("sendMany:comment").string.minLength(0));
                            }
                            if (subtractFeeFromAmount) {
                                (0, _syscoinOw2.default)(subtractFeeFromAmount, _syscoinOw2.default.boolean.label("sendToAddress:subtractFeeFromAmount").is(function (x) {
                                    return x == true || x == false;
                                }));
                            }
                            if (useIs) {
                                (0, _syscoinOw2.default)(useIs, _syscoinOw2.default.string.label("sendToAddress:useIs").not.empty);
                            }
                            if (usePs) {
                                (0, _syscoinOw2.default)(usePs, _syscoinOw2.default.string.label("sendToAddress:usePs").not.empty);
                            }

                            _context42.next = 10;
                            return callRpc('sendmany', _args42);

                        case 10:
                            return _context42.abrupt('return', _context42.sent);

                        case 11:
                        case 'end':
                            return _context42.stop();
                    }
                }
            }, _callee42, this);
        }));

        return function sendMany(_x86, _x87, _x88, _x89, _x90, _x91, _x92, _x93) {
            return _ref42.apply(this, arguments);
        };
    }();

    var sendToAddress = function () {
        var _ref43 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee43(address, amount, comment, commentTo, subtractFeeFromAmount, useIs, usePs) {
            var _args43 = arguments;
            return _regenerator2.default.wrap(function _callee43$(_context43) {
                while (1) {
                    switch (_context43.prev = _context43.next) {
                        case 0:
                            (0, _syscoinOw2.default)(address, _syscoinOw2.default.string.label("sendToAddress:address").not.empty);
                            (0, _syscoinOw2.default)(amount, _syscoinOw2.default.number.label("sendToAddress:amount").integer.greaterThan(0));
                            if (comment) {
                                (0, _syscoinOw2.default)(comment, _syscoinOw2.default.string.label("sendToAddress:comment").not.empty);
                            }
                            if (commentTo) {
                                (0, _syscoinOw2.default)(commentTo, _syscoinOw2.default.string.label("sendToAddress:commentTo").not.empty);
                            }
                            if (subtractFeeFromAmount) {
                                (0, _syscoinOw2.default)(subtractFeeFromAmount, _syscoinOw2.default.boolean.label("sendToAddress:subtractFeeFromAmount").is(function (x) {
                                    return x == true || x == false;
                                }));
                            }
                            if (useIs) {
                                (0, _syscoinOw2.default)(useIs, _syscoinOw2.default.string.label("sendToAddress:useIs").not.empty);
                            }
                            if (usePs) {
                                (0, _syscoinOw2.default)(usePs, _syscoinOw2.default.string.label("sendToAddress:usePs").not.empty);
                            }
                            _context43.next = 9;
                            return callRpc('sendtoaddress', _args43);

                        case 9:
                            return _context43.abrupt('return', _context43.sent);

                        case 10:
                        case 'end':
                            return _context43.stop();
                    }
                }
            }, _callee43, this);
        }));

        return function sendToAddress(_x94, _x95, _x96, _x97, _x98, _x99, _x100) {
            return _ref43.apply(this, arguments);
        };
    }();

    var setAccount = function () {
        var _ref44 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee44(address, account) {
            var _args44 = arguments;
            return _regenerator2.default.wrap(function _callee44$(_context44) {
                while (1) {
                    switch (_context44.prev = _context44.next) {
                        case 0:
                            (0, _syscoinOw2.default)(address, _syscoinOw2.default.string.label("setAccount:address").not.empty);
                            (0, _syscoinOw2.default)(account, _syscoinOw2.default.string.label("setAccount:account").string.minLength(0));
                            _context44.next = 4;
                            return callRpc('setaccount', _args44);

                        case 4:
                            return _context44.abrupt('return', _context44.sent);

                        case 5:
                        case 'end':
                            return _context44.stop();
                    }
                }
            }, _callee44, this);
        }));

        return function setAccount(_x101, _x102) {
            return _ref44.apply(this, arguments);
        };
    }();

    var setTxFee = function () {
        var _ref45 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee45(amount) {
            return _regenerator2.default.wrap(function _callee45$(_context45) {
                while (1) {
                    switch (_context45.prev = _context45.next) {
                        case 0:
                            (0, _syscoinOw2.default)(amount, _syscoinOw2.default.string.label("setTxFee(amount) {:amount").not.empty);
                            _context45.next = 3;
                            return callRpc('settxfee', [amount]);

                        case 3:
                            return _context45.abrupt('return', _context45.sent);

                        case 4:
                        case 'end':
                            return _context45.stop();
                    }
                }
            }, _callee45, this);
        }));

        return function setTxFee(_x103) {
            return _ref45.apply(this, arguments);
        };
    }();

    var signMessage = function () {
        var _ref46 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee46(address, message) {
            return _regenerator2.default.wrap(function _callee46$(_context46) {
                while (1) {
                    switch (_context46.prev = _context46.next) {
                        case 0:
                            (0, _syscoinOw2.default)(address, _syscoinOw2.default.string.label("signMessage:address").not.empty);
                            (0, _syscoinOw2.default)(message, _syscoinOw2.default.string.label("signMessage:message").not.empty);
                            _context46.next = 4;
                            return callRpc('signmessage', [address, message]);

                        case 4:
                            return _context46.abrupt('return', _context46.sent);

                        case 5:
                        case 'end':
                            return _context46.stop();
                    }
                }
            }, _callee46, this);
        }));

        return function signMessage(_x104, _x105) {
            return _ref46.apply(this, arguments);
        };
    }();

    var syscoinDecodeRawTransaction = function () {
        var _ref47 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee47(hexString) {
            return _regenerator2.default.wrap(function _callee47$(_context47) {
                while (1) {
                    switch (_context47.prev = _context47.next) {
                        case 0:
                            (0, _syscoinOw2.default)(hexString, _syscoinOw2.default.string.label("syscoinDecodeRawTransaction:hexString").not.empty);
                            _context47.next = 3;
                            return callRpc('syscoindecoderawtransaction', [hexString]);

                        case 3:
                            return _context47.abrupt('return', _context47.sent);

                        case 4:
                        case 'end':
                            return _context47.stop();
                    }
                }
            }, _callee47, this);
        }));

        return function syscoinDecodeRawTransaction(_x106) {
            return _ref47.apply(this, arguments);
        };
    }();

    var syscoinListReceivedByAddress = function () {
        var _ref48 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee48() {
            return _regenerator2.default.wrap(function _callee48$(_context48) {
                while (1) {
                    switch (_context48.prev = _context48.next) {
                        case 0:
                            _context48.next = 2;
                            return callRpc('syscoinlistreceivedbyaddress');

                        case 2:
                            return _context48.abrupt('return', _context48.sent);

                        case 3:
                        case 'end':
                            return _context48.stop();
                    }
                }
            }, _callee48, this);
        }));

        return function syscoinListReceivedByAddress() {
            return _ref48.apply(this, arguments);
        };
    }();

    var syscoinSendRawTransaction = function () {
        var _ref49 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee49(hexString, allowHighFees, instantSend) {
            var _args49 = arguments;
            return _regenerator2.default.wrap(function _callee49$(_context49) {
                while (1) {
                    switch (_context49.prev = _context49.next) {
                        case 0:
                            (0, _syscoinOw2.default)(hexString, _syscoinOw2.default.string.label("syscoinSendRawTransaction:hexString").not.empty);
                            if (allowHighFees) {
                                (0, _syscoinOw2.default)(allowHighFees, _syscoinOw2.default.boolean.label("syscoinSendRawTransaction:allowHighFees").is(function (x) {
                                    return x == true || x == false;
                                }));
                            }
                            if (instantSend) {
                                (0, _syscoinOw2.default)(instantSend, _syscoinOw2.default.boolean.label("syscoinSendRawTransaction:instantSend").is(function (x) {
                                    return x == true || x == false;
                                }));
                            }
                            _context49.next = 5;
                            return callRpc('syscoinsendrawtransaction', _args49);

                        case 5:
                            return _context49.abrupt('return', _context49.sent);

                        case 6:
                        case 'end':
                            return _context49.stop();
                    }
                }
            }, _callee49, this);
        }));

        return function syscoinSendRawTransaction(_x107, _x108, _x109) {
            return _ref49.apply(this, arguments);
        };
    }();

    var syscoinTxFund = function () {
        var _ref50 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee50(hexString, addresses) {
            var _args50 = arguments;
            return _regenerator2.default.wrap(function _callee50$(_context50) {
                while (1) {
                    switch (_context50.prev = _context50.next) {
                        case 0:
                            (0, _syscoinOw2.default)(hexString, _syscoinOw2.default.string.label("syscoinTxFund:hexString").not.empty);
                            if (addresses) {
                                (0, _syscoinOw2.default)(addresses, _syscoinOw2.default.object.label("syscoinTxFund:address").not.empty);
                            }
                            _context50.next = 4;
                            return callRpc('syscointxfund', _args50);

                        case 4:
                            return _context50.abrupt('return', _context50.sent);

                        case 5:
                        case 'end':
                            return _context50.stop();
                    }
                }
            }, _callee50, this);
        }));

        return function syscoinTxFund(_x110, _x111) {
            return _ref50.apply(this, arguments);
        };
    }();

    var tpsTestAdd = function () {
        var _ref51 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee51(startTime, rawTransactions) {
            var _args51 = arguments;
            return _regenerator2.default.wrap(function _callee51$(_context51) {
                while (1) {
                    switch (_context51.prev = _context51.next) {
                        case 0:
                            (0, _syscoinOw2.default)(startTime, _syscoinOw2.default.number.label("tpsTestAdd:startTime").integer.greaterThan(0));
                            (0, _syscoinOw2.default)(rawTransactions, _syscoinOw2.default.array.label("tpsTestEnabled:enabled").not.empty);
                            _context51.next = 4;
                            return callRpc('tpstestadd', _args51);

                        case 4:
                            return _context51.abrupt('return', _context51.sent);

                        case 5:
                        case 'end':
                            return _context51.stop();
                    }
                }
            }, _callee51, this);
        }));

        return function tpsTestAdd(_x112, _x113) {
            return _ref51.apply(this, arguments);
        };
    }();

    var tpsTestEnabled = function () {
        var _ref52 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee52(enabled) {
            return _regenerator2.default.wrap(function _callee52$(_context52) {
                while (1) {
                    switch (_context52.prev = _context52.next) {
                        case 0:
                            (0, _syscoinOw2.default)(enabled, _syscoinOw2.default.boolean.label("tpsTestEnabled:enabled").is(function (x) {
                                return x == true || x == false;
                            }));
                            _context52.next = 3;
                            return callRpc('tpstestenabled', [enabled]);

                        case 3:
                            return _context52.abrupt('return', _context52.sent);

                        case 4:
                        case 'end':
                            return _context52.stop();
                    }
                }
            }, _callee52, this);
        }));

        return function tpsTestEnabled(_x114) {
            return _ref52.apply(this, arguments);
        };
    }();

    var tpsTestInfo = function () {
        var _ref53 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee53() {
            return _regenerator2.default.wrap(function _callee53$(_context53) {
                while (1) {
                    switch (_context53.prev = _context53.next) {
                        case 0:
                            _context53.next = 2;
                            return callRpc('tpstestinfo');

                        case 2:
                            return _context53.abrupt('return', _context53.sent);

                        case 3:
                        case 'end':
                            return _context53.stop();
                    }
                }
            }, _callee53, this);
        }));

        return function tpsTestInfo() {
            return _ref53.apply(this, arguments);
        };
    }();

    var walletLock = function () {
        var _ref54 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee54() {
            return _regenerator2.default.wrap(function _callee54$(_context54) {
                while (1) {
                    switch (_context54.prev = _context54.next) {
                        case 0:
                            _context54.next = 2;
                            return callRpc('walletlock');

                        case 2:
                            return _context54.abrupt('return', _context54.sent);

                        case 3:
                        case 'end':
                            return _context54.stop();
                    }
                }
            }, _callee54, this);
        }));

        return function walletLock() {
            return _ref54.apply(this, arguments);
        };
    }();

    var walletPassPhrase = function () {
        var _ref55 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee55(passPhrase, timeout, mixingOnly) {
            var _args55 = arguments;
            return _regenerator2.default.wrap(function _callee55$(_context55) {
                while (1) {
                    switch (_context55.prev = _context55.next) {
                        case 0:
                            (0, _syscoinOw2.default)(passphrase, _syscoinOw2.default.string.label("walletPassPhrase:passphrase").not.empty);
                            (0, _syscoinOw2.default)(timeout, _syscoinOw2.default.number.label("walletPassPhrase:timeout").integer.greaterThan(0));
                            (0, _syscoinOw2.default)(mixingOnly, _syscoinOw2.default.boolean.label("walletPassPhrase:mixingOnly").is(function (x) {
                                return x == true || x == false;
                            }));
                            _context55.next = 5;
                            return callRpc('walletpassphrase', _args55);

                        case 5:
                            return _context55.abrupt('return', _context55.sent);

                        case 6:
                        case 'end':
                            return _context55.stop();
                    }
                }
            }, _callee55, this);
        }));

        return function walletPassPhrase(_x115, _x116, _x117) {
            return _ref55.apply(this, arguments);
        };
    }();

    var walletPassPhraseChange = function () {
        var _ref56 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee56(oldPassphrase, newPassphrase) {
            return _regenerator2.default.wrap(function _callee56$(_context56) {
                while (1) {
                    switch (_context56.prev = _context56.next) {
                        case 0:
                            (0, _syscoinOw2.default)(passphrase, _syscoinOw2.default.string.label("walletPassPhraseChange:oldPassphrase").not.empty);
                            (0, _syscoinOw2.default)(newPassphrase, _syscoinOw2.default.string.label("walletPassPhraseChange:newPassphrase").not.empty);
                            _context56.next = 4;
                            return callRpc('walletpassphrasechange', [oldPassphrase, newPassphrase]);

                        case 4:
                            return _context56.abrupt('return', _context56.sent);

                        case 5:
                        case 'end':
                            return _context56.stop();
                    }
                }
            }, _callee56, this);
        }));

        return function walletPassPhraseChange(_x118, _x119) {
            return _ref56.apply(this, arguments);
        };
    }();

    var encryptWallet = function () {
        var _ref57 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee57(passphrase) {
            return _regenerator2.default.wrap(function _callee57$(_context57) {
                while (1) {
                    switch (_context57.prev = _context57.next) {
                        case 0:
                            (0, _syscoinOw2.default)(passphrase, _syscoinOw2.default.string.label("encryptWallet:passphrase").not.empty);
                            _context57.next = 3;
                            return callRpc('encryptwallet', passphrase);

                        case 3:
                            return _context57.abrupt('return', _context57.sent);

                        case 4:
                        case 'end':
                            return _context57.stop();
                    }
                }
            }, _callee57, this);
        }));

        return function encryptWallet(_x120) {
            return _ref57.apply(this, arguments);
        };
    }();

    var getWalletLoadPercentage = function () {
        var _ref58 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee58() {
            var walletInfo;
            return _regenerator2.default.wrap(function _callee58$(_context58) {
                while (1) {
                    switch (_context58.prev = _context58.next) {
                        case 0:
                            _context58.next = 2;
                            return callRpc('getwalletinfo');

                        case 2:
                            walletInfo = _context58.sent;
                            return _context58.abrupt('return', getPercentageFromWalletInfo(walletInfo));

                        case 4:
                        case 'end':
                            return _context58.stop();
                    }
                }
            }, _callee58, this);
        }));

        return function getWalletLoadPercentage() {
            return _ref58.apply(this, arguments);
        };
    }();

    return {
        abandonTransaction: abandonTransaction,
        addMultiSigAddress: addMultiSigAddress,
        alias: (0, _syscoinRpcWalletAliasServices.walletAliasServices)(callRpc),
        assetAllocation: (0, _syscoinRpcWalletAssetAllocationServices.walletAssetAllocationServices)(callRpc),
        asset: (0, _syscoinRpcWalletAssetServices.walletAssetServices)(callRpc),
        backupWallet: backupWallet,
        certificate: (0, _syscoinRpcWalletCertificateServices.walletCertificateServices)(callRpc),
        dumpHdInfo: dumpHdInfo,
        dumpPrivKey: dumpPrivKey,
        dumpWallet: dumpWallet,
        escrow: (0, _syscoinRpcWalletEscrowServices.walletEscrowServices)(callRpc),
        getAccount: getAccount,
        getAccountAddress: getAccountAddress,
        getAddressesByAccount: getAddressesByAccount,
        getBalance: getBalance,
        getNewAddress: getNewAddress,
        getRawChangeAddress: getRawChangeAddress,
        getReceivedByAccount: getReceivedByAccount,
        getReceivedByAddress: getReceivedByAddress,
        getTransaction: getTransaction,
        getUnconfirmedBalance: getUnconfirmedBalance,
        getWalletInfo: getWalletInfo,
        importAddress: importAddress,
        importElectrumWallet: importElectrumWallet,
        importMulti: importMulti,
        importPrivKey: importPrivKey,
        importPrunedFunds: importPrunedFunds,
        importPubKey: importPubKey,
        importWallet: importWallet,
        instantSendToAddress: instantSendToAddress,
        keePass: keePass,
        keyPoolRefill: keyPoolRefill,
        listAccounts: listAccounts,
        listAddressBalances: listAddressBalances,
        listAddressGroupings: listAddressGroupings,
        listLockUnspent: listLockUnspent,
        listReceivedByAccount: listReceivedByAccount,
        listReceivedByAddress: listReceivedByAddress,
        listSinceBlock: listSinceBlock,
        listTransactions: listTransactions,
        listUnspent: listUnspent,
        lockUnspent: lockUnspent,
        move: move,
        offer: (0, _syscoinRpcWalletOfferServices.walletOfferServices)(callRpc),
        pruneSyscoinServices: pruneSyscoinServices,
        removePrunedFunds: removePrunedFunds,
        sendFrom: sendFrom,
        sendMany: sendMany,
        sendToAddress: sendToAddress,
        setAccount: setAccount,
        setTxFee: setTxFee,
        signMessage: signMessage,
        syscoinDecodeRawTransaction: syscoinDecodeRawTransaction,
        syscoinListReceivedByAddress: syscoinListReceivedByAddress,
        syscoinSendRawTransaction: syscoinSendRawTransaction,
        syscoinTxFund: syscoinTxFund,
        tpsTestAdd: tpsTestAdd,
        tpsTestEnabled: tpsTestEnabled,
        tpsTestInfo: tpsTestInfo,
        walletLock: walletLock,
        walletPassPhrase: walletPassPhrase,
        walletPassPhraseChange: walletPassPhraseChange,
        encryptWallet: encryptWallet,
        getWalletLoadPercentage: getWalletLoadPercentage
    };
}

function getPercentageFromWalletInfo(walletInfo) {
    if (walletInfo.walletversion) {
        return 100;
    }
    if (walletInfo.code === _constants.constants.ERROR_CODE_NO_CONNECTION) {
        return false;
    }
    if (walletInfo.message || walletInfo.code === _constants.constants.ERROR_CODE_WALLET_LOADING) {
        return walletInfo.message.replace(/\D/g, '') / 100;
    }
    return 0;
}