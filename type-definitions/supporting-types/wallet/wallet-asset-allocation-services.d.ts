export default interface WalletAssetAllocationServices {
    collectInterest({asset, owner, witness}: {asset: string, owner: string, witness?: string}): Promise<any>;
    info({asset, owner, getInputs}: {asset: string, owner: string, getInputs?: boolean}): Promise<any>;
    list({count, from, options}: {count?: number, from?: number, options?: any}): Promise<any>;
    listTransactions({count, from, options}: {count?: number, from?: number, options?: any}): Promise<any>;
    listAfterBlock({blockNumber}: {blockNumber:number}): Promise<any>;
    send({asset, owner, ownerTo, ranges, memo, witness}: {asset: string, owner: string, ownerTo: string,
        ranges: Array<any>, memo: string, witness?: string}): Promise<any>;
    senderStatus({asset, owner, txId}: {asset: string, owner: string, txId: string}): Promise<any>;
}