export interface AuxFees {
    address: string;
    fee_struct: AuxFee[];
}
export interface AuxFee {
    [index: number]: string;
}
