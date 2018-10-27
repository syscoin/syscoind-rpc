export default interface AddressIndexServices {
     getAddressDeltas({addresses, startingBlockHeight, endingBlockHeight}: {addresses: Array<string>, startingBlockHeight?:number, endingBlockHeight?:number}): Promise<any>;
     getAddressBalancesAsArray({addresses}: {addresses: Array<string>}): Promise<any>;
     getSummedAddressBalance({addresses}: {addresses: Array<string>}): Promise<any>;
     getAddressMempool({addresses}: {addresses: Array<string>}): Promise<any>;
     getAddressTxids({addresses,startingBlockHeight,endingBlockHeight}: {addresses: Array<string>, startingBlockHeight?: number, endingBlockHeight?: number}): Promise<any>;
     getAddressUtxos({addresses}: {addresses: Array<string>}): Promise<any>;
}