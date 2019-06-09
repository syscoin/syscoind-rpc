export interface WalletInfo {
    walletname?: string;
    walletversion?: number;
    balance?: number;
    unconfirmed_balance?: number;
    immature_balance?: number;
    txcount?: number;
    keypoololdest?: number;
    keypoolsize?: number;
    keypoolsize_hd_internal?: number;
    unlocked_until?: number;
    paytxfee?: number;
    hdseedid?: number;
    private_keys_enabled?: boolean;
    scanning?: boolean;
}
