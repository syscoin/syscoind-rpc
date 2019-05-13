import ow from 'syscoin-ow';
import { get, post } from '../endpoint-decorators';

export function syscoinRpcBlockchainServices(callRpc) {
  return {
    getBestBlockHash: get(getBestBlockHash),
    getBlock: get(getBlock),
    getBlockchainInfo: get(getBlockchainInfo),
    getBlockCount: get(getBlockCount),
    getBlockFilter: get(getBlockFilter),
    getBlockHash: get(getBlockHash),
    getBlockHeader: get(getBlockHeader),
    getBlockStats: get(getBlockStats),
    getChainTips: get(getChainTips),
    getChainTxStats: get(getChainTxStats),
    getDifficulty: get(getDifficulty),
    getMemPoolAncestors: get(getMemPoolAncestors),
    getMemPoolDescendants: get(getMemPoolDescendants),
    getMemPoolEntry: get(getMemPoolEntry),
    getMemPoolInfo: get(getMemPoolInfo),
    getRawMemPool: get(getRawMemPool),
    getTxOut: get(getTxOut),
    getTxOutProof: get(getTxOutProof),
    getTxOutSetInfo: get(getTxOutSetInfo),
    preciousBlock: post(preciousBlock),
    pruneBlockchain: post(pruneBlockchain),
    saveMemPool: post(saveMemPool),
    scanTxOutSet: get(scanTxOutSet),
    verifyChain: post(verifyChain),
    verifyTxOutProof: post(verifyTxOutProof)
  };


  async function getBestBlockHash(): Promise<any> {
    return await callRpc('getbestblockhash');
  }

  async function getBlock({blockHash, verbosity}: { blockHash: string, verbosity?: number }): Promise<any> {
    return await callRpc('getblock', [blockHash, verbosity]);
  }

  async function getBlockchainInfo(): Promise<any> {
    return await callRpc('getblockchaininfo');
  }

  async function getBlockCount(): Promise<any> {
    return await callRpc('getblockcount');
  }

  async function getBlockFilter({blockHash, filterType}: { blockHash: string, filterType?: string }): Promise<any> {
    return await callRpc('getblockfilter', [blockHash, filterType]);
  }

  async function getBlockHash({height}: { height: number }): Promise<any> {
    return await callRpc('getblockhash', [height]);
  }

  async function getBlockHeader({blockHash, verbose}: { blockHash: string, verbose?: number }): Promise<any> {
    return await callRpc('getblockheader', [blockHash, verbose]);
  }

  async function getBlockStats({hashOrHeight, stats}: { hashOrHeight: string, stats?: number }): Promise<any> {
    return await callRpc('getblockstats', [hashOrHeight, stats]);
  }

  async function getChainTips({count, branchLength}: { count?: number, branchLength?: number }): Promise<any> {
    return await callRpc('getchaintips', [count, branchLength]);
  }

  async function getChainTxStats({nBlocks, blockHash}: { nBlocks?: number, blockHash?: number }): Promise<any> {
    return await callRpc('getchaintxstats', [nBlocks, blockHash]);
  }

  async function getDifficulty(): Promise<any> {
    return await callRpc('getdifficulty');
  }

  async function getMemPoolAncestors({txid, verbose}: { txid: string, verbose?: number }): Promise<any> {
    return await callRpc('getmempoolancestors', [txid, verbose]);
  }

  async function getMemPoolDescendants({txid, verbose}: { txid: string, verbose?: number }): Promise<any> {
    return await callRpc('getmempooldescendants', [txid, verbose]);
  }

  async function getMemPoolEntry({txid}: { txid: string }): Promise<any> {
    return await callRpc('getmempoolentry', [txid]);
  }

  async function getMemPoolInfo(): Promise<any> {
    return await callRpc('getmempoolinfo');
  }

  async function getRawMemPool({verbose}: { verbose?: number }): Promise<any> {
    return await callRpc('getrawmempool', [verbose]);
  }

  async function getTxOut({txid, voutNumber, includeMempool}: { txid: string, voutNumber: number, includeMempool?: boolean }): Promise<any> {
    return await callRpc('gettxout', [txid, voutNumber, includeMempool]);
  }

  async function getTxOutProof({txids, blockHash}: { txids: Array<string>, blockHash: string }): Promise<any> {
    return await callRpc('gettxoutproof', [txids, blockHash]);
  }

  async function getTxOutSetInfo(): Promise<any> {
    return await callRpc('gettxoutsetinfo');
  }

  async function preciousBlock({blockHash}: { blockHash: string }): Promise<any> {
    return await callRpc('preciousblock', [blockHash]);
  }

  async function pruneBlockchain({blockHeight}: { blockHeight: number }): Promise<any> {
    return await callRpc('pruneblockchain', [blockHeight]);
  }

  async function saveMemPool(): Promise<any> {
    return await callRpc('savemempool');
  }

  async function scanTxOutSet({action, scanObjects}: { action: string, scanObjects: Array<any> }) {
    return await callRpc('scantxoutset', [action, scanObjects]);
  }

  async function verifyChain({checkLevel, numberOfBlocksToCheck}: { checkLevel?: number, numberOfBlocksToCheck?: number }): Promise<any> {
    return await callRpc('verifychain', [checkLevel, numberOfBlocksToCheck]);
  }


  async function verifyTxOutProof({proof}: { proof: string }): Promise<any> {
    return await callRpc('verifytxoutproof', [proof]);
  }
}