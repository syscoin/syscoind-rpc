import { AssetAllocationAmount } from "./assetAllocationAmount";

export interface AssetAllocationSendManyRequest {
   assetGuid: number;
   addressFrom: string;
   amounts: AssetAllocationAmount[];
   witness: string;
}
