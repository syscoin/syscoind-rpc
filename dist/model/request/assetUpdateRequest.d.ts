export interface AssetUpdateRequest {
    assetGuid: number;
    publicValue: string;
    contract: string;
    supply: number;
    updateFlags: number;
    auxfees: any;
    witness: string;
}
