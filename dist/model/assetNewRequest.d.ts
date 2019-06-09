export interface AssetNewRequest {
    address: string;
    symbol: string;
    public_value: string;
    contract: string;
    precision: number;
    total_supply: number;
    max_supply: number;
    update_flags: number;
    witness: string;
}
