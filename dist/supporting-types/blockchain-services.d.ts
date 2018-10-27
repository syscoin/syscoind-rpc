export default interface BlockchainServices {
    getBestBlockHash(): Promise<any>;
    getBlock({blockHash}: {blockHash: string}): Promise<any>;
     getBlockVerbose({blockHash}: {blockHash: string}): Promise<any>;
     getBlockchainInfo(): Promise<any>;
     getBlockCount(): Promise<any>;
     getBlockHash({height}: {height: number}): Promise<any>;
     getBlockAtHeight({height}: {height: number}): Promise<any>;
     getBlockAtHeightVerbose({height}: {height: number}): Promise<any>;
     getBlockHashes({timestampHigh, timestampLow} :
            {timestampHigh: number, timestampLow: number}): Promise<any>;
     getBlockHeader({hash}: {hash: string}): Promise<any>;
     getBlockHeaderVerbose({hash}: {hash: string}): Promise<any>;
     getBlockHeaders({hash, headerCount}: {hash: string, headerCount?: number}): Promise<any>;
     getBlockHeadersVerbose({hash, headerCount}: {hash: string, headerCount?: number}): Promise<any>;
     getChainTips({count, branchLength}: {count?: number, branchLength?: number}): Promise<any>;
     getChainVersion(): Promise<any>;
     getDifficulty(): Promise<any>;
     getMemPoolAncestors({txid}: {txid: string}): Promise<any>;
     getMemPoolAncestorsVerbose({txid}: {txid: string}): Promise<any>;
     getMemPoolDescendants({txid}: {txid: string}): Promise<any>;
     getMemPoolDescendantsVerbose({txid}: {txid: string}): Promise<any>;
     getMemPoolEntry({txid}: {txid: string}): Promise<any>;
     getMemPoolInfo(): Promise<any>;
     getRawMemPool(): Promise<any>;
     getRawMemPoolVerbose(): Promise<any>;
     getSpentInfo({txid, startingBlockHeight}: {txid: string, startingBlockHeight?:number}) : Promise<any>;
     getTxOut({txid, voutNumber, includeMempool}: {txid: string, voutNumber:number, includeMempool?: boolean}) : Promise<any>;
     getTxOutProof({txids, blockHash}: {txids: Array<string>, blockHash: string}): Promise<any>;
     getUnspentTxOutputSetInfo() : Promise<any>;
     getSuperBlockBudget({index}: {index: string|number}) : Promise<any>;
     preciousBlock({blockHash}: {blockHash:string}) : Promise<any>;
     pruneBlockchain({blockHeight}: {blockHeight:number}) : Promise<any>;
     verifyChain({thoroughnessLevel, numberOfBlocksToCheck}: 
        {thoroughnessLevel?:number,numberOfBlocksToCheck?:number}) : Promise<any>;
     verifyTxOutProof({proof}: {proof: string}) : Promise<any>;
     verifyTxOut({txids, blockHash}: {txids:Array<string>, blockHash:string}) : Promise<any>;
}

