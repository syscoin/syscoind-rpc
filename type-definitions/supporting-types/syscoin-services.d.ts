export interface SyscoinServices {
  addressBalance({address}: { address: string }): Promise<any>;
  assetAllocationBalance({assetGuid, address}: { assetGuid: number, address: string }): Promise<any>;
  assetAllocationBurn({assetGuid, address, amount, ethAddress}: { assetGuid: number, address: string, amount: number, ethAddress: string }): Promise<any>;
  assetAllocationInfo({assetGuid, address}: { assetGuid: number, address: string }): Promise<any>;
  assetAllocationLock({assetGuid, addressFrom, txid, outputIndex, witness}: { assetGuid: number, addressFrom: string, txid: string, outputIndex: number, witness?: string }): Promise<any>;
  assetAllocationMint({assetGuid, address, amount, blockNum, txHex, txRootHex, merkleProofHex, merkleProofPathHex, witness}: { assetGuid: number, address: string, amount: number, blockNum: number, txHex: string, txRootHex: string, merkleProofHex: string, merkleProofPathHex: string, witness?: string }): Promise<any>;
  assetAllocationSend({assetGuid, addressFrom, addressTo, amount}: { assetGuid: number, addressFrom: string, addressTo: string, amount: number }): Promise<any>;
  assetAllocationSenderStatus({assetGuid, address, txid}: { assetGuid: number, address: string, txid: string }): Promise<any>;
  assetAllocationSendMany({assetGuid, addressFrom, allocations, witness}: { assetGuid: number, addressFrom: string, allocations: Array<AssetAllocationSend>, witness?: string }): Promise<any>;
  assetInfo({assetGuid}: { assetGuid: number }): Promise<any>;
  assetNew({address, publicValue, contract, precision, supply, maxSupply, updateFlags, witness}: { address: string, publicValue: string, contract: string, precision: number, supply: number, maxSupply: number, updateFlags: number, witness: string }): Promise<any>;
  assetSend({assetGuid, addressTo, amount}: { assetGuid: number, addressTo: string, amount: number }): Promise<any>;
  assetSendMany({assetGuid, allocations, witness}: { assetGuid: number, allocations: Array<AssetAllocationSend>, witness?: string }): Promise<any>;
  assetTransfer({assetGuid, address, witness}: { assetGuid: number, address: string, witness: string }): Promise<any>;
  assetUpdate({assetGuid, publicValue, contract, supply, updateFlags, witness}: { assetGuid: number, publicValue: string, contract: string, supply: number, updateFlags: number, witness: string }): Promise<any>;
  convertAddress({address}: { address: string }): Promise<any>;
  getBlockHashByTxid({txid}: { txid: string }): Promise<any>;
  getGovernanceInfo(): Promise<any>;
  getSuperblockBudget({index}: { index: number }): Promise<any>;
  gObject({command}: { command: string }): Promise<any>;
  listAssetAllocationMempoolBalances({count, from, query}: { count?: number, from?: number, query?: AssetAllocationBalanceQuery }): Promise<any>;
  listAssetAllocations({count, from, query}: { count?: number, from?: number, query?: AssetAllocationBalanceQueryWithGuid }): Promise<any>;
  listAssetIndex({page, options}: { page?: number, options?: ListAssetIndexOptions }): Promise<any>;

  listAssetIndexAllocations({address}: { address: string }): Promise<any>;
  listAssetIndexAssets({address}: { address: string }): Promise<any>;
  listAssets({count, from, options}: { count?: number, from?: number, options?: ListAssetOptions }): Promise<any>;
  masternode({command}: { command: string }): Promise<any>;
  masternodeBroadcast({command}: { command: string }): Promise<any>;
  masternodeList({mode, filter}: { mode?: string, filter?: string }): Promise<any>;
  mnsync({command}: { command: string }): Promise<any>;
  sentinelPing({version}: { version: number }): Promise<any>;
  spork({command}: { command: string }): Promise<any>;
  syscoinBurn({fundingAddress, amount, ethAddress}: { fundingAddress: string, amount: number, ethAddress: string }): Promise<any>;
  syscoinDecodeRawTransaction({hexString}: { hexString: number }): Promise<any>;
  syscoinGetSpvProof({txid, blockHash}: { txid: string, blockHash?: string }): Promise<any>;
  syscoinListReceivedByAddress({}: {}): Promise<any>;
  syscoinMint({address, amount, blockNum, txHex, txRootHex, txMerkleProofHex, witness}: { address: string, amount: number, blockNum: number, txHex: string, txRootHex: string, txMerkleProofHex: string, witness?: string }): Promise<any>;
  syscoinSetEthHeaders({headers}: { headers: EthHeaders }): Promise<any>;
  syscoinSetEthStatus({syncStatus, highestBlock}: { syncStatus: string, highestBlock: number }): Promise<any>;
  syscoinStartGeth({}: {}): Promise<any>;
  syscoinStopGeth({}: {}): Promise<any>;
  syscoinTxFund({hexStrinig, address, outputIndex}: { hexString: string, address: string, outputIndex: number }): Promise<any>;
  tpsTestAdd({startTime, rawTxs}: { startTime, rawTxs?: Array<TpsRawTx> }): Promise<any>;
  tpsTestIInfo({}: {}): Promise<any>;
  tpsTestSetEnabled({enabled}: { enabled: number }): Promise<any>;
  voteRaw({mnTxhash, mnTxIndex, govHash, votSignal, vote, time, voteSig}: { mnTxhash: string, mnTxIndex: number, govHash: string, votSignal: string, vote: string, time: number, voteSig: string }): Promise<any>;
}

export interface AssetAllocationSend {
  //TODO: what does this thing look like? Ask Jag.
}

export interface AssetAllocationBalanceQuery {
  addresses: Array<string>;
}

export interface AssetAllocationBalanceQueryWithGuid extends AssetAllocationBalanceQuery {
  assetGuid: number;
}

export interface ListAssetIndexOptions {
  assetGuid: number;
  address: string; //TODO: can be one or more
}

export interface ListAssetOptions {
  txid: string;
  assetGuid: number;
  addresses: Array<string>;
}

export interface EthHeaders {
  headers: Array<EthHeader>;
}

export interface EthHeader {
  blockNum: number;
  txRoot: string;
}

export interface TpsRawTx {
  tx: string;
}