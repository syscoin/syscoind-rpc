import { AuxFees } from "../auxFees";
export interface AssetUpdateRequest {
    assetGuid: number;
    description: string;
    contract: string;
    supply: number;
    updateFlags: number;
    auxfees: AuxFees;
    witness: string;
}
