import { SysTxAssetActivate } from "./sysTxAssetActivate";
import { SysTxAssetUpdate } from "./sysTxAssetUpdate";
import { SysTxAssetAllocationSend } from "./sysTxAssetAllocationSend";
import { SysTxAssetTransfer } from "./sysTxAssetTransfer";

export type SysTx = SysTxAssetActivate | SysTxAssetUpdate | SysTxAssetAllocationSend | SysTxAssetTransfer;

export const SYSTX = {
  ASSET_NEW: 'assetactivate',
  ASSET_UPDATE: 'assetupdate',
  ASSET_SEND: 'assetsend',
  ASSET_ALLOCATION_SEND: 'assetallocationsend',
  ASSET_TRANSFER: 'assettransfer'
};

