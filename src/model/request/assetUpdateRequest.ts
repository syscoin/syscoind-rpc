export interface AssetUpdateRequest {
   assetGuid?: number;
   publicValue?: string;
   contract?: string;
   supply?: number;
   updateFlags?: number;
   witness?: string;
}
