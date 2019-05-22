
export interface AssetNewRequest {
    address: string;
    /**
     * name, 20 characters max.
     */
    symbol: string;
    /**
     * Public data, 256 characters max.
     */
    public_value: string;

    contract: string;

    /**
     * Precision of balances. Must be between 0 and 8. The lower it is the higher possible max_supply is available since the supply is represented as a 64 bit integer. With a precision of 8 the max supply is 10 billion.
     */
    precision: number;

    /**
     * Initial supply of asset. Can mint more supply up to total_supply amount or if total_supply is -1 then minting is uncapped.
     */
    supply: number;

    /**
     * Maximum supply of this asset. Set to -1 for uncapped.
     */
    max_supply: number;

    /**
     * Maximum supply of this asset. Set to -1 for uncapped.
     */
    update_flags: number;

    /**
     * Witness alias name that will sign for web-of-trust notarization of this transaction.
     */
    witness: string;
}
