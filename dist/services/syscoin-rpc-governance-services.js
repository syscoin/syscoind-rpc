"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.syscoinRpcGovernanceServices = syscoinRpcGovernanceServices;

var _endpointDecorators = require("../endpoint-decorators");

var _syscoinOw = require("syscoin-ow");

var _syscoinOw2 = _interopRequireDefault(_syscoinOw);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function syscoinRpcGovernanceServices(callRpc) {
    var callGovernanceCommand = function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(args) {
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            (0, _syscoinOw2.default)(args, _syscoinOw2.default.string.label("callGovernanceCommand:args").not.empty);
                            _context.next = 3;
                            return callRpc('gobject', args);

                        case 3:
                            return _context.abrupt("return", _context.sent);

                        case 4:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function callGovernanceCommand(_x) {
            return _ref.apply(this, arguments);
        };
    }();

    var checkProposal = function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                hex = _ref3.hex;

            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            (0, _syscoinOw2.default)(proposal, _syscoinOw2.default.string.label("checkProposal:proposal").not.empty);
                            _context2.next = 3;
                            return callGovernanceCommand(['check', hex]);

                        case 3:
                            return _context2.abrupt("return", _context2.sent);

                        case 4:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        return function checkProposal() {
            return _ref2.apply(this, arguments);
        };
    }();

    var count = function () {
        var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
            var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                format = _ref5.format;

            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            (0, _syscoinOw2.default)(format, _syscoinOw2.default.string.label("count:format").not.empty);
                            _context3.next = 3;
                            return callGovernanceCommand(['count', format]);

                        case 3:
                            return _context3.abrupt("return", _context3.sent);

                        case 4:
                        case "end":
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        return function count() {
            return _ref4.apply(this, arguments);
        };
    }();

    var deserializeGovernanceObject = function () {
        var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
            var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                dataHex = _ref7.dataHex;

            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            (0, _syscoinOw2.default)(dataHex, _syscoinOw2.default.string.label("deserializeGovernanceObject.dataHex").not.empty);
                            _context4.next = 3;
                            return callGovernanceCommand(['deserialize']);

                        case 3:
                            return _context4.abrupt("return", _context4.sent);

                        case 4:
                        case "end":
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        return function deserializeGovernanceObject() {
            return _ref6.apply(this, arguments);
        };
    }();

    var differencesSinceLastComparison = function () {
        var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _context5.next = 2;
                            return callGovernanceCommand(['diff']);

                        case 2:
                            return _context5.abrupt("return", _context5.sent);

                        case 3:
                        case "end":
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        return function differencesSinceLastComparison() {
            return _ref8.apply(this, arguments);
        };
    }();

    var getByHash = function () {
        var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
            var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                hash = _ref10.hash;

            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            (0, _syscoinOw2.default)(hash, _syscoinOw2.default.string.label("getByHash.hash").not.empty);
                            _context6.next = 3;
                            return callGovernanceCommand(['get', hash]);

                        case 3:
                            return _context6.abrupt("return", _context6.sent);

                        case 4:
                        case "end":
                            return _context6.stop();
                    }
                }
            }, _callee6, this);
        }));

        return function getByHash() {
            return _ref9.apply(this, arguments);
        };
    }();

    var getGovernanceInfo = function () {
        var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
            return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            _context7.next = 2;
                            return callRpc('getgovernanceinfo');

                        case 2:
                            return _context7.abrupt("return", _context7.sent);

                        case 3:
                        case "end":
                            return _context7.stop();
                    }
                }
            }, _callee7, this);
        }));

        return function getGovernanceInfo() {
            return _ref11.apply(this, arguments);
        };
    }();

    var getSuperblockBudget = function () {
        var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8() {
            var _ref13 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                blockIndex = _ref13.blockIndex;

            return _regenerator2.default.wrap(function _callee8$(_context8) {
                while (1) {
                    switch (_context8.prev = _context8.next) {
                        case 0:
                            (0, _syscoinOw2.default)(blockIndex, _syscoinOw2.default.number.label("getSuperblockBudget:blockIndex").integer.greaterThan(0));
                            _context8.next = 3;
                            return callGovernanceCommand(['getsuperblockbudget', blockIndex]);

                        case 3:
                            return _context8.abrupt("return", _context8.sent);

                        case 4:
                        case "end":
                            return _context8.stop();
                    }
                }
            }, _callee8, this);
        }));

        return function getSuperblockBudget() {
            return _ref12.apply(this, arguments);
        };
    }();

    var getCurrentVotes = function () {
        var _ref14 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9() {
            return _regenerator2.default.wrap(function _callee9$(_context9) {
                while (1) {
                    switch (_context9.prev = _context9.next) {
                        case 0:
                            _context9.next = 2;
                            return callGovernanceCommand('getcurrentvotes');

                        case 2:
                            return _context9.abrupt("return", _context9.sent);

                        case 3:
                        case "end":
                            return _context9.stop();
                    }
                }
            }, _callee9, this);
        }));

        return function getCurrentVotes() {
            return _ref14.apply(this, arguments);
        };
    }();

    var getVotes = function () {
        var _ref15 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10() {
            var _ref16 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                hash = _ref16.hash;

            return _regenerator2.default.wrap(function _callee10$(_context10) {
                while (1) {
                    switch (_context10.prev = _context10.next) {
                        case 0:
                            (0, _syscoinOw2.default)(hash, _syscoinOw2.default.string.label("getVotes.hash").not.empty);
                            _context10.next = 3;
                            return callGovernanceCommand(['getvotes', hash]);

                        case 3:
                            return _context10.abrupt("return", _context10.sent);

                        case 4:
                        case "end":
                            return _context10.stop();
                    }
                }
            }, _callee10, this);
        }));

        return function getVotes() {
            return _ref15.apply(this, arguments);
        };
    }();

    var listAll = function () {
        var _ref17 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11() {
            return _regenerator2.default.wrap(function _callee11$(_context11) {
                while (1) {
                    switch (_context11.prev = _context11.next) {
                        case 0:
                            _context11.next = 2;
                            return callGovernanceCommand(['list', 'all']);

                        case 2:
                            return _context11.abrupt("return", _context11.sent);

                        case 3:
                        case "end":
                            return _context11.stop();
                    }
                }
            }, _callee11, this);
        }));

        return function listAll() {
            return _ref17.apply(this, arguments);
        };
    }();

    var listValid = function () {
        var _ref18 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee12() {
            return _regenerator2.default.wrap(function _callee12$(_context12) {
                while (1) {
                    switch (_context12.prev = _context12.next) {
                        case 0:
                            _context12.next = 2;
                            return callGovernanceCommand(['list', 'valid']);

                        case 2:
                            return _context12.abrupt("return", _context12.sent);

                        case 3:
                        case "end":
                            return _context12.stop();
                    }
                }
            }, _callee12, this);
        }));

        return function listValid() {
            return _ref18.apply(this, arguments);
        };
    }();

    var listFunding = function () {
        var _ref19 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee13() {
            return _regenerator2.default.wrap(function _callee13$(_context13) {
                while (1) {
                    switch (_context13.prev = _context13.next) {
                        case 0:
                            _context13.next = 2;
                            return callGovernanceCommand(['list', 'funding']);

                        case 2:
                            return _context13.abrupt("return", _context13.sent);

                        case 3:
                        case "end":
                            return _context13.stop();
                    }
                }
            }, _callee13, this);
        }));

        return function listFunding() {
            return _ref19.apply(this, arguments);
        };
    }();

    var listDelete = function () {
        var _ref20 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee14() {
            return _regenerator2.default.wrap(function _callee14$(_context14) {
                while (1) {
                    switch (_context14.prev = _context14.next) {
                        case 0:
                            _context14.next = 2;
                            return callGovernanceCommand(['list', 'delete']);

                        case 2:
                            return _context14.abrupt("return", _context14.sent);

                        case 3:
                        case "end":
                            return _context14.stop();
                    }
                }
            }, _callee14, this);
        }));

        return function listDelete() {
            return _ref20.apply(this, arguments);
        };
    }();

    var listEndorsed = function () {
        var _ref21 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee15() {
            return _regenerator2.default.wrap(function _callee15$(_context15) {
                while (1) {
                    switch (_context15.prev = _context15.next) {
                        case 0:
                            _context15.next = 2;
                            return callGovernanceCommand(['list', 'endorsed']);

                        case 2:
                            return _context15.abrupt("return", _context15.sent);

                        case 3:
                        case "end":
                            return _context15.stop();
                    }
                }
            }, _callee15, this);
        }));

        return function listEndorsed() {
            return _ref21.apply(this, arguments);
        };
    }();

    var prepareGovernanceObject = function () {
        var _ref22 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee16() {
            var _ref23 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                parentHash = _ref23.parentHash,
                revision = _ref23.revision,
                time = _ref23.time,
                dataHex = _ref23.dataHex;

            return _regenerator2.default.wrap(function _callee16$(_context16) {
                while (1) {
                    switch (_context16.prev = _context16.next) {
                        case 0:
                            (0, _syscoinOw2.default)(parentHash, _syscoinOw2.default.string.label('prepareGovernanceObject.parentHash').not.empty);
                            (0, _syscoinOw2.default)(revision, _syscoinOw2.default.number.label('prepareGovernanceObject.revision').not.empty);
                            (0, _syscoinOw2.default)(time, _syscoinOw2.default.number.label('prepareGovernanceObject.time').not.empty);
                            (0, _syscoinOw2.default)(dataHex, _syscoinOw2.default.string.label("prepareGovernanceObject.dataHex").not.empty);
                            _context16.next = 6;
                            return callGovernanceCommand(['prepare', parentHash, revision, time, dataHex]);

                        case 6:
                            return _context16.abrupt("return", _context16.sent);

                        case 7:
                        case "end":
                            return _context16.stop();
                    }
                }
            }, _callee16, this);
        }));

        return function prepareGovernanceObject() {
            return _ref22.apply(this, arguments);
        };
    }();

    var submitGovernanceObject = function () {
        var _ref24 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee17() {
            var _ref25 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                parentHash = _ref25.parentHash,
                revision = _ref25.revision,
                time = _ref25.time,
                dataHex = _ref25.dataHex,
                feeTxId = _ref25.feeTxId;

            return _regenerator2.default.wrap(function _callee17$(_context17) {
                while (1) {
                    switch (_context17.prev = _context17.next) {
                        case 0:
                            (0, _syscoinOw2.default)(parentHash, _syscoinOw2.default.string.label('submitGovernanceObject.parentHash').not.empty);
                            (0, _syscoinOw2.default)(revision, _syscoinOw2.default.number.label('submitGovernanceObject.revision').not.empty);
                            (0, _syscoinOw2.default)(time, _syscoinOw2.default.number.label('submitGovernanceObject.time').not.empty);
                            (0, _syscoinOw2.default)(dataHex, _syscoinOw2.default.string.label("submitGovernanceObject.dataHex").not.empty);
                            (0, _syscoinOw2.default)(feeTxId, _syscoinOw2.default.string.label("submitGovernanceObject.feeTxId").not.empty);
                            _context17.next = 7;
                            return callGovernanceCommand(['submit', parentHash, revision, time, dataHex, feeTxId]);

                        case 7:
                            return _context17.abrupt("return", _context17.sent);

                        case 8:
                        case "end":
                            return _context17.stop();
                    }
                }
            }, _callee17, this);
        }));

        return function submitGovernanceObject() {
            return _ref24.apply(this, arguments);
        };
    }();

    var governanceVote = function () {
        var _ref26 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee18() {
            return _regenerator2.default.wrap(function _callee18$(_context18) {
                while (1) {
                    switch (_context18.prev = _context18.next) {
                        case 0:
                            _context18.next = 2;
                            return callGovernanceCommand('vote');

                        case 2:
                            return _context18.abrupt("return", _context18.sent);

                        case 3:
                        case "end":
                            return _context18.stop();
                    }
                }
            }, _callee18, this);
        }));

        return function governanceVote() {
            return _ref26.apply(this, arguments);
        };
    }();

    var governanceVoteByName = function () {
        var _ref27 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee19() {
            return _regenerator2.default.wrap(function _callee19$(_context19) {
                while (1) {
                    switch (_context19.prev = _context19.next) {
                        case 0:
                            _context19.next = 2;
                            return callGovernanceCommand('vote-name');

                        case 2:
                            return _context19.abrupt("return", _context19.sent);

                        case 3:
                        case "end":
                            return _context19.stop();
                    }
                }
            }, _callee19, this);
        }));

        return function governanceVoteByName() {
            return _ref27.apply(this, arguments);
        };
    }();

    var governanceVoteMany = function () {
        var _ref28 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee20() {
            return _regenerator2.default.wrap(function _callee20$(_context20) {
                while (1) {
                    switch (_context20.prev = _context20.next) {
                        case 0:
                            _context20.next = 2;
                            return callGovernanceCommand('vote-many');

                        case 2:
                            return _context20.abrupt("return", _context20.sent);

                        case 3:
                        case "end":
                            return _context20.stop();
                    }
                }
            }, _callee20, this);
        }));

        return function governanceVoteMany() {
            return _ref28.apply(this, arguments);
        };
    }();

    var governanceVoteRaw = function () {
        var _ref29 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee21() {
            var _ref30 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                masterNodeTxHash = _ref30.masterNodeTxHash,
                masterNodeTxIndex = _ref30.masterNodeTxIndex,
                governanceHash = _ref30.governanceHash,
                voteSignal = _ref30.voteSignal,
                vote = _ref30.vote,
                time = _ref30.time,
                voteSignature = _ref30.voteSignature;

            var _args21 = arguments;
            return _regenerator2.default.wrap(function _callee21$(_context21) {
                while (1) {
                    switch (_context21.prev = _context21.next) {
                        case 0:
                            (0, _syscoinOw2.default)(masterNodeTxHash, _syscoinOw2.default.string.label("callGovernanceCommand:format").not.empty);
                            (0, _syscoinOw2.default)(masterNodeTxIndex, _syscoinOw2.default.number.label("callGovernanceCommand:format").integer.greaterThan(0));
                            (0, _syscoinOw2.default)(governanceHash, _syscoinOw2.default.string.label("callGovernanceCommand:format").not.empty);
                            (0, _syscoinOw2.default)(voteSignal, _syscoinOw2.default.string.label("callGovernanceCommand:format").not.empty);
                            (0, _syscoinOw2.default)(vote, _syscoinOw2.default.string.label("callGovernanceCommand:vote").is(function (x) {
                                return x == "yes" || x == "no" || x == "abstain";
                            }));
                            (0, _syscoinOw2.default)(time, _syscoinOw2.default.number.label("callGovernanceCommand:time").integer.greaterThan(0));
                            (0, _syscoinOw2.default)(voteSignature, _syscoinOw2.default.string.label("callGovernanceCommand:voteSignature").not.empty);
                            _context21.next = 9;
                            return callRpc('voteraw', _args21);

                        case 9:
                            return _context21.abrupt("return", _context21.sent);

                        case 10:
                        case "end":
                            return _context21.stop();
                    }
                }
            }, _callee21, this);
        }));

        return function governanceVoteRaw() {
            return _ref29.apply(this, arguments);
        };
    }();

    return {
        checkProposal: (0, _endpointDecorators.get)(checkProposal),
        count: (0, _endpointDecorators.get)(count),
        deserializeGovernanceObject: (0, _endpointDecorators.post)(deserializeGovernanceObject),
        differencesSinceLastComparison: (0, _endpointDecorators.get)(differencesSinceLastComparison),
        getByHash: (0, _endpointDecorators.get)(getByHash),
        getGovernanceInfo: (0, _endpointDecorators.get)(getGovernanceInfo),
        getSuperblockBudget: (0, _endpointDecorators.get)(getSuperblockBudget),
        getCurrentVotes: (0, _endpointDecorators.get)(getCurrentVotes),
        getVotes: (0, _endpointDecorators.get)(getVotes),
        listAll: (0, _endpointDecorators.get)(listAll),
        listFunding: (0, _endpointDecorators.get)(listFunding),
        listDelete: (0, _endpointDecorators.get)(listDelete),
        listValid: (0, _endpointDecorators.get)(listValid),
        listEndorsed: (0, _endpointDecorators.get)(listEndorsed),
        prepareGovernanceObject: (0, _endpointDecorators.get)(prepareGovernanceObject),
        submitGovernanceObject: (0, _endpointDecorators.post)(submitGovernanceObject),
        vote: (0, _endpointDecorators.post)(governanceVote),
        voteByName: (0, _endpointDecorators.post)(governanceVoteByName),
        voteMany: (0, _endpointDecorators.get)(governanceVoteMany),
        voteRaw: (0, _endpointDecorators.post)(governanceVoteRaw),
        gobject: (0, _endpointDecorators.post)(callGovernanceCommand)
    };
}