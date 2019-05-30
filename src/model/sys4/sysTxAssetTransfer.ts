export interface SysTxAssetTransfer {
  txtype: string;
  asset_guid: number;
  symbol: string;
  txid: string;
  height: number;
  sender: string;
  address_transfer: string;
  balance: number;
  blockhash: string;
}
