export default interface WalletCertificateServices {
    info({guid}: {guid: string}): Promise<any>;
    create({alias, title, publicValue, category, witness}: {alias: string, title: string, publicValue: string, category: string, witness: string}): Promise<any>;
    transfer({guid, alias, publicValue, accessFlags, witness}: {guid: string, alias: string, publicValue: string, accessFlags: number, witness: string}): Promise<any>;
    update({guid, title, publicValue, category, witness}: {guid: string, title: string, publicValue: string, category: string, witness: string}): Promise<any>;    
    list({count, from, options}: {count? : number, from? : number, options?: any}): Promise<any>;    
    listAfterBlock({blockNumber}: {blockNumber: number}) : Promise<any>
}
    
    