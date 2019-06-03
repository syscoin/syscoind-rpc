import { TransactionDetailEntry } from './transactionDetailEntry';
import { SysTx } from "./sysTx";
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
    systx?: SysTx;
}
