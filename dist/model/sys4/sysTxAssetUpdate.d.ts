export interface SysTxAssetUpdate {
    txtype: string;
    asset_guid: number;
    symbol: string;
    txid: string;
    height: number;
    public_value: string;
    sender: string;
    update_flags: number;
    balance: number;
    precision: number;
    blockhash: string;
}
