import { JsonRpcCall, RpcResponse } from "./index";
import { RPCServiceFunctions } from "./RPCServiceFunctions";

export function rpcServices(callRpc): RPCServiceFunctions {
  return {
    // @formatter:off
    // == Blockchain ==
    getBestBlockHash() { return callThroughToRpc(arguments) },
    getBlock(...args) { return callThroughToRpc(arguments) },
    getBlockchainInfo() { return callThroughToRpc(arguments) },
    getBlockCount() { return callThroughToRpc(arguments) },
    getBlockFilter(...args) { return callThroughToRpc(arguments) },
    getBlockHash(...args) { return callThroughToRpc(arguments) },
    getBlockHeader(...args) { return callThroughToRpc(arguments) },
    getBlockStats(...args) { return callThroughToRpc(arguments) },
    getChainTips(...args) { return callThroughToRpc(arguments) },
    getChainTxStats(...args) { return callThroughToRpc(arguments) },
    getDifficulty() { return callThroughToRpc(arguments) },
    getMemPoolAncestors(...args) { return callThroughToRpc(arguments) },
    getMemPoolDescendants(...args) { return callThroughToRpc(arguments) },
    getMemPoolEntry(...args) { return callThroughToRpc(arguments) },
    getMemPoolInfo() { return callThroughToRpc(arguments) },
    getRawMemPool(...args) { return callThroughToRpc(arguments) },
    getTxOut(...args) { return callThroughToRpc(arguments) },
    getTxOutProof(...args) { return callThroughToRpc(arguments) },
    getTxOutSetInfo() { return callThroughToRpc(arguments) },
    preciousBlock(...args) { return callThroughToRpc(arguments) },
    pruneBlockchain(...args) { return callThroughToRpc(arguments) },
    saveMemPool() { return callThroughToRpc(arguments) },
    scanTxOutSet(...args) { return callThroughToRpc(arguments) },
    verifyChain(...args) { return callThroughToRpc(arguments) },
    verifyTxOutProof(...args) { return callThroughToRpc(arguments) },

    // == Control ==
    getMemoryInfo(...args) { return callThroughToRpc(arguments) },
    getRpcInfo() { return callThroughToRpc(arguments) },
    help(...args) { return callThroughToRpc(arguments) },
    logging(...args) { return callThroughToRpc(arguments) },
    stop() { return callThroughToRpc(arguments) },
    uptime() { return callThroughToRpc(arguments) },

    // == Generating ==
    generate(...args) { return callThroughToRpc(arguments) },
    generateToAddress(...args) { return callThroughToRpc(arguments) },

    // == Mining ==
    createAuxBlock(...args) { return callThroughToRpc(arguments) },
    getAuxBlock(...args) { return callThroughToRpc(arguments) },
    getBlockTemplate(...args) { return callThroughToRpc(arguments) },
    getMiningInfo() { return callThroughToRpc(arguments) },
    getNetworkHashesPerSecond(...args) { return callThroughToRpc(arguments) },
    prioritiseTransaction(...args) { return callThroughToRpc(arguments) },
    submitAuxBlock(...args) { return callThroughToRpc(arguments) },
    submitBlock(...args) { return callThroughToRpc(arguments) },
    submitHeader(...args) { return callThroughToRpc(arguments) },

    // == Network ==
    addNode(...args) { return callThroughToRpc(arguments) },
    clearBanned() { return callThroughToRpc(arguments) },
    disconnectNode(...args) { return callThroughToRpc(arguments) },
    getAddedNodeInfo(...args) { return callThroughToRpc(arguments) },
    getConnectionCount() { return callThroughToRpc(arguments) },
    getNetTotals() { return callThroughToRpc(arguments) },
    getNetworkInfo() { return callThroughToRpc(arguments) },
    getNodeAddresses() { return callThroughToRpc(arguments) },
    getPeerInfo() { return callThroughToRpc(arguments) },
    getInfo() { return callThroughToRpc(arguments) },
    listBanned() { return callThroughToRpc(arguments) },
    ping() { return callThroughToRpc(arguments) },
    setBan(...args) { return callThroughToRpc(arguments) },

    // == Rawtransactions ==
    analyzePsbt(...args) { return callThroughToRpc(arguments) },
    combinePsbt(...args) { return callThroughToRpc(arguments) },
    combineRawTransaction(...args) { return callThroughToRpc(arguments) },
    convertToPsbt(...args) { return callThroughToRpc(arguments) },
    createPsbt(...args) { return callThroughToRpc(arguments) },
    createRawTransaction(...args) { return callThroughToRpc(arguments) },
    decodePsbt(...args) { return callThroughToRpc(arguments) },
    decodeRawTransaction(...args) { return callThroughToRpc(arguments) },
    decodeScript(...args) { return callThroughToRpc(arguments) },
    finalizePsbt(...args) { return callThroughToRpc(arguments) },
    fundRawTransaction(...args) { return callThroughToRpc(arguments) },
    getRawTransaction(...args) { return callThroughToRpc(arguments) },
    joinPsbts(...args) { return callThroughToRpc(arguments) },
    sendRawTransaction(...args) { return callThroughToRpc(arguments) },
    signRawTransactionWithKey(...args) { return callThroughToRpc(arguments) },
    testMempoolAccept(...args) { return callThroughToRpc(arguments) },
    utxoUpdatePsbt(...args) { return callThroughToRpc(arguments) },

    // == Syscoin ==
    addressBalance(...args) { return callThroughToRpc(arguments) },
    assetAllocationBalance(...args) { return callThroughToRpc(arguments) },
    assetAllocationBurn(...args) { return callThroughToRpc(arguments) },
    assetAllocationInfo(...args) { return callThroughToRpc(arguments) },
    assetAllocationLock(...args) { return callThroughToRpc(arguments) },
    assetAllocationMint(...args) { return callThroughToRpc(arguments) },
    assetAllocationSend(...args) { return callThroughToRpc(arguments) },
    assetAllocationSenderStatus(...args) { return callThroughToRpc(arguments) },
    assetAllocationSendMany(...args) { return callThroughToRpc(arguments) },
    assetInfo(...args) { return callThroughToRpc(arguments) },
    assetNew(...args) { return callThroughToRpc(arguments) },
    assetSend(...args) { return callThroughToRpc(arguments) },
    assetSendMany(...args) { return callThroughToRpc(arguments) },
    assetTransfer(...args) { return callThroughToRpc(arguments) },
    assetUpdate(...args) { return callThroughToRpc(arguments) },
    convertAddress(...args) { return callThroughToRpc(arguments) },
    getBlockHashByTxid(...args) { return callThroughToRpc(arguments) },
    getGovernanceInfo() { return callThroughToRpc(arguments) },
    getSuperblockBudget(...args) { return callThroughToRpc(arguments) },
    gObject(...args) { return callThroughToRpc(arguments) },
    listAssetAllocationMempoolBalances(...args) { return callThroughToRpc(arguments) },
    listAssetAllocations(...args) { return callThroughToRpc(arguments) },
    listAssetIndex(...args) { return callThroughToRpc(arguments) },
    listAssetIndexAllocations(...args) { return callThroughToRpc(arguments) },
    listAssetIndexAssets(...args) { return callThroughToRpc(arguments) },
    listAssets(...args) { return callThroughToRpc(arguments) },
    masternode(...args) { return callThroughToRpc(arguments) },
    masternodeBroadcast(...args) { return callThroughToRpc(arguments) },
    masternodeList(...args) { return callThroughToRpc(arguments) },
    mnSync(...args) { return callThroughToRpc(arguments) },
    sentinelPing(...args) { return callThroughToRpc(arguments) },
    spork(...args) { return callThroughToRpc(arguments) },
    syscoinBurn(...args) { return callThroughToRpc(arguments) },
    syscoinDecodeRawTransaction(...args) { return callThroughToRpc(arguments) },
    syscoinGetSpvProof(...args) { return callThroughToRpc(arguments) },
    syscoinMint(...args) { return callThroughToRpc(arguments) },
    syscoinSetEthHeaders(...args) { return callThroughToRpc(arguments) },
    syscoinSetEthStatus(...args) { return callThroughToRpc(arguments) },
    syscoinStartGeth() { return callThroughToRpc(arguments) },
    syscoinStopGeth() { return callThroughToRpc(arguments) },
    syscoinTxFund(...args){ return callThroughToRpc(arguments) },
    tpsTestAdd(...args) { return callThroughToRpc(arguments) },
    tpsTestInfo() { return callThroughToRpc(arguments) },
    tpsTestSetEnabled(...args) { return callThroughToRpc(arguments) },
    voteRaw(...args){ return callThroughToRpc(arguments) },

    // == Util ==
    createMultiSig(...args) { return callThroughToRpc(arguments) },
    deriveAddress(...args) { return callThroughToRpc(arguments) },
    estimateSmartFee(...args) { return callThroughToRpc(arguments) },
    getDescriptorInfo(...args) { return callThroughToRpc(arguments) },
    signMessageWithPrivKey(...args) { return callThroughToRpc(arguments) },
    validateAddress(...args) { return callThroughToRpc(arguments) },
    verifyMessage(...args) { return callThroughToRpc(arguments) },

    // == Wallet ==
    abandonTransaction(...args) { return callThroughToRpc(arguments) },
    abortRescan() { return callThroughToRpc(arguments) },
    addMultiSigAddress(...args) { return callThroughToRpc(arguments) },
    backupWallet(...args) { return callThroughToRpc(arguments) },
    bumpFee(...args) { return callThroughToRpc(arguments) },
    createWallet(...args) { return callThroughToRpc(arguments) },
    dumpPrivKey(...args) { return callThroughToRpc(arguments) },
    dumpWallet(...args) { return callThroughToRpc(arguments) },
    encryptWallet(...args) { return callThroughToRpc(arguments) },
    getAddressesByLabel(...args) { return callThroughToRpc(arguments) },
    getAddressInfo(...args) { return callThroughToRpc(arguments) },
    getBalance(...args) { return callThroughToRpc(arguments) },
    getNewAddress(...args) { return callThroughToRpc(arguments) },
    getRawChangeAddress(...args) { return callThroughToRpc(arguments) },
    getReceivedByAddress(...args) { return callThroughToRpc(arguments) },
    getReceivedByLabel(...args) { return callThroughToRpc(arguments) },
    getTransaction(...args) { return callThroughToRpc(arguments) },
    getUnconfirmedBalance() { return callThroughToRpc(arguments) },
    getWalletInfo() { return callThroughToRpc(arguments) },
    importAddress(...args) { return callThroughToRpc(arguments) },
    importMulti(...args) { return callThroughToRpc(arguments) },
    importPrivKey(...args) { return callThroughToRpc(arguments) },
    importPrunedFunds(...args) { return callThroughToRpc(arguments) },
    importPubKey(...args) { return callThroughToRpc(arguments) },
    importWallet(...args){ return callThroughToRpc(arguments) },
    keypoolRefill(...args) { return callThroughToRpc(arguments) },
    listAddressGroupings(){ return callThroughToRpc(arguments) },
    listLabels(...args) { return callThroughToRpc(arguments) },
    listLockUnspent() { return callThroughToRpc(arguments) },
    listReceivedByAddress(...args) { return callThroughToRpc(arguments) },
    listReceivedByLabel(...args) { return callThroughToRpc(arguments) },
    listSinceBlock(...args) { return callThroughToRpc(arguments) },
    listTransactions(...args) { return callThroughToRpc(arguments) },
    listUnspent(...args) { return callThroughToRpc(arguments) },
    listWalletDir() { return callThroughToRpc(arguments) },
    listWallets() { return callThroughToRpc(arguments) },
    loadWallet(...args) { return callThroughToRpc(arguments) },
    lockUnspent(...args) { return callThroughToRpc(arguments) },
    removePrunedFunds(...args) { return callThroughToRpc(arguments) },
    rescanBlockchain(...args) { return callThroughToRpc(arguments) },
    sendMany(...args) { return callThroughToRpc(arguments) },
    sendToAddress(...args) { return callThroughToRpc(arguments) },
    setHdSeed(...args) { return callThroughToRpc(arguments) },
    setLabel(...args) { return callThroughToRpc(arguments) },
    setTxFee(...args) { return callThroughToRpc(arguments) },
    signMessage(...args) { return callThroughToRpc(arguments) },
    signRawTransactionWithWallet(...args) { return callThroughToRpc(arguments) },
    unloadWallet(...args) { return callThroughToRpc(arguments) },
    walletCreateFundedPsbt(...args) { return callThroughToRpc(arguments) },
    walletLock() { return callThroughToRpc(arguments) },
    walletPassphrase(...args) { return callThroughToRpc(arguments) },
    walletPassphraseChange(...args) { return callThroughToRpc(arguments) },
    walletProcessPsbt(...args) { return callThroughToRpc(arguments) },
    // @formatter:on

    //exposed for unit testing
    callThroughToRpc,
    unwrapRpcResponse
  };

  function callThroughToRpc<ReturnType>(args): JsonRpcCall<ReturnType> {
    let paramArr: Array<any> = Array.prototype.slice.call(args);

    let response;
    try {
      // console.log("Calling SYS-JS function:", args.callee.name.toLowerCase(), 'with params', paramArr);
      response = callRpc(args.callee.name.toLowerCase(), paramArr);
    }catch (e) {
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
    }catch(e) {
      console.log("RPC COMM ERROR:", e);
    }
  }

  function unwrapRpcResponse(response: RpcResponse): any {
    // console.log("process:", response);
    if(response.result !== null && response.error === null) {
      return response.result;
    }else if(response.result === null && response.error !== null) {
      throw new Error(response.error.message);
    }

    return response; //get requests are not wrapped
  }
}
