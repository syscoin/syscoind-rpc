export interface GetTransactionRequest {
  txid: string;
  includeWatchOnly?: boolean;
}