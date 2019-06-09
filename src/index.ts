export * from "./SyscoinRpcClient"
export * from "./rpcServices"
export * from "./RPCServiceFunctions"
export * from "./model/index";
export * from "./model/request/index";
export * from "./model/response/index";


export interface RawTx {
  txid: string;
  vout: number;
  scriptPubKey: string;
  redeemScript: string;
  witnessScript: string;
  amount: number;
}

export interface AssetAllocationBalanceQuery {
  addresses: Array<string>;
}

export interface AssetAllocationBalanceQueryWithGuid extends AssetAllocationBalanceQuery {
  assetGuid: number;
}

export interface ListAssetIndexOptions {
  assetGuid: number;
  address: string; //TODO: can be one or more
}

export interface ListAssetOptions {
  txid: string;
  assetGuid: number;
  addresses: Array<string>;
}

export interface EthHeaders {
  headers: Array<EthHeader>;
}

export interface EthHeader {
  blockNum: number;
  txRoot: string;
}

export interface TpsRawTx {
  tx: string;
}

export interface TxHeader {
  txid: string;
  vout: number;
  sequence: number;
}

export interface PbstPayloadInfo {
  address?: number;
  data?: string;
}

export interface TransactionData {
  txid: string;
  vout: number;
  scriptPubKey: string;
  redeemScript: string;
  witnessScript: string;
  amount: number;
}

export interface RpcConfigOptions {
  host: string;
  rpcPort: number;
  username: string;
  password: string;
  useSsl?: boolean;
  timeout?: number;
  customHttpAgent?: any;
}

export interface RpcResponse {
  result?: any;
  error?: any;
  id?: any;
}



