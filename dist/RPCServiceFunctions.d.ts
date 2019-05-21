import { AssetAllocationBalanceQuery, AssetAllocationBalanceQueryWithGuid, AssetAllocationSend, EthHeaders, ListAssetIndexOptions, ListAssetOptions, PbstPayloadInfo, RawTx, RpcResponse, SyscoinAddressEntry, TpsRawTx, Transaction, TransactionData, TxHeader } from "./index";
export interface RPCServiceFunctions {
    getBestBlockHash(): Promise<any>;
    getBlock({ blockHash, verbosity }: {
        blockHash: string;
        verbosity?: number;
    }): Promise<any>;
    getBlockchainInfo(): Promise<any>;
    getBlockCount(): Promise<any>;
    getBlockFilter({ blockHash, filterType }: {
        blockHash: string;
        filterType?: string;
    }): Promise<any>;
    getBlockHash({ height }: {
        height: number;
    }): Promise<any>;
    getBlockHeader({ blockHash, verbose }: {
        blockHash: string;
        verbose?: number;
    }): Promise<any>;
    getBlockStats({ hashOrHeight, stats }: {
        hashOrHeight: string;
        stats?: number;
    }): Promise<any>;
    getChainTips({ count, branchLength }: {
        count?: number;
        branchLength?: number;
    }): Promise<any>;
    getChainTxStats({ nBlocks, blockHash }: {
        nBlocks?: number;
        blockHash?: number;
    }): Promise<any>;
    getDifficulty(): Promise<any>;
    getMemPoolAncestors({ txid, verbose }: {
        txid: string;
        verbose?: number;
    }): Promise<any>;
    getMemPoolDescendants({ txid, verbose }: {
        txid: string;
        verbose?: number;
    }): Promise<any>;
    getMemPoolEntry({ txid }: {
        txid: string;
    }): Promise<any>;
    getMemPoolInfo(): Promise<any>;
    getRawMemPool({ verbose }: {
        verbose?: number;
    }): Promise<any>;
    getTxOut({ txid, voutNumber, includeMempool }: {
        txid: string;
        voutNumber: number;
        includeMempool?: boolean;
    }): Promise<any>;
    getTxOutProof({ txids, blockHash }: {
        txids: Array<string>;
        blockHash: string;
    }): Promise<any>;
    getTxOutSetInfo(): Promise<any>;
    preciousBlock({ blockHash }: {
        blockHash: string;
    }): Promise<any>;
    pruneBlockchain({ blockHeight }: {
        blockHeight: number;
    }): Promise<any>;
    saveMemPool(): Promise<any>;
    scanTxOutSet({ action, scanObjects }: {
        action: string;
        scanObjects: Array<any>;
    }): Promise<any>;
    verifyChain({ checkLevel, numberOfBlocksToCheck }: {
        checkLevel?: number;
        numberOfBlocksToCheck?: number;
    }): Promise<any>;
    verifyTxOutProof({ proof }: {
        proof: string;
    }): Promise<any>;
    getMemoryInfo({ mode }: {
        mode?: string;
    }): Promise<any>;
    getRpcInfo(): Promise<any>;
    help({ command }: {
        command?: string;
    }): Promise<any>;
    logging({ includeCategories, excludeCategories }: {
        includeCategories?: Array<string>;
        excludeCategories: Array<string>;
    }): Promise<any>;
    stop(): Promise<any>;
    uptime(): Promise<any>;
    generate({ numberOfBlocks, maxTries }: {
        numberOfBlocks: number;
        maxTries?: number;
    }): Promise<any>;
    generateToAddress({ numberOfBlocks, address, maxTries }: {
        numberOfBlocks: number;
        address: string;
        maxTries?: number;
    }): Promise<any>;
    createAuxBlock({ address }: {
        address: string;
    }): Promise<any>;
    getAuxBlock({ blockHash, auxPow }: {
        blockHash?: string;
        auxPow?: string;
    }): Promise<any>;
    getBlockTemplate({ blockTemplate }: {
        blockTemplate: string;
    }): Promise<any>;
    getMiningInfo(): Promise<any>;
    getNetworkHashesPerSecond({ numberOfBlocks, blockHeight }: {
        numberOfBlocks: number;
        blockHeight: number;
    }): Promise<any>;
    prioritiseTransaction({ txid, dummy, feeDeltaInSatoshis }: {
        txid: string;
        dummy?: null;
        feeDeltaInSatoshis: number;
    }): Promise<any>;
    submitAuxBlock({ blockHash, auxPow }: {
        blockHash: string;
        auxPow: string;
    }): Promise<any>;
    submitBlock({ hexDataToSubmit }: {
        hexDataToSubmit: string;
    }): Promise<any>;
    submitHeader({ hexData }: {
        hexData: string;
    }): Promise<any>;
    addNode({ nodeAddress }: {
        nodeAddress: string;
    }): Promise<any>;
    clearBanned(): Promise<any>;
    disconnectNode({ nodeAddress, nodeId }: {
        nodeAddress: string;
        nodeId: number;
    }): Promise<any>;
    getAddedNodeInfo({ nodeAddress }: {
        nodeAddress: string;
    }): Promise<any>;
    getConnectionCount(): Promise<any>;
    getNetTotals(): Promise<any>;
    getNetworkInfo(): Promise<any>;
    getNodeAddresses(): Promise<any>;
    getPeerInfo(): Promise<any>;
    getInfo(): Promise<any>;
    listBanned(): Promise<any>;
    ping(): Promise<any>;
    setBan({ subnet, command, banTime }: {
        subnet: string;
        command: string;
        banTime?: number;
    }): Promise<any>;
    analyzePsbt({ pbst }: {
        pbst: string;
    }): Promise<any>;
    combinePsbt({ pbsts }: {
        pbsts: Array<string>;
    }): Promise<any>;
    combineRawTransaction({ hexs }: {
        hexs: Array<string>;
    }): Promise<any>;
    convertToPsbt({ hex, permitSigData, isWitness }: {
        hex: string;
        permitSigData?: number;
        isWitness?: number;
    }): Promise<any>;
    createPsbt({ txHeaders, payloadInfo, locktime, replaceable }: {
        txHeaders: Array<TxHeader>;
        payloadInfo: Array<PbstPayloadInfo>;
        locktime?: number;
        replaceable?: number;
    }): Promise<any>;
    createRawTransaction({ txHeaders, payloadInfo, locktime, replaceable }: {
        txHeaders: Array<TxHeader>;
        payloadInfo: Array<PbstPayloadInfo>;
        locktime?: number;
        replaceable?: number;
    }): Promise<any>;
    decodePsbt({ pbst }: {
        pbst: string;
    }): Promise<any>;
    decodeRawTransaction({ hexString, isWitness }: {
        hexString: string;
        isWitness: number;
    }): Promise<any>;
    decodeScript({ hexString }: {
        hexString: string;
    }): Promise<any>;
    finalizePsbt({ pbst, extract }: {
        pbst: string;
        extract?: number;
    }): Promise<any>;
    fundRawTransaction({ hexString, options, isWitness }: {
        hexString: string;
        options?: number;
        isWitness?: number;
    }): Promise<any>;
    getRawTransaction({ txid, verbose, blockHash }: {
        txid: string;
        verbose?: number;
        blockHash?: string;
    }): Promise<any>;
    joinPsbts({ pbsts }: {
        pbsts: Array<string>;
    }): Promise<any>;
    sendRawTransaction({ hexString, maxFeeRate }: {
        hexString: string;
        maxFeeRate?: number;
    }): Promise<any>;
    signRawTransactionWithKey({ hexString, privateKeys, txs, sigHashType }: {
        hexString: string;
        privateKeys: Array<string>;
        txs?: Array<TransactionData>;
        sigHashType?: string;
    }): Promise<any>;
    testMempoolAccept({ rawTxs, maxFeeRate }: {
        rawTxs: Array<string>;
        maxFeeRate?: number;
    }): Promise<any>;
    utxoUpdatePsbt({ pbst }: {
        pbst: string;
    }): Promise<any>;
    addressBalance({ address }: {
        address: string;
    }): Promise<any>;
    assetAllocationBalance({ assetGuid, address }: {
        assetGuid: number;
        address: string;
    }): Promise<any>;
    assetAllocationBurn({ assetGuid, address, amount, ethAddress }: {
        assetGuid: number;
        address: string;
        amount: number;
        ethAddress: string;
    }): Promise<any>;
    assetAllocationInfo({ assetGuid, address }: {
        assetGuid: number;
        address: string;
    }): Promise<any>;
    assetAllocationLock({ assetGuid, addressFrom, txid, outputIndex, witness }: {
        assetGuid: number;
        addressFrom: string;
        txid: string;
        outputIndex: number;
        witness?: string;
    }): Promise<any>;
    assetAllocationMint({ assetGuid, address, amount, blockNum, txHex, txRootHex, merkleProofHex, merkleProofPathHex, witness }: {
        assetGuid: number;
        address: string;
        amount: number;
        blockNum: number;
        txHex: string;
        txRootHex: string;
        merkleProofHex: string;
        merkleProofPathHex: string;
        witness?: string;
    }): Promise<any>;
    assetAllocationSend({ assetGuid, addressFrom, addressTo, amount }: {
        assetGuid: number;
        addressFrom: string;
        addressTo: string;
        amount: number;
    }): Promise<any>;
    assetAllocationSenderStatus({ assetGuid, address, txid }: {
        assetGuid: number;
        address: string;
        txid: string;
    }): Promise<any>;
    assetAllocationSendMany({ assetGuid, addressFrom, allocations, witness }: {
        assetGuid: number;
        addressFrom: string;
        allocations: Array<AssetAllocationSend>;
        witness?: string;
    }): Promise<any>;
    assetInfo({ assetGuid }: {
        assetGuid: number;
    }): Promise<any>;
    assetNew({ address, publicValue, contract, precision, supply, maxSupply, updateFlags, witness }: {
        address: string;
        publicValue: string;
        contract: string;
        precision: number;
        supply: number;
        maxSupply: number;
        updateFlags: number;
        witness: string;
    }): Promise<any>;
    assetSend({ assetGuid, addressTo, amount }: {
        assetGuid: number;
        addressTo: string;
        amount: number;
    }): Promise<any>;
    assetSendMany({ assetGuid, allocations, witness }: {
        assetGuid: number;
        allocations: Array<AssetAllocationSend>;
        witness?: string;
    }): Promise<any>;
    assetTransfer({ assetGuid, address, witness }: {
        assetGuid: number;
        address: string;
        witness: string;
    }): Promise<any>;
    assetUpdate({ assetGuid, publicValue, contract, supply, updateFlags, witness }: {
        assetGuid: number;
        publicValue: string;
        contract: string;
        supply: number;
        updateFlags: number;
        witness: string;
    }): Promise<any>;
    convertAddress({ address }: {
        address: string;
    }): Promise<any>;
    getBlockHashByTxid({ txid }: {
        txid: string;
    }): Promise<any>;
    getGovernanceInfo(): Promise<any>;
    getSuperblockBudget({ index }: {
        index: number;
    }): Promise<any>;
    gObject({ command }: {
        command: string;
    }): Promise<any>;
    listAssetAllocationMempoolBalances({ count, from, query }: {
        count?: number;
        from?: number;
        query?: AssetAllocationBalanceQuery;
    }): Promise<any>;
    listAssetAllocations({ count, from, query }: {
        count?: number;
        from?: number;
        query?: AssetAllocationBalanceQueryWithGuid;
    }): Promise<any>;
    listAssetIndex({ page, options }: {
        page?: number;
        options?: ListAssetIndexOptions;
    }): Promise<any>;
    listAssetIndexAllocations({ address }: {
        address: string;
    }): Promise<any>;
    listAssetIndexAssets({ address }: {
        address: string;
    }): Promise<any>;
    listAssets({ count, from, options }: {
        count?: number;
        from?: number;
        options?: ListAssetOptions;
    }): Promise<any>;
    masternode({ command }: {
        command: string;
    }): Promise<any>;
    masternodeBroadcast({ command }: {
        command: string;
    }): Promise<any>;
    masternodeList({ mode, filter }: {
        mode?: string;
        filter?: string;
    }): Promise<any>;
    mnSync({ command }: {
        command: string;
    }): Promise<any>;
    sentinelPing({ version }: {
        version: number;
    }): Promise<any>;
    spork({ command }: {
        command: string;
    }): Promise<any>;
    syscoinBurn({ fundingAddress, amount, ethAddress }: {
        fundingAddress: string;
        amount: number;
        ethAddress: string;
    }): Promise<any>;
    syscoinDecodeRawTransaction({ hexString }: {
        hexString: number;
    }): Promise<any>;
    syscoinGetSpvProof({ txid, blockHash }: {
        txid: string;
        blockHash?: string;
    }): Promise<any>;
    syscoinMint({ address, amount, blockNum, txHex, txRootHex, txMerkleProofHex, witness }: {
        address: string;
        amount: number;
        blockNum: number;
        txHex: string;
        txRootHex: string;
        txMerkleProofHex: string;
        witness?: string;
    }): Promise<any>;
    syscoinSetEthHeaders({ headers }: {
        headers: EthHeaders;
    }): Promise<any>;
    syscoinSetEthStatus({ syncStatus, highestBlock }: {
        syncStatus: string;
        highestBlock: number;
    }): Promise<any>;
    syscoinStartGeth(): Promise<any>;
    syscoinStopGeth(): Promise<any>;
    syscoinTxFund({ hexString, address, outputIndex }: {
        hexString: string;
        address: string;
        outputIndex: number;
    }): Promise<any>;
    tpsTestAdd({ startTime, rawTxs }: {
        startTime: any;
        rawTxs?: Array<TpsRawTx>;
    }): Promise<any>;
    tpsTestInfo(): Promise<any>;
    tpsTestSetEnabled({ enabled }: {
        enabled: number;
    }): Promise<any>;
    voteRaw({ mnTxHash, mnTxIndex, govHash, votSignal, vote, time, voteSig }: {
        mnTxHash: string;
        mnTxIndex: number;
        govHash: string;
        votSignal: string;
        vote: string;
        time: number;
        voteSig: string;
    }): Promise<any>;
    createMultiSig({ numberOfRequiredSignatures, keys, addressType }: {
        numberOfRequiredSignatures: number;
        keys: Array<string>;
        addressType?: string;
    }): Promise<any>;
    deriveAddress({ descriptor, range }: {
        descriptor: string;
        range?: number;
    }): Promise<any>;
    estimateSmartFee({ confTarget, estimateMode }: {
        confTarget: number;
        estimateMode?: string;
    }): Promise<any>;
    getDescriptorInfo({ descriptor }: {
        descriptor: string;
    }): Promise<any>;
    signMessageWithPrivKey({ privateKey, message }: {
        privateKey: string;
        message: string;
    }): Promise<any>;
    validateAddress({ address }: {
        address: string;
    }): Promise<any>;
    verifyMessage({ address, signature, message }: {
        address: string;
        signature: string;
        message: string;
    }): Promise<any>;
    abandonTransaction({ txid }: {
        txid: string;
    }): Promise<any>;
    abortRescan(): Promise<any>;
    addMultiSigAddress({ nRequired, keys, label, addressType }: {
        nRequired: number;
        keys: Array<string>;
        label?: string;
        addressType?: string;
    }): Promise<any>;
    backupWallet({ destination }: {
        destination: string;
    }): Promise<any>;
    bumpFee({ txid, options }: {
        txid: string;
        options?: any;
    }): Promise<any>;
    createWallet({ walletName, disablePrivKeys }: {
        walletName: string;
        disablePrivKeys: number;
    }): Promise<any>;
    dumpPrivKey({ address }: {
        address: string;
    }): Promise<any>;
    dumpWallet({ fileName }: {
        fileName: string;
    }): Promise<any>;
    encryptWallet({ passphrase }: {
        passphrase: string;
    }): Promise<any>;
    getAddressesByLabel({ label }: {
        label: string;
    }): Promise<any>;
    getAddressInfo({ address }: {
        address: string;
    }): Promise<any>;
    getBalance({ dummy, minconf, includeWatchOnly }: {
        dummy?: string;
        minconf: number;
        includeWatchOnly: number;
    }): Promise<any>;
    getNewAddress({ label, addressType }: {
        label?: string;
        addressType?: string;
    }): Promise<any>;
    getRawChangeAddress({ addressType }: {
        addressType?: string;
    }): Promise<any>;
    getReceivedByAddress({ address, minConf }: {
        address: string;
        minConf?: number;
    }): Promise<any>;
    getReceivedByLabel({ label, minConf }: {
        label: string;
        minConf?: number;
    }): Promise<any>;
    getTransaction({ txid, includeWatchOnly }: {
        txid: string;
        includeWatchOnly?: number | boolean;
    }): Promise<Transaction>;
    getUnconfirmedBalance(): Promise<any>;
    getWalletInfo(): Promise<any>;
    importAddress({ address, label, rescan, p2sh }: {
        address: string;
        label?: string;
        rescan?: number;
        p2sh?: number;
    }): Promise<any>;
    importMulti({ requests, options }: {
        requests: string;
        options: any;
    }): Promise<any>;
    importPrivKey({ key, label, rescan }: {
        key: string;
        label?: string;
        rescan?: number;
    }): Promise<any>;
    importPrunedFunds({ rawTx, txOutProof }: {
        rawTx: string;
        txOutProof: string;
    }): Promise<any>;
    importPubKey({ pubKey, label, rescan }: {
        pubKey: string;
        label?: string;
        rescan?: number;
    }): Promise<any>;
    importWallet({ fileName }: {
        fileName: string;
    }): Promise<any>;
    keypoolRefill({ newSize }: {
        newSize?: number;
    }): Promise<any>;
    listAddressGroupings(): Promise<any>;
    listLabels({ purpose }: {
        purpose?: string;
    }): Promise<any>;
    listLockUnspent(): Promise<any>;
    listReceivedByAddress({ minConf, includeEmpty, includeWatchOnly, addressFilter }: {
        minConf?: number;
        includeEmpty?: number | boolean;
        includeWatchOnly?: number | boolean;
        addressFilter?: string;
    }): Promise<SyscoinAddressEntry[]>;
    listReceivedByLabel({ minConf, includeEmpty, includeWatchOnly }: {
        minConf?: number;
        includeEmpty?: number | boolean;
        includeWatchOnly?: number | boolean;
    }): Promise<any>;
    listSinceBlock({ blockHash, targetConfs, includeWatchOnly, includeRemoved }: {
        blockHash?: string;
        targetConfs?: number;
        includeWatchOnly?: number;
        includeRemoved?: number;
    }): Promise<any>;
    listTransactions({ label, count, skip, includeWatchOnly }: {
        label?: string;
        count?: number;
        skip?: number;
        includeWatchOnly?: number;
    }): Promise<any>;
    listUnspent({ minConf, maxConf, addresses, includeUnsafe, query, options }: {
        minConf?: number;
        maxConf?: number;
        addresses?: Array<string>;
        includeUnsafe?: number;
        query?: any;
        options?: any;
    }): Promise<any>;
    listWalletDir(): Promise<any>;
    listWallets(): Promise<any>;
    loadWallet({ fileName }: {
        fileName: string;
    }): Promise<any>;
    lockUnspent({ unlock, txs }: {
        unlock: number;
        txs?: Array<{
            txid: string;
            vout: number;
        }>;
    }): Promise<any>;
    removePrunedFunds({ txid }: {
        txid: string;
    }): Promise<any>;
    rescanBlockchain({ start, stop }: {
        start?: number;
        stop?: number;
    }): Promise<any>;
    sendMany({ dummy, amounts, minConf, comment, subtractFeeFrom, replaceable, confTarget, estimateMode }: {
        dummy: string;
        amounts: Array<{
            [address: string]: number;
        }>;
        minConf?: number;
        comment?: string;
        subtractFeeFrom?: Array<string>;
        replaceable?: boolean;
        confTarget?: number;
        estimateMode?: string;
    }): Promise<any>;
    sendToAddress({ address, amount, minConf, comment, comment_to, subtractFeeFromAmount, replaceable, confTarget, estimateMode }: {
        address: string;
        amount: number;
        minConf?: number;
        comment?: string;
        comment_to?: string;
        subtractFeeFromAmount?: number;
        replaceable?: boolean;
        confTarget?: number;
        estimateMode?: string;
    }): Promise<any>;
    setHdSeed({ newKeyPool, seed }: {
        newKeyPool?: number;
        seed?: string;
    }): Promise<any>;
    setLabel({ address, label }: {
        address: string;
        label: string;
    }): Promise<any>;
    setTxFee({ amount }: {
        amount: number;
    }): Promise<any>;
    signMessage({ address, message }: {
        address: string;
        message: string;
    }): Promise<any>;
    signRawTransactionWithWallet({ hexString, rawTxs, sigHashType }: {
        hexString: string;
        rawTxs?: Array<RawTx>;
        sigHashType?: string;
    }): Promise<any>;
    unloadWallet({ walletName }: {
        walletName?: string;
    }): Promise<any>;
    walletCreateFundedPsbt({ txs, amounts, lockTime, options, bip32derivs }: {
        txs: any;
        amounts: any;
        lockTime?: any;
        options?: any;
        bip32derivs?: any;
    }): Promise<any>;
    walletLock(): Promise<any>;
    walletPassphrase({ passphrase, timeout }: {
        passphrase: string;
        timeout: number;
    }): Promise<any>;
    walletPassphraseChange({ oldPass, newPass }: {
        oldPass: string;
        newPass: string;
    }): Promise<any>;
    walletProcessPsbt({ pbst, sign, sigHashType, bip32derivs }: {
        pbst: string;
        sign?: number;
        sigHashType?: string;
        bip32derivs?: number;
    }): Promise<any>;
    callThroughToRpc(args: any): Promise<any>;
    unwrapRpcResponse(response: RpcResponse | any): any;
}
