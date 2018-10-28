export interface masterNodeListFunctions {
    activeSeconds({filter}: {filter?:string}): Promise<any>;
    address({filter}: {filter?:string}): Promise<any>;
    daemon({filter}: {filter?:string}): Promise<any>;
    info({filter}: {filter?:string}): Promise<any>;
    json({filter}: {filter?:string}): Promise<any>;
    lastPaidBlock({filter}: {filter?:string}): Promise<any>;
    lastPaidTime({filter}: {filter?:string}): Promise<any>;
    lastSeen({filter}: {filter?:string}): Promise<any>;
    payee({filter}: {filter?:string}): Promise<any>;
    protocol({filter}: {filter?:string}): Promise<any>;
    pubkey({filter}: {filter?:string}): Promise<any>;
    rank({filter}: {filter?:string}): Promise<any>;
    sentinel({filter}: {filter?:string}): Promise<any>;
    status({filter}: {filter?:string}): Promise<any>;
    full({filter}: {filter?:string}): Promise<any>;
}

export default interface MasternodeServices {
    broadcastByAssignedName({name}: {name:string}) : Promise<any>;
    broadcastForAllMasternodes(): Promise<any>;
    count({format}: {format:string}): Promise<any>;
    decodeMessage({message}: {message:string}): Promise<any>;
    generatePrivateKey(): Promise<any>;
    getConfiguration(): Promise<any>;
    getCurrentMasternodeWinner(): Promise<any>;
    initialize({name}:{name:string}): Promise<any>;
    list: masterNodeListFunctions;
    outputs() : Promise<any>;
    relayMessage({msg}:{msg:string}): Promise<any>;
    startAll(): Promise<any>;
    startMissing(): Promise<any>;
    startDisabled(): Promise<any>;
    status(): Promise<any>;
    winner(): Promise<any>;
    winners(): Promise<any>;
    masternodeList({mode,filter}: {mode:string,filter:string}): Promise<any>;
    masternodeBroadcast({command, arg}: {command:string, arg:string}) : Promise<any>;
}


