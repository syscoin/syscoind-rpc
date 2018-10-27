export default interface BlockchainServices {
    async getBestBlockHash(): Promise<any>;
    async getBlock({blockHash}: {blockHash: string}): Promise<any>;
    async getBlockVerbose({blockHash}: {blockHash: string}): Promise<any>;
    async getBlockchainInfo(): Promise<any>;
    async getBlockCount(): Promise<any>;
    async getBlockHash({height}: {height: number}): Promise<any>;
    async getBlockAtHeight({height}: {height: number}): Promise<any>;
    async getBlockAtHeightVerbose({height}: {height: number}): Promise<any>;
    async getBlockHashes({timestampHigh, timestampLow} :
            {timestampHigh: number, timestampLow: number}): Promise<any>;
    async getBlockHeader({hash}: {hash: string}): Promise<any>;
    async getBlockHeaderVerbose({hash}: {hash: string}): Promise<any>;
    async getBlockHeaders({hash, headerCount}: {hash: string, headerCount?: number}): Promise<any>;
    async getBlockHeadersVerbose({hash, headerCount}: {hash: string, headerCount?: number}): Promise<any>;
    async getChainTips({count, branchLength}: {count?: number, branchLength?: number}): Promise<any>;
    async getChainVersion(): Promise<any>;
    async getDifficulty(): Promise<any>;
    async getMemPoolAncestors({txid}: {txid: string}): Promise<any>;
    async getMemPoolAncestorsVerbose({txid}: {txid: string}): Promise<any>;
    async getMemPoolDescendants({txid}: {txid: string}): Promise<any>;
    async getMemPoolDescendantsVerbose({txid}: {txid: string}): Promise<any>;
    async getMemPoolEntry({txid}: {txid: string}): Promise<any>;
    async getMemPoolInfo(): Promise<any>;
    async getRawMemPool(): Promise<any>;
    async getRawMemPoolVerbose(): Promise<any>;
    async getSpentInfo({txid, startingBlockHeight}: {txid: string, startingBlockHeight?:number}) : Promise<any>;
    async getTxOut({txid, voutNumber, includeMempool}: {txid: string, voutNumber:number, includeMempool?: boolean}) : Promise<any>;
    async getTxOutProof({txids, blockHash}: {txids: Array<string>, blockHash: string}): Promise<any>;
    async getUnspentTxOutputSetInfo() : Promise<any>;
    async getSuperBlockBudget({index}: {index: string|number}) : Promise<any>;
    async preciousBlock({blockHash}: {blockHash:string}) : Promise<any>;
    async pruneBlockchain({blockHeight}: {blockHeight:number}) : Promise<any>;
    async verifyChain({thoroughnessLevel, numberOfBlocksToCheck}: 
        {thoroughnessLevel?:number,numberOfBlocksToCheck?:number}) : Promise<any>;
    async verifyTxOutProof({proof}: {proof: string}) : Promise<any>;
    async verifyTxOut({txids, blockHash}: {txids:Array<string>, blockHash:string}) : Promise<any>;
}

