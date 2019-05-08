// export interface Sporks {
//     showCurrentValues() : Promise<any>;
//     showActivationStatus(): Promise<any>;
// }

export default interface RawTransactionServices {
  analyzePsbt({psbt}: { pbst: string }): Promise<any>;
  combinePsbt({pbsts}: { pbsts: Array<string> }): Promise<any>;
  combineRawTransaction({hexs}: { hexs: Array<string> }): Promise<any>;
  convertToPsbt({hex, permitSigData, isWitness}: { hex: string, permitSigData?: number, isWitness?: number }): Promise<any>;
  createPsbt({txHeaders, payloadInfo, locktime, replaceable}: { txHeaders: Array<TxHeader>, payloadInfo: Array<PbstPayloadInfo>, locktime?: number, replaceable?: number }): Promise<any>;
  createRawTransaction({txHeaders, payloadInfo, locktime, replaceable}: { txHeaders: Array<TxHeader>, payloadInfo: Array<PbstPayloadInfo>, locktime?: number, replaceable?: number }): Promise<any>;
  decodePsbt({pbst}: { pbst: string }): Promise<any>;
  decodeRawTransaction({hexString, isWitness}: { hexString: string, isWitness: number }): Promise<any>;
  decodeScript({hexString}: { hexString: string }): Promise<any>;
  finalizePsbt({pbst, extract}: { pbst: string, extract?: number }): Promise<any>;
  fundRawTransaction({hexString, options, isWitness}: { hexString: string, options?: number, isWitness?: number }): Promise<any>;
  getRawTransaction({txid, verbose, blockHash}: { txid: string, verbose?: number, blockHash?: string }): Promise<any>;
  joinPsbts({pbsts}: { pbsts: Array<string> }): Promise<any>;
  sendRawTransaction({hexString, maxFeeRate}: { hexString: string, maxFeeRate?: number }): Promise<any>;
  signRawTransactionWithKey({hexString, privateKeys, txs, sigHashType}: { hexString: string, privateKeys: Array<string>, txs?: Array<Transaction>, sigHashType?: string }): Promise<any>;
  testMempoolAccept({rawTxs, maxFeeRate}: { rawTxs: Array<string>, maxFeeRate?: number }): Promise<any>;
  utxoUpdatePsbt({pbst}: { pbst: string }): Promise<any>;
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

export interface Transaction {
  txid: string;
  vout: number;
  scriptPubKey: string;
  redeemScript: string;
  witnessScript: string;
  amount: number;
}