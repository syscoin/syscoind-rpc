import { SysTx } from "./sysTx";
export interface TransactionDetailEntry {
    address?: string;
    category?: string;
    amount?: number;
    label?: string;
    vout?: number;
    systx?: SysTx;
}
