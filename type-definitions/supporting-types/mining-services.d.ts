export default interface MiningServices {
  createAuxBlock({address}: { address: string }): Promise<any>;
  getAuxBlock({blockHash, auxPow}: { blockHash?: string, auxPow?: string }): Promise<any>;
  getBlockTemplate({blockTemplate}: { blockTemplate: string }): Promise<any>;
  getMiningInfo(): Promise<any>;
  getNetworkHashesPerSecond({numberOfBlocks, blockHeight}: { numberOfBlocks: number, blockHeight: number }): Promise<any>;
  prioritiseTransaction({txid, dummy, feeDeltaInSatoshis}: { txid: string, dummy?: null, feeDeltaInSatoshis: number }): Promise<any>;
  submitAuxBlock({blockHash, auxPow}: { blockHash: string, auxPow: string }): Promise<any>;
  submitBlock({hexDataToSubmit}: { hexDataToSubmit: string }): Promise<any>;
  submitHeader({hexdata}: { hexData: string }): Promise<any>;
}

