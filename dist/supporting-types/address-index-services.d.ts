export default interface AddressIndexServices {
    async getAddressDeltas({addresses, startingBlockHeight, endingBlockHeight}: {addresses: Array<string>, startingBlockHeight?:number, endingBlockHeight?:number}): Promise<any>;
    async getAddressBalancesAsArray({addresses}: {addresses: Array<string>}): Promise<any>;
    async getSummedAddressBalance({addresses}: {addresses: Array<string>}): Promise<any>;
    async getAddressMempool({addresses}: {addresses: Array<string>}): Promise<any>;
    async getAddressTxids({addresses,startingBlockHeight,endingBlockHeight}: {addresses: Array<string>, startingBlockHeight?: number, endingBlockHeight?: number}): Promise<any>;
    async getAddressUtxos({addresses}: {addresses: Array<string>}): Promise<any>;
}