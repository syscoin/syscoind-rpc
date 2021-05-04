import { AssetAllocationAmount } from "../assetAllocationAmount";

export interface AssetSendManyRequest {
   assetGuid: number;
   amounts: AssetAllocationAmount[];
   witness: string;
}
