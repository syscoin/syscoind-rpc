'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _syscoinRpcAddressIndexServices = require('./services/syscoin-rpc-address-index-services');

var _syscoinRpcBlockchainServices = require('./services/syscoin-rpc-blockchain-services');

var _syscoinRpcDiagnosticServices = require('./services/syscoin-rpc-diagnostic-services');

var _syscoinRpcEstimateServices = require('./services/syscoin-rpc-estimate-services');

var _syscoinRpcGenerationServices = require('./services/syscoin-rpc-generation-services');

var _syscoinRpcGovernanceServices = require('./services/syscoin-rpc-governance-services');

var _syscoinRpcMasternodeServices = require('./services/syscoin-rpc-masternode-services');

var _syscoinRpcMessagingServices = require('./services/syscoin-rpc-messaging-services');

var _syscoinRpcMiningServices = require('./services/syscoin-rpc-mining-services');

var _syscoinRpcNetworkServices = require('./services/syscoin-rpc-network-services');

var _syscoinRpcSynchronizationServices = require('./services/syscoin-rpc-synchronization-services');

var _syscoinRpcTransactionServices = require('./services/syscoin-rpc-transaction-services');

var _syscoinRpcUtilityServices = require('./services/syscoin-rpc-utility-services');

var _syscoinRpcWalletServices = require('./services/syscoin-rpc-wallet-services');

var _syscoinRpcMixingServices = require('./services/syscoin-rpc-mixing-services');

var _loggerFactory = require('./loggers/logger-factory');

var _loggerFactory2 = _interopRequireDefault(_loggerFactory);

var _logLevels = require('./loggers/log-levels');

var _logLevels2 = _interopRequireDefault(_logLevels);

var _connectionRefusedErrorHandler = require('./error-handlers/connection-refused-error-handler');

var _connectionRefusedErrorHandler2 = _interopRequireDefault(_connectionRefusedErrorHandler);

var _authorizationFailedErrorHandler = require('./error-handlers/authorization-failed-error-handler');

var _authorizationFailedErrorHandler2 = _interopRequireDefault(_authorizationFailedErrorHandler);

var _rpcMethodNotFoundError = require('./error-handlers/rpc-method-not-found-error');

var _rpcMethodNotFoundError2 = _interopRequireDefault(_rpcMethodNotFoundError);

var _rpcException = require('./rpc-exception');

var _rpcException2 = _interopRequireDefault(_rpcException);

var _rpcErrorHandler = require('./error-handlers/rpc-error-handler');

var _rpcErrorHandler2 = _interopRequireDefault(_rpcErrorHandler);

var _nonSpecificNetworkErrorHandler = require('./error-handlers/non-specific-network-error-handler');

var _nonSpecificNetworkErrorHandler2 = _interopRequireDefault(_nonSpecificNetworkErrorHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SyscoinRpcClient = function SyscoinRpcClient() {
    var _this = this;

    var getResponseFromRpcCall = function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(url, data, logger) {
            var responseFromRpc, dataFromRpc;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return instance.post(url, data);

                        case 2:
                            responseFromRpc = _context2.sent;
                            dataFromRpc = responseFromRpc.data;

                            if (!dataFromRpc) {
                                _context2.next = 9;
                                break;
                            }

                            logger.logDataFromRpc(data.method, dataFromRpc);
                            return _context2.abrupt('return', dataFromRpc.result ? dataFromRpc.result : dataFromRpc);

                        case 9:
                            logger.logAlternateResponseFromRpc(data.method, responseFromRpc);
                            return _context2.abrupt('return', responseFromRpc);

                        case 11:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        return function getResponseFromRpcCall(_x5, _x6, _x7) {
            return _ref3.apply(this, arguments);
        };
    }();

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$baseUrl = _ref.baseUrl,
        baseUrl = _ref$baseUrl === undefined ? "localhost" : _ref$baseUrl,
        _ref$port = _ref.port,
        port = _ref$port === undefined ? 8368 : _ref$port,
        _ref$username = _ref.username,
        username = _ref$username === undefined ? '' : _ref$username,
        _ref$password = _ref.password,
        password = _ref$password === undefined ? '' : _ref$password,
        _ref$useSsl = _ref.useSsl,
        useSsl = _ref$useSsl === undefined ? false : _ref$useSsl,
        _ref$timeout = _ref.timeout,
        timeout = _ref$timeout === undefined ? 30000 : _ref$timeout,
        customHttpAgent = _ref.customHttpAgent,
        _ref$loggerLevel = _ref.loggerLevel,
        loggerLevel = _ref$loggerLevel === undefined ? _logLevels2.default.silent : _ref$loggerLevel,
        _ref$whitelist = _ref.whitelist,
        whitelist = _ref$whitelist === undefined ? [] : _ref$whitelist,
        _ref$blacklist = _ref.blacklist,
        blacklist = _ref$blacklist === undefined ? [] : _ref$blacklist;

    (0, _classCallCheck3.default)(this, SyscoinRpcClient);


    var configOptions = { baseUrl: baseUrl, port: port, username: username, password: password, useSsl: useSsl, timeout: timeout, customHttpAgent: customHttpAgent, loggerLevel: loggerLevel };

    var logger = _loggerFactory2.default.createLogger(configOptions.loggerLevel, whitelist, blacklist);

    var instance = _axios2.default.create(createConfigurationObject(configOptions.username, configOptions.password, configOptions.useSsl, configOptions.timeout, configOptions.customHttpAgent));

    var url = (configOptions.useSsl ? "https" : "http") + '://' + configOptions.baseUrl + ':' + configOptions.port;

    var callRpc = function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(methodName) {
            var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            var data;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            data = {
                                jsonrpc: "1.0",
                                method: methodName.toLowerCase(), // safety check: the RPC expects methods in all lowercase,
                                // so we'll take that knowledge burden here instead of making
                                // the consuming methods worry about it
                                params: (0, _from2.default)(args).filter(function (element) {
                                    return element !== undefined;
                                })
                            };

                            logger.logRpcCall(data);

                            _context.prev = 2;
                            _context.next = 5;
                            return getResponseFromRpcCall(url, data, logger);

                        case 5:
                            return _context.abrupt('return', _context.sent);

                        case 8:
                            _context.prev = 8;
                            _context.t0 = _context['catch'](2);
                            return _context.abrupt('return', getErrorInformationFromRpcCall({ rpcError: _context.t0,
                                methodName: data.method,
                                logger: logger,
                                url: url }));

                        case 11:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this, [[2, 8]]);
        }));

        return function callRpc(_x3) {
            return _ref2.apply(this, arguments);
        };
    }();

    this.callRpc = callRpc;
    this.addressIndexServices = (0, _syscoinRpcAddressIndexServices.syscoinRpcAddressIndexServices)(callRpc);
    this.blockchainServices = (0, _syscoinRpcBlockchainServices.syscoinRpcBlockchainServices)(callRpc);
    this.diagnosticServices = (0, _syscoinRpcDiagnosticServices.syscoinRpcDiagnosticServices)(callRpc);
    this.estimateServices = (0, _syscoinRpcEstimateServices.syscoinRpcEstimateServices)(callRpc);
    this.generationServices = (0, _syscoinRpcGenerationServices.syscoinRpcGenerationServices)(callRpc);
    this.governanceServices = (0, _syscoinRpcGovernanceServices.syscoinRpcGovernanceServices)(callRpc);
    this.masternodeServices = (0, _syscoinRpcMasternodeServices.syscoinRpcMasternodeServices)(callRpc);
    this.messagingServices = (0, _syscoinRpcMessagingServices.syscoinRpcMessagingServices)(callRpc);
    this.miningServices = (0, _syscoinRpcMiningServices.syscoinRpcMiningServices)(callRpc);
    this.mixingServices = (0, _syscoinRpcMixingServices.syscoinRpcMixingServices)(callRpc);
    this.networkServices = (0, _syscoinRpcNetworkServices.syscoinRpcNetworkServices)(callRpc);
    this.synchronizationServices = (0, _syscoinRpcSynchronizationServices.syscoinRpcSynchronizationServices)(callRpc);
    this.transactionServices = (0, _syscoinRpcTransactionServices.syscoinRpcTransactionServices)(callRpc);
    this.utilityServices = (0, _syscoinRpcUtilityServices.syscoinRpcUtilityServices)(callRpc);
    this.walletServices = (0, _syscoinRpcWalletServices.syscoinRpcWalletServices)(callRpc, this.utilityServices);

    var createCustomErrorResponse = function createCustomErrorResponse(errorMessage) {
        var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1000;

        var errorResponse = {
            result: null,
            error: errorMessage,
            code: code
        };
        return new _rpcException2.default(errorResponse);
    };

    function getErrorInformationFromRpcCall(_ref4) {
        var rpcError = _ref4.rpcError,
            methodName = _ref4.methodName,
            url = _ref4.url,
            logger = _ref4.logger;


        var commonErrorHandlers = [new _connectionRefusedErrorHandler2.default(url, logger, createCustomErrorResponse), new _authorizationFailedErrorHandler2.default(url, logger, createCustomErrorResponse), new _rpcMethodNotFoundError2.default(methodName, logger, createCustomErrorResponse), new _rpcErrorHandler2.default(methodName, logger), new _nonSpecificNetworkErrorHandler2.default(url, logger, createCustomErrorResponse)];

        for (var i = 0; i < commonErrorHandlers.length; ++i) {
            if (commonErrorHandlers[i].matchesType(rpcError)) {
                throw commonErrorHandlers[i].logAndReturn(rpcError);
            }
        }

        // If it's none of these, we've encountered something totally unknown.
        throw new _rpcException2.default({
            result: rpcError,
            error: 'An unrecognized error occurred',
            code: -2000
        });
    }

    function createConfigurationObject(username, password, useSsl, timeout, customHttpAgent) {
        var configurationObject = {
            auth: {
                username: username,
                password: password
            },
            timeout: timeout
        };

        if (customHttpAgent) {
            var agentProperty = useSsl ? "httpsAgent" : "httpAgent";
            configurationObject[agentProperty] = customHttpAgent;
        }

        return configurationObject;
    }

    // General commands that don't seem to fit in a logical grouping
    this.sentinelPing = function () {
        var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(versionString) {
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return callRpc('sentinelping', [versionString]);

                        case 2:
                            return _context3.abrupt('return', _context3.sent);

                        case 3:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, _this);
        }));

        return function (_x8) {
            return _ref5.apply(this, arguments);
        };
    }();
};

exports.default = SyscoinRpcClient;