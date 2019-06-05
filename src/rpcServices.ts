import { RpcResponse } from "./index";
import { RPCServiceFunctions } from "./RPCServiceFunctions";

export function rpcServices(callRpc): RPCServiceFunctions {
  return {
    // @formatter:off
    // == Blockchain ==
    getBestBlockHash() { return callThroughToRpc(arguments) },
    getBlock({blockHash, verbosity}) { return callThroughToRpc(arguments) },
    getBlockchainInfo() { return callThroughToRpc(arguments) },
    getBlockCount() { return callThroughToRpc(arguments) },
    getBlockFilter({blockHash, filterType}) { return callThroughToRpc(arguments) },
    getBlockHash({height}) { return callThroughToRpc(arguments) },
    getBlockHeader({blockHash, verbose}) { return callThroughToRpc(arguments) },
    getBlockStats({hashOrHeight, stats}) { return callThroughToRpc(arguments) },
    getChainTips({count, branchLength}) { return callThroughToRpc(arguments) },
    getChainTxStats({nBlocks, blockHash}) { return callThroughToRpc(arguments) },
    getDifficulty() { return callThroughToRpc(arguments) },
    getMemPoolAncestors({txid, verbose}) { return callThroughToRpc(arguments) },
    getMemPoolDescendants({txid, verbose}) { return callThroughToRpc(arguments) },
    getMemPoolEntry({txid}) { return callThroughToRpc(arguments) },
    getMemPoolInfo() { return callThroughToRpc(arguments) },
    getRawMemPool({verbose}) { return callThroughToRpc(arguments) },
    getTxOut({txid, voutNumber, includeMempool}) { return callThroughToRpc(arguments) },
    getTxOutProof({txids, blockHash}) { return callThroughToRpc(arguments) },
    getTxOutSetInfo() { return callThroughToRpc(arguments) },
    preciousBlock({blockHash}) { return callThroughToRpc(arguments) },
    pruneBlockchain({blockHeight}) { return callThroughToRpc(arguments) },
    saveMemPool() { return callThroughToRpc(arguments) },
    scanTxOutSet({action, scanObjects}) { return callThroughToRpc(arguments) },
    verifyChain({checkLevel, numberOfBlocksToCheck}) { return callThroughToRpc(arguments) },
    verifyTxOutProof({proof}) { return callThroughToRpc(arguments) },

    // == Control ==
    getMemoryInfo({mode}) { return callThroughToRpc(arguments) },
    getRpcInfo() { return callThroughToRpc(arguments) },
    help({command}) { return callThroughToRpc(arguments) },
    logging({includeCategories, excludeCategories}) { return callThroughToRpc(arguments) },
    stop() { return callThroughToRpc(arguments) },
    uptime() { return callThroughToRpc(arguments) },

    // == Generating ==
    generate({numberOfBlocks, maxTries}) { return callThroughToRpc(arguments) },
    generateToAddress({numberOfBlocks, address, maxTries}) { return callThroughToRpc(arguments) },

    // == Mining ==
    createAuxBlock({address}) { return callThroughToRpc(arguments) },
    getAuxBlock({blockHash, auxPow}) { return callThroughToRpc(arguments) },
    getBlockTemplate({blockTemplate}) { return callThroughToRpc(arguments) },
    getMiningInfo() { return callThroughToRpc(arguments) },
    getNetworkHashesPerSecond({numberOfBlocks, blockHeight}) { return callThroughToRpc(arguments) },
    prioritiseTransaction({txid, dummy, feeDeltaInSatoshis}) { return callThroughToRpc(arguments) },
    submitAuxBlock({blockHash, auxPow}) { return callThroughToRpc(arguments) },
    submitBlock({hexDataToSubmit}) { return callThroughToRpc(arguments) },
    submitHeader({hexData}) { return callThroughToRpc(arguments) },

    // == Network ==
    addNode({nodeAddress}) { return callThroughToRpc(arguments) },
    clearBanned() { return callThroughToRpc(arguments) },
    disconnectNode({nodeAddress, nodeId}) { return callThroughToRpc(arguments) },
    getAddedNodeInfo({nodeAddress}) { return callThroughToRpc(arguments) },
    getConnectionCount() { return callThroughToRpc(arguments) },
    getNetTotals() { return callThroughToRpc(arguments) },
    getNetworkInfo() { return callThroughToRpc(arguments) },
    getNodeAddresses() { return callThroughToRpc(arguments) },
    getPeerInfo() { return callThroughToRpc(arguments) },
    getInfo() { return callThroughToRpc(arguments) },
    listBanned() { return callThroughToRpc(arguments) },
    ping() { return callThroughToRpc(arguments) },
    setBan({subnet,command,banTime}):Promise<any> { return callThroughToRpc(arguments) },

    // == Rawtransactions ==
    analyzePsbt({pbst}) { return callThroughToRpc(arguments) },
    combinePsbt({pbsts}) { return callThroughToRpc(arguments) },
    combineRawTransaction({hexs}) { return callThroughToRpc(arguments) },
    convertToPsbt({hex, permitSigData, isWitness}) { return callThroughToRpc(arguments) },
    createPsbt({txHeaders, payloadInfo, locktime, replaceable}) { return callThroughToRpc(arguments) },
    createRawTransaction({txHeaders, payloadInfo, locktime, replaceable}) { return callThroughToRpc(arguments) },
    decodePsbt({pbst}) { return callThroughToRpc(arguments) },
    decodeRawTransaction({hexString, isWitness}) { return callThroughToRpc(arguments) },
    decodeScript({hexString}) { return callThroughToRpc(arguments) },
    finalizePsbt({pbst, extract}) { return callThroughToRpc(arguments) },
    fundRawTransaction({hexString, options, isWitness}) { return callThroughToRpc(arguments) },
    getRawTransaction({txid, verbose, blockHash}) { return callThroughToRpc(arguments) },
    joinPsbts({pbsts}) { return callThroughToRpc(arguments) },
    sendRawTransaction({hexString, maxFeeRate}) { return callThroughToRpc(arguments) },
    signRawTransactionWithKey({hexString, privateKeys, txs, sigHashType}) { return callThroughToRpc(arguments) },
    testMempoolAccept({rawTxs, maxFeeRate}) { return callThroughToRpc(arguments) },
    utxoUpdatePsbt({pbst}) { return callThroughToRpc(arguments) },

    // == Syscoin ==
    addressBalance({address}) { return callThroughToRpc(arguments) },
    assetAllocationBalance({assetGuid, address}) { return callThroughToRpc(arguments) },
    assetAllocationBurn({assetGuid, address, amount, ethAddress}) { return callThroughToRpc(arguments) },
    assetAllocationInfo({assetGuid, address}) { return callThroughToRpc(arguments) },
    assetAllocationLock({assetGuid, addressFrom, txid, outputIndex, witness}) { return callThroughToRpc(arguments) },
    assetAllocationMint({assetGuid, address, amount, blockNum, txHex, txRootHex, merkleProofHex, merkleProofPathHex, witness}) { return callThroughToRpc(arguments) },
    assetAllocationSend({assetGuid, addressFrom, addressTo, amount}) { return callThroughToRpc(arguments) },
    assetAllocationSenderStatus({assetGuid, address, txid}) { return callThroughToRpc(arguments) },
    assetAllocationSendMany({assetGuid, addressFrom, amounts, witness}) { return callThroughToRpc(arguments) },
    assetInfo(request) { return callThroughToRpc(arguments) },
    assetNew(request) { return callThroughToRpc(arguments) },
    assetSend({assetGuid, addressTo, amount}) { return callThroughToRpc(arguments) },
    assetSendMany({assetGuid, amounts, witness}) { return callThroughToRpc(arguments) },
    assetTransfer({assetGuid, address, witness}) { return callThroughToRpc(arguments) },
    assetUpdate({assetGuid, publicValue, contract, supply, updateFlags, witness}) { return callThroughToRpc(arguments) },
    convertAddress({address}) { return callThroughToRpc(arguments) },
    getBlockHashByTxid({txid}) { return callThroughToRpc(arguments) },
    getGovernanceInfo() { return callThroughToRpc(arguments) },
    getSuperblockBudget({index}) { return callThroughToRpc(arguments) },
    gObject({command}) { return callThroughToRpc(arguments) },
    listAssetAllocationMempoolBalances({count, from, query}) { return callThroughToRpc(arguments) },
    listAssetAllocations({count, from, query}) { return callThroughToRpc(arguments) },
    listAssetIndex({page, options}) { return callThroughToRpc(arguments) },
    listAssetIndexAllocations({address}) { return callThroughToRpc(arguments) },
    listAssetIndexAssets(request) { return callThroughToRpc(arguments) },
    listAssets({count, from, options}) { return callThroughToRpc(arguments) },
    masternode({command}) { return callThroughToRpc(arguments) },
    masternodeBroadcast({command}) { return callThroughToRpc(arguments) },
    masternodeList({mode, filter}) { return callThroughToRpc(arguments) },
    mnSync({command}) { return callThroughToRpc(arguments) },
    sentinelPing({version}) { return callThroughToRpc(arguments) },
    spork({command}) { return callThroughToRpc(arguments) },
    syscoinBurn({fundingAddress, amount, ethAddress}) { return callThroughToRpc(arguments) },
    syscoinDecodeRawTransaction({hexString}) { return callThroughToRpc(arguments) },
    syscoinGetSpvProof({txid, blockHash}) { return callThroughToRpc(arguments) },
    syscoinMint({address, amount, blockNum, txHex, txRootHex, txMerkleProofHex, witness}) { return callThroughToRpc(arguments) },
    syscoinSetEthHeaders({headers}) { return callThroughToRpc(arguments) },
    syscoinSetEthStatus({syncStatus, highestBlock}) { return callThroughToRpc(arguments) },
    syscoinStartGeth() { return callThroughToRpc(arguments) },
    syscoinStopGeth() { return callThroughToRpc(arguments) },
    syscoinTxFund({hexString, address, outputIndex}){ return callThroughToRpc(arguments) },
    tpsTestAdd({startTime, rawTxs}) { return callThroughToRpc(arguments) },
    tpsTestInfo() { return callThroughToRpc(arguments) },
    tpsTestSetEnabled({enabled}) { return callThroughToRpc(arguments) },
    voteRaw({mnTxHash, mnTxIndex, govHash, votSignal, vote, time, voteSig}){ return callThroughToRpc(arguments) },

    // == Util ==
    createMultiSig({numberOfRequiredSignatures, keys, addressType}) { return callThroughToRpc(arguments) },
    deriveAddress({descriptor, range}) { return callThroughToRpc(arguments) },
    estimateSmartFee({confTarget, estimateMode}) { return callThroughToRpc(arguments) },
    getDescriptorInfo({descriptor}) { return callThroughToRpc(arguments) },
    signMessageWithPrivKey({privateKey, message}) { return callThroughToRpc(arguments) },
    validateAddress({address}) { return callThroughToRpc(arguments) },
    verifyMessage({address, signature, message}) { return callThroughToRpc(arguments) },

    // == Wallet ==
    abandonTransaction({txid}) { return callThroughToRpc(arguments) },
    abortRescan() { return callThroughToRpc(arguments) },
    addMultiSigAddress({nRequired, keys, label, addressType}) { return callThroughToRpc(arguments) },
    backupWallet({destination}) { return callThroughToRpc(arguments) },
    bumpFee({txid, options}) { return callThroughToRpc(arguments) },
    createWallet({walletName, disablePrivKeys, blank, passphrase}) { return callThroughToRpc(arguments) },
    dumpPrivKey({address}) { return callThroughToRpc(arguments) },
    dumpWallet({fileName}) { return callThroughToRpc(arguments) },
    encryptWallet({passphrase}) { return callThroughToRpc(arguments) },
    getAddressesByLabel({label}) { return callThroughToRpc(arguments) },
    getAddressInfo({address}) { return callThroughToRpc(arguments) },
    getBalance({dummy, minconf, includeWatchOnly}) { return callThroughToRpc(arguments) },
    getNewAddress({label, addressType}) { return callThroughToRpc(arguments) },
    getRawChangeAddress({addressType}) { return callThroughToRpc(arguments) },
    getReceivedByAddress({address, minConf}) { return callThroughToRpc(arguments) },
    getReceivedByLabel({label, minConf}) { return callThroughToRpc(arguments) },
    getTransaction(request) { return callThroughToRpc(arguments) },
    getUnconfirmedBalance(){ return callThroughToRpc(arguments) },
    getWalletInfo(){ return callThroughToRpc(arguments) },
    importAddress({address, label, rescan, p2sh}){ return callThroughToRpc(arguments) },
    importMulti({requests, options}) { return callThroughToRpc(arguments) },
    importPrivKey({key, label, rescan}) { return callThroughToRpc(arguments) },
    importPrunedFunds({rawTx, txOutProof}) { return callThroughToRpc(arguments) },
    importPubKey({pubKey, label, rescan}) { return callThroughToRpc(arguments) },
    importWallet({fileName}){ return callThroughToRpc(arguments) },
    keypoolRefill({newSize}) { return callThroughToRpc(arguments) },
    listAddressGroupings(){ return callThroughToRpc(arguments) },
    listLabels({purpose}) { return callThroughToRpc(arguments) },
    listLockUnspent() { return callThroughToRpc(arguments) },
    listReceivedByAddress({minConf, includeEmpty, includeWatchOnly, addressFilter}) { return callThroughToRpc(arguments) },
    listReceivedByLabel({minConf, includeEmpty, includeWatchOnly}) { return callThroughToRpc(arguments) },
    listSinceBlock({blockHash, targetConfs, includeWatchOnly, includeRemoved}) { return callThroughToRpc(arguments) },
    listTransactions(request) { return callThroughToRpc(arguments) },
    listUnspent({minConf, maxConf, addresses, includeUnsafe, query, options}) { return callThroughToRpc(arguments) },
    listWalletDir() { return callThroughToRpc(arguments) },
    listWallets() { return callThroughToRpc(arguments) },
    loadWallet({fileName}) { return callThroughToRpc(arguments) },
    lockUnspent({unlock, txs}) { return callThroughToRpc(arguments) },
    removePrunedFunds({txid}) { return callThroughToRpc(arguments) },
    rescanBlockchain({start, stop}) { return callThroughToRpc(arguments) },
    sendMany({dummy, amounts, minConf, comment, subtractFeeFrom, replaceable, confTarget, estimateMode}) { return callThroughToRpc(arguments) },
    sendToAddress({address, amount, minConf, comment, comment_to, subtractFeeFromAmount, replaceable, confTarget, estimateMode}) { return callThroughToRpc(arguments) },
    setHdSeed({newKeyPool, seed}) { return callThroughToRpc(arguments) },
    setLabel({address, label}) { return callThroughToRpc(arguments) },
    setTxFee({amount}) { return callThroughToRpc(arguments) },
    signMessage({address, message}) { return callThroughToRpc(arguments) },
    signRawTransactionWithWallet({hexString, rawTxs, sigHashType}) { return callThroughToRpc(arguments) },
    unloadWallet({walletName}) { return callThroughToRpc(arguments) },
    walletCreateFundedPsbt({txs, amounts, lockTime, options, bip32derivs}) { return callThroughToRpc(arguments) },
    walletLock() { return callThroughToRpc(arguments) },
    walletPassphrase({passphrase, timeout}) { return callThroughToRpc(arguments) },
    walletPassphraseChange({oldPass, newPass}) { return callThroughToRpc(arguments) },
    walletProcessPsbt({pbst, sign, sigHashType, bip32derivs}) { return callThroughToRpc(arguments) },
    // @formatter:on

    //exposed for unit testing
    callThroughToRpc,
    unwrapRpcResponse
  };

  async function callThroughToRpc(args): Promise<any> {
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

    let response;
    try {
      console.log("Calling SYS-JS function:", args.callee.name.toLowerCase(), 'with params', paramArr);
      response = await callRpc(args.callee.name.toLowerCase(), paramArr);
    }catch (e) {
      console.log("caught error: ", e.response.data);
      if (e.response && e.response.data) {
        if (e.response.data.result !== undefined && e.response.data.error !== undefined) {
          //this is a special syscoin error, return the nested error
          return unwrapRpcResponse(e.response.data);
        }
      }
    }

    return unwrapRpcResponse(response);
  }

  function unwrapRpcResponse(response: RpcResponse): any {
    console.log("process:", response);
    if(response.result !== null && response.error === null) {
      return response.result;
    }else if(response.result === null && response.error !== null) {
      throw new Error(response.error.message);
    }

    return response; //get requests are not wrapped
  }
}
