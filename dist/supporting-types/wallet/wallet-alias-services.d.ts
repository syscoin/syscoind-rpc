export default interface WalletAliasServices {
    addScript({script}: {script:string}): Promise<any>;
    balance({alias,instantSend}: {alias:string,instantSend:boolean}): Promise<any>;
    balanceMulti({aliases, instantSend}: {aliases:Array<string>, instantSend: boolean}): Promise<any>;
    isExpired({aliasName}: {aliasName:string}): Promise<any>;
    info({aliasName}: {aliasName:string}): Promise<any>;
    create({aliasName, publicValue, acceptTransferFlags, expireTimestamp, address,
        encryptionPrivateKey, encryptionPublicKey, witness}: {aliasName: string, publicValue: string, acceptTransferFlags?: number,
            expireTimestamp: number, address: string, encryptionPrivateKey: string, encryptionPublicKey: string, witness?: string}): Promise<any>;
    estimatedFeeForNew({aliasName, publicValue, acceptTransferFlags, expireTimestamp, address, encryptionPrivateKey, encryptionPublicKey,
        witness}: {aliasName: string, publicValue:string, acceptTransferFlags?:number, expireTimestamp: number, address: string, 
            encryptionPrivateKey: string, encryptionPublicKey: string, witness?: string }): Promise<any>;
    pay({aliasFrom, amountsToAliases, instantSend, subtractFeeFromAmount}: 
            {aliasFrom:string, amountsToAliases: any, instantSend?:boolean, subtractFeeFromAmount?: boolean}): Promise<any>;
    update({aliasName, publicValue, acceptTransferFlags, expireTimestamp, address, encryptionPrivateKey, encryptionPublicKey, witness} :
        {aliasName: string, publicValue: string, acceptTransferFlags?: number, expireTimestamp?: number, address: string, 
            encryptionPrivateKey: string, encryptionPublicKey: string, witness?: string}): Promise<any>;
    updateWhiteList({ownerAlias, whitelistEntries, witness}: {ownerAlias:string,whitelistEntries:any,witness?:string}): Promise<any>;
    whiteList({alias}: {alias:string}): Promise<any>;
    updateEstimatedFee({aliasName, publicValue, address, acceptTransferFlags, expireTimestamp, 
        encryptionPrivateKey, encryptionPublicKey, witness}: {aliasName: string, publicValue: string, address: string, acceptTransferFlags?: number,
        expireTimestamp?: number, encryptionPrivateKey: string, encryptionPublicKey: string, witness?: string}): Promise<any>;
    list({count, from, options}: {count?:number,from?:number,options?:any}): Promise<any>;
    listAfterBlock({blockNumber}: {blockNumber:number}) : Promise<any>;
    validate({aliasName}: {aliasName:string}): Promise<any>;
}
