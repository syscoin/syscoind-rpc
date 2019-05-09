export default interface UtilityServices {
  createMultiSig({numberOfRequiredSignatures, keys, addressType}: { numberOfRequiredSignatures: number, keys: Array<string>, addressType?: string }): Promise<any>;
  deriveAddress({descriptor, range}: { descriptor: string, range?: number }): Promise<any>;
  estimateSmartFee({confTarget, estimateMode}: { confTarget: number, estimateMode?: string }): Promise<any>;
  getDescriptorInfo({descriptor}: { descriptor: string }): Promise<any>;
  signMessageWithPrivKey({privateKey, message}: { privateKey: string, message: string }): Promise<any>;
  validateAddress({address}: { address: string }): Promise<any>;
  verifyMessage({address, signature, message}: { address: string, signature: string, message: string }): Promise<any>;
}
