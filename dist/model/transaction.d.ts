import { TransactionDetailEntry } from './transactionDetailEntry';
export interface Transaction {
    amount?: string;
    confirmations?: number;
    blockhash?: string;
    blockindex?: number;
    blocktime?: number;
    txid?: string;
    walletconflicts?: Array<any>;
    time?: number;
    timereceived?: number;
    details?: Array<TransactionDetailEntry>;
    hex?: string;
    fee?: number;
}
export interface RawTransactionVerbose {
    amount?: number;
    blockhash?: string;
    blocktime?: number;
    confirmations?: number;
    hash?: string;
    hex?: string;
    in_active_chain?: boolean;
    locktime?: number;
    size?: number;
    time?: number;
    txid?: string;
    type?: string;
    version?: number;
    vin?: any[];
    vout?: any[];
    vsize?: number;
    weight?: number;
}
