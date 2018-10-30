export default interface WalletAssetServices {

    assetInfo({asset, getInputs}: {asset:string, getInputs:boolean});
    assetNew({symbol, owner, publicValue, category, precision, useInputRanges,
        supply, maxSupply, interestRate, canAdjustInterestRate, witness}: {symbol: string, 
            owner: string, publicValue: string, category: string, precision: number, useInputRanges: boolean,
            supply: number, maxSupply: number, interestRate: number, canAdjustInterestRate: boolean, witness?: string }): Promise<any>; 
    assetSend({asset, aliasFrom, aliasTo, amount, ranges, memo}:
            {asset: string, aliasFrom: string, aliasTo: string, amount: number, ranges: any, memo: string}) :Promise<any>;
    assetTransfer({asset, newOwner, witness}: {asset: string, newOwner: string, witness?: string}): Promise<any>;
    assetUpdate({asset, publicValue, category, supply, interestRate, witness}: 
            {asset: string, publicValue: string, category: string, supply: number, interestRate: number, witness?: string}) : Promise<any>;
    listAssets({count, from, options}: {count?: number, from?: number, options?: any}): Promise<any>;
    listAssetsAfterBlock({blockNumber}: {blockNumber:number}): Promise<any>;
}
