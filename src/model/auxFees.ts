export interface AuxFees {
  address: string;
  fee_struct: AuxFee[];
}

export interface AuxFee { // [0] is bound in amount, [1] is percentage fee 0-1
  [ index: number ]: string; // bound in amount
}
