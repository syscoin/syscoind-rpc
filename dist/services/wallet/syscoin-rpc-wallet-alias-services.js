"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.walletAliasServices = walletAliasServices;

var _syscoinOw = require("syscoin-ow");

var _syscoinOw2 = _interopRequireDefault(_syscoinOw);

var _endpointDecorators = require("../../endpoint-decorators");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function walletAliasServices(callRpc) {
    var aliasBalance = function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                alias = _ref2.alias,
                instantSend = _ref2.instantSend;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            (0, _syscoinOw2.default)(alias, _syscoinOw2.default.string.label("aliasBalance:alias").not.empty);
                            if (instantSend) {
                                (0, _syscoinOw2.default)(account, _syscoinOw2.default.boolean.label("aliasBalance:instantSend").is(function (x) {
                                    return x == true || x == false;
                                }));
                            }

                            if (!instantSend) {
                                _context.next = 8;
                                break;
                            }

                            _context.next = 5;
                            return callRpc('aliasbalance', [alias, instantSend]);

                        case 5:
                            _context.t0 = _context.sent;
                            _context.next = 11;
                            break;

                        case 8:
                            _context.next = 10;
                            return callRpc('aliasbalance', [alias]);

                        case 10:
                            _context.t0 = _context.sent;

                        case 11:
                            return _context.abrupt("return", _context.t0);

                        case 12:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function aliasBalance() {
            return _ref.apply(this, arguments);
        };
    }();

    var aliasBalanceMulti = function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                aliases = _ref4.aliases,
                _ref4$instantSend = _ref4.instantSend,
                instantSend = _ref4$instantSend === undefined ? false : _ref4$instantSend;

            var aliasesObj;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            (0, _syscoinOw2.default)(aliases, _syscoinOw2.default.array.label("aliasBalanceMulti:aliases").not.empty);
                            if (instantSend) {
                                (0, _syscoinOw2.default)(account, _syscoinOw2.default.boolean.label("aliasBalance:instantSend").is(function (x) {
                                    return x == true || x == false;
                                }));
                            }
                            aliasesObj = {
                                aliases: aliases
                            };

                            if (!instantSend) {
                                _context2.next = 9;
                                break;
                            }

                            _context2.next = 6;
                            return callRpc('aliasbalancemulti', [aliasesObj, instantSend]);

                        case 6:
                            _context2.t0 = _context2.sent;
                            _context2.next = 12;
                            break;

                        case 9:
                            _context2.next = 11;
                            return callRpc('aliasbalancemulti', [aliasesObj]);

                        case 11:
                            _context2.t0 = _context2.sent;

                        case 12:
                            return _context2.abrupt("return", _context2.t0);

                        case 13:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        return function aliasBalanceMulti() {
            return _ref3.apply(this, arguments);
        };
    }();

    var aliasIsExpired = function () {
        var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
            var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                aliasName = _ref6.aliasName;

            var info;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            (0, _syscoinOw2.default)(aliasName, _syscoinOw2.default.string.label("aliasIsExpired:aliasName").not.empty);
                            _context3.next = 3;
                            return aliasInfo(aliasName);

                        case 3:
                            info = _context3.sent;

                            if (info.error) {
                                _context3.next = 6;
                                break;
                            }

                            return _context3.abrupt("return", info.expired);

                        case 6:
                        case "end":
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        return function aliasIsExpired() {
            return _ref5.apply(this, arguments);
        };
    }();

    var aliasInfo = function () {
        var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
            var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                aliasName = _ref8.aliasName;

            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            (0, _syscoinOw2.default)(aliasName, _syscoinOw2.default.string.label("aliasInfo:aliasName").not.empty);
                            _context4.next = 3;
                            return callRpc('aliasinfo', [aliasName]);

                        case 3:
                            return _context4.abrupt("return", _context4.sent);

                        case 4:
                        case "end":
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        return function aliasInfo() {
            return _ref7.apply(this, arguments);
        };
    }();

    var aliasNew = function () {
        var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
            var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                aliasName = _ref10.aliasName,
                publicValue = _ref10.publicValue,
                _ref10$acceptTransfer = _ref10.acceptTransferFlags,
                acceptTransferFlags = _ref10$acceptTransfer === undefined ? 3 : _ref10$acceptTransfer,
                expireTimestamp = _ref10.expireTimestamp,
                address = _ref10.address,
                encryptionPrivateKey = _ref10.encryptionPrivateKey,
                encryptionPublicKey = _ref10.encryptionPublicKey,
                _ref10$witness = _ref10.witness,
                witness = _ref10$witness === undefined ? '' : _ref10$witness;

            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            (0, _syscoinOw2.default)(aliasName, _syscoinOw2.default.string.label("aliasNew:aliasName").not.empty);
                            (0, _syscoinOw2.default)(publicValue, _syscoinOw2.default.string.label("aliasNew:publicValue").minLength(0));
                            (0, _syscoinOw2.default)(acceptTransferFlags, _syscoinOw2.default.number.label("aliasNew:transfersFlag").is(function (x) {
                                return x >= 0 && x <= 3;
                            }));
                            (0, _syscoinOw2.default)(expireTimestamp, _syscoinOw2.default.number.label("aliasNew:expireTimestamp").integer.greaterThan(0));
                            (0, _syscoinOw2.default)(address, _syscoinOw2.default.string.label("aliasNew:address").minLength(0));
                            (0, _syscoinOw2.default)(encryptionPrivateKey, _syscoinOw2.default.string.label("aliasNew:encPrivateKey").minLength(0));
                            (0, _syscoinOw2.default)(encryptionPublicKey, _syscoinOw2.default.string.label("aliasNew:encPublicKey").minLength(0));
                            (0, _syscoinOw2.default)(witness, _syscoinOw2.default.string.label("aliasNew:witness").minLength(0));
                            _context5.next = 10;
                            return callRpc('aliasnew', [aliasName, publicValue, acceptTransferFlags, expireTimestamp, address, encryptionPrivateKey, encryptionPublicKey, witness]);

                        case 10:
                            return _context5.abrupt("return", _context5.sent);

                        case 11:
                        case "end":
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        return function aliasNew() {
            return _ref9.apply(this, arguments);
        };
    }();

    var aliasNewEstimatedFee = function () {
        var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
            var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                aliasName = _ref12.aliasName,
                publicValue = _ref12.publicValue,
                _ref12$acceptTransfer = _ref12.acceptTransferFlags,
                acceptTransferFlags = _ref12$acceptTransfer === undefined ? 3 : _ref12$acceptTransfer,
                expireTimestamp = _ref12.expireTimestamp,
                address = _ref12.address,
                encryptionPrivateKey = _ref12.encryptionPrivateKey,
                encryptionPublicKey = _ref12.encryptionPublicKey,
                _ref12$witness = _ref12.witness,
                witness = _ref12$witness === undefined ? '' : _ref12$witness;

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
                            return callRpc('aliasnewestimatedfee', [aliasName, publicValue, acceptTransferFlags, expireTimestamp, address, encryptionPrivateKey, encryptionPublicKey, witness]);

                        case 10:
                            return _context6.abrupt("return", _context6.sent);

                        case 11:
                        case "end":
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        return function aliasNewEstimatedFee() {
            return _ref11.apply(this, arguments);
        };
    }();

    var aliasPay = function () {
        var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
            var _ref14 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                aliasFrom = _ref14.aliasFrom,
                amountsToAliases = _ref14.amountsToAliases,
                _ref14$instantSend = _ref14.instantSend,
                instantSend = _ref14$instantSend === undefined ? false : _ref14$instantSend,
                subtractFeeFromAmount = _ref14.subtractFeeFromAmount;

            return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            (0, _syscoinOw2.default)(aliasFrom, _syscoinOw2.default.string.label("aliasPay:aliasFrom").not.empty);
                            (0, _syscoinOw2.default)(amountsToAliases, _syscoinOw2.default.object.label("aliasPay:amountsToAliases").not.empty);
                            (0, _syscoinOw2.default)(instantSend, _syscoinOw2.default.boolean.label("aliasPay:instantSend").is(function (x) {
                                return x == true || x == false;
                            }));
                            if (subtractFeeFromAmount) {
                                (0, _syscoinOw2.default)(subtractFeeFromAmount, _syscoinOw2.default.object.label("aliasPay:subtractFeeFromAmount").not.empty);
                            }
                            _context7.next = 6;
                            return callRpc('aliaspay', [aliasFrom, amountsToAliases, instantSend, subtractFeeFromAmount]);

                        case 6:
                            return _context7.abrupt("return", _context7.sent);

                        case 7:
                        case "end":
                            return _context7.stop();
                    }
                }
            }, _callee7, this);
        }));

        return function aliasPay() {
            return _ref13.apply(this, arguments);
        };
    }();

    var aliasUpdate = function () {
        var _ref15 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8() {
            var _ref16 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                aliasName = _ref16.aliasName,
                publicValue = _ref16.publicValue,
                _ref16$acceptTransfer = _ref16.acceptTransferFlags,
                acceptTransferFlags = _ref16$acceptTransfer === undefined ? 3 : _ref16$acceptTransfer,
                _ref16$expireTimestam = _ref16.expireTimestamp,
                expireTimestamp = _ref16$expireTimestam === undefined ? 3600 : _ref16$expireTimestam,
                address = _ref16.address,
                encryptionPrivateKey = _ref16.encryptionPrivateKey,
                encryptionPublicKey = _ref16.encryptionPublicKey,
                _ref16$witness = _ref16.witness,
                witness = _ref16$witness === undefined ? '' : _ref16$witness;

            return _regenerator2.default.wrap(function _callee8$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            (0, _syscoinOw2.default)(aliasName, _syscoinOw2.default.string.label("aliasUpdate:aliasName").not.empty);
                            (0, _syscoinOw2.default)(publicValue, _syscoinOw2.default.string.label("aliasUpdate:publicValue").minLength(0));
                            (0, _syscoinOw2.default)(transfersFlag, _syscoinOw2.default.number.label("aliasUpdate:transfersFlag").is(function (x) {
                                return x >= 0 && x <= 3;
                            }));
                            (0, _syscoinOw2.default)(expireTimestamp, _syscoinOw2.default.number.label("aliasUpdate:expireTimestamp").integer.greaterThan(0));
                            (0, _syscoinOw2.default)(address, _syscoinOw2.default.string.label("aliasUpdate:address").minLength(0));
                            (0, _syscoinOw2.default)(encPrivateKey, _syscoinOw2.default.string.label("aliasUpdate:encPrivateKey").minLength(0));
                            (0, _syscoinOw2.default)(encPublicKey, _syscoinOw2.default.string.label("aliasUpdate:encPublicKey").minLength(0));
                            (0, _syscoinOw2.default)(witness, _syscoinOw2.default.string.label("aliasUpdate:witness").minLength(0));
                            _context8.next = 10;
                            return callRpc('aliasupdate', [aliasName, publicValue, acceptTransferFlags, expireTimestamp, address, encryptionPrivateKey, encryptionPublicKey, witness]);

                        case 10:
                            return _context8.abrupt("return", _context8.sent);

                        case 11:
                        case "end":
                            return _context8.stop();
                    }
                }
            }, _callee8, this);
        }));

        return function aliasUpdate() {
            return _ref15.apply(this, arguments);
        };
    }();

    var aliasUpdateWhiteList = function () {
        var _ref17 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9() {
            var _ref18 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                ownerAlias = _ref18.ownerAlias,
                whitelistEntries = _ref18.whitelistEntries,
                _ref18$witness = _ref18.witness,
                witness = _ref18$witness === undefined ? '' : _ref18$witness;

            return _regenerator2.default.wrap(function _callee9$(_context9) {
                while (1) {
                    switch (_context9.prev = _context9.next) {
                        case 0:
                            (0, _syscoinOw2.default)(ownerAlias, _syscoinOw2.default.string.label("aliasUpdateWhitelist:ownerAlias").not.empty);
                            (0, _syscoinOw2.default)(whitelistEntries, _syscoinOw2.default.object.label("aliasUpdateWhitelist:whitelistEntries").not.empty);
                            (0, _syscoinOw2.default)(witness, _syscoinOw2.default.string.label("aliasUpdateWhitelist:witness").not.empty);
                            _context9.next = 5;
                            return callRpc('aliasupdatewhitelist', [ownerAlias, whitelistEntries, witness]);

                        case 5:
                            return _context9.abrupt("return", _context9.sent);

                        case 6:
                        case "end":
                            return _context9.stop();
                    }
                }
            }, _callee9, this);
        }));

        return function aliasUpdateWhiteList() {
            return _ref17.apply(this, arguments);
        };
    }();

    var aliasAddScript = function () {
        var _ref19 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10() {
            var _ref20 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                script = _ref20.script;

            return _regenerator2.default.wrap(function _callee10$(_context10) {
                while (1) {
                    switch (_context10.prev = _context10.next) {
                        case 0:
                            (0, _syscoinOw2.default)(script, _syscoinOw2.default.string.label("aliasAddScript:script").not.empty);
                            _context10.next = 3;
                            return callRpc('aliasaddscript', [script]);

                        case 3:
                            return _context10.abrupt("return", _context10.sent);

                        case 4:
                        case "end":
                            return _context10.stop();
                    }
                }
            }, _callee10, this);
        }));

        return function aliasAddScript() {
            return _ref19.apply(this, arguments);
        };
    }();

    var aliasWhiteList = function () {
        var _ref21 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11() {
            var _ref22 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                alias = _ref22.alias;

            return _regenerator2.default.wrap(function _callee11$(_context11) {
                while (1) {
                    switch (_context11.prev = _context11.next) {
                        case 0:
                            (0, _syscoinOw2.default)(alias, _syscoinOw2.default.string.label("aliasWhiteList:alias").not.empty);
                            _context11.next = 3;
                            return callRpc('aliaswhitelist', [alias]);

                        case 3:
                            return _context11.abrupt("return", _context11.sent);

                        case 4:
                        case "end":
                            return _context11.stop();
                    }
                }
            }, _callee11, this);
        }));

        return function aliasWhiteList() {
            return _ref21.apply(this, arguments);
        };
    }();

    var aliasUpdateEstimatedFee = function () {
        var _ref23 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee12() {
            var _ref24 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                aliasName = _ref24.aliasName,
                publicValue = _ref24.publicValue,
                address = _ref24.address,
                acceptTransferFlags = _ref24.acceptTransferFlags,
                expireTimestamp = _ref24.expireTimestamp,
                encryptionPrivateKey = _ref24.encryptionPrivateKey,
                encryptionPublicKey = _ref24.encryptionPublicKey,
                _ref24$witness = _ref24.witness,
                witness = _ref24$witness === undefined ? '' : _ref24$witness;

            return _regenerator2.default.wrap(function _callee12$(_context12) {
                while (1) {
                    switch (_context12.prev = _context12.next) {
                        case 0:
                            (0, _syscoinOw2.default)(aliasName, _syscoinOw2.default.string.label("aliasUpdateEstimatedFee:aliasName").not.empty);
                            (0, _syscoinOw2.default)(publicValue, _syscoinOw2.default.string.label("aliasUpdateEstimatedFee:publicValue").minLength(0));
                            (0, _syscoinOw2.default)(address, _syscoinOw2.default.string.label("aliasUpdateEstimatedFee:address").not.empty);
                            (0, _syscoinOw2.default)(transfersFlag, _syscoinOw2.default.number.label("aliasUpdateEstimatedFee:transfersFlag").is(function (x) {
                                return x >= 0 && x <= 3;
                            }));
                            (0, _syscoinOw2.default)(expireTimestamp, _syscoinOw2.default.number.label("aliasUpdateEstimatedFee:expireTimestamp").integer.greaterThan(0));
                            (0, _syscoinOw2.default)(address, _syscoinOw2.default.string.label("aliasUpdateEstimatedFee:address").minLength(0));
                            (0, _syscoinOw2.default)(encPrivateKey, _syscoinOw2.default.string.label("aliasUpdateEstimatedFee:encPrivateKey").minLength(0));
                            (0, _syscoinOw2.default)(encPublicKey, _syscoinOw2.default.string.label("aliasUpdateEstimatedFee:encPublicKey").minLength(0));
                            (0, _syscoinOw2.default)(witness, _syscoinOw2.default.string.label("aliasUpdateEstimatedFee:witness").minLength(0));
                            _context12.next = 11;
                            return callRpc('aliasupdate', [aliasName, publicValue, address, acceptTransferFlags, expireTimestamp, encryptionPrivateKey, encryptionPublicKey, witness]);

                        case 11:
                            return _context12.abrupt("return", _context12.sent);

                        case 12:
                        case "end":
                            return _context12.stop();
                    }
                }
            }, _callee12, this);
        }));

        return function aliasUpdateEstimatedFee() {
            return _ref23.apply(this, arguments);
        };
    }();

    var listAliases = function () {
        var _ref25 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee13() {
            var _ref26 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref26$count = _ref26.count,
                count = _ref26$count === undefined ? 10 : _ref26$count,
                _ref26$from = _ref26.from,
                from = _ref26$from === undefined ? 0 : _ref26$from,
                options = _ref26.options;

            return _regenerator2.default.wrap(function _callee13$(_context13) {
                while (1) {
                    switch (_context13.prev = _context13.next) {
                        case 0:
                            if (count) {
                                (0, _syscoinOw2.default)(count, _syscoinOw2.default.number.label("listAliases:count").integer.greaterThan(0));
                            }
                            if (from) {
                                (0, _syscoinOw2.default)(from, _syscoinOw2.default.number.label("listAliases:from").integer.greaterThanOrEqual(0));
                            }
                            if (options) {
                                (0, _syscoinOw2.default)(options, _syscoinOw2.default.object.label("listAliases:options").not.empty);
                            }
                            _context13.next = 5;
                            return callRpc('listaliases', [count, from, options]);

                        case 5:
                            return _context13.abrupt("return", _context13.sent);

                        case 6:
                        case "end":
                            return _context13.stop();
                    }
                }
            }, _callee13, this);
        }));

        return function listAliases() {
            return _ref25.apply(this, arguments);
        };
    }();

    // Helper method that can eventually live in wallet


    var validateAlias = function () {
        var _ref27 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee14() {
            var _ref28 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                aliasName = _ref28.aliasName;

            var aliasData, addressValidationData;
            return _regenerator2.default.wrap(function _callee14$(_context14) {
                while (1) {
                    switch (_context14.prev = _context14.next) {
                        case 0:
                            (0, _syscoinOw2.default)(aliasName, _syscoinOw2.default.string.label("validateAlias:aliasName").not.empty);
                            _context14.prev = 1;
                            _context14.next = 4;
                            return aliasInfo(aliasName);

                        case 4:
                            aliasData = _context14.sent;
                            _context14.next = 7;
                            return utilityServices.validateAddress(aliasData.address);

                        case 7:
                            addressValidationData = _context14.sent;
                            return _context14.abrupt("return", addressValidationData);

                        case 11:
                            _context14.prev = 11;
                            _context14.t0 = _context14["catch"](1);
                            throw new Error("Could not validate alias:" + _context14.t0);

                        case 14:
                        case "end":
                            return _context14.stop();
                    }
                }
            }, _callee14, this, [[1, 11]]);
        }));

        return function validateAlias() {
            return _ref27.apply(this, arguments);
        };
    }();

    var listAliasesAfterBlock = function () {
        var _ref29 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee15() {
            var _ref30 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                blockNumber = _ref30.blockNumber;

            var options, aliases;
            return _regenerator2.default.wrap(function _callee15$(_context15) {
                while (1) {
                    switch (_context15.prev = _context15.next) {
                        case 0:
                            (0, _syscoinOw2.default)(blockNumber, _syscoinOw2.default.number.label("listAliasesAfterBlock:blockNumber").integer.greaterThan(0));
                            options = {
                                startblock: blockNumber
                            };
                            _context15.next = 4;
                            return listAliases({ count: 0, from: 0, options: options });

                        case 4:
                            aliases = _context15.sent;
                            return _context15.abrupt("return", aliases);

                        case 6:
                        case "end":
                            return _context15.stop();
                    }
                }
            }, _callee15, this);
        }));

        return function listAliasesAfterBlock() {
            return _ref29.apply(this, arguments);
        };
    }();

    return {
        balance: (0, _endpointDecorators.get)(aliasBalance),
        balanceMulti: (0, _endpointDecorators.get)(aliasBalanceMulti),
        info: (0, _endpointDecorators.get)(aliasInfo),
        isExpired: (0, _endpointDecorators.get)(aliasIsExpired),
        estimatedFeeForNew: (0, _endpointDecorators.get)(aliasNewEstimatedFee),
        list: (0, _endpointDecorators.get)(listAliases),
        listAfterBlock: (0, _endpointDecorators.get)(listAliasesAfterBlock),
        new: (0, _endpointDecorators.post)(aliasNew),
        pay: (0, _endpointDecorators.post)(aliasPay),
        update: (0, _endpointDecorators.post)(aliasUpdate),
        updateEstimatedFee: (0, _endpointDecorators.get)(aliasUpdateEstimatedFee),
        updateWhiteList: (0, _endpointDecorators.post)(aliasUpdateWhiteList),
        validate: (0, _endpointDecorators.post)(validateAlias),
        whiteList: (0, _endpointDecorators.get)(aliasWhiteList),
        aliasAddScript: (0, _endpointDecorators.post)(aliasAddScript)
    };
}