import { SysTx } from "./SysTx";

export interface TransactionDetailEntry {
    address?: string;
    category?: string;
    amount?: number;
    label?: string;
    vout?: number;
    systx?: SysTx; //add other types
}
