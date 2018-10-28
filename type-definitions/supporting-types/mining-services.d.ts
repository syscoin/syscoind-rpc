export default interface MiningServices {

    createAuxBlock({address}: {address:string}): Promise<any>;
    getAuxBlock({blockHash, auxPow}: {blockHash?:string,auxPow?:string}): Promise<any>;
    getBlockTemplate({blockTemplate}: {blockTemplate?:string}): Promise<any>;
    getMiningInfo(): Promise<any>;
    getPoolInfo(): Promise<any>;
    getNetworkHashesPerSecond({numberOfBlocks, blockHeight} : {numberOfBlocks:number, blockHeight:number}): Promise<any>;
    prioritiseTransaction({txid,priorityDelta,feeDeltaInSatoshis}: {txid:string, priorityDelta:number,feeDeltaInSatoshis:number}): Promise<any>;
    submitAuxBlock({blockHash,auxPow}: {blockHash:string,auxPow:string}): Promise<any>;
    submitBlock({hexDataToSubmit}: {hexDataToSubmit:string}): Promise<any>;
}

