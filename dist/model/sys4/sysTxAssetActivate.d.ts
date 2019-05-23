export interface SysTxAssetActivate {
    txtype: string;
    asset_guid: number;
    symbol: string;
    txid: string;
    height: number;
    sender: string;
    update_flags: number;
    balance: number;
    total_supply: number;
    max_supply: number;
    precision: number;
    blockhash: string;
}
