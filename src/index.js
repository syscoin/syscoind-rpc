import axios from 'axios';
import { syscoinRpcAddressIndexServices } from './services/syscoin-rpc-address-index-services';
import { syscoinRpcBlockchainServices } from './services/syscoin-rpc-blockchain-services';
import { syscoinRpcDiagnosticServices } from './services/syscoin-rpc-diagnostic-services';
import { syscoinRpcEstimateServices } from './services/syscoin-rpc-estimate-services';
import { syscoinRpcGenerationServices } from './services/syscoin-rpc-generation-services';
import { syscoinRpcGovernanceServices } from './services/syscoin-rpc-governance-services';
import { syscoinRpcMasternodeServices } from './services/syscoin-rpc-masternode-services';
import { syscoinRpcMessagingServices } from './services/syscoin-rpc-messaging-services';
import { syscoinRpcMiningServices } from './services/syscoin-rpc-mining-services';
import { syscoinRpcNetworkServices } from './services/syscoin-rpc-network-services';
import { syscoinRpcSynchronizationServices } from './services/syscoin-rpc-synchronization-services';
import { syscoinRpcTransactionServices } from './services/syscoin-rpc-transaction-services';
import { syscoinRpcUtilityServices } from './services/syscoin-rpc-utility-services';
import { syscoinRpcWalletServices } from './services/syscoin-rpc-wallet-services';
import { syscoinRpcMixingServices } from './services/syscoin-rpc-mixing-services';
import LoggerFactory  from './loggers/logger-factory';
import LOG_LEVELS from "./loggers/log-levels";
import ConnectionRefusedErrorHandler from './error-handlers/connection-refused-error-handler';
import AuthorizationFailedErrorHandler from './error-handlers/authorization-failed-error-handler';
import RpcMethodNotFoundErrorHandler from './error-handlers/rpc-method-not-found-error';
import RpcException from './rpc-exception';
import RpcErrorHandler from './error-handlers/rpc-error-handler';
import NonSpecificNetworkErrorHandler from './error-handlers/non-specific-network-error-handler';

export default class SyscoinRpcClient {


    constructor({baseUrl="localhost",
                port=8368,
                username='',
                password='',
                useSsl=false,
                timeout=30000,
                customHttpAgent,
                loggerLevel=LOG_LEVELS.silent, whitelist=[], blacklist=[]} = {}) {

        let configOptions = { baseUrl, port, username, password, useSsl, timeout, customHttpAgent, loggerLevel }

        let logger = LoggerFactory.createLogger(configOptions.loggerLevel, whitelist, blacklist);

        let instance = axios.create(createConfigurationObject(
            configOptions.username,
            configOptions.password,
            configOptions.useSsl,
            configOptions.timeout,
            configOptions.customHttpAgent));
            
        let url = `${configOptions.useSsl ? "https" : "http"}://${configOptions.baseUrl}:${configOptions.port}`;


        let callRpc = async (methodName, args=[]) => {
            let data = {
                jsonrpc: "1.0",
                method: methodName.toLowerCase(),  // safety check: the RPC expects methods in all lowercase,
                                                   // so we'll take that knowledge burden here instead of making
                                                   // the consuming methods worry about it
                params: Array.from(args).filter(element => element !== undefined)
            };
            logger.logRpcCall(data);

            try {
                return await getResponseFromRpcCall(url, data, logger);
            }
            catch (rpcError) {
                return getErrorInformationFromRpcCall({rpcError: rpcError, 
                        methodName: data.method, 
                        logger: logger,
                        url: url});                
            }
        }

        this.callRpc = callRpc;
        this.addressIndexServices = syscoinRpcAddressIndexServices(callRpc);
        this.blockchainServices = syscoinRpcBlockchainServices(callRpc);
        this.diagnosticServices = syscoinRpcDiagnosticServices(callRpc);
        this.estimateServices = syscoinRpcEstimateServices(callRpc);
        this.generationServices = syscoinRpcGenerationServices(callRpc);
        this.governanceServices = syscoinRpcGovernanceServices(callRpc);
        this.masternodeServices = syscoinRpcMasternodeServices(callRpc);
        this.messagingServices = syscoinRpcMessagingServices(callRpc);
        this.miningServices = syscoinRpcMiningServices(callRpc);
        this.mixingServices = syscoinRpcMixingServices(callRpc);
        this.networkServices = syscoinRpcNetworkServices(callRpc);
        this.synchronizationServices = syscoinRpcSynchronizationServices(callRpc);
        this.transactionServices = syscoinRpcTransactionServices(callRpc);
        this.utilityServices = syscoinRpcUtilityServices(callRpc);
        this.walletServices = syscoinRpcWalletServices(callRpc, this.utilityServices);

        let createCustomErrorResponse = (errorMessage, code=-1000) => {
            let errorResponse = {
                result: null,
                error: errorMessage,
                code: code
            };
            return new RpcException(errorResponse);
        }

        async function getResponseFromRpcCall(url, data, logger) {
            let responseFromRpc = await instance.post(url, data);
            let dataFromRpc = responseFromRpc.data;

            if (dataFromRpc) {
                logger.logDataFromRpc(data.method, dataFromRpc); 
                return dataFromRpc.result ? dataFromRpc.result : dataFromRpc
            }
            else {
                logger.logAlternateResponseFromRpc(data.method, responseFromRpc);
                return responseFromRpc;
            }
        }


        function getErrorInformationFromRpcCall({rpcError, methodName, url, logger}) {
            
            let commonErrorHandlers = [
                new ConnectionRefusedErrorHandler(url, logger, createCustomErrorResponse),
                new AuthorizationFailedErrorHandler(url, logger, createCustomErrorResponse),
                new RpcMethodNotFoundErrorHandler(methodName, logger, createCustomErrorResponse),
                new RpcErrorHandler(methodName, logger), 
                new NonSpecificNetworkErrorHandler(url, logger, createCustomErrorResponse)
            ]

            for (let i = 0; i < commonErrorHandlers.length; ++i) {
                if (commonErrorHandlers[i].matchesType(rpcError)) {
                    throw commonErrorHandlers[i].logAndReturn(rpcError);
                }
            }

            // If it's none of these, we've encountered something totally unknown.
            throw new RpcException({
                result: rpcError,
                error: 'An unrecognized error occurred',
                code: -2000
            });


        }

        function createConfigurationObject(username, password, useSsl,timeout, customHttpAgent) {
            let configurationObject = {
                auth: {
                    username: username,
                    password: password    
                },
                timeout: timeout
            }
            
            if (customHttpAgent) {
                let agentProperty = useSsl ? "httpsAgent" : "httpAgent";
                configurationObject[agentProperty] = customHttpAgent;
            } 
            
            return configurationObject;
        }

        // General commands that don't seem to fit in a logical grouping
        this.sentinelPing = async(versionString) => {
            return await callRpc('sentinelping',[versionString]);
        }

        this.sporks = {
            showCurrentValues: async() => {
                return await callRpc('spork',['all']);
            },
            showSporkActivationStatus: async() => {
                return await callRpc('spork',['active']);
            }
        }
    }
}
