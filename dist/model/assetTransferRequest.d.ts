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
export interface AssetTransferRequest {
    /**
     * Asset guid.
     */
    asset: string;
    /**
     * Alias to transfer this asset to.
     */
    alias: string;
    /**
     * Witness alias name that will sign for web-of-trust notarization of this transaction.
     */
    witness?: string;
}
