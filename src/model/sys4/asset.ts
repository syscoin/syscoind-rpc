export interface Asset {
    asset_guid: number;
    symbol: string;
    txid: string;
    publicvalue: string;
    address: string;
    contract: string;
    balance: string;
    total_supply: string;
    max_supply: string;
    update_flags: number;
    precision: number;
}
