export default interface WalletAliasServices {
    aliasAddScript({script}: {script:string}): Promise<any>;
    aliasBalance({alias,instantSend}: {alias:string,instantSend:boolean}): Promise<any>;
    aliasBalanceMulti({aliases, instantSend}: {aliases:Array<string>, instantSend: boolean}): Promise<any>;
    aliasIsExpired({aliasName}: {aliasName:string}): Promise<any>;
    aliasInfo({aliasName}: {aliasName:string}): Promise<any>;
    aliasNew({aliasName, publicValue, acceptTransferFlags, expireTimestamp, address,
        encryptionPrivateKey, encryptionPublicKey, witness}: {aliasName: string, publicValue: string, acceptTransferFlags?: number,
            expireTimestamp: number, address: string, encryptionPrivateKey: string, encryptionPublicKey: string, witness?: string}): Promise<any>;
    aliasNewEstimatedFee({aliasName, publicValue, acceptTransferFlags, expireTimestamp, address, encryptionPrivateKey, encryptionPublicKey,
        witness}: {aliasName: string, publicValue:string, acceptTransferFlags?:number, expireTimestamp: number, address: string, 
            encryptionPrivateKey: string, encryptionPublicKey: string, witness?: string }): Promise<any>;
    aliasPay({aliasFrom, amountsToAliases, instantSend, subtractFeeFromAmount}: 
            {aliasFrom:string, amountsToAliases: any, instantSend?:boolean, subtractFeeFromAmount?: boolean}): Promise<any>;
    aliasUpdate({aliasName, publicValue, acceptTransferFlags, expireTimestamp, address, encryptionPrivateKey, encryptionPublicKey, witness} :
        {aliasName: string, publicValue: string, acceptTransferFlags?: number, expireTimestamp?: number, address: string, 
            encryptionPrivateKey: string, encryptionPublicKey: string, witness?: string}): Promise<any>;
    aliasUpdateWhiteList({ownerAlias, whitelistEntries, witness}: {ownerAlias:string,whitelistEntries:any,witness?:string}): Promise<any>;
    aliasWhiteList({alias}: {alias:string}): Promise<any>;
    aliasUpdateEstimatedFee({aliasName, publicValue, address, acceptTransferFlags, expireTimestamp, 
        encryptionPrivateKey, encryptionPublicKey, witness}: {aliasName: string, publicValue: string, address: string, acceptTransferFlags?: number,
        expireTimestamp?: number, encryptionPrivateKey: string, encryptionPublicKey: string, witness?: string}): Promise<any>;
    listAliases({count, from, options}: {count?:number,from?:number,options?:any}): Promise<any>;
    listAliasesAfterBlock({blockNumber}: {blockNumber:number}) : Promise<any>;
    validateAlias({aliasName}: {aliasName:string}): Promise<any>;
}
