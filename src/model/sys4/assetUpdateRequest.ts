export interface AssetUpdateRequest {
   assetGuid?: number;
   publicValue?: string;
   contract?: string;
   supply?: number;
   updateFlags?: string;
   witness?: string;
}
