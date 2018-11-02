export default interface WalletAssetServices {

    info({asset, getInputs}: {asset:string, getInputs:boolean});
    create({symbol, owner, publicValue, category, precision, useInputRanges,
        supply, maxSupply, interestRate, canAdjustInterestRate, witness}: {symbol: string, 
            owner: string, publicValue: string, category: string, precision: number, useInputRanges: boolean,
            supply: number, maxSupply: number, interestRate: number, canAdjustInterestRate: boolean, witness?: string }): Promise<any>; 
    send({asset, aliasFrom, aliasTo, amount, ranges, memo}:
            {asset: string, aliasFrom: string, aliasTo: string, amount: number, ranges: any, memo: string}) :Promise<any>;
    transfer({asset, newOwner, witness}: {asset: string, newOwner: string, witness?: string}): Promise<any>;
    update({asset, publicValue, category, supply, interestRate, witness}: 
            {asset: string, publicValue: string, category: string, supply: number, interestRate: number, witness?: string}) : Promise<any>;
    list({count, from, options}: {count?: number, from?: number, options?: any}): Promise<any>;
    listAfterBlock({blockNumber}: {blockNumber:number}): Promise<any>;
}
