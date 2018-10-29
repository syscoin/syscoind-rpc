// Disclosure: do not love Typescript.
// However, for the proletariat out there we have provided
// these type definitions so that you too can have the warm
// hug of static typing inside of a dynamic language.  Boo yah.

import AddressIndexServices from './supporting-types/address-index-services';
import BlockchainServices from './supporting-types/blockchain-services';
import DiagnosticServices from './supporting-types/diagnostic-services';
import EstimateServices from './supporting-types/estimate-services';
import GenerationServices from './supporting-types/generation-services';
import GovernanceServices from './supporting-types/governance-services';
import MasternodeServices from './supporting-types/masternode-services';
import MessagingServices from './supporting-types/messaging-services';
import MiningServices from './supporting-types/mining-services';
import MixingServices from './supporting-types/mixing-services';
import NetworkServices from './supporting-types/network-services';
import SynchronizationServices from './supporting-types/synchronization-services';
import TransactionServices from './supporting-types/transaction-services';
import UtilityServices from './supporting-types/utility-services';

declare module 'syscoin-js' {

    export default class SyscoinRpcClient {
        constructor({baseUrl,
                port,
                username,
                password,
                useSsl,
                timeout,
                customHttpAgent,
                loggerLevel,
                whitelist,
                blacklist}: {baseUrl?: string,
                    port?: number | string,
                    username?: string,
                    password?: string,
                    useSsl?: boolean,
                    timeout?: number,
                    customHttpAgent?: any,
                    loggerLevel?: string,
                    whitelist?: Array<string>,
                    blacklist?: Array<string>});
        
        addressIndexServices: AddressIndexServices;
        blockchainServices: BlockchainServices;
        diagnosticServices: DiagnosticServices;
        generationServices: GenerationServices;
        governanceServices: GovernanceServices;
        masternodeServices: MasternodeServices;
        messagingServices: MessagingServices;
        miningServices: MiningServices;
        mixingServices: MixingServices;
        networkServices: NetworkServices;
        synchronizationServices: SynchronizationServices;
        transactionServices: TransactionServices;
        utilityServices: UtilityServices;

        callRpc(methodName: string, arguments?: Array<string>): Promise<any>;
    }
}