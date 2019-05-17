import { AssetAllocationBalanceQuery, AssetAllocationBalanceQueryWithGuid, AssetAllocationSend, EthHeaders, ListAssetIndexOptions, ListAssetOptions, PbstPayloadInfo, RawTx, TpsRawTx, Transaction, TxHeader } from "./index";
import { RPCServiceFunctions } from "./RPCServiceFunctions";

export function rpcServices(callRpc): RPCServiceFunctions {
  return {
    // @formatter:off
    // == Blockchain ==
    getBestBlockHash(): Promise<any> { return callThroughToRpc(arguments) },
    getBlock({blockHash, verbosity}): Promise<any> { return callThroughToRpc(arguments) },
    getBlockchainInfo(): Promise<any> { return callThroughToRpc(arguments) },
    getBlockCount(): Promise<any> { return callThroughToRpc(arguments) },
    getBlockFilter({blockHash, filterType}): Promise<any> { return callThroughToRpc(arguments) },
    getBlockHash({height}): Promise<any> { return callThroughToRpc(arguments) },
    getBlockHeader({blockHash, verbose}): Promise<any> { return callThroughToRpc(arguments) },
    getBlockStats({hashOrHeight, stats}): Promise<any> { return callThroughToRpc(arguments) },
    getChainTips({count, branchLength}): Promise<any> { return callThroughToRpc(arguments) },
    getChainTxStats({nBlocks, blockHash}): Promise<any> { return callThroughToRpc(arguments) },
    getDifficulty(): Promise<any> { return callThroughToRpc(arguments) },
    getMemPoolAncestors({txid, verbose}): Promise<any> { return callThroughToRpc(arguments) },
    getMemPoolDescendants({txid, verbose}): Promise<any> { return callThroughToRpc(arguments) },
    getMemPoolEntry({txid}): Promise<any> { return callThroughToRpc(arguments) },
    getMemPoolInfo(): Promise<any> { return callThroughToRpc(arguments) },
    getRawMemPool({verbose}): Promise<any> { return callThroughToRpc(arguments) },
    getTxOut({txid, voutNumber, includeMempool}): Promise<any> { return callThroughToRpc(arguments) },
    getTxOutProof({txids, blockHash}): Promise<any> { return callThroughToRpc(arguments) },
    getTxOutSetInfo(): Promise<any> { return callThroughToRpc(arguments) },
    preciousBlock({blockHash}): Promise<any> { return callThroughToRpc(arguments) },
    pruneBlockchain({blockHeight}): Promise<any> { return callThroughToRpc(arguments) },
    saveMemPool(): Promise<any> { return callThroughToRpc(arguments) },
    scanTxOutSet({action, scanObjects}) { return callThroughToRpc(arguments) },
    verifyChain({checkLevel, numberOfBlocksToCheck}): Promise<any> { return callThroughToRpc(arguments) },
    verifyTxOutProof({proof}): Promise<any> { return callThroughToRpc(arguments) },

    // == Control ==
    getMemoryInfo({mode}): Promise<any> { return callThroughToRpc(arguments) },
    getRpcInfo(): Promise<any> { return callThroughToRpc(arguments) },
    help({command}): Promise<any> { return callThroughToRpc(arguments) },
    logging({includeCategories, excludeCategories}): Promise<any> { return callThroughToRpc(arguments) },
    stop(): Promise<any> { return callThroughToRpc(arguments) },
    uptime(): Promise<any> { return callThroughToRpc(arguments) },

    // == Generating ==
    generate({numberOfBlocks, maxTries}): Promise<any> { return callThroughToRpc(arguments) },
    generateToAddress({numberOfBlocks, address, maxTries}): Promise<any> { return callThroughToRpc(arguments) },

    // == Mining ==
    createAuxBlock({address}: { address: string }): Promise<any> { return callThroughToRpc(arguments) },
    getAuxBlock({blockHash, auxPow}: { blockHash?: string, auxPow?: string }): Promise<any> { return callThroughToRpc(arguments) },
    getBlockTemplate({blockTemplate}: { blockTemplate: string }): Promise<any> { return callThroughToRpc(arguments) },
    getMiningInfo(): Promise<any> { return callThroughToRpc(arguments) },
    getNetworkHashesPerSecond({numberOfBlocks, blockHeight}: { numberOfBlocks: number, blockHeight: number }): Promise<any> { return callThroughToRpc(arguments) },
    prioritiseTransaction({txid, dummy, feeDeltaInSatoshis}: { txid: string, dummy?: null, feeDeltaInSatoshis: number }): Promise<any> { return callThroughToRpc(arguments) },
    submitAuxBlock({blockHash, auxPow}: { blockHash: string, auxPow: string }): Promise<any> { return callThroughToRpc(arguments) },
    submitBlock({hexDataToSubmit}: { hexDataToSubmit: string }): Promise<any> { return callThroughToRpc(arguments) },
    submitHeader({hexData}: { hexData: string }): Promise<any> { return callThroughToRpc(arguments) },

    // == Network ==
    addNode({nodeAddress}: { nodeAddress: string }): Promise<any> { return callThroughToRpc(arguments) },
    clearBanned(): Promise<any> { return callThroughToRpc(arguments) },
    disconnectNode({nodeAddress, nodeId}: { nodeAddress: string, nodeId: number }): Promise<any> { return callThroughToRpc(arguments) },
    getAddedNodeInfo({nodeAddress}: { nodeAddress: string }): Promise<any> { return callThroughToRpc(arguments) },
    getConnectionCount(): Promise<any> { return callThroughToRpc(arguments) },
    getNetTotals(): Promise<any> { return callThroughToRpc(arguments) },
    getNetworkInfo(): Promise<any> { return callThroughToRpc(arguments) },
    getNodeAddresses(): Promise<any> { return callThroughToRpc(arguments) },
    getPeerInfo(): Promise<any> { return callThroughToRpc(arguments) },
    getInfo(): Promise<any> { return callThroughToRpc(arguments) },
    listBanned(): Promise<any> { return callThroughToRpc(arguments) },
    ping(): Promise<any> { return callThroughToRpc(arguments) },
    setBan({subnet,command,banTime}: { subnet: string, command: string, banTime?: number}):Promise<any> { return callThroughToRpc(arguments) },

    // == Rawtransactions ==
    analyzePsbt({pbst}: { pbst: string }): Promise<any> { return callThroughToRpc(arguments) },
    combinePsbt({pbsts}: { pbsts: Array<string> }): Promise<any> { return callThroughToRpc(arguments) },
    combineRawTransaction({hexs}: { hexs: Array<string> }): Promise<any> { return callThroughToRpc(arguments) },
    convertToPsbt({hex, permitSigData, isWitness}: { hex: string, permitSigData?: number, isWitness?: number }): Promise<any> { return callThroughToRpc(arguments) },
    createPsbt({txHeaders, payloadInfo, locktime, replaceable}: { txHeaders: Array<TxHeader>, payloadInfo: Array<PbstPayloadInfo>, locktime?: number, replaceable?: number }): Promise<any> { return callThroughToRpc(arguments) },
    createRawTransaction({txHeaders, payloadInfo, locktime, replaceable}: { txHeaders: Array<TxHeader>, payloadInfo: Array<PbstPayloadInfo>, locktime?: number, replaceable?: number }): Promise<any> { return callThroughToRpc(arguments) },
    decodePsbt({pbst}: { pbst: string }): Promise<any> { return callThroughToRpc(arguments) },
    decodeRawTransaction({hexString, isWitness}: { hexString: string, isWitness: number }): Promise<any> { return callThroughToRpc(arguments) },
    decodeScript({hexString}: { hexString: string }): Promise<any> { return callThroughToRpc(arguments) },
    finalizePsbt({pbst, extract}: { pbst: string, extract?: number }): Promise<any> { return callThroughToRpc(arguments) },
    fundRawTransaction({hexString, options, isWitness}: { hexString: string, options?: number, isWitness?: number }): Promise<any> { return callThroughToRpc(arguments) },
    getRawTransaction({txid, verbose, blockHash}: { txid: string, verbose?: number, blockHash?: string }): Promise<any> { return callThroughToRpc(arguments) },
    joinPsbts({pbsts}: { pbsts: Array<string> }): Promise<any> { return callThroughToRpc(arguments) },
    sendRawTransaction({hexString, maxFeeRate}: { hexString: string, maxFeeRate?: number }): Promise<any> { return callThroughToRpc(arguments) },
    signRawTransactionWithKey({hexString, privateKeys, txs, sigHashType}: { hexString: string, privateKeys: Array<string>, txs?: Array<Transaction>, sigHashType?: string }): Promise<any> { return callThroughToRpc(arguments) },
    testMempoolAccept({rawTxs, maxFeeRate}: { rawTxs: Array<string>, maxFeeRate?: number }): Promise<any> { return callThroughToRpc(arguments) },
    utxoUpdatePsbt({pbst}: { pbst: string }): Promise<any> { return callThroughToRpc(arguments) },

    // == Syscoin ==
    addressBalance({address}: { address: string }): Promise<any> { return callThroughToRpc(arguments) },
    assetAllocationBalance({assetGuid, address}: { assetGuid: number, address: string }): Promise<any> { return callThroughToRpc(arguments) },
    assetAllocationBurn({assetGuid, address, amount, ethAddress}: { assetGuid: number, address: string, amount: number, ethAddress: string }): Promise<any> { return callThroughToRpc(arguments) },
    assetAllocationInfo({assetGuid, address}: { assetGuid: number, address: string }): Promise<any> { return callThroughToRpc(arguments) },
    assetAllocationLock({assetGuid, addressFrom, txid, outputIndex, witness}: { assetGuid: number, addressFrom: string, txid: string, outputIndex: number, witness?: string }): Promise<any> { return callThroughToRpc(arguments) },
    assetAllocationMint({assetGuid, address, amount, blockNum, txHex, txRootHex, merkleProofHex, merkleProofPathHex, witness}: { assetGuid: number, address: string, amount: number, blockNum: number, txHex: string, txRootHex: string, merkleProofHex: string, merkleProofPathHex: string, witness?: string }): Promise<any> { return callThroughToRpc(arguments) },
    assetAllocationSend({assetGuid, addressFrom, addressTo, amount}: { assetGuid: number, addressFrom: string, addressTo: string, amount: number }): Promise<any> { return callThroughToRpc(arguments) },
    assetAllocationSenderStatus({assetGuid, address, txid}: { assetGuid: number, address: string, txid: string }): Promise<any> { return callThroughToRpc(arguments) },
    assetAllocationSendMany({assetGuid, addressFrom, allocations, witness}: { assetGuid: number, addressFrom: string, allocations: Array<AssetAllocationSend>, witness?: string }): Promise<any> { return callThroughToRpc(arguments) },
    assetInfo({assetGuid}: { assetGuid: number }): Promise<any> { return callThroughToRpc(arguments) },
    assetNew({address, publicValue, contract, precision, supply, maxSupply, updateFlags, witness}: { address: string, publicValue: string, contract: string, precision: number, supply: number, maxSupply: number, updateFlags: number, witness: string }): Promise<any> { return callThroughToRpc(arguments) },
    assetSend({assetGuid, addressTo, amount}: { assetGuid: number, addressTo: string, amount: number }): Promise<any> { return callThroughToRpc(arguments) },
    assetSendMany({assetGuid, allocations, witness}: { assetGuid: number, allocations: Array<AssetAllocationSend>, witness?: string }): Promise<any> { return callThroughToRpc(arguments) },
    assetTransfer({assetGuid, address, witness}: { assetGuid: number, address: string, witness: string }): Promise<any> { return callThroughToRpc(arguments) },
    assetUpdate({assetGuid, publicValue, contract, supply, updateFlags, witness}: { assetGuid: number, publicValue: string, contract: string, supply: number, updateFlags: number, witness: string }): Promise<any> { return callThroughToRpc(arguments) },
    convertAddress({address}: { address: string }): Promise<any> { return callThroughToRpc(arguments) },
    getBlockHashByTxid({txid}: { txid: string }): Promise<any> { return callThroughToRpc(arguments) },
    getGovernanceInfo(): Promise<any> { return callThroughToRpc(arguments) },
    getSuperblockBudget({index}: { index: number }): Promise<any> { return callThroughToRpc(arguments) },
    gObject({command}: { command: string }): Promise<any> { return callThroughToRpc(arguments) },
    listAssetAllocationMempoolBalances({count, from, query}: { count?: number, from?: number, query?: AssetAllocationBalanceQuery }): Promise<any> { return callThroughToRpc(arguments) },
    listAssetAllocations({count, from, query}: { count?: number, from?: number, query?: AssetAllocationBalanceQueryWithGuid }): Promise<any> { return callThroughToRpc(arguments) },
    listAssetIndex({page, options}: { page?: number, options?: ListAssetIndexOptions }): Promise<any> { return callThroughToRpc(arguments) },
    listAssetIndexAllocations({address}: { address: string }): Promise<any> { return callThroughToRpc(arguments) },
    listAssetIndexAssets({address}: { address: string }): Promise<any> { return callThroughToRpc(arguments) },
    listAssets({count, from, options}: { count?: number, from?: number, options?: ListAssetOptions }): Promise<any> { return callThroughToRpc(arguments) },
    masternode({command}: { command: string }): Promise<any> { return callThroughToRpc(arguments) },
    masternodeBroadcast({command}: { command: string }): Promise<any> { return callThroughToRpc(arguments) },
    masternodeList({mode, filter}: { mode?: string, filter?: string }): Promise<any> { return callThroughToRpc(arguments) },
    mnSync({command}: { command: string }): Promise<any> { return callThroughToRpc(arguments) },
    sentinelPing({version}: { version: number }): Promise<any> { return callThroughToRpc(arguments) },
    spork({command}: { command: string }): Promise<any> { return callThroughToRpc(arguments) },
    syscoinBurn({fundingAddress, amount, ethAddress}: { fundingAddress: string, amount: number, ethAddress: string }): Promise<any> { return callThroughToRpc(arguments) },
    syscoinDecodeRawTransaction({hexString}: { hexString: number }): Promise<any> { return callThroughToRpc(arguments) },
    syscoinGetSpvProof({txid, blockHash}: { txid: string, blockHash?: string }): Promise<any> { return callThroughToRpc(arguments) },
    syscoinListReceivedByAddress(): Promise<any> { return callThroughToRpc(arguments) },
    syscoinMint({address, amount, blockNum, txHex, txRootHex, txMerkleProofHex, witness}: { address: string, amount: number, blockNum: number, txHex: string, txRootHex: string, txMerkleProofHex: string, witness?: string }): Promise<any> { return callThroughToRpc(arguments) },
    syscoinSetEthHeaders({headers}: { headers: EthHeaders }): Promise<any> { return callThroughToRpc(arguments) },
    syscoinSetEthStatus({syncStatus, highestBlock}: { syncStatus: string, highestBlock: number }): Promise<any> { return callThroughToRpc(arguments) },
    syscoinStartGeth(): Promise<any> { return callThroughToRpc(arguments) },
    syscoinStopGeth(): Promise<any> { return callThroughToRpc(arguments) },
    syscoinTxFund({hexString, address, outputIndex}: { hexString: string, address: string, outputIndex: number }): Promise<any>{ return callThroughToRpc(arguments) },
    tpsTestAdd({startTime, rawTxs}: { startTime, rawTxs?: Array<TpsRawTx> }): Promise<any> { return callThroughToRpc(arguments) },
    tpsTestInfo(): Promise<any> { return callThroughToRpc(arguments) },
    tpsTestSetEnabled({enabled}: { enabled: number }): Promise<any> { return callThroughToRpc(arguments) },
    voteRaw({mnTxHash, mnTxIndex, govHash, votSignal, vote, time, voteSig}: { mnTxHash: string, mnTxIndex: number, govHash: string, votSignal: string, vote: string, time: number, voteSig: string }): Promise<any>{ return callThroughToRpc(arguments) },

    // == Util ==
    createMultiSig({numberOfRequiredSignatures, keys, addressType}: { numberOfRequiredSignatures: number, keys: Array<string>, addressType?: string }): Promise<any> { return callThroughToRpc(arguments) },
    deriveAddress({descriptor, range}: { descriptor: string, range?: number }): Promise<any> { return callThroughToRpc(arguments) },
    estimateSmartFee({confTarget, estimateMode}: { confTarget: number, estimateMode?: string }): Promise<any> { return callThroughToRpc(arguments) },
    getDescriptorInfo({descriptor}: { descriptor: string }): Promise<any> { return callThroughToRpc(arguments) },
    signMessageWithPrivKey({privateKey, message}: { privateKey: string, message: string }): Promise<any> { return callThroughToRpc(arguments) },
    validateAddress({address}: { address: string }): Promise<any> { return callThroughToRpc(arguments) },
    verifyMessage({address, signature, message}: { address: string, signature: string, message: string }): Promise<any> { return callThroughToRpc(arguments) },

    // == Wallet ==
    abandonTransaction({txid}: { txid: string }): Promise<any> { return callThroughToRpc(arguments) },
    abortRescan(): Promise<any> { return callThroughToRpc(arguments) },
    addMultiSigAddress({nRequired, keys, label, addressType}: { nRequired: number, keys: Array<string>, label?: string, addressType?: string }): Promise<any> { return callThroughToRpc(arguments) },
    backupWallet({destination}: { destination: string }): Promise<any> { return callThroughToRpc(arguments) },
    bumpFee({txid, options}: { txid: string, options?: any }): Promise<any> { return callThroughToRpc(arguments) },
    createWallet({walletName, disablePrivKeys}: { walletName: string, disablePrivKeys: number }): Promise<any> { return callThroughToRpc(arguments) },
    dumpPrivKey({address}: { address: string }): Promise<any> { return callThroughToRpc(arguments) },
    dumpWallet({fileName}: { fileName: string }): Promise<any> { return callThroughToRpc(arguments) },
    encryptWallet({passphrase}: { passphrase: string }): Promise<any> { return callThroughToRpc(arguments) },
    getAddressesByLabel({label}: { label: string }): Promise<any> { return callThroughToRpc(arguments) },
    getAddressInfo({address}: { address: string }): Promise<any> { return callThroughToRpc(arguments) },
    getBalance({dummy, minconf, includeWatchOnly}: { dummy?: string, minconf: number, includeWatchOnly: number }): Promise<any> { return callThroughToRpc(arguments) },
    getNewAddress({label, addressType}: { label: string, addressType: string }): Promise<any> { return callThroughToRpc(arguments) },
    getRawChangeAddress({addressType}: { addressType?: string }): Promise<any> { return callThroughToRpc(arguments) },
    getReceivedByAddress({address, minConf}: { address: string, minConf?: number }): Promise<any> { return callThroughToRpc(arguments) },
    getReceivedByLabel({label, minConf}: { label: string, minConf?: number }): Promise<any> { return callThroughToRpc(arguments) },
    getTransaction({txid, includeWatchOnly}: { txid: string, includeWatchOnly: number }): Promise<any> { return callThroughToRpc(arguments) },
    getUnconfirmedBalance(): Promise<any>{ return callThroughToRpc(arguments) },
    getWalletInfo(): Promise<any>{ return callThroughToRpc(arguments) },
    importAddress({address, label, rescan, p2sh}: { address: string, label?: string, rescan?: number, p2sh?: number }): Promise<any>{ return callThroughToRpc(arguments) },
    importMulti({requests, options}: { requests: string, options: any }): Promise<any> { return callThroughToRpc(arguments) },
    importPrivKey({key, label, rescan}: { key: string, label?: string, rescan?: number }): Promise<any> { return callThroughToRpc(arguments) },
    importPrunedFunds({rawTx, txOutProof}: { rawTx: string, txOutProof: string }): Promise<any> { return callThroughToRpc(arguments) },
    importPubKey({pubKey, label, rescan}: { pubKey: string, label?: string, rescan?: number }): Promise<any> { return callThroughToRpc(arguments) },
    importWallet({fileName}: { fileName: string }): Promise<any>{ return callThroughToRpc(arguments) },
    keypoolRefill({newSize}: { newSize?: number }): Promise<any> { return callThroughToRpc(arguments) },
    listAddressGroupings(): Promise<any>{ return callThroughToRpc(arguments) },
    listLabels({purpose}: { purpose?: string }): Promise<any> { return callThroughToRpc(arguments) },
    listLockUnspent(): Promise<any> { return callThroughToRpc(arguments) },
    listReceivedByAddress({minConf, includeEmpty, includeWatchOnly, addressFilter}: { minConf?: number, includeEmpty?: number, includeWatchOnly?: number, addressFilter?: string }): Promise<any> { return callThroughToRpc(arguments) },
    listReceivedByLabel({minConf, includeEmpty, includeWatchOnly}: { minConf?: number, includeEmpty?: number, includeWatchOnly?: number }): Promise<any> { return callThroughToRpc(arguments) },
    listSinceBlock({blockHash, targetConfs, includeWatchOnly, includeRemoved}: { blockHash?: string, targetConfs?: number, includeWatchOnly?: number, includeRemoved?: number }): Promise<any> { return callThroughToRpc(arguments) },
    listTransactions({label, count, skip, includeWatchOnly}: { label?: string, count?: number, skip?: number, includeWatchOnly?: number }): Promise<any> { return callThroughToRpc(arguments) },
    listUnspent({minConf, maxConf, addresses, includeUnsafe, query, options}: { minConf?: number, maxConf?: number, addresses?: Array<string>, includeUnsafe?: number, query?: any, options?: any }): Promise<any> { return callThroughToRpc(arguments) },
    listWalletDir(): Promise<any> { return callThroughToRpc(arguments) },
    listWallets(): Promise<any> { return callThroughToRpc(arguments) },
    loadWallet({fileName}: { fileName: string }): Promise<any> { return callThroughToRpc(arguments) },
    lockUnspent({unlock, txs}: { unlock: number, txs?: Array<{ txid: string, vout: number }> }): Promise<any> { return callThroughToRpc(arguments) },
    removePrunedFunds({txid}: { txid: string }): Promise<any> { return callThroughToRpc(arguments) },
    rescanBlockchain({start, stop}: { start?: number, stop?: number }): Promise<any> { return callThroughToRpc(arguments) },
    sendMany({dummy, amounts, minConf, comment, subtractFeeFrom, replaceable, confTarget, estimateMode}: { dummy: string, amounts: Array<{ [address: string]: number }>, minConf?: number, comment?: string, subtractFeeFrom?: Array<string>, replaceable?: boolean, confTarget?: number, estimateMode?: string }): Promise<any> { return callThroughToRpc(arguments) },
    sendToAddress({address, amount, minConf, comment, comment_to, subtractFeeFromAmount, replaceable, confTarget, estimateMode}: { address: string, amount: number, minConf?: number, comment?: string, comment_to?: string, subtractFeeFromAmount?: number, replaceable?: boolean, confTarget?: number, estimateMode?: string }): Promise<any> { return callThroughToRpc(arguments) },
    setHdSeed({newKeyPool, seed}: { newKeyPool?: number, seed?: string }): Promise<any> { return callThroughToRpc(arguments) },
    setLabel({address, label}: { address: string, label: string }): Promise<any> { return callThroughToRpc(arguments) },
    setTxFee({amount}: { amount: number }): Promise<any> { return callThroughToRpc(arguments) },
    signMessage({address, message}: { address: string, message: string }): Promise<any> { return callThroughToRpc(arguments) },
    signRawTransactionWithWallet({hexString, rawTxs, sigHashType}: { hexString: string, rawTxs?: Array<RawTx>, sigHashType?: string }): Promise<any> { return callThroughToRpc(arguments) },
    unloadWallet({walletName}: { walletName?: string }): Promise<any> { return callThroughToRpc(arguments) },
    walletCreateFundedPsbt({txs, amounts, lockTime, options, bip32derivs}: { txs: any, amounts: any, lockTime?: any, options?: any, bip32derivs?: any }): Promise<any> { return callThroughToRpc(arguments) },
    walletLock(): Promise<any> { return callThroughToRpc(arguments) },
    walletPassphrase({passphrase, timeout}: { passphrase: string, timeout: number }): Promise<any> { return callThroughToRpc(arguments) },
    walletPassphraseChange({oldPass, newPass}: { oldPass: string, newPass: string }): Promise<any> { return callThroughToRpc(arguments) },
    walletProcessPsbt({pbst, sign, sigHashType, bip32derivs}: { pbst: string, sign?: number, sigHashType?: string, bip32derivs?: number }): Promise<any> { return callThroughToRpc(arguments) },
    // @formatter:on

    callThroughToRpc //exposed for unit testing
  };

  function callThroughToRpc(args): Promise<any> {
    let argArr: Array<any> = Array.prototype.slice.call(args);

    //expect arg array to be a single object
    if(argArr.length > 1 && typeof argArr[0] !== 'object') {
      throw new Error(`callThroughToRpc received unknown params: ${JSON.stringify(argArr)}`);
    }

    let paramArr = [];
    if(argArr.length > 0) {
      //get the ordered keys of the object
      let argObj = argArr[0];
      let orderedKeys = Reflect.ownKeys(argObj);

      //create an ordered array of just values
      paramArr = orderedKeys.map((value, index, arr) => argObj[value]);
    }

    return callRpc(args.callee.name.toLowerCase(), paramArr);
  }
}
