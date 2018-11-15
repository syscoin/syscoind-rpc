export default interface WalletEscrowServices {
    acknowledge({escrowGuid, witness} : {escrowGuid: string, witness:string}): Promise<any>;
    bid({alias, escrow, bidInPaymentOption, bidInOfferCurrency, witness}: 
        {alias: string, escrow: string, bidInPaymentOption: string, bidInOfferCurrency: string, witness: string}) : Promise<any>;
    completeRefund({escrowGuid, rawTx, witness}: {escrowGuid: string, rawTx: string, witness: string}) : Promise<any>;
    createRawTransaction({type, escrowGuid,inputs,userRole}: {type:string,escrowGuid:string,inputs:any,userRole:string}) : Promise<any>;
    escrowCompleteRelease({escrowGuid, rawTx, witness}: {escrowGuid: string, rawTx: string, witness: string}): Promise<any>;
    feedback({escrowGuid, userFrom, feedback, rating, userTo, witness}: {escrowGuid:string, userFrom:string, feedback:string, rating:string, userTo:string, witness: string});
    info({guid}: {guid: string}): Promise<any>;
    create({getAmountAndAddress,alias,arbiterAlias,offer,quantity,buyNow,
        pricePerUnitInPaymentOption,shippingAmount,networkFee,arbiterFee,witnessFee,extTx,payment, option, bidInPaymentOption,
        bidInOfferCurrency, witness}: 
        {
            getAmountAndAddress: boolean,
            alias: string,
            arbiterAlias: string,
            offer: string,
            quantity: number,
            buyNow: boolean,
            pricePerUnitInPaymentOption: number,
            shippingAmount: number,
            networkFee: number,
            arbiterFee: number,
            witnessFee: number,
            extTx: string,
            payment: string,
            option: string,
            bidInPaymentOption: string,
            bidInOfferCurrency: string,
            witness: string
        }): Promise<any>
    refund({escrowGuid,userRole,rawTx,witness}: {escrowGuid:string,userRole:string,rawTx:string,witness:string}) : Promise<any>;
    release({escrowGuid,userRole,rawTx,witness}: {escrowGuid:string, userRole:string, rawTx:string,witness:string}): Promise<any>;
    list({count, from, options}: {count? : number, from? : number, options?: any}): Promise<any>;    
    listAfterBlock({blockNumber}: {blockNumber: number}) : Promise<any>
}