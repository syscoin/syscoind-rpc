export interface AssetUpdateRequest {
   assetGuid: number;
   description: string;
   contract: string;
   supply: number;
   updateFlags: number;
   auxfees: any;
   witness: string;
}
