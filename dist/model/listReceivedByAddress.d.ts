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
export interface ListReceivedByAddress {
    address?: string;
    v2address?: string;
    account?: string;
    amount?: number;
    confirmations?: number;
    label?: string;
    txids?: Array<string>;
    ismine?: boolean;
}
