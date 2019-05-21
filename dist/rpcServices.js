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
        getBlock: function (_a) {
            var blockHash = _a.blockHash, verbosity = _a.verbosity;
            return callThroughToRpc(arguments);
        },
        getBlockchainInfo: function () { return callThroughToRpc(arguments); },
        getBlockCount: function () { return callThroughToRpc(arguments); },
        getBlockFilter: function (_a) {
            var blockHash = _a.blockHash, filterType = _a.filterType;
            return callThroughToRpc(arguments);
        },
        getBlockHash: function (_a) {
            var height = _a.height;
            return callThroughToRpc(arguments);
        },
        getBlockHeader: function (_a) {
            var blockHash = _a.blockHash, verbose = _a.verbose;
            return callThroughToRpc(arguments);
        },
        getBlockStats: function (_a) {
            var hashOrHeight = _a.hashOrHeight, stats = _a.stats;
            return callThroughToRpc(arguments);
        },
        getChainTips: function (_a) {
            var count = _a.count, branchLength = _a.branchLength;
            return callThroughToRpc(arguments);
        },
        getChainTxStats: function (_a) {
            var nBlocks = _a.nBlocks, blockHash = _a.blockHash;
            return callThroughToRpc(arguments);
        },
        getDifficulty: function () { return callThroughToRpc(arguments); },
        getMemPoolAncestors: function (_a) {
            var txid = _a.txid, verbose = _a.verbose;
            return callThroughToRpc(arguments);
        },
        getMemPoolDescendants: function (_a) {
            var txid = _a.txid, verbose = _a.verbose;
            return callThroughToRpc(arguments);
        },
        getMemPoolEntry: function (_a) {
            var txid = _a.txid;
            return callThroughToRpc(arguments);
        },
        getMemPoolInfo: function () { return callThroughToRpc(arguments); },
        getRawMemPool: function (_a) {
            var verbose = _a.verbose;
            return callThroughToRpc(arguments);
        },
        getTxOut: function (_a) {
            var txid = _a.txid, voutNumber = _a.voutNumber, includeMempool = _a.includeMempool;
            return callThroughToRpc(arguments);
        },
        getTxOutProof: function (_a) {
            var txids = _a.txids, blockHash = _a.blockHash;
            return callThroughToRpc(arguments);
        },
        getTxOutSetInfo: function () { return callThroughToRpc(arguments); },
        preciousBlock: function (_a) {
            var blockHash = _a.blockHash;
            return callThroughToRpc(arguments);
        },
        pruneBlockchain: function (_a) {
            var blockHeight = _a.blockHeight;
            return callThroughToRpc(arguments);
        },
        saveMemPool: function () { return callThroughToRpc(arguments); },
        scanTxOutSet: function (_a) {
            var action = _a.action, scanObjects = _a.scanObjects;
            return callThroughToRpc(arguments);
        },
        verifyChain: function (_a) {
            var checkLevel = _a.checkLevel, numberOfBlocksToCheck = _a.numberOfBlocksToCheck;
            return callThroughToRpc(arguments);
        },
        verifyTxOutProof: function (_a) {
            var proof = _a.proof;
            return callThroughToRpc(arguments);
        },
        // == Control ==
        getMemoryInfo: function (_a) {
            var mode = _a.mode;
            return callThroughToRpc(arguments);
        },
        getRpcInfo: function () { return callThroughToRpc(arguments); },
        help: function (_a) {
            var command = _a.command;
            return callThroughToRpc(arguments);
        },
        logging: function (_a) {
            var includeCategories = _a.includeCategories, excludeCategories = _a.excludeCategories;
            return callThroughToRpc(arguments);
        },
        stop: function () { return callThroughToRpc(arguments); },
        uptime: function () { return callThroughToRpc(arguments); },
        // == Generating ==
        generate: function (_a) {
            var numberOfBlocks = _a.numberOfBlocks, maxTries = _a.maxTries;
            return callThroughToRpc(arguments);
        },
        generateToAddress: function (_a) {
            var numberOfBlocks = _a.numberOfBlocks, address = _a.address, maxTries = _a.maxTries;
            return callThroughToRpc(arguments);
        },
        // == Mining ==
        createAuxBlock: function (_a) {
            var address = _a.address;
            return callThroughToRpc(arguments);
        },
        getAuxBlock: function (_a) {
            var blockHash = _a.blockHash, auxPow = _a.auxPow;
            return callThroughToRpc(arguments);
        },
        getBlockTemplate: function (_a) {
            var blockTemplate = _a.blockTemplate;
            return callThroughToRpc(arguments);
        },
        getMiningInfo: function () { return callThroughToRpc(arguments); },
        getNetworkHashesPerSecond: function (_a) {
            var numberOfBlocks = _a.numberOfBlocks, blockHeight = _a.blockHeight;
            return callThroughToRpc(arguments);
        },
        prioritiseTransaction: function (_a) {
            var txid = _a.txid, dummy = _a.dummy, feeDeltaInSatoshis = _a.feeDeltaInSatoshis;
            return callThroughToRpc(arguments);
        },
        submitAuxBlock: function (_a) {
            var blockHash = _a.blockHash, auxPow = _a.auxPow;
            return callThroughToRpc(arguments);
        },
        submitBlock: function (_a) {
            var hexDataToSubmit = _a.hexDataToSubmit;
            return callThroughToRpc(arguments);
        },
        submitHeader: function (_a) {
            var hexData = _a.hexData;
            return callThroughToRpc(arguments);
        },
        // == Network ==
        addNode: function (_a) {
            var nodeAddress = _a.nodeAddress;
            return callThroughToRpc(arguments);
        },
        clearBanned: function () { return callThroughToRpc(arguments); },
        disconnectNode: function (_a) {
            var nodeAddress = _a.nodeAddress, nodeId = _a.nodeId;
            return callThroughToRpc(arguments);
        },
        getAddedNodeInfo: function (_a) {
            var nodeAddress = _a.nodeAddress;
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
        setBan: function (_a) {
            var subnet = _a.subnet, command = _a.command, banTime = _a.banTime;
            return callThroughToRpc(arguments);
        },
        // == Rawtransactions ==
        analyzePsbt: function (_a) {
            var pbst = _a.pbst;
            return callThroughToRpc(arguments);
        },
        combinePsbt: function (_a) {
            var pbsts = _a.pbsts;
            return callThroughToRpc(arguments);
        },
        combineRawTransaction: function (_a) {
            var hexs = _a.hexs;
            return callThroughToRpc(arguments);
        },
        convertToPsbt: function (_a) {
            var hex = _a.hex, permitSigData = _a.permitSigData, isWitness = _a.isWitness;
            return callThroughToRpc(arguments);
        },
        createPsbt: function (_a) {
            var txHeaders = _a.txHeaders, payloadInfo = _a.payloadInfo, locktime = _a.locktime, replaceable = _a.replaceable;
            return callThroughToRpc(arguments);
        },
        createRawTransaction: function (_a) {
            var txHeaders = _a.txHeaders, payloadInfo = _a.payloadInfo, locktime = _a.locktime, replaceable = _a.replaceable;
            return callThroughToRpc(arguments);
        },
        decodePsbt: function (_a) {
            var pbst = _a.pbst;
            return callThroughToRpc(arguments);
        },
        decodeRawTransaction: function (_a) {
            var hexString = _a.hexString, isWitness = _a.isWitness;
            return callThroughToRpc(arguments);
        },
        decodeScript: function (_a) {
            var hexString = _a.hexString;
            return callThroughToRpc(arguments);
        },
        finalizePsbt: function (_a) {
            var pbst = _a.pbst, extract = _a.extract;
            return callThroughToRpc(arguments);
        },
        fundRawTransaction: function (_a) {
            var hexString = _a.hexString, options = _a.options, isWitness = _a.isWitness;
            return callThroughToRpc(arguments);
        },
        getRawTransaction: function (_a) {
            var txid = _a.txid, verbose = _a.verbose, blockHash = _a.blockHash;
            return callThroughToRpc(arguments);
        },
        joinPsbts: function (_a) {
            var pbsts = _a.pbsts;
            return callThroughToRpc(arguments);
        },
        sendRawTransaction: function (_a) {
            var hexString = _a.hexString, maxFeeRate = _a.maxFeeRate;
            return callThroughToRpc(arguments);
        },
        signRawTransactionWithKey: function (_a) {
            var hexString = _a.hexString, privateKeys = _a.privateKeys, txs = _a.txs, sigHashType = _a.sigHashType;
            return callThroughToRpc(arguments);
        },
        testMempoolAccept: function (_a) {
            var rawTxs = _a.rawTxs, maxFeeRate = _a.maxFeeRate;
            return callThroughToRpc(arguments);
        },
        utxoUpdatePsbt: function (_a) {
            var pbst = _a.pbst;
            return callThroughToRpc(arguments);
        },
        // == Syscoin ==
        addressBalance: function (_a) {
            var address = _a.address;
            return callThroughToRpc(arguments);
        },
        assetAllocationBalance: function (_a) {
            var assetGuid = _a.assetGuid, address = _a.address;
            return callThroughToRpc(arguments);
        },
        assetAllocationBurn: function (_a) {
            var assetGuid = _a.assetGuid, address = _a.address, amount = _a.amount, ethAddress = _a.ethAddress;
            return callThroughToRpc(arguments);
        },
        assetAllocationInfo: function (_a) {
            var assetGuid = _a.assetGuid, address = _a.address;
            return callThroughToRpc(arguments);
        },
        assetAllocationLock: function (_a) {
            var assetGuid = _a.assetGuid, addressFrom = _a.addressFrom, txid = _a.txid, outputIndex = _a.outputIndex, witness = _a.witness;
            return callThroughToRpc(arguments);
        },
        assetAllocationMint: function (_a) {
            var assetGuid = _a.assetGuid, address = _a.address, amount = _a.amount, blockNum = _a.blockNum, txHex = _a.txHex, txRootHex = _a.txRootHex, merkleProofHex = _a.merkleProofHex, merkleProofPathHex = _a.merkleProofPathHex, witness = _a.witness;
            return callThroughToRpc(arguments);
        },
        assetAllocationSend: function (_a) {
            var assetGuid = _a.assetGuid, addressFrom = _a.addressFrom, addressTo = _a.addressTo, amount = _a.amount;
            return callThroughToRpc(arguments);
        },
        assetAllocationSenderStatus: function (_a) {
            var assetGuid = _a.assetGuid, address = _a.address, txid = _a.txid;
            return callThroughToRpc(arguments);
        },
        assetAllocationSendMany: function (_a) {
            var assetGuid = _a.assetGuid, addressFrom = _a.addressFrom, allocations = _a.allocations, witness = _a.witness;
            return callThroughToRpc(arguments);
        },
        assetInfo: function (_a) {
            var assetGuid = _a.assetGuid;
            return callThroughToRpc(arguments);
        },
        assetNew: function (_a) {
            var address = _a.address, publicValue = _a.publicValue, contract = _a.contract, precision = _a.precision, supply = _a.supply, maxSupply = _a.maxSupply, updateFlags = _a.updateFlags, witness = _a.witness;
            return callThroughToRpc(arguments);
        },
        assetSend: function (_a) {
            var assetGuid = _a.assetGuid, addressTo = _a.addressTo, amount = _a.amount;
            return callThroughToRpc(arguments);
        },
        assetSendMany: function (_a) {
            var assetGuid = _a.assetGuid, allocations = _a.allocations, witness = _a.witness;
            return callThroughToRpc(arguments);
        },
        assetTransfer: function (_a) {
            var assetGuid = _a.assetGuid, address = _a.address, witness = _a.witness;
            return callThroughToRpc(arguments);
        },
        assetUpdate: function (_a) {
            var assetGuid = _a.assetGuid, publicValue = _a.publicValue, contract = _a.contract, supply = _a.supply, updateFlags = _a.updateFlags, witness = _a.witness;
            return callThroughToRpc(arguments);
        },
        convertAddress: function (_a) {
            var address = _a.address;
            return callThroughToRpc(arguments);
        },
        getBlockHashByTxid: function (_a) {
            var txid = _a.txid;
            return callThroughToRpc(arguments);
        },
        getGovernanceInfo: function () { return callThroughToRpc(arguments); },
        getSuperblockBudget: function (_a) {
            var index = _a.index;
            return callThroughToRpc(arguments);
        },
        gObject: function (_a) {
            var command = _a.command;
            return callThroughToRpc(arguments);
        },
        listAssetAllocationMempoolBalances: function (_a) {
            var count = _a.count, from = _a.from, query = _a.query;
            return callThroughToRpc(arguments);
        },
        listAssetAllocations: function (_a) {
            var count = _a.count, from = _a.from, query = _a.query;
            return callThroughToRpc(arguments);
        },
        listAssetIndex: function (_a) {
            var page = _a.page, options = _a.options;
            return callThroughToRpc(arguments);
        },
        listAssetIndexAllocations: function (_a) {
            var address = _a.address;
            return callThroughToRpc(arguments);
        },
        listAssetIndexAssets: function (_a) {
            var address = _a.address;
            return callThroughToRpc(arguments);
        },
        listAssets: function (_a) {
            var count = _a.count, from = _a.from, options = _a.options;
            return callThroughToRpc(arguments);
        },
        masternode: function (_a) {
            var command = _a.command;
            return callThroughToRpc(arguments);
        },
        masternodeBroadcast: function (_a) {
            var command = _a.command;
            return callThroughToRpc(arguments);
        },
        masternodeList: function (_a) {
            var mode = _a.mode, filter = _a.filter;
            return callThroughToRpc(arguments);
        },
        mnSync: function (_a) {
            var command = _a.command;
            return callThroughToRpc(arguments);
        },
        sentinelPing: function (_a) {
            var version = _a.version;
            return callThroughToRpc(arguments);
        },
        spork: function (_a) {
            var command = _a.command;
            return callThroughToRpc(arguments);
        },
        syscoinBurn: function (_a) {
            var fundingAddress = _a.fundingAddress, amount = _a.amount, ethAddress = _a.ethAddress;
            return callThroughToRpc(arguments);
        },
        syscoinDecodeRawTransaction: function (_a) {
            var hexString = _a.hexString;
            return callThroughToRpc(arguments);
        },
        syscoinGetSpvProof: function (_a) {
            var txid = _a.txid, blockHash = _a.blockHash;
            return callThroughToRpc(arguments);
        },
        syscoinMint: function (_a) {
            var address = _a.address, amount = _a.amount, blockNum = _a.blockNum, txHex = _a.txHex, txRootHex = _a.txRootHex, txMerkleProofHex = _a.txMerkleProofHex, witness = _a.witness;
            return callThroughToRpc(arguments);
        },
        syscoinSetEthHeaders: function (_a) {
            var headers = _a.headers;
            return callThroughToRpc(arguments);
        },
        syscoinSetEthStatus: function (_a) {
            var syncStatus = _a.syncStatus, highestBlock = _a.highestBlock;
            return callThroughToRpc(arguments);
        },
        syscoinStartGeth: function () { return callThroughToRpc(arguments); },
        syscoinStopGeth: function () { return callThroughToRpc(arguments); },
        syscoinTxFund: function (_a) {
            var hexString = _a.hexString, address = _a.address, outputIndex = _a.outputIndex;
            return callThroughToRpc(arguments);
        },
        tpsTestAdd: function (_a) {
            var startTime = _a.startTime, rawTxs = _a.rawTxs;
            return callThroughToRpc(arguments);
        },
        tpsTestInfo: function () { return callThroughToRpc(arguments); },
        tpsTestSetEnabled: function (_a) {
            var enabled = _a.enabled;
            return callThroughToRpc(arguments);
        },
        voteRaw: function (_a) {
            var mnTxHash = _a.mnTxHash, mnTxIndex = _a.mnTxIndex, govHash = _a.govHash, votSignal = _a.votSignal, vote = _a.vote, time = _a.time, voteSig = _a.voteSig;
            return callThroughToRpc(arguments);
        },
        // == Util ==
        createMultiSig: function (_a) {
            var numberOfRequiredSignatures = _a.numberOfRequiredSignatures, keys = _a.keys, addressType = _a.addressType;
            return callThroughToRpc(arguments);
        },
        deriveAddress: function (_a) {
            var descriptor = _a.descriptor, range = _a.range;
            return callThroughToRpc(arguments);
        },
        estimateSmartFee: function (_a) {
            var confTarget = _a.confTarget, estimateMode = _a.estimateMode;
            return callThroughToRpc(arguments);
        },
        getDescriptorInfo: function (_a) {
            var descriptor = _a.descriptor;
            return callThroughToRpc(arguments);
        },
        signMessageWithPrivKey: function (_a) {
            var privateKey = _a.privateKey, message = _a.message;
            return callThroughToRpc(arguments);
        },
        validateAddress: function (_a) {
            var address = _a.address;
            return callThroughToRpc(arguments);
        },
        verifyMessage: function (_a) {
            var address = _a.address, signature = _a.signature, message = _a.message;
            return callThroughToRpc(arguments);
        },
        // == Wallet ==
        abandonTransaction: function (_a) {
            var txid = _a.txid;
            return callThroughToRpc(arguments);
        },
        abortRescan: function () { return callThroughToRpc(arguments); },
        addMultiSigAddress: function (_a) {
            var nRequired = _a.nRequired, keys = _a.keys, label = _a.label, addressType = _a.addressType;
            return callThroughToRpc(arguments);
        },
        backupWallet: function (_a) {
            var destination = _a.destination;
            return callThroughToRpc(arguments);
        },
        bumpFee: function (_a) {
            var txid = _a.txid, options = _a.options;
            return callThroughToRpc(arguments);
        },
        createWallet: function (_a) {
            var walletName = _a.walletName, disablePrivKeys = _a.disablePrivKeys;
            return callThroughToRpc(arguments);
        },
        dumpPrivKey: function (_a) {
            var address = _a.address;
            return callThroughToRpc(arguments);
        },
        dumpWallet: function (_a) {
            var fileName = _a.fileName;
            return callThroughToRpc(arguments);
        },
        encryptWallet: function (_a) {
            var passphrase = _a.passphrase;
            return callThroughToRpc(arguments);
        },
        getAddressesByLabel: function (_a) {
            var label = _a.label;
            return callThroughToRpc(arguments);
        },
        getAddressInfo: function (_a) {
            var address = _a.address;
            return callThroughToRpc(arguments);
        },
        getBalance: function (_a) {
            var dummy = _a.dummy, minconf = _a.minconf, includeWatchOnly = _a.includeWatchOnly;
            return callThroughToRpc(arguments);
        },
        getNewAddress: function (_a) {
            var label = _a.label, addressType = _a.addressType;
            return callThroughToRpc(arguments);
        },
        getRawChangeAddress: function (_a) {
            var addressType = _a.addressType;
            return callThroughToRpc(arguments);
        },
        getReceivedByAddress: function (_a) {
            var address = _a.address, minConf = _a.minConf;
            return callThroughToRpc(arguments);
        },
        getReceivedByLabel: function (_a) {
            var label = _a.label, minConf = _a.minConf;
            return callThroughToRpc(arguments);
        },
        getTransaction: function (_a) {
            var txid = _a.txid, includeWatchOnly = _a.includeWatchOnly;
            return callThroughToRpc(arguments);
        },
        getUnconfirmedBalance: function () { return callThroughToRpc(arguments); },
        getWalletInfo: function () { return callThroughToRpc(arguments); },
        importAddress: function (_a) {
            var address = _a.address, label = _a.label, rescan = _a.rescan, p2sh = _a.p2sh;
            return callThroughToRpc(arguments);
        },
        importMulti: function (_a) {
            var requests = _a.requests, options = _a.options;
            return callThroughToRpc(arguments);
        },
        importPrivKey: function (_a) {
            var key = _a.key, label = _a.label, rescan = _a.rescan;
            return callThroughToRpc(arguments);
        },
        importPrunedFunds: function (_a) {
            var rawTx = _a.rawTx, txOutProof = _a.txOutProof;
            return callThroughToRpc(arguments);
        },
        importPubKey: function (_a) {
            var pubKey = _a.pubKey, label = _a.label, rescan = _a.rescan;
            return callThroughToRpc(arguments);
        },
        importWallet: function (_a) {
            var fileName = _a.fileName;
            return callThroughToRpc(arguments);
        },
        keypoolRefill: function (_a) {
            var newSize = _a.newSize;
            return callThroughToRpc(arguments);
        },
        listAddressGroupings: function () { return callThroughToRpc(arguments); },
        listLabels: function (_a) {
            var purpose = _a.purpose;
            return callThroughToRpc(arguments);
        },
        listLockUnspent: function () { return callThroughToRpc(arguments); },
        listReceivedByAddress: function (_a) {
            var minConf = _a.minConf, includeEmpty = _a.includeEmpty, includeWatchOnly = _a.includeWatchOnly, addressFilter = _a.addressFilter;
            return callThroughToRpc(arguments);
        },
        listReceivedByLabel: function (_a) {
            var minConf = _a.minConf, includeEmpty = _a.includeEmpty, includeWatchOnly = _a.includeWatchOnly;
            return callThroughToRpc(arguments);
        },
        listSinceBlock: function (_a) {
            var blockHash = _a.blockHash, targetConfs = _a.targetConfs, includeWatchOnly = _a.includeWatchOnly, includeRemoved = _a.includeRemoved;
            return callThroughToRpc(arguments);
        },
        listTransactions: function (_a) {
            var label = _a.label, count = _a.count, skip = _a.skip, includeWatchOnly = _a.includeWatchOnly;
            return callThroughToRpc(arguments);
        },
        listUnspent: function (_a) {
            var minConf = _a.minConf, maxConf = _a.maxConf, addresses = _a.addresses, includeUnsafe = _a.includeUnsafe, query = _a.query, options = _a.options;
            return callThroughToRpc(arguments);
        },
        listWalletDir: function () { return callThroughToRpc(arguments); },
        listWallets: function () { return callThroughToRpc(arguments); },
        loadWallet: function (_a) {
            var fileName = _a.fileName;
            return callThroughToRpc(arguments);
        },
        lockUnspent: function (_a) {
            var unlock = _a.unlock, txs = _a.txs;
            return callThroughToRpc(arguments);
        },
        removePrunedFunds: function (_a) {
            var txid = _a.txid;
            return callThroughToRpc(arguments);
        },
        rescanBlockchain: function (_a) {
            var start = _a.start, stop = _a.stop;
            return callThroughToRpc(arguments);
        },
        sendMany: function (_a) {
            var dummy = _a.dummy, amounts = _a.amounts, minConf = _a.minConf, comment = _a.comment, subtractFeeFrom = _a.subtractFeeFrom, replaceable = _a.replaceable, confTarget = _a.confTarget, estimateMode = _a.estimateMode;
            return callThroughToRpc(arguments);
        },
        sendToAddress: function (_a) {
            var address = _a.address, amount = _a.amount, minConf = _a.minConf, comment = _a.comment, comment_to = _a.comment_to, subtractFeeFromAmount = _a.subtractFeeFromAmount, replaceable = _a.replaceable, confTarget = _a.confTarget, estimateMode = _a.estimateMode;
            return callThroughToRpc(arguments);
        },
        setHdSeed: function (_a) {
            var newKeyPool = _a.newKeyPool, seed = _a.seed;
            return callThroughToRpc(arguments);
        },
        setLabel: function (_a) {
            var address = _a.address, label = _a.label;
            return callThroughToRpc(arguments);
        },
        setTxFee: function (_a) {
            var amount = _a.amount;
            return callThroughToRpc(arguments);
        },
        signMessage: function (_a) {
            var address = _a.address, message = _a.message;
            return callThroughToRpc(arguments);
        },
        signRawTransactionWithWallet: function (_a) {
            var hexString = _a.hexString, rawTxs = _a.rawTxs, sigHashType = _a.sigHashType;
            return callThroughToRpc(arguments);
        },
        unloadWallet: function (_a) {
            var walletName = _a.walletName;
            return callThroughToRpc(arguments);
        },
        walletCreateFundedPsbt: function (_a) {
            var txs = _a.txs, amounts = _a.amounts, lockTime = _a.lockTime, options = _a.options, bip32derivs = _a.bip32derivs;
            return callThroughToRpc(arguments);
        },
        walletLock: function () { return callThroughToRpc(arguments); },
        walletPassphrase: function (_a) {
            var passphrase = _a.passphrase, timeout = _a.timeout;
            return callThroughToRpc(arguments);
        },
        walletPassphraseChange: function (_a) {
            var oldPass = _a.oldPass, newPass = _a.newPass;
            return callThroughToRpc(arguments);
        },
        walletProcessPsbt: function (_a) {
            var pbst = _a.pbst, sign = _a.sign, sigHashType = _a.sigHashType, bip32derivs = _a.bip32derivs;
            return callThroughToRpc(arguments);
        },
        // @formatter:on
        //exposed for unit testing
        callThroughToRpc: callThroughToRpc,
        unwrapRpcResponse: unwrapRpcResponse
    };
    function callThroughToRpc(args) {
        return __awaiter(this, void 0, void 0, function () {
            var argArr, paramArr, argObj_1, orderedKeys, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        argArr = Array.prototype.slice.call(args);
                        //expect arg array to be a single object
                        if (argArr.length > 1 && typeof argArr[0] !== 'object') {
                            throw new Error("callThroughToRpc received unknown params: " + JSON.stringify(argArr));
                        }
                        paramArr = [];
                        if (argArr.length > 0) {
                            argObj_1 = argArr[0];
                            orderedKeys = Reflect.ownKeys(argObj_1);
                            //create an ordered array of just values
                            paramArr = orderedKeys.map(function (value, index, arr) { return argObj_1[value]; });
                        }
                        return [4 /*yield*/, callRpc(args.callee.name.toLowerCase(), paramArr)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, unwrapRpcResponse(response)];
                }
            });
        });
    }
    function unwrapRpcResponse(response) {
        if (response.result !== null && response.error === null) {
            return response.result;
        }
        else if (response.result === null && response.error !== null) {
            return response.error;
        }
        return response; //get requests are not wrapped
    }
}
exports.rpcServices = rpcServices;
//# sourceMappingURL=rpcServices.js.map