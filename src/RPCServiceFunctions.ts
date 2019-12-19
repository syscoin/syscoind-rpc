import {
  AssetAllocationBalanceQuery,
  AssetAllocationBalanceQueryWithGuid,
  Asset,
  AssetNewRequest,
  AssetNewResponse,
  AssetInfoRequest,
  EthHeaders,
  ListAssetIndexOptions,
  ListAssetOptions,
  PbstPayloadInfo,
  RawTx,
  RpcResponse,
  SyscoinAddressEntry,
  TpsRawTx,
  Transaction,
  TransactionData,
  TxHeader, GetTransactionRequest, ListTransactionsRequest, TransactionListEntry, AssetTransferRequest, HexResponse, AssetAllocationSendManyRequest, AssetSendRequest, AssetSendManyRequest, AssetAllocationSendRequest, AssetAllocation, AssetAllocationInfoRequest, WalletInfo, NetworkInfo, BlockchainInfo, AddressInfo, AssetAllocationAmount, JsonRpcCall
} from "./index";
import { ListAssetIndexAssetsRequest } from "./model/request/listAssetIndexAssetsRequest";
import { AssetUpdateRequest } from "./model/request/assetUpdateRequest";

// @formatter:off

export interface RPCServiceFunctions {
    getBestBlockHash(): JsonRpcCall<any>;
    getBlock(blockHash: string, verbosity?: number ): JsonRpcCall<any>;
    getBlockchainInfo(): JsonRpcCall<BlockchainInfo>;
    getBlockCount(): JsonRpcCall<any>;
    getBlockFilter(blockHash: string, filterType?: string ): JsonRpcCall<any>;
    getBlockHash(height: number): JsonRpcCall<any>;
    getBlockHeader(blockHash: string, verbose?: number): JsonRpcCall<any>;
    getBlockStats(hashOrHeight: string, stats?: number): JsonRpcCall<any>;
    getChainTips(count?: number, branchLength?: number): JsonRpcCall<any>;
    getChainTxStats(nBlocks?: number, blockHash?: number): JsonRpcCall<any>;
    getDifficulty(): JsonRpcCall<any>;
    getMemPoolAncestors(txid: string, verbose?: number ): JsonRpcCall<any>;
    getMemPoolDescendants(txid: string, verbose?: number): JsonRpcCall<any>;
    getMemPoolEntry(txid: string): JsonRpcCall<any>;
    getMemPoolInfo(): JsonRpcCall<any>;
    getRawMemPool(verbose?: number): JsonRpcCall<any>;
    getTxOut(txid: string, voutNumber: number, includeMempool?: boolean): JsonRpcCall<any>;
    getTxOutProof(txids: Array<string>, blockHash: string): JsonRpcCall<any>;
    getTxOutSetInfo(): JsonRpcCall<any>;
    preciousBlock(blockHash: string): JsonRpcCall<any>;
    pruneBlockchain(blockHeight: number): JsonRpcCall<any>;
    saveMemPool(): JsonRpcCall<any>;
    scanTxOutSet(action: string, scanObjects: Array<any>): JsonRpcCall<any>;
    verifyChain(checkLevel?: number, numberOfBlocksToCheck?: number): JsonRpcCall<any>;
    verifyTxOutProof(proof: string): JsonRpcCall<any>;

    // == Control ==
    getMemoryInfo(mode?: string): JsonRpcCall<any>;
    getRpcInfo(): JsonRpcCall<any>;
    help(command?: string): JsonRpcCall<any>;
    logging(includeCategories?: Array<string>, excludeCategories?: Array<string>): JsonRpcCall<any>;
    stop(): JsonRpcCall<any>;
    uptime(): JsonRpcCall<any>;

    // == Generating ==
    generate(numberOfBlocks: number, maxTries?: number): JsonRpcCall<any>;
    generateToAddress(numberOfBlocks: number, address: string, maxTries?: number): JsonRpcCall<any>;

    // == Mining ==
    createAuxBlock(address: string): JsonRpcCall<any>;
    getAuxBlock(blockHash?: string, auxPow?: string): JsonRpcCall<any>;
    getBlockTemplate(blockTemplate: string): JsonRpcCall<any>;
    getMiningInfo(): JsonRpcCall<any>;
    getNetworkHashesPerSecond(numberOfBlocks: number, blockHeight: number): JsonRpcCall<any>;
    prioritiseTransaction(txid: string, dummy: null, feeDeltaInSatoshis: number): JsonRpcCall<any>;
    submitAuxBlock(blockHash: string, auxPow: string): JsonRpcCall<any>;
    submitBlock(hexDataToSubmit: string): JsonRpcCall<any>;
    submitHeader(hexData: string): JsonRpcCall<any>;

    // == Network ==
    addNode(nodeAddress: string): JsonRpcCall<any>;
    clearBanned(): JsonRpcCall<any>;
    disconnectNode(nodeAddress: string, nodeId: number): JsonRpcCall<any>;
    getAddedNodeInfo(nodeAddress: string): JsonRpcCall<any>;
    getConnectionCount(): JsonRpcCall<any>;
    getNetTotals(): JsonRpcCall<any>;
    getNetworkInfo(): JsonRpcCall<NetworkInfo>;
    getNodeAddresses(): JsonRpcCall<any>;
    getPeerInfo(): JsonRpcCall<any>;
    getInfo(): JsonRpcCall<any>;
    listBanned(): JsonRpcCall<any>;
    ping(): JsonRpcCall<any>;
    setBan(subnet: string, command: string, banTime?: number):JsonRpcCall<any>;

    // == Rawtransactions ==
    analyzePsbt(pbst: string): JsonRpcCall<any>;
    combinePsbt(pbsts: Array<string>): JsonRpcCall<any>;
    combineRawTransaction(hexs: Array<string>): JsonRpcCall<any>;
    convertToPsbt(hex: string, permitSigData?: number, isWitness?: number): JsonRpcCall<any>;
    createPsbt(txHeaders: Array<TxHeader>, payloadInfo: Array<PbstPayloadInfo>, locktime?: number, replaceable?: number): JsonRpcCall<any>;
    createRawTransaction(txHeaders: Array<TxHeader>, payloadInfo: Array<PbstPayloadInfo>, locktime?: number, replaceable?: number): JsonRpcCall<any>;
    decodePsbt(pbst: string): JsonRpcCall<any>;
    decodeRawTransaction(hexString: string, isWitness?: boolean): JsonRpcCall<any>;
    decodeScript(hexString: string): JsonRpcCall<any>;
    finalizePsbt(pbst: string, extract?: number): JsonRpcCall<any>;
    fundRawTransaction(hexString: string, options?: number, isWitness?: number): JsonRpcCall<any>;
    getRawTransaction(txid: string, verbose?: number, blockHash?: string): JsonRpcCall<any>;
    joinPsbts(pbsts: Array<string>): JsonRpcCall<any>;
    sendRawTransaction(hexString: string, maxFeeRate?: number): JsonRpcCall<any>;
    signRawTransactionWithKey(hexString: string, privateKeys: Array<string>, txs?: Array<TransactionData>, sigHashType?: string): JsonRpcCall<any>;
    testMempoolAccept(rawTxs: Array<string>, maxFeeRate?: number): JsonRpcCall<any>;
    utxoUpdatePsbt(pbst: string): JsonRpcCall<any>;

    // == Syscoin ==
    addressBalance(address: string): JsonRpcCall<any>;
    assetAllocationBalance(assetGuid: number, address: string): JsonRpcCall<any>;
    assetAllocationBurn(assetGuid: number, address: string, amount: number, ethAddress: string): JsonRpcCall<any>;
    assetAllocationInfo(assetGuid: number, address: string): JsonRpcCall<AssetAllocation>;
    assetAllocationLock(assetGuid: number, addressFrom: string, txid: string, outputIndex: number, witness?: string): JsonRpcCall<any>;
    assetAllocationMint(assetGuid: number, address: string, amount: number, blockNum: number, txHex: string, txRootHex: string, merkleProofHex: string, merkleProofPathHex: string, witness?: string): JsonRpcCall<any>;
    assetAllocationSend(assetGuid: number, addressFrom: string, addressTo: string, amount: number): JsonRpcCall<HexResponse>;
    assetAllocationVerifyZdag(txid: string): JsonRpcCall<any>;
    assetAllocationSendMany(assetGuid: number, addressFrom: string, amounts: AssetAllocationAmount[], witness: string): JsonRpcCall<HexResponse>;
    assetInfo(assetGuid: number): JsonRpcCall<Asset>;
    assetNew(address: string, symbol: string, public_value: string, contract: string, precision: number, total_supply: number, max_supply: number, update_flags: number,  auxfees: any, witness: string): JsonRpcCall<AssetNewResponse>;
    assetSend(assetGuid: number, addressTo: string, amount: number): JsonRpcCall<HexResponse>;
    assetSendMany(assetGuid: number, amounts: AssetAllocationAmount[], witness: string): JsonRpcCall<HexResponse>;
    assetTransfer(assetGuid: number, address: string, witness: string): JsonRpcCall<HexResponse>;
    assetUpdate(assetGuid?: number, publicValue?: string, contract?: string, supply?: number, updateFlags?: number, auxfees?: any, witness?: string): JsonRpcCall<HexResponse>;
    convertAddress(address: string): JsonRpcCall<any>;
    getBlockHashByTxid(txid: string): JsonRpcCall<any>;
    getGovernanceInfo(): JsonRpcCall<any>;
    getSuperblockBudget(index: number): JsonRpcCall<any>;
    gObject(command: string): JsonRpcCall<any>;
    listAssetAllocationMempoolBalances(count?: number, from?: number, query?: AssetAllocationBalanceQuery): JsonRpcCall<any>;
    listAssetAllocations(count?: number, from?: number, query?: AssetAllocationBalanceQueryWithGuid): JsonRpcCall<any>;
    listAssetIndex(page?: number, options?: ListAssetIndexOptions): JsonRpcCall<any>;
    listAssetIndexAllocations(address: string): JsonRpcCall<AssetAllocation[]>;
    listAssetIndexAssets(address: string): JsonRpcCall<Asset[]>;
    listAssets(count?: number, from?: number, options?: ListAssetOptions): JsonRpcCall<any>;
    masternode(command: string): JsonRpcCall<any>;
    masternodeBroadcast(command: string): JsonRpcCall<any>;
    masternodeList(mode?: string, filter?: string): JsonRpcCall<any>;
    mnSync(command: string): JsonRpcCall<any>;
    sentinelPing(version: number): JsonRpcCall<any>;
    spork(command: string): JsonRpcCall<any>;
    syscoinBurn(fundingAddress: string, amount: number, ethAddress: string): JsonRpcCall<any>;
    syscoinDecodeRawTransaction(hexString: number): JsonRpcCall<any>;
    syscoinGetSpvProof(txid: string, blockHash?: string): JsonRpcCall<any>;
    syscoinMint(address: string, amount: number, blockNum: number, txHex: string, txRootHex: string, txMerkleProofHex: string, witness?: string): JsonRpcCall<any>;
    syscoinSetEthHeaders(headers: EthHeaders): JsonRpcCall<any>;
    syscoinSetEthStatus(syncStatus: string, highestBlock: number): JsonRpcCall<any>;
    syscoinStartGeth(): JsonRpcCall<any>;
    syscoinStopGeth(): JsonRpcCall<any>;
    syscoinTxFund(hexString: string, address: string, outputIndex: number): JsonRpcCall<any>;
    tpsTestAdd(startTime, rawTxs?: Array<TpsRawTx>): JsonRpcCall<any>;
    tpsTestInfo(): JsonRpcCall<any>;
    tpsTestSetEnabled(enabled: number): JsonRpcCall<any>;
    voteRaw(mnTxHash: string, mnTxIndex: number, govHash: string, votSignal: string, vote: string, time: number, voteSig: string): JsonRpcCall<any>;

    // == Util ==
    createMultiSig(numberOfRequiredSignatures: number, keys: Array<string>, addressType?: string): JsonRpcCall<any>;
    deriveAddress(descriptor: string, range?: number): JsonRpcCall<any>;
    estimateSmartFee(confTarget: number, estimateMode?: string): JsonRpcCall<any>;
    getDescriptorInfo(descriptor: string): JsonRpcCall<any>;
    signMessageWithPrivKey(privateKey: string, message: string): JsonRpcCall<any>;
    validateAddress(address: string): JsonRpcCall<any>;
    verifyMessage(address: string, signature: string, message: string): JsonRpcCall<any>;

    // == Wallet ==
    abandonTransaction(txid: string): JsonRpcCall<any>;
    abortRescan(): JsonRpcCall<any>;
    addMultiSigAddress(nRequired: number, keys: Array<string>, label?: string, addressType?: string): JsonRpcCall<any>;
    backupWallet(destination: string): JsonRpcCall<any>;
    bumpFee(txid: string, options?: any): JsonRpcCall<any>;
    createWallet(walletName: string, disablePrivKeys?: boolean, blank?: boolean, passphrase?: string): JsonRpcCall<any>;
    dumpPrivKey(address: string): JsonRpcCall<any>;
    dumpWallet(fileName: string): JsonRpcCall<any>;
    encryptWallet(passphrase: string): JsonRpcCall<any>;
    getAddressesByLabel(label: string): JsonRpcCall<any>;
    getAddressInfo(address: string): JsonRpcCall<AddressInfo>;
    getBalance(dummy: string, minconf: number, includeWatchOnly: number): JsonRpcCall<any>;
    getNewAddress(label?: string, addressType?: string): JsonRpcCall<any>;
    getRawChangeAddress(addressType?: string): JsonRpcCall<any>;
    getReceivedByAddress(address: string, minConf?: number): JsonRpcCall<any>;
    getReceivedByLabel(label: string, minConf?: number): JsonRpcCall<any>;
    getTransaction(txid: string, includeWatchOnly?: boolean): JsonRpcCall<Transaction>;
    getUnconfirmedBalance(): JsonRpcCall<any>;
    getWalletInfo(): JsonRpcCall<WalletInfo>;
    importAddress(address: string, label?: string, rescan?: number, p2sh?: number): JsonRpcCall<any>;
    importMulti(requests: string, options: any): JsonRpcCall<any>;
    importPrivKey(key: string, label?: string, rescan?: number): JsonRpcCall<any>;
    importPrunedFunds(rawTx: string, txOutProof: string): JsonRpcCall<any>;
    importPubKey(pubKey: string, label?: string, rescan?: number): JsonRpcCall<any>;
    importWallet(fileName: string): JsonRpcCall<any>;
    keypoolRefill(newSize?: number): JsonRpcCall<any>;
    listAddressGroupings(): JsonRpcCall<any>;
    listLabels(purpose?: string): JsonRpcCall<any>;
    listLockUnspent(): JsonRpcCall<any>;
    listReceivedByAddress(minConf?: number, includeEmpty?: boolean, includeWatchOnly?: boolean, addressFilter?: string): JsonRpcCall<SyscoinAddressEntry[]>;
    listReceivedByLabel(minConf?: number, includeEmpty?: boolean, includeWatchOnly?: boolean): JsonRpcCall<any>;
    listSinceBlock(blockHash?: string, targetConfs?: number, includeWatchOnly?: number, includeRemoved?: number): JsonRpcCall<any>;
    listTransactions(label?: string, count?: number, skip?: number, includeWatchOnly?: number): JsonRpcCall<Array<TransactionListEntry>>;
    listUnspent(minConf?: number, maxConf?: number, addresses?: Array<string>, includeUnsafe?: number, query?: any, options?: any): JsonRpcCall<any>;
    listWalletDir(): JsonRpcCall<any>;
    listWallets(): JsonRpcCall<any>;
    loadWallet(fileName: string): JsonRpcCall<any>;
    lockUnspent(unlock: number, txs?: Array<{ txid: string, vout: number }>): JsonRpcCall<any>;
    removePrunedFunds(txid: string): JsonRpcCall<any>;
    rescanBlockchain(start?: number, stop?: number): JsonRpcCall<any>;
    sendMany(dummy: string, amounts: Array<{ [address: string]: number }>, minConf?: number, comment?: string, subtractFeeFrom?: Array<string>, replaceable?: boolean, confTarget?: number, estimateMode?: string): JsonRpcCall<any>;
    sendToAddress(address: string, amount: number, minConf?: number, comment?: string, comment_to?: string, subtractFeeFromAmount?: number, replaceable?: boolean, confTarget?: number, estimateMode?: string): JsonRpcCall<any>;
    sendFrom(fundingAddress: string, address: string, amount: number): JsonRpcCall<HexResponse>;
    setHdSeed(newKeyPool?: number, seed?: string): JsonRpcCall<any>;
    setLabel(address: string, label: string): JsonRpcCall<any>;
    setTxFee(amount: number): JsonRpcCall<any>;
    signMessage(address: string, message: string): JsonRpcCall<any>;
    signRawTransactionWithWallet(hexString: string, rawTxs?: Array<RawTx>, sigHashType?: string): JsonRpcCall<any>;
    unloadWallet(walletName?: string): JsonRpcCall<any>;
    walletCreateFundedPsbt(txs: any, amounts: any, lockTime?: any, options?: any, bip32derivs?: any): JsonRpcCall<any>;
    walletLock(): JsonRpcCall<any>;
    walletPassphrase(passphrase: string, timeout: number): JsonRpcCall<any>;
    walletPassphraseChange(oldPass: string, newPass: string): JsonRpcCall<any>;
    walletProcessPsbt(pbst: string, sign?: number, sigHashType?: string, bip32derivs?: number): JsonRpcCall<any>;
    // @formatter:on

  //exposed for unit testing
  callThroughToRpc(args): JsonRpcCall<any>;
  unwrapRpcResponse(response: RpcResponse | any): any;

}
