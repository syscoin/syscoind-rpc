import { AddressInfoLabel } from "./addressInfoLabel";

export interface AddressInfo {
  address: string;
  scriptPubKey: string;
  ismine: boolean;
  solvable: boolean;
  desc: string;
  iswatchonly: boolean;
  isscript: boolean;
  iswitness: boolean;
  witness_version: number;
  witness_program: string;
  pubkey: string;
  label: string;
  ischange: boolean;
  timestamp: number;
  hdkeypath: string;
  hdseedid: string;
  hdmasterfingerprint: string;
  labels: AddressInfoLabel[];
}
