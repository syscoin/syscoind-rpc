import { AssetAllocationAmount } from "./assetAllocationAmount";

export interface SysTxAssetAllocationSend {
  txtype: string;
  asset_allocation: string;
  asset_guid: number;
  symbol: string;
  txid: string;
  height: number;
  sender: string;
  allocations: AssetAllocationAmount[];
  total: number;
  blockhash: string;
}
