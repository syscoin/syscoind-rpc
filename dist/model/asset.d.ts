export interface Asset {
    asset_guid: number;
    symbol: string;
    txid: string;
    public_value: string;
    address: string;
    contract: string;
    balance: number;
    total_supply: number;
    max_supply: number;
    update_flags: number;
    precision: number;
    witness?: string;
}
