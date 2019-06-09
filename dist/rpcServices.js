var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
function rpcServices(callRpc) {
    return {
        // @formatter:off
        // == Blockchain ==
        getBestBlockHash: function () { return callThroughToRpc(arguments); },
        getBlock: function (blockHash, verbosity) { return callThroughToRpc(arguments); },
        getBlockchainInfo: function () { return callThroughToRpc(arguments); },
        getBlockCount: function () { return callThroughToRpc(arguments); },
        getBlockFilter: function (blockHash, filterType) { return callThroughToRpc(arguments); },
        getBlockHash: function (height) { return callThroughToRpc(arguments); },
        getBlockHeader: function (blockHash, verbose) { return callThroughToRpc(arguments); },
        getBlockStats: function (hashOrHeight, stats) { return callThroughToRpc(arguments); },
        getChainTips: function (count, branchLength) { return callThroughToRpc(arguments); },
        getChainTxStats: function (nBlocks, blockHash) { return callThroughToRpc(arguments); },
        getDifficulty: function () { return callThroughToRpc(arguments); },
        getMemPoolAncestors: function (txid, verbose) { return callThroughToRpc(arguments); },
        getMemPoolDescendants: function (txid, verbose) { return callThroughToRpc(arguments); },
        getMemPoolEntry: function (txid) { return callThroughToRpc(arguments); },
        getMemPoolInfo: function () { return callThroughToRpc(arguments); },
        getRawMemPool: function (verbose) { return callThroughToRpc(arguments); },
        getTxOut: function (txid, voutNumber, includeMempool) { return callThroughToRpc(arguments); },
        getTxOutProof: function (txids, blockHash) { return callThroughToRpc(arguments); },
        getTxOutSetInfo: function () { return callThroughToRpc(arguments); },
        preciousBlock: function (blockHash) { return callThroughToRpc(arguments); },
        pruneBlockchain: function (blockHeight) { return callThroughToRpc(arguments); },
        saveMemPool: function () { return callThroughToRpc(arguments); },
        scanTxOutSet: function (action, scanObjects) { return callThroughToRpc(arguments); },
        verifyChain: function (checkLevel, numberOfBlocksToCheck) { return callThroughToRpc(arguments); },
        verifyTxOutProof: function (proof) { return callThroughToRpc(arguments); },
        // == Control ==
        getMemoryInfo: function (mode) { return callThroughToRpc(arguments); },
        getRpcInfo: function () { return callThroughToRpc(arguments); },
        help: function (command) { return callThroughToRpc(arguments); },
        logging: function (includeCategories, excludeCategories) { return callThroughToRpc(arguments); },
        stop: function () { return callThroughToRpc(arguments); },
        uptime: function () { return callThroughToRpc(arguments); },
        // == Generating ==
        generate: function (numberOfBlocks, maxTries) { return callThroughToRpc(arguments); },
        generateToAddress: function (numberOfBlocks, address, maxTries) { return callThroughToRpc(arguments); },
        // == Mining ==
        createAuxBlock: function (address) { return callThroughToRpc(arguments); },
        getAuxBlock: function (blockHash, auxPow) { return callThroughToRpc(arguments); },
        getBlockTemplate: function (blockTemplate) { return callThroughToRpc(arguments); },
        getMiningInfo: function () { return callThroughToRpc(arguments); },
        getNetworkHashesPerSecond: function (numberOfBlocks, blockHeight) { return callThroughToRpc(arguments); },
        prioritiseTransaction: function (txid, dummy, feeDeltaInSatoshis) { return callThroughToRpc(arguments); },
        submitAuxBlock: function (blockHash, auxPow) { return callThroughToRpc(arguments); },
        submitBlock: function (hexDataToSubmit) { return callThroughToRpc(arguments); },
        submitHeader: function (hexData) { return callThroughToRpc(arguments); },
        // == Network ==
        addNode: function (nodeAddress) { return callThroughToRpc(arguments); },
        clearBanned: function () { return callThroughToRpc(arguments); },
        disconnectNode: function (nodeAddress, nodeId) { return callThroughToRpc(arguments); },
        getAddedNodeInfo: function (nodeAddress) { return callThroughToRpc(arguments); },
        getConnectionCount: function () { return callThroughToRpc(arguments); },
        getNetTotals: function () { return callThroughToRpc(arguments); },
        getNetworkInfo: function () { return callThroughToRpc(arguments); },
        getNodeAddresses: function () { return callThroughToRpc(arguments); },
        getPeerInfo: function () { return callThroughToRpc(arguments); },
        getInfo: function () { return callThroughToRpc(arguments); },
        listBanned: function () { return callThroughToRpc(arguments); },
        ping: function () { return callThroughToRpc(arguments); },
        setBan: function (subnet, command, banTime) { return callThroughToRpc(arguments); },
        // == Rawtransactions ==
        analyzePsbt: function (pbst) { return callThroughToRpc(arguments); },
        combinePsbt: function (pbsts) { return callThroughToRpc(arguments); },
        combineRawTransaction: function (hexs) { return callThroughToRpc(arguments); },
        convertToPsbt: function (hex, permitSigData, isWitness) { return callThroughToRpc(arguments); },
        createPsbt: function (txHeaders, payloadInfo, locktime, replaceable) { return callThroughToRpc(arguments); },
        createRawTransaction: function (txHeaders, payloadInfo, locktime, replaceable) { return callThroughToRpc(arguments); },
        decodePsbt: function (pbst) { return callThroughToRpc(arguments); },
        decodeRawTransaction: function (hexString, isWitness) { return callThroughToRpc(arguments); },
        decodeScript: function (hexString) { return callThroughToRpc(arguments); },
        finalizePsbt: function (pbst, extract) { return callThroughToRpc(arguments); },
        fundRawTransaction: function (hexString, options, isWitness) { return callThroughToRpc(arguments); },
        getRawTransaction: function (txid, verbose, blockHash) { return callThroughToRpc(arguments); },
        joinPsbts: function (pbsts) { return callThroughToRpc(arguments); },
        sendRawTransaction: function (hexString, maxFeeRate) { return callThroughToRpc(arguments); },
        signRawTransactionWithKey: function (hexString, privateKeys, txs, sigHashType) { return callThroughToRpc(arguments); },
        testMempoolAccept: function (rawTxs, maxFeeRate) { return callThroughToRpc(arguments); },
        utxoUpdatePsbt: function (pbst) { return callThroughToRpc(arguments); },
        // == Syscoin ==
        addressBalance: function (address) { return callThroughToRpc(arguments); },
        assetAllocationBalance: function (assetGuid, address) { return callThroughToRpc(arguments); },
        assetAllocationBurn: function (assetGuid, address, amount, ethAddress) { return callThroughToRpc(arguments); },
        assetAllocationInfo: function (assetGuid, address) { return callThroughToRpc(arguments); },
        assetAllocationLock: function (assetGuid, addressFrom, txid, outputIndex, witness) { return callThroughToRpc(arguments); },
        assetAllocationMint: function (assetGuid, address, amount, blockNum, txHex, txRootHex, merkleProofHex, merkleProofPathHex, witness) { return callThroughToRpc(arguments); },
        assetAllocationSend: function (assetGuid, addressFrom, addressTo, amount) { return callThroughToRpc(arguments); },
        assetAllocationSenderStatus: function (assetGuid, address, txid) { return callThroughToRpc(arguments); },
        assetAllocationSendMany: function (assetGuid, addressFrom, amounts, witness) { return callThroughToRpc(arguments); },
        assetInfo: function (request) { return callThroughToRpc(arguments); },
        assetNew: function (request) { return callThroughToRpc(arguments); },
        assetSend: function (assetGuid, addressTo, amount) { return callThroughToRpc(arguments); },
        assetSendMany: function (assetGuid, amounts, witness) { return callThroughToRpc(arguments); },
        assetTransfer: function (assetGuid, address, witness) { return callThroughToRpc(arguments); },
        assetUpdate: function (assetGuid, publicValue, contract, supply, updateFlags, witness) { return callThroughToRpc(arguments); },
        convertAddress: function (address) { return callThroughToRpc(arguments); },
        getBlockHashByTxid: function (txid) { return callThroughToRpc(arguments); },
        getGovernanceInfo: function () { return callThroughToRpc(arguments); },
        getSuperblockBudget: function (index) { return callThroughToRpc(arguments); },
        gObject: function (command) { return callThroughToRpc(arguments); },
        listAssetAllocationMempoolBalances: function (count, from, query) { return callThroughToRpc(arguments); },
        listAssetAllocations: function (count, from, query) { return callThroughToRpc(arguments); },
        listAssetIndex: function (page, options) { return callThroughToRpc(arguments); },
        listAssetIndexAllocations: function (address) { return callThroughToRpc(arguments); },
        listAssetIndexAssets: function (request) { return callThroughToRpc(arguments); },
        listAssets: function (count, from, options) { return callThroughToRpc(arguments); },
        masternode: function (command) { return callThroughToRpc(arguments); },
        masternodeBroadcast: function (command) { return callThroughToRpc(arguments); },
        masternodeList: function (mode, filter) { return callThroughToRpc(arguments); },
        mnSync: function (command) { return callThroughToRpc(arguments); },
        sentinelPing: function (version) { return callThroughToRpc(arguments); },
        spork: function (command) { return callThroughToRpc(arguments); },
        syscoinBurn: function (fundingAddress, amount, ethAddress) { return callThroughToRpc(arguments); },
        syscoinDecodeRawTransaction: function (hexString) { return callThroughToRpc(arguments); },
        syscoinGetSpvProof: function (txid, blockHash) { return callThroughToRpc(arguments); },
        syscoinMint: function (address, amount, blockNum, txHex, txRootHex, txMerkleProofHex, witness) { return callThroughToRpc(arguments); },
        syscoinSetEthHeaders: function (headers) { return callThroughToRpc(arguments); },
        syscoinSetEthStatus: function (syncStatus, highestBlock) { return callThroughToRpc(arguments); },
        syscoinStartGeth: function () { return callThroughToRpc(arguments); },
        syscoinStopGeth: function () { return callThroughToRpc(arguments); },
        syscoinTxFund: function (hexString, address, outputIndex) { return callThroughToRpc(arguments); },
        tpsTestAdd: function (startTime, rawTxs) { return callThroughToRpc(arguments); },
        tpsTestInfo: function () { return callThroughToRpc(arguments); },
        tpsTestSetEnabled: function (enabled) { return callThroughToRpc(arguments); },
        voteRaw: function (mnTxHash, mnTxIndex, govHash, votSignal, vote, time, voteSig) { return callThroughToRpc(arguments); },
        // == Util ==
        createMultiSig: function (numberOfRequiredSignatures, keys, addressType) { return callThroughToRpc(arguments); },
        deriveAddress: function (descriptor, range) { return callThroughToRpc(arguments); },
        estimateSmartFee: function (confTarget, estimateMode) { return callThroughToRpc(arguments); },
        getDescriptorInfo: function (descriptor) { return callThroughToRpc(arguments); },
        signMessageWithPrivKey: function (privateKey, message) { return callThroughToRpc(arguments); },
        validateAddress: function (address) { return callThroughToRpc(arguments); },
        verifyMessage: function (address, signature, message) { return callThroughToRpc(arguments); },
        // == Wallet ==
        abandonTransaction: function (txid) { return callThroughToRpc(arguments); },
        abortRescan: function () { return callThroughToRpc(arguments); },
        addMultiSigAddress: function (nRequired, keys, label, addressType) { return callThroughToRpc(arguments); },
        backupWallet: function (destination) { return callThroughToRpc(arguments); },
        bumpFee: function (txid, options) { return callThroughToRpc(arguments); },
        createWallet: function (walletName, disablePrivKeys, blank, passphrase) { return callThroughToRpc(arguments); },
        dumpPrivKey: function (address) { return callThroughToRpc(arguments); },
        dumpWallet: function (fileName) { return callThroughToRpc(arguments); },
        encryptWallet: function (passphrase) { return callThroughToRpc(arguments); },
        getAddressesByLabel: function (label) { return callThroughToRpc(arguments); },
        getAddressInfo: function (address) { return callThroughToRpc(arguments); },
        getBalance: function (dummy, minconf, includeWatchOnly) { return callThroughToRpc(arguments); },
        getNewAddress: function (label, addressType) { return callThroughToRpc(arguments); },
        getRawChangeAddress: function (addressType) { return callThroughToRpc(arguments); },
        getReceivedByAddress: function (address, minConf) { return callThroughToRpc(arguments); },
        getReceivedByLabel: function (label, minConf) { return callThroughToRpc(arguments); },
        getTransaction: function (request) { return callThroughToRpc(arguments); },
        getUnconfirmedBalance: function () { return callThroughToRpc(arguments); },
        getWalletInfo: function () { return callThroughToRpc(arguments); },
        importAddress: function (address, label, rescan, p2sh) { return callThroughToRpc(arguments); },
        importMulti: function (requests, options) { return callThroughToRpc(arguments); },
        importPrivKey: function (key, label, rescan) { return callThroughToRpc(arguments); },
        importPrunedFunds: function (rawTx, txOutProof) { return callThroughToRpc(arguments); },
        importPubKey: function (pubKey, label, rescan) { return callThroughToRpc(arguments); },
        importWallet: function (fileName) { return callThroughToRpc(arguments); },
        keypoolRefill: function (newSize) { return callThroughToRpc(arguments); },
        listAddressGroupings: function () { return callThroughToRpc(arguments); },
        listLabels: function (purpose) { return callThroughToRpc(arguments); },
        listLockUnspent: function () { return callThroughToRpc(arguments); },
        listReceivedByAddress: function (minConf, includeEmpty, includeWatchOnly, addressFilter) { return callThroughToRpc(arguments); },
        listReceivedByLabel: function (minConf, includeEmpty, includeWatchOnly) { return callThroughToRpc(arguments); },
        listSinceBlock: function (blockHash, targetConfs, includeWatchOnly, includeRemoved) { return callThroughToRpc(arguments); },
        listTransactions: function (request) { return callThroughToRpc(arguments); },
        listUnspent: function (minConf, maxConf, addresses, includeUnsafe, query, options) { return callThroughToRpc(arguments); },
        listWalletDir: function () { return callThroughToRpc(arguments); },
        listWallets: function () { return callThroughToRpc(arguments); },
        loadWallet: function (fileName) { return callThroughToRpc(arguments); },
        lockUnspent: function (unlock, txs) { return callThroughToRpc(arguments); },
        removePrunedFunds: function (txid) { return callThroughToRpc(arguments); },
        rescanBlockchain: function (start, stop) { return callThroughToRpc(arguments); },
        sendMany: function (dummy, amounts, minConf, comment, subtractFeeFrom, replaceable, confTarget, estimateMode) { return callThroughToRpc(arguments); },
        sendToAddress: function (address, amount, minConf, comment, comment_to, subtractFeeFromAmount, replaceable, confTarget, estimateMode) { return callThroughToRpc(arguments); },
        setHdSeed: function (newKeyPool, seed) { return callThroughToRpc(arguments); },
        setLabel: function (address, label) { return callThroughToRpc(arguments); },
        setTxFee: function (amount) { return callThroughToRpc(arguments); },
        signMessage: function (address, message) { return callThroughToRpc(arguments); },
        signRawTransactionWithWallet: function (hexString, rawTxs, sigHashType) { return callThroughToRpc(arguments); },
        unloadWallet: function (walletName) { return callThroughToRpc(arguments); },
        walletCreateFundedPsbt: function (txs, amounts, lockTime, options, bip32derivs) { return callThroughToRpc(arguments); },
        walletLock: function () { return callThroughToRpc(arguments); },
        walletPassphrase: function (passphrase, timeout) { return callThroughToRpc(arguments); },
        walletPassphraseChange: function (oldPass, newPass) { return callThroughToRpc(arguments); },
        walletProcessPsbt: function (pbst, sign, sigHashType, bip32derivs) { return callThroughToRpc(arguments); },
        // @formatter:on
        //exposed for unit testing
        callThroughToRpc: callThroughToRpc,
        unwrapRpcResponse: unwrapRpcResponse
    };
    function callThroughToRpc(args) {
        return __awaiter(this, void 0, void 0, function () {
            var paramArr, response, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        paramArr = Array.prototype.slice.call(args);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, callRpc(args.callee.name.toLowerCase(), paramArr)];
                    case 2:
                        // console.log("Calling SYS-JS function:", args.callee.name.toLowerCase(), 'with params', paramArr);
                        response = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        // console.log("caught error: ", e.response.data);
                        if (e_1.response && e_1.response.data) {
                            if (e_1.response.data.result !== undefined && e_1.response.data.error !== undefined) {
                                //this is a special syscoin error, return the nested error
                                return [2 /*return*/, unwrapRpcResponse(e_1.response.data)];
                            }
                        }
                        return [3 /*break*/, 4];
                    case 4:
                        try {
                            return [2 /*return*/, unwrapRpcResponse(response)];
                        }
                        catch (e) {
                            console.log("RPC COMM ERROR:", e);
                        }
                        return [2 /*return*/];
                }
            });
        });
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
//# sourceMappingURL=rpcServices.js.map