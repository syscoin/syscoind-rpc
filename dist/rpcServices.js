Object.defineProperty(exports, "__esModule", { value: true });
function rpcServices(callRpc) {
    return {
        // @formatter:off
        // == Blockchain ==
        getBestBlockHash: function () { return callThroughToRpc(arguments); },
        getBlock: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        getBlockchainInfo: function () { return callThroughToRpc(arguments); },
        getBlockCount: function () { return callThroughToRpc(arguments); },
        getBlockFilter: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        getBlockHash: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        getBlockHeader: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        getBlockStats: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        getChainTips: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        getChainTxStats: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        getDifficulty: function () { return callThroughToRpc(arguments); },
        getMemPoolAncestors: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        getMemPoolDescendants: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        getMemPoolEntry: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        getMemPoolInfo: function () { return callThroughToRpc(arguments); },
        getRawMemPool: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        getTxOut: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        getTxOutProof: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        getTxOutSetInfo: function () { return callThroughToRpc(arguments); },
        preciousBlock: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        pruneBlockchain: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        saveMemPool: function () { return callThroughToRpc(arguments); },
        scanTxOutSet: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        verifyChain: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        verifyTxOutProof: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        // == Control ==
        getMemoryInfo: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        getRpcInfo: function () { return callThroughToRpc(arguments); },
        help: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        logging: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        stop: function () { return callThroughToRpc(arguments); },
        uptime: function () { return callThroughToRpc(arguments); },
        // == Generating ==
        generate: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        generateToAddress: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        // == Mining ==
        createAuxBlock: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        getAuxBlock: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        getBlockTemplate: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        getMiningInfo: function () { return callThroughToRpc(arguments); },
        getNetworkHashesPerSecond: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        prioritiseTransaction: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        submitAuxBlock: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        submitBlock: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        submitHeader: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        // == Network ==
        addNode: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        clearBanned: function () { return callThroughToRpc(arguments); },
        disconnectNode: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        getAddedNodeInfo: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        getConnectionCount: function () { return callThroughToRpc(arguments); },
        getNetTotals: function () { return callThroughToRpc(arguments); },
        getNetworkInfo: function () { return callThroughToRpc(arguments); },
        getNodeAddresses: function () { return callThroughToRpc(arguments); },
        getPeerInfo: function () { return callThroughToRpc(arguments); },
        getInfo: function () { return callThroughToRpc(arguments); },
        listBanned: function () { return callThroughToRpc(arguments); },
        ping: function () { return callThroughToRpc(arguments); },
        setBan: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        // == Rawtransactions ==
        analyzePsbt: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        combinePsbt: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        combineRawTransaction: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        convertToPsbt: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        createPsbt: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        createRawTransaction: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        decodePsbt: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        decodeRawTransaction: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        decodeScript: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        finalizePsbt: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        fundRawTransaction: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        getRawTransaction: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        joinPsbts: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        sendRawTransaction: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        signRawTransactionWithKey: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        testMempoolAccept: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        utxoUpdatePsbt: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        // == Syscoin ==
        addressBalance: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        assetAllocationBalance: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        assetAllocationBurn: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        assetAllocationInfo: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        assetAllocationLock: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        assetAllocationMint: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        assetAllocationSend: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        assetAllocationSenderStatus: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        assetAllocationSendMany: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        assetInfo: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        assetNew: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        assetSend: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        assetSendMany: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        assetTransfer: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        assetUpdate: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        convertAddress: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        getBlockHashByTxid: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        getGovernanceInfo: function () { return callThroughToRpc(arguments); },
        getSuperblockBudget: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        gObject: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        listAssetAllocationMempoolBalances: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        listAssetAllocations: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        listAssetIndex: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        listAssetIndexAllocations: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        listAssetIndexAssets: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        listAssets: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        masternode: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        masternodeBroadcast: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        masternodeList: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        mnSync: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        sentinelPing: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        spork: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        syscoinBurn: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        syscoinDecodeRawTransaction: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        syscoinGetSpvProof: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        syscoinMint: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        syscoinSetEthHeaders: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        syscoinSetEthStatus: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        syscoinStartGeth: function () { return callThroughToRpc(arguments); },
        syscoinStopGeth: function () { return callThroughToRpc(arguments); },
        syscoinTxFund: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        tpsTestAdd: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        tpsTestInfo: function () { return callThroughToRpc(arguments); },
        tpsTestSetEnabled: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        voteRaw: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        // == Util ==
        createMultiSig: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        deriveAddress: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        estimateSmartFee: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        getDescriptorInfo: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        signMessageWithPrivKey: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        validateAddress: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        verifyMessage: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        // == Wallet ==
        abandonTransaction: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        abortRescan: function () { return callThroughToRpc(arguments); },
        addMultiSigAddress: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        backupWallet: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        bumpFee: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        createWallet: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        dumpPrivKey: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        dumpWallet: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        encryptWallet: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        getAddressesByLabel: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        getAddressInfo: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        getBalance: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        getNewAddress: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        getRawChangeAddress: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        getReceivedByAddress: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        getReceivedByLabel: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        getTransaction: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        getUnconfirmedBalance: function () { return callThroughToRpc(arguments); },
        getWalletInfo: function () { return callThroughToRpc(arguments); },
        importAddress: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        importMulti: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        importPrivKey: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        importPrunedFunds: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        importPubKey: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        importWallet: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        keypoolRefill: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        listAddressGroupings: function () { return callThroughToRpc(arguments); },
        listLabels: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        listLockUnspent: function () { return callThroughToRpc(arguments); },
        listReceivedByAddress: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        listReceivedByLabel: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        listSinceBlock: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        listTransactions: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        listUnspent: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        listWalletDir: function () { return callThroughToRpc(arguments); },
        listWallets: function () { return callThroughToRpc(arguments); },
        loadWallet: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        lockUnspent: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        removePrunedFunds: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        rescanBlockchain: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        sendMany: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        sendToAddress: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        sendFrom: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        setHdSeed: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        setLabel: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        setTxFee: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        signMessage: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        signRawTransactionWithWallet: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        unloadWallet: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        walletCreateFundedPsbt: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        walletLock: function () { return callThroughToRpc(arguments); },
        walletPassphrase: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        walletPassphraseChange: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        walletProcessPsbt: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return callThroughToRpc(arguments);
        },
        // @formatter:on
        //exposed for unit testing
        callThroughToRpc: callThroughToRpc,
        unwrapRpcResponse: unwrapRpcResponse
    };
    function callThroughToRpc(args) {
        var paramArr = Array.prototype.slice.call(args);
        var response;
        try {
            // console.log("Calling SYS-JS function:", args.callee.name.toLowerCase(), 'with params', paramArr);
            response = callRpc(args.callee.name.toLowerCase(), paramArr);
        }
        catch (e) {
            // console.log("caught error: ", e.response.data);
            if (e.response && e.response.data) {
                if (e.response.data.result !== undefined && e.response.data.error !== undefined) {
                    //this is a special syscoin error, return the nested error
                    return unwrapRpcResponse(e.response.data);
                }
            }
        }
        try {
            return unwrapRpcResponse(response);
        }
        catch (e) {
            console.log("RPC COMM ERROR:", e);
        }
    }
    function unwrapRpcResponse(response) {
        // console.log("process:", response);
        if (response.result !== null && response.error === null) {
            return response.result;
        }
        else if (response.result === null && response.error !== null) {
            throw new Error(response.error.message);
        }
        return response; //get requests are not wrapped
    }
}
exports.rpcServices = rpcServices;
