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
import { AssetInput } from './assetInput';
export interface AssetAllocation {
    _id: string;
    asset?: string;
    txid?: string;
    height?: number;
    alias?: string;
    balance?: number;
    interest_claim_height?: number;
    memo?: string;
    inputs?: Array<AssetInput>;
    accumulated_interest?: number;
}
