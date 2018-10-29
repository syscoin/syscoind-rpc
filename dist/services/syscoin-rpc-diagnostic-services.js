'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.syscoinRpcDiagnosticServices = syscoinRpcDiagnosticServices;

var _endpointDecorators = require('../endpoint-decorators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function syscoinRpcDiagnosticServices(callRpc) {
    var getAllRawRpcMethods = function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var rawHelpResult, helpMethodDefinitions, helpMethodDefinitionArray;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return callRpc('help');

                        case 2:
                            rawHelpResult = _context.sent;

                            if (!rawHelpResult.error) {
                                _context.next = 5;
                                break;
                            }

                            return _context.abrupt('return', rawHelpResult);

                        case 5:
                            helpMethodDefinitions = rawHelpResult.split('\n');
                            helpMethodDefinitionArray = [];

                            helpMethodDefinitions.forEach(function (helpDef) {
                                if (!helpLineIsHeader(helpDef) && helpDef.length > 0) {
                                    var methodArgumentSplitIndex = helpDef.indexOf(' ');
                                    if (methodArgumentSplitIndex === -1) {
                                        helpMethodDefinitionArray.push({ method: helpDef });
                                    } else {
                                        var method = helpDef.substring(0, methodArgumentSplitIndex);
                                        var argumentString = helpDef.substring(methodArgumentSplitIndex + 1);
                                        helpMethodDefinitionArray.push({
                                            method: method,
                                            arguments: argumentString
                                        });
                                    }
                                }
                            });
                            return _context.abrupt('return', helpMethodDefinitionArray);

                        case 9:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function getAllRawRpcMethods() {
            return _ref.apply(this, arguments);
        };
    }();

    var helpForRpcCommand = function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(_ref2) {
            var commandName = _ref2.commandName;
            var response;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return callRpc('help', [commandName]);

                        case 2:
                            response = _context2.sent;
                            return _context2.abrupt('return', response);

                        case 4:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        return function helpForRpcCommand(_x) {
            return _ref3.apply(this, arguments);
        };
    }();

    return {
        getAllRawRpcMethods: (0, _endpointDecorators.get)(getAllRawRpcMethods),
        helpForRpcCommand: (0, _endpointDecorators.get)(helpForRpcCommand)
    };

    function helpLineIsHeader(helpDefinition) {
        return helpDefinition.startsWith("==");
    }
}