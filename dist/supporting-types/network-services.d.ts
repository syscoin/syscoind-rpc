
export interface Sporks {
    showCurrentValues() : Promise<any>;
    showActivationStatus(): Promise<any>;
}

export default interface NetworkServices {
    activateNetwork(): Promise<any>;
    addNode({nodeAddress}: {nodeAddress:string}): Promise<any>;
    aliasClearWhiteList({ownerAddress, witness}: {ownerAddress: string, witness:string}): Promise<any>;
    banNodeForLengthOfTime({subnetOrIp, banTimeInSeconds}: {subnetOrIp: string, banTimeInSeconds:number}): Promise<any>;
    banNodeUntilDate({subnetOrIp, banDateTimeEpoch}: {subnetOrIp:string, banDateTimeEpoch:number}): Promise<any>;
    clearBannedIps(): Promise<any>;
    deactivateNetwork(): Promise<any>;
    disconnectNode({nodeAddress}: {nodeAddress: string}): Promise<any>;
    getAddedNodeInfo({nodeAddress}: {nodeAddress: string}): Promise<any>;
    getChainTxStats({nBlocks, blockHash}: {nBlocks?: number, blockHash?:string});
    getConnectionCount(): Promise<any>;
    getMemoryInfo(): Promise<any>;
    getNetTotals(): Promise<any>;
    getNetworkInfo(): Promise<any>;
    getPeerInfo(): Promise<any>;
    getInfo() : Promise<any>;
    listBannedIps(): Promise<any>;
    ping(): Promise<any>;
    removeNode({nodeAddress}: {nodeAddress:string}): Promise<any>; 
    sentinelPing({version} : {version: string}): Promise<any>;
    sporks: Sporks;
    stop(): Promise<any>;
    tryToConnectToNode({nodeAddress}: {nodeAddress:string}): Promise<any>;
    unbanNode({subnetOrIp}: {subnetOrIp:string}): Promise<any>;
}
