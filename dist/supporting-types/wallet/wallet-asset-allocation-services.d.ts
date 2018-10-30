export default interface WalletAssetAllocationServices {
    assetAllocationCollectInterest({asset, owner, witness}: {asset: string, owner: string, witness?: string}): Promise<any>;
    assetAllocationInfo({asset, owner, getInputs}: {asset: string, owner: string, getInputs?: boolean}): Promise<any>;
    listAssetAllocations({count, from, options}: {count?: number, from?: number, options?: any}): Promise<any>;
    listAssetAllocationTransactions({count, from, options}: {count?: number, from?: number, options?: any}): Promise<any>;
    listAssetAllocationsAfterBlock({blockNumber}: {blockNumber:number}): Promise<any>;
    assetAllocationSend({asset, owner, ownerTo, ranges, memo, witness}: {asset: string, owner: string, ownerTo: string,
        ranges: Array<any>, memo: string, witness?: string}): Promise<any>;
    assetAllocationSenderStatus({asset, owner, txId}: {asset: string, owner: string, txId: string}): Promise<any>;
}

