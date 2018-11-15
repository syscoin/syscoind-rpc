export default interface WalletEscrowServices {
    info({guid}: {guid: string}): Promise<any>;
    link({alias,guid,commission,description,witness}: {alias:string,guid:string,commission:string,description:string,witness:string}): Promise<any>;
    list({count, from, options}: {count? : number, from? : number, options?: any}): Promise<any>;    
    listAfterBlock({blockNumber}: {blockNumber: number}) : Promise<any>
    create({alias, category, title, quantity, price, description, currency, certGuid,
        paymentOptions, priv, units, offerType, auctionExpires, auctionReserve,
        auctionRequireWitness, auctionDeposit, witness}: 
        {
            alias: string,
            category:string,
            title: string,
            quantity: string,
            price: number,
            description: string,
            currency: string,
            certGuid: string,
            paymentOptions: string,
            priv: boolean,
            units: number,
            offerType: string,
            auctionExpires: number,
            auctionReserve: number,
            auctionRequireWitness: boolean,
            auctionDeposit: number,
            witness: string
        }): Promise<any>;
    update({alias, guid, category, title, quantity, price, description, currency, certGuid,
        paymentOptions, priv, units, offerType, auctionExpires, auctionReserve,
        auctionRequireWitness, auctionDeposit, witness}: 
        {
            alias: string,
            guid: string,
            category:string,
            title: string,
            quantity: string,
            price: number,
            description: string,
            currency: string,
            certGuid: string,
            paymentOptions: string,
            priv: boolean,
            units: number,
            offerType: string,
            auctionExpires: number,
            auctionReserve: number,
            auctionRequireWitness: boolean,
            auctionDeposit: number,
            witness: string
        }): Promise<any>;
}


