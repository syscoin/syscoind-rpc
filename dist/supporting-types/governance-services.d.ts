export default interface GovernanceServices {

    checkProposal({hex}: {hex: string}) : Promise<any>;
    count({format} : {format:string}) : Promise<any>;
    deserializeGovernanceObject({dataHex} : {dataHex: string}) : Promise<any>;
    differencesSinceLastComparison() : Promise<any>;
    getByHash({hash} : {hash:string}) : Promise<any>;
    getGovernanceInfo() : Promise<any>;
    getSuperblockBudget({blockIndex} : {blockIndex:number}) : Promise<any>;
    getCurrentVotes(): Promise<any>;
    getVotes({hash}: {hash:string}): Promise<any>;
    listAll() : Promise<any>;
    listValid() : Promise<any>; 
    listFunding(): Promise<any>;
    listDelete(): Promise<any>;
    listEndorsed(): Promise<any>;

    prepareGovernanceObject({parentHash,revision,time,dataHex}: {parentHash:string, revision:number, time:number, dataHex:string}): Promise<any>;  
    submitGovernanceObject({parentHash,revision,time,dataHex,feeTxId} : {parentHash:string, revision: number, time: number, dataHex: string, feeTxId: string}) : Promise<any>;
    governanceVote() : Promise<any>;
    governanceVoteByName(): Promise<any>;
    governanceVoteMany(): Promise<any>;
    governanceVoteRaw({masterNodeTxHash,
        masterNodeTxIndex,
        governanceHash,
        voteSignal,
        vote,
        time,
        voteSignature}: {masterNodeTxHash:string,masterNodeTxIndex:number,governanceHash:string, voteSignal: string,
            vote: string, time: number, voteSignature: string}): Promise<any>;
}