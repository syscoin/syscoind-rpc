import * as util from 'util' // has no default export

// This class is kept as an registry for integration test purposes.  
// The intent is that as functions are added or deprecated in newer versions of the core,
// this registry will a) indicate what methods in the core are mapped to which methods in the SDK
// b) whether the SDK has functional parity with the syscoin core.

// This class should only be representing one core "version" at a time.  Rather than multi-targeting
// the way the bitcoin-core library does, subsequent core versions will carry an npm package version upgrade.
export default class SyscoinParityRegistry {
    constructor(syscoinClient) {
        this.client = syscoinClient;
        this.methodRegistry = this.createMethodRegistry();

        this.assertNoEmptyMappingsInRegistry();
    }

    assertNoEmptyMappingsInRegistry() {
        this.methodRegistry.forEach(entry => {
            if (entry.sdkMethods.length === 0 ||
                entry.sdkMethods.filter(sdkMethod => sdkMethod).length === 0) {
                throw new Error(`The entry for core method '${entry.coreMethod}' contains a non-existent SDK method.  Please revise.}`);
            }
        })
    }

    async getParityCheck() {
        let coreMethodList = await this.client.diagnosticServices.getAllRawRpcMethods();
        if (coreMethodList.error) {
            throw Error(`Could not perform parity check.  Error encountered: ${coreMethodList.error}`)
        }
        let registryCoreMethods = new Set(this.methodRegistry.map(regEntry => regEntry.coreMethod));
        let missingMethods = coreMethodList.filter(coreMethod => !registryCoreMethods.has(coreMethod.method));

        let percentageCoverage = ((coreMethodList.length - missingMethods.length) / coreMethodList.length) * 100;
        return {
            coreMethodCount: coreMethodList.length,
            registryMapCount: this.methodRegistry.length,
            percentageCoverage: percentageCoverage,
            missingMethods: missingMethods
        }
    }

    createMethodRecord(coreMethod) {
        if (arguments.length === 1) {
            throw new Error(`Method parity requires at least one SDK method to be submitted in conjunction with the core method.  No corresponding SDK method was supplied for '${coreMethod}.'`)
        }
        return {
            coreMethod: coreMethod,
            sdkMethods: Array.from(arguments).slice(1)
        }
    }

    createMethodRegistry() {
        let registry = [];
        registry = registry.concat(this.createUtilityMethodMaps(this.client.utilityServices));
        registry = registry.concat(this.createTransactionMethodMaps(this.client.transactionServices));
        registry = registry.concat(this.createSynchronizationMethodMaps(this.client.synchronizationServices));
        registry = registry.concat(this.createNetworkMethodMaps(this.client.networkServices));
        registry = registry.concat(this.createMixingMethodMaps(this.client.mixingServices));
        registry = registry.concat(this.createMiningMethodMaps(this.client.miningServices));
        registry = registry.concat(this.createMasternodeMethodMaps(this.client.masternodeServices));
        registry = registry.concat(this.createMessagingMethodMaps(this.client.messagingServices));
        registry = registry.concat(this.createGovernanceMethodMaps(this.client.governanceServices));
        registry = registry.concat(this.createGenerationMethodMaps(this.client.generationServices));
        registry = registry.concat(this.createEstimateMethodMaps(this.client.estimateServices));
        registry = registry.concat(this.createAddressIndexMethodMaps(this.client.addressIndexServices));
        registry = registry.concat(this.createBlockchainMethodMaps(this.client.blockchainServices));
        registry = registry.concat(this.createWalletMethodMaps(this.client.walletServices));
        return registry;
    }

    createUtilityMethodMaps(utilityServices) {
        let methodMaps = [];
        methodMaps.push(this.createMethodRecord('createmultisig', utilityServices.createMultiSig));
        methodMaps.push(this.createMethodRecord('validateaddress', utilityServices.validateAddress));
        methodMaps.push(this.createMethodRecord('debug', utilityServices.debug));
        methodMaps.push(this.createMethodRecord('help', utilityServices.help));
        methodMaps.push(this.createMethodRecord('tpstestsetenabled', utilityServices.tpsTestSetEnabled));
        methodMaps.push(this.createMethodRecord('tpstestadd', utilityServices.tpsTestAdd));
        return methodMaps;
    }

    createTransactionMethodMaps(transactionServices) {
        let methodMaps = [];
        methodMaps.push(this.createMethodRecord('createrawtransaction', transactionServices.createRawTransaction));
        methodMaps.push(this.createMethodRecord('decoderawtransaction', transactionServices.decodeRawTransaction));
        methodMaps.push(this.createMethodRecord('decodescript', transactionServices.decodeScript));
        methodMaps.push(this.createMethodRecord('fundrawtransaction', transactionServices.fundRawTransaction));
        methodMaps.push(this.createMethodRecord('getrawtransaction',
            transactionServices.getRawTransaction,
            transactionServices.getRawTransactionVerbose
        ));
        methodMaps.push(this.createMethodRecord('sendrawtransaction', transactionServices.sendRawTransaction));
        methodMaps.push(this.createMethodRecord('signrawtransaction', transactionServices.signRawTransaction));
        return methodMaps;
    }

    createSynchronizationMethodMaps(synchronizationServices) {
        let methodMaps = [];
        methodMaps.push(this.createMethodRecord('mnsync',
            synchronizationServices.status,
            synchronizationServices.resetSync,
            synchronizationServices.updateToNextStep));
        return methodMaps;
    }

    createNetworkMethodMaps(networkServices) {
        let methodMaps = [];
        methodMaps.push(this.createMethodRecord('spork', networkServices.spork));
        methodMaps.push(this.createMethodRecord('sentinelping', networkServices.sentinelPing));
        methodMaps.push(this.createMethodRecord('getinfo', networkServices.getInfo));
        methodMaps.push(this.createMethodRecord('stop', networkServices.stop));
        methodMaps.push(this.createMethodRecord('setnetworkactive',
            networkServices.activateNetwork,
            networkServices.deactivateNetwork));
        methodMaps.push(this.createMethodRecord('addnode', networkServices.addNode));
        methodMaps.push(this.createMethodRecord('setban',
            networkServices.banNodeForLengthOfTime,
            networkServices.banNodeUntilDate,
            networkServices.unbanNode));
        methodMaps.push(this.createMethodRecord('clearbanned', networkServices.clearBannedIps));
        methodMaps.push(this.createMethodRecord('aliasclearwhitelist', networkServices.aliasClearWhiteList));
        methodMaps.push(this.createMethodRecord('disconnectnode', networkServices.disconnectNode));
        methodMaps.push(this.createMethodRecord('getaddednodeinfo', networkServices.getAddedNodeInfo));
        methodMaps.push(this.createMethodRecord('getconnectioncount', networkServices.getConnectionCount));
        methodMaps.push(this.createMethodRecord('getnettotals', networkServices.getNetTotals));
        methodMaps.push(this.createMethodRecord('getnetworkinfo', networkServices.getNetworkInfo));
        methodMaps.push(this.createMethodRecord('getpeerinfo', networkServices.getPeerInfo));
        methodMaps.push(this.createMethodRecord('listbanned', networkServices.listBannedIps));
        methodMaps.push(this.createMethodRecord('ping', networkServices.ping));
        methodMaps.push(this.createMethodRecord('addnode',
            networkServices.tryToConnectToNode,
            networkServices.removeNode));
        methodMaps.push(this.createMethodRecord('getmemoryinfo', networkServices.getMemoryInfo));
        methodMaps.push(this.createMethodRecord('getchaintxstats', networkServices.getChainTxStats));
        return methodMaps;
    }

    createMixingMethodMaps(mixingServices) {
        let methodMaps = [];
        methodMaps.push(this.createMethodRecord('privatesend',
            mixingServices.resetMixing,
            mixingServices.stopMixing,
            mixingServices.startMixing));
        return methodMaps;
    }

    createMiningMethodMaps(miningServices) {
        let methodMaps = [];
        methodMaps.push(this.createMethodRecord('createauxblock', miningServices.createAuxBlock));
        methodMaps.push(this.createMethodRecord('getauxblock', miningServices.getAuxBlock));
        methodMaps.push(this.createMethodRecord('getblocktemplate', miningServices.getBlockTemplate));
        methodMaps.push(this.createMethodRecord('getmininginfo', miningServices.getMiningInfo));
        methodMaps.push(this.createMethodRecord('getnetworkhashps', miningServices.getNetworkHashesPerSecond));
        methodMaps.push(this.createMethodRecord('prioritisetransaction', miningServices.prioritiseTransaction));
        methodMaps.push(this.createMethodRecord('submitauxblock', miningServices.submitAuxBlock));
        methodMaps.push(this.createMethodRecord('submitblock', miningServices.submitBlock));
        methodMaps.push(this.createMethodRecord('getpoolinfo', miningServices.getPoolInfo));
        return methodMaps;
    }

    createMasternodeMethodMaps(masternodeServices) {
        let methodMaps = [];
        methodMaps.push(this.createMethodRecord('masternodelist', masternodeServices.masternodeList));
        methodMaps.push(this.createMethodRecord('masternodebroadcast', masternodeServices.masternodeBroadcast));
        methodMaps.push(this.createMethodRecord('masternode', masternodeServices.count,
            masternodeServices.generatePrivateKey,
            masternodeServices.getConfiguration,
            masternodeServices.getCurrentMasternodeWinner,
            masternodeServices.initialize,
            masternodeServices.outputs,
            masternodeServices.start,
            masternodeServices.status,
            masternodeServices.winner,
            masternodeServices.winners
            ));
        return methodMaps;
    }

    createMessagingMethodMaps(messagingServices) {
        let methodMaps = [];
        methodMaps.push(this.createMethodRecord('signmessagewithprivkey', messagingServices.signMessage));
        methodMaps.push(this.createMethodRecord('verifymessage', messagingServices.verifyMessage));
        return methodMaps;
    }

    createGovernanceMethodMaps(governanceServices) {
        let methodMaps = [];
        methodMaps.push(this.createMethodRecord('gobject', governanceServices.gobject));
        methodMaps.push(this.createMethodRecord('getgovernanceinfo', governanceServices.getGovernanceInfo));
        methodMaps.push(this.createMethodRecord('voteraw', governanceServices.voteRaw));
        return methodMaps;
    }

    createGenerationMethodMaps(generationServices) {
        let methodMaps = [];
        methodMaps.push(this.createMethodRecord('generate', generationServices.generate));
        methodMaps.push(this.createMethodRecord('generatetoaddress', generationServices.generateToAddress));
        return methodMaps;
    }

    createEstimateMethodMaps(estimateServices) {
        let methodMaps = [];
        methodMaps.push(this.createMethodRecord('estimatefee', estimateServices.estimateFee));
        methodMaps.push(this.createMethodRecord('estimatepriority', estimateServices.estimatePriority));
        methodMaps.push(this.createMethodRecord('estimatesmartfee', estimateServices.estimateSmartFee));
        methodMaps.push(this.createMethodRecord('estimatesmartpriority', estimateServices.estimateSmartPriority));
        methodMaps.push(this.createMethodRecord('aliasnewestimatedfee', estimateServices.aliasNewEstimatedFee));
        methodMaps.push(this.createMethodRecord('aliasupdateestimatedfee', estimateServices.aliasUpdateEstimatedFee));
        return methodMaps;
    }

    createAddressIndexMethodMaps(addressIndexServices) {
        let methodMaps = [];
        methodMaps.push(this.createMethodRecord('getaddressbalance',
            addressIndexServices.getAddressBalancesAsArray,
            addressIndexServices.getSummedAddressBalance));
        methodMaps.push(this.createMethodRecord('getaddressdeltas', addressIndexServices.getAddressDeltas));
        methodMaps.push(this.createMethodRecord('getaddressmempool', addressIndexServices.getAddressMempool));
        methodMaps.push(this.createMethodRecord('getaddresstxids', addressIndexServices.getAddressTxids));
        methodMaps.push(this.createMethodRecord('getaddressutxos', addressIndexServices.getAddressUtxos));
        return methodMaps;
    }

    createBlockchainMethodMaps(blockchainServices) {
        let methodMaps = [];
        methodMaps.push(this.createMethodRecord('getsuperblockbudget', blockchainServices.getSuperBlockBudget));
        methodMaps.push(this.createMethodRecord('getblock',
            blockchainServices.getBlock,
            blockchainServices.getBlockVerbose));
        methodMaps.push(this.createMethodRecord('getbestblockhash', blockchainServices.getBestBlockHash));
        methodMaps.push(this.createMethodRecord('getblockchaininfo', blockchainServices.getBlockchainInfo));
        methodMaps.push(this.createMethodRecord('getblockcount', blockchainServices.getBlockCount));
        methodMaps.push(this.createMethodRecord('getblockhash', blockchainServices.getBlockHash));
        methodMaps.push(this.createMethodRecord('getblockhashes', blockchainServices.getBlockHashes));
        methodMaps.push(this.createMethodRecord('getblockheader',
            blockchainServices.getBlockHeader,
            blockchainServices.getBlockHeaderVerbose));
        methodMaps.push(this.createMethodRecord('getblockheaders',
            blockchainServices.getBlockHeaders,
            blockchainServices.getBlockHeadersVerbose));
        methodMaps.push(this.createMethodRecord('getchaintips', blockchainServices.getChainTips));
        methodMaps.push(this.createMethodRecord('getdifficulty', blockchainServices.getDifficulty));
        methodMaps.push(this.createMethodRecord('getmempoolancestors',
            blockchainServices.getMemPoolAncestors,
            blockchainServices.getMemPoolAncestorsVerbose));
        methodMaps.push(this.createMethodRecord('getmempooldescendants',
            blockchainServices.getMemPoolDescendants,
            blockchainServices.getMemPoolDescendantsVerbose));
        methodMaps.push(this.createMethodRecord('getmempoolentry', blockchainServices.getMemPoolEntry));
        methodMaps.push(this.createMethodRecord('getmempoolinfo', blockchainServices.getMemPoolInfo));
        methodMaps.push(this.createMethodRecord('getrawmempool',
            blockchainServices.getRawMemPool,
            blockchainServices.getRawMemPoolVerbose));
        methodMaps.push(this.createMethodRecord('getspentinfo', blockchainServices.getSpentInfo));
        methodMaps.push(this.createMethodRecord('gettxout', blockchainServices.getTxOut));
        methodMaps.push(this.createMethodRecord('gettxoutproof', blockchainServices.getTxOutProof));
        methodMaps.push(this.createMethodRecord('gettxoutsetinfo', blockchainServices.getUnspentTxOutputSetInfo));
        methodMaps.push(this.createMethodRecord('preciousblock', blockchainServices.preciousBlock));
        methodMaps.push(this.createMethodRecord('pruneblockchain', blockchainServices.pruneBlockchain));
        methodMaps.push(this.createMethodRecord('verifychain', blockchainServices.verifyChain));
        methodMaps.push(this.createMethodRecord('verifytxoutproof',
            blockchainServices.verifyTxOut,
            blockchainServices.verifyTxOutProof));
        return methodMaps;
    }

    createWalletMethodMaps(walletServices) {
        let methodMaps = [];
        methodMaps.push(this.createMethodRecord('abandontransaction', walletServices.abandonTransaction));
        methodMaps.push(this.createMethodRecord('addmultisigaddress', walletServices.addMultiSigAddress));
        methodMaps.push(this.createMethodRecord('aliasbalance', walletServices.alias.balance));
        methodMaps.push(this.createMethodRecord('aliasbalancemulti', walletServices.alias.balanceMulti));
        methodMaps.push(this.createMethodRecord('aliasinfo', walletServices.alias.info));
        methodMaps.push(this.createMethodRecord('listaliases', walletServices.alias.list));
        methodMaps.push(this.createMethodRecord('aliasnew', walletServices.alias.new));
        methodMaps.push(this.createMethodRecord('aliaspay', walletServices.alias.pay));
        methodMaps.push(this.createMethodRecord('aliasupdate',
            walletServices.alias.update,
            walletServices.alias.updateEstimatedFee));
        methodMaps.push(this.createMethodRecord('aliasupdatewhitelist', walletServices.alias.updateWhiteList));
        methodMaps.push(this.createMethodRecord('aliaswhitelist', walletServices.alias.whiteList));
        methodMaps.push(this.createMethodRecord('aliasaddscript', walletServices.alias.aliasAddScript));
        methodMaps.push(this.createMethodRecord('assetallocationcollectinterest', walletServices.assetAllocation.collectInterest));
        methodMaps.push(this.createMethodRecord('assetallocationinfo', walletServices.assetAllocation.info));
        methodMaps.push(this.createMethodRecord('listassetallocations', walletServices.assetAllocation.list));
        methodMaps.push(this.createMethodRecord('listassetallocationtransactions', walletServices.assetAllocation.listTransactions()));
        methodMaps.push(this.createMethodRecord('assetallocationsend', walletServices.assetAllocation.send));
        methodMaps.push(this.createMethodRecord('assetallocationsenderstatus', walletServices.assetAllocation.senderStatus()));
        methodMaps.push(this.createMethodRecord('assetinfo', walletServices.asset.info));
        methodMaps.push(this.createMethodRecord('listassets', walletServices.asset.list));
        methodMaps.push(this.createMethodRecord('assetnew', walletServices.asset.new));
        methodMaps.push(this.createMethodRecord('assetsend', walletServices.asset.send));
        methodMaps.push(this.createMethodRecord('assettransfer', walletServices.asset.transfer));
        methodMaps.push(this.createMethodRecord('assetupdate', walletServices.asset.update));
        methodMaps.push(this.createMethodRecord('backupwallet', walletServices.backupWallet));
        methodMaps.push(this.createMethodRecord('certinfo', walletServices.certificate.info));
        methodMaps.push(this.createMethodRecord('listcerts', walletServices.certificate.list));
        methodMaps.push(this.createMethodRecord('certnew', walletServices.certificate.new));
        methodMaps.push(this.createMethodRecord('certtransfer', walletServices.certificate.transfer()));
        methodMaps.push(this.createMethodRecord('certupdate', walletServices.certificate.update));
        methodMaps.push(this.createMethodRecord('escrowacknowledge', walletServices.escrow.acknowledge));
        methodMaps.push(this.createMethodRecord('escrowbid', walletServices.escrow.bid));
        methodMaps.push(this.createMethodRecord('escrowcompleterefund', walletServices.escrow.completeRefund));
        methodMaps.push(this.createMethodRecord('escrowcreaterawtransaction', walletServices.escrow.createRawTransaction));
        methodMaps.push(this.createMethodRecord('escrowcompleterelease', walletServices.escrow.completeRelease()));
        methodMaps.push(this.createMethodRecord('escrowfeedback', walletServices.escrow.feedback()));
        methodMaps.push(this.createMethodRecord('escrowinfo', walletServices.escrow.info));
        methodMaps.push(this.createMethodRecord('listescrows', walletServices.escrow.list));
        methodMaps.push(this.createMethodRecord('escrownew', walletServices.escrow.new));
        methodMaps.push(this.createMethodRecord('escrowrefund', walletServices.escrow.refund));
        methodMaps.push(this.createMethodRecord('escrowrelease', walletServices.escrow.release));
        methodMaps.push(this.createMethodRecord('offerinfo', walletServices.offer.info));
        methodMaps.push(this.createMethodRecord('offerlink', walletServices.offer.link));
        methodMaps.push(this.createMethodRecord('listoffers', walletServices.offer.list));
        methodMaps.push(this.createMethodRecord('offernew', walletServices.offer.new));
        methodMaps.push(this.createMethodRecord('offerupdate', walletServices.offer.update));
        methodMaps.push(this.createMethodRecord('getaccount', walletServices.getAccount));
        methodMaps.push(this.createMethodRecord('getaccountaddress', walletServices.getAccountAddress));
        methodMaps.push(this.createMethodRecord('getaddressesbyaccount', walletServices.getAddressesByAccount));
        methodMaps.push(this.createMethodRecord('getbalance', walletServices.getBalance));
        methodMaps.push(this.createMethodRecord('getnewaddress', walletServices.getNewAddress));
        methodMaps.push(this.createMethodRecord('getrawchangeaddress', walletServices.getRawChangeAddress));
        methodMaps.push(this.createMethodRecord('getreceivedbyaccount', walletServices.getReceivedByAccount));
        methodMaps.push(this.createMethodRecord('getreceivedbyaddress', walletServices.getReceivedByAddress));
        methodMaps.push(this.createMethodRecord('gettransaction', walletServices.getTransaction));
        methodMaps.push(this.createMethodRecord('getunconfirmedbalance', walletServices.getUnconfirmedBalance));
        methodMaps.push(this.createMethodRecord('getwalletinfo', walletServices.getWalletInfo));
        methodMaps.push(this.createMethodRecord('importaddress', walletServices.importAddress));
        methodMaps.push(this.createMethodRecord('importelectrumwallet', walletServices.importElectrumWallet));
        methodMaps.push(this.createMethodRecord('importmulti', walletServices.importMulti));
        methodMaps.push(this.createMethodRecord('importprivkey', walletServices.importPrivKey));
        methodMaps.push(this.createMethodRecord('importprunedfunds', walletServices.importPrunedFunds));
        methodMaps.push(this.createMethodRecord('importpubkey', walletServices.importPubKey));
        methodMaps.push(this.createMethodRecord('importwallet', walletServices.importWallet));
        methodMaps.push(this.createMethodRecord('instantsendtoaddress', walletServices.instantSendToAddress));
        methodMaps.push(this.createMethodRecord('keepass', walletServices.keePass));
        methodMaps.push(this.createMethodRecord('keypoolrefill', walletServices.keyPoolRefill));
        methodMaps.push(this.createMethodRecord('listaccounts', walletServices.listAccounts));
        methodMaps.push(this.createMethodRecord('listaddressbalances', walletServices.listAddressBalances));
        methodMaps.push(this.createMethodRecord('listaddressgroupings', walletServices.listAddressGroupings));
        methodMaps.push(this.createMethodRecord('listlockunspent', walletServices.listLockUnspent));
        methodMaps.push(this.createMethodRecord('listreceivedbyaccount', walletServices.listReceivedByAccount));
        methodMaps.push(this.createMethodRecord('listreceivedbyaddress', walletServices.listReceivedByAddress));
        methodMaps.push(this.createMethodRecord('listsinceblock', walletServices.listSinceBlock));
        methodMaps.push(this.createMethodRecord('listtransactions', walletServices.listTransactions));
        methodMaps.push(this.createMethodRecord('listunspent', walletServices.listUnspent));
        methodMaps.push(this.createMethodRecord('lockunspent', walletServices.lockUnspent));
        methodMaps.push(this.createMethodRecord('move', walletServices.move));
        methodMaps.push(this.createMethodRecord('prunesyscoinservices', walletServices.pruneSyscoinServices));
        methodMaps.push(this.createMethodRecord('removeprunedfunds', walletServices.removePrunedFunds));
        methodMaps.push(this.createMethodRecord('sendfrom', walletServices.sendFrom));
        methodMaps.push(this.createMethodRecord('sendmany', walletServices.sendToAddress));
        methodMaps.push(this.createMethodRecord('setaccount', walletServices.setAccount));
        methodMaps.push(this.createMethodRecord('sendtoaddress', walletServices.sendToAddress));
        methodMaps.push(this.createMethodRecord('settxfee', walletServices.setTxFee));
        methodMaps.push(this.createMethodRecord('signmessage', walletServices.signMessage));
        methodMaps.push(this.createMethodRecord('syscoindecoderawtransaction', walletServices.syscoinDecodeRawTransaction));
        methodMaps.push(this.createMethodRecord('syscoinlistreceivedbyaddress', walletServices.syscoinListReceivedByAddress));
        methodMaps.push(this.createMethodRecord('syscoinsendrawtransaction', walletServices.syscoinSendRawTransaction));
        methodMaps.push(this.createMethodRecord('syscointxfund', walletServices.syscoinTxFund));
        methodMaps.push(this.createMethodRecord('tpstestinfo', walletServices.tpsTestInfo));
        methodMaps.push(this.createMethodRecord('dumpwallet', walletServices.dumpWallet));
        methodMaps.push(this.createMethodRecord('dumphdinfo', walletServices.dumpHdInfo));
        methodMaps.push(this.createMethodRecord('dumpprivkey', walletServices.dumpPrivKey));
        methodMaps.push(this.createMethodRecord('encryptwallet', walletServices.encryptWallet()));
        return methodMaps;
    }
}