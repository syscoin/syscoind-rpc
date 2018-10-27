export default interface AddressIndexServices {
    async getAddressDeltas({addresses, startingBlockHeight, endingBlockHeight}: {addresses: Array<string>, startingBlockHeight?:number, endingBlockHeight?:number}): any;
    async getAddressBalancesAsArray({addresses}: {addresses: Array<string>}): any;
    async getSummedAddressBalance({addresses}: {addresses: Array<string>}): any;
    async getAddressMempool({addresses}: {addresses: Array<string>}): any;
    async getAddressTxids({addresses,startingBlockHeight,endingBlockHeight}: {addresses: Array<string>, startingBlockHeight?: number, endingBlockHeight?: number}): any;
    async getAddressUtxos({addresses}: {addresses: Array<string>}): any;
}