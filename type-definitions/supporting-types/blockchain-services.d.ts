export default interface BlockchainServices {
  getBestBlockHash(): Promise<any>;
  getBlock({blockHash, verbosity}: { blockHash: string, verbosity?: number }): Promise<any>;
  getBlockchainInfo(): Promise<any>;
  getBlockCount(): Promise<any>;
  getBlockFilter({blockHash, filterType}: { blockHash: string, filterType?: string }): Promise<any>
  getBlockHash({height}: { height: number }): Promise<any>;
  getBlockHeader({blockHash, verbose}: { blockHash: string, verbose?: number }): Promise<any>;
  getBlockStats({hashOrHeight, stats}: { hashOrHeight: string, stats?: number }): Promise<any>;
  getChainTips({count, branchLength}: { count?: number, branchLength?: number }): Promise<any>;
  getChainTxStats({nBlocks, blockHash}: { nBlocks?: number, blockHash?: number}): Promise<any>;
  getDifficulty(): Promise<any>;
  getMemPoolAncestors({txid, verbose}: { txid: string, verbose?: number }): Promise<any>;
  getMemPoolDescendants({txid, verbose}: { txid: string, verbose?: number}): Promise<any>;
  getMemPoolEntry({txid}: { txid: string }): Promise<any>;
  getMemPoolInfo(): Promise<any>;
  getRawMemPool({verbose}: { verbose?: number }): Promise<any>;
  getTxOut({txid, voutNumber, includeMempool}: { txid: string, voutNumber: number, includeMempool?: boolean }): Promise<any>;
  getTxOutProof({txids, blockHash}: { txids: Array<string>, blockHash: string }): Promise<any>;
  getTxOutSetInfo(): Promise<any>;
  preciousBlock({blockHash}: { blockHash: string }): Promise<any>;
  pruneBlockchain({blockHeight}: { blockHeight: number }): Promise<any>;
  saveMemPool(): Promise<any>;
  scanTxOutSet({action, scanObjects}: { action: string, scanObjects: Array<any>});
  verifyChain({checkLevel, numberOfBlocksToCheck}:
                { checkLevel?: number, numberOfBlocksToCheck?: number }): Promise<any>;
  verifyTxOutProof({proof}: { proof: string }): Promise<any>;
}

