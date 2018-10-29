"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.syscoinRpcGenerationServices = syscoinRpcGenerationServices;

var _endpointDecorators = require("../endpoint-decorators");

var _syscoinOw = require("syscoin-ow");

var _syscoinOw2 = _interopRequireDefault(_syscoinOw);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function syscoinRpcGenerationServices(callRpc) {
    var generate = function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                numberOfBlocks = _ref2.numberOfBlocks,
                _ref2$maxTries = _ref2.maxTries,
                maxTries = _ref2$maxTries === undefined ? 10000 : _ref2$maxTries;

            var _args = arguments;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            (0, _syscoinOw2.default)(numberOfBlocks, _syscoinOw2.default.number.label("generate:numberOfBlocks").integer.greaterThan(0));
                            (0, _syscoinOw2.default)(maxTries, _syscoinOw2.default.number.label("generate:maxTries").integer.greaterThan(0));
                            _context.next = 4;
                            return callRpc('generate', _args);

                        case 4:
                            return _context.abrupt("return", _context.sent);

                        case 5:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function generate() {
            return _ref.apply(this, arguments);
        };
    }();

    var generateToAddress = function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                numberOfBlocks = _ref4.numberOfBlocks,
                address = _ref4.address,
                _ref4$maxTries = _ref4.maxTries,
                maxTries = _ref4$maxTries === undefined ? 10000 : _ref4$maxTries;

            var _args2 = arguments;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            (0, _syscoinOw2.default)(numberOfBlocks, _syscoinOw2.default.number.label("generateToAddress:numberOfBlocks").integer.greaterThan(0));
                            (0, _syscoinOw2.default)(address, _syscoinOw2.default.string.label("generateToAddress:address").not.empty);
                            (0, _syscoinOw2.default)(maxTries, _syscoinOw2.default.number.label("generateToAddress:maxTries").integer.greaterThan(0));
                            _context2.next = 5;
                            return callRpc('generatetoaddress', _args2);

                        case 5:
                            return _context2.abrupt("return", _context2.sent);

                        case 6:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        return function generateToAddress() {
            return _ref3.apply(this, arguments);
        };
    }();

    return {
        generate: (0, _endpointDecorators.post)(generate),
        generateToAddress: (0, _endpointDecorators.post)(generateToAddress)
    };
}