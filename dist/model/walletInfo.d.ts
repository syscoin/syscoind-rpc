/**
 * Syscoin API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.1.4
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
export interface WalletInfo {
    /**
     * the wallet version
     */
    walletversion?: number;
    /**
     * the total confirmed balance of the wallet in SYS
     */
    balance?: number;
    /**
     * the total unconfirmed balance of the wallet in SYS
     */
    unconfirmed_balance?: number;
    /**
     * the total immature balance of the wallet in SYS
     */
    immature_balance?: number;
    /**
     * the total number of transactions in the wallet
     */
    txcount?: number;
    /**
     * the timestamp (seconds since GMT epoch) of the oldest pre-generated key in the key pool
     */
    keypoololdest?: number;
    /**
     * how many new keys are pre-generated
     */
    keypoolsize?: number;
    /**
     * the timestamp in seconds since epoch (midnight Jan 1 1970 GMT) that the wallet is unlocked for transfers, or 0 if the wallet is locked
     */
    unlocked_until?: number;
    /**
     * the transaction fee configuration, set in SYS/kB
     */
    paytxfee?: number;
}
