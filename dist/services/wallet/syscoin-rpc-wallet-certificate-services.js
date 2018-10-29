"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.walletCertificateServices = walletCertificateServices;

var _syscoinOw = require("syscoin-ow");

var _syscoinOw2 = _interopRequireDefault(_syscoinOw);

var _endpointDecorators = require("../../endpoint-decorators");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function walletCertificateServices(callRpc) {
    var certInfo = function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(guid) {
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            (0, _syscoinOw2.default)(guid, _syscoinOw2.default.string.label("certInfo:guid").not.empty);
                            _context.next = 3;
                            return callRpc('certinfo', [guid]);

                        case 3:
                            return _context.abrupt("return", _context.sent);

                        case 4:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function certInfo(_x) {
            return _ref.apply(this, arguments);
        };
    }();

    var certNew = function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(alias, title, publicValue, category, witness) {
            var _args2 = arguments;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            (0, _syscoinOw2.default)(alias, _syscoinOw2.default.string.label("certNew:alias").not.empty);
                            (0, _syscoinOw2.default)(title, _syscoinOw2.default.string.label("certNew:title").not.empty);
                            (0, _syscoinOw2.default)(publicValue, _syscoinOw2.default.string.label("certNew:publicValue").string.minLength(0));
                            (0, _syscoinOw2.default)(category, _syscoinOw2.default.string.label("certNew:category").not.empty);
                            (0, _syscoinOw2.default)(witness, _syscoinOw2.default.string.label("certNew:witness").not.empty);
                            _context2.next = 7;
                            return callRpc('certnew', _args2);

                        case 7:
                            return _context2.abrupt("return", _context2.sent);

                        case 8:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        return function certNew(_x2, _x3, _x4, _x5, _x6) {
            return _ref2.apply(this, arguments);
        };
    }();

    var certTransfer = function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(guid, alias, publicValue, accessFlags, witness) {
            var _args3 = arguments;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            (0, _syscoinOw2.default)(guid, _syscoinOw2.default.string.label("certTransfer:guid").not.empty);
                            (0, _syscoinOw2.default)(alias, _syscoinOw2.default.string.label("certTransfer:alias").not.empty);
                            (0, _syscoinOw2.default)(publicValue, _syscoinOw2.default.string.label("certTransfer:publicValue").string.minLength(0));
                            (0, _syscoinOw2.default)(accessFlags, _syscoinOw2.default.number.label("certTransfer:accessFlags").is(function (x) {
                                return 0 <= x && x <= 2;
                            }));
                            (0, _syscoinOw2.default)(witness, _syscoinOw2.default.string.label("certTransfer:witness").not.empty);
                            _context3.next = 7;
                            return callRpc('certtransfer', _args3);

                        case 7:
                            return _context3.abrupt("return", _context3.sent);

                        case 8:
                        case "end":
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        return function certTransfer(_x7, _x8, _x9, _x10, _x11) {
            return _ref3.apply(this, arguments);
        };
    }();

    var certUpdate = function () {
        var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(guid, title, publicValue, category, witness) {
            var _args4 = arguments;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            (0, _syscoinOw2.default)(guid, _syscoinOw2.default.string.label("certUpdate:guid").not.empty);
                            (0, _syscoinOw2.default)(alias, _syscoinOw2.default.string.label("certUpdate:alias").not.empty);
                            (0, _syscoinOw2.default)(publicValue, _syscoinOw2.default.string.label("certUpdate:publicValue").string.minLength(0));
                            (0, _syscoinOw2.default)(category, _syscoinOw2.default.string.label("certUpdate:category").not.empty);
                            (0, _syscoinOw2.default)(witness, _syscoinOw2.default.string.label("certUpdate:witness").not.empty);
                            _context4.next = 7;
                            return callRpc('certupdate', _args4);

                        case 7:
                            return _context4.abrupt("return", _context4.sent);

                        case 8:
                        case "end":
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        return function certUpdate(_x12, _x13, _x14, _x15, _x16) {
            return _ref4.apply(this, arguments);
        };
    }();

    var listCerts = function () {
        var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(count, from, options) {
            var _args5 = arguments;
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            if (count) {
                                (0, _syscoinOw2.default)(count, _syscoinOw2.default.number.label("listCerts:count").integer.greaterThan(0));
                            }
                            if (from) {
                                (0, _syscoinOw2.default)(from, _syscoinOw2.default.number.label("listCerts:from").integer.greaterThan(0));
                            }
                            if (options) {
                                (0, _syscoinOw2.default)(options, _syscoinOw2.default.objects.label("listCerts:options").not.empty);
                            }
                            _context5.next = 5;
                            return callRpc('listcerts', _args5);

                        case 5:
                            return _context5.abrupt("return", _context5.sent);

                        case 6:
                        case "end":
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        return function listCerts(_x17, _x18, _x19) {
            return _ref5.apply(this, arguments);
        };
    }();

    var listCertificatesAfterBlock = function () {
        var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(blockNumber) {
            var options, certs;
            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            (0, _syscoinOw2.default)(blockNumber, _syscoinOw2.default.number.label("listCertificatesAfterBlock:blockNumber").integer.greaterThan(0));
                            options = {
                                startblock: blockNumber
                            };
                            _context6.next = 4;
                            return listCerts(0, 0, options);

                        case 4:
                            certs = _context6.sent;
                            return _context6.abrupt("return", certs);

                        case 6:
                        case "end":
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        return function listCertificatesAfterBlock(_x20) {
            return _ref6.apply(this, arguments);
        };
    }();

    return {
        info: (0, _endpointDecorators.get)(certInfo),
        list: (0, _endpointDecorators.get)(listCerts),
        listAfterBlock: (0, _endpointDecorators.get)(listCertificatesAfterBlock),
        new: (0, _endpointDecorators.post)(certNew),
        transfer: (0, _endpointDecorators.post)(certTransfer),
        update: (0, _endpointDecorators.post)(certUpdate)
    };
}