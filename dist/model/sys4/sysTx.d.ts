import { SysTxAssetActivate } from "./sysTxAssetActivate";
import { SysTxAssetUpdate } from "./sysTxAssetUpdate";
import { SysTxAssetAllocationSend } from "./sysTxAssetAllocationSend";
import { SysTxAssetTransfer } from "./sysTxAssetTransfer";
export declare type SysTx = SysTxAssetActivate | SysTxAssetUpdate | SysTxAssetAllocationSend | SysTxAssetTransfer;
export declare const SYSTX: {
    ASSET_NEW: string;
    ASSET_UPDATE: string;
    ASSET_SEND: string;
    ASSET_ALLOCATION_SEND: string;
    ASSET_TRANSFER: string;
};
