export interface AssetNewRequest {
    address: string;
    symbol: string;
    public_value: string;
    contract: string;
    precision: number;
    supply: number;
    max_supply: number;
    update_flags: number;
    witness: string;
}
