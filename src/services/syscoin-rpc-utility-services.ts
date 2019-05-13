import { get, post } from '../endpoint-decorators';
import ow from "syscoin-ow";
import { sign } from "crypto";

export function syscoinRpcUtilityServices(callRpc) {

  return {
    createMultiSig: post(createMultiSig),
    deriveAddress: get(deriveAddress),
    estimateSmartFee: get(estimateSmartFee),
    getDescriptorInfo: get(getDescriptorInfo),
    signMessageWithPrivKey: post(signMessageWithPrivKey),
    validateAddress: post(validateAddress),
    verifyMessage: post(verifyMessage)
  }

  async function createMultiSig({numberOfRequiredSignatures, keys, addressType}: { numberOfRequiredSignatures: number, keys: Array<string>, addressType?: string }): Promise<any> {
    ow(numberOfRequiredSignatures, ow.number.label("createMultiSig:numberOfRequiredSignatures").integer.greaterThan(0));
    ow(keys, ow.array.label("createMultiSig:keys").not.empty);
    return await callRpc('createmultisig', [numberOfRequiredSignatures, keys]);
  }

  async function deriveAddress({descriptor, range}: { descriptor: string, range?: number }): Promise<any> {
    return await callRpc('deriveaddress', [descriptor, range]);
  }

  async function estimateSmartFee({confTarget, estimateMode}: { confTarget: number, estimateMode?: string }): Promise<any> {
    return await callRpc('estimatesmartfee', [confTarget, estimateMode]);
  }

  async function getDescriptorInfo({descriptor}: { descriptor: string }): Promise<any> {
    return await callRpc('getdescriptorinfo', [descriptor]);
  }

  async function signMessageWithPrivKey({privateKey, message}: { privateKey: string, message: string }): Promise<any> {
    return await callRpc('signmessagewithprivkey', [privateKey, message]);
  }

  async function validateAddress({address}: { address: string }): Promise<any> {
    ow(address, ow.string.label("validateAddress:address").minLength(0));
    return await callRpc('validateaddress', [address]);
  }

  async function verifyMessage({address, signature, message}: { address: string, signature: string, message: string }): Promise<any> {
    return await callRpc('verifymessage', [address, signature, message]);
  }
}
