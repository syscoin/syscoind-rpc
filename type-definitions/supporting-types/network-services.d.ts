// export interface Sporks {
//     showCurrentValues() : Promise<any>;
//     showActivationStatus(): Promise<any>;
// }

export default interface NetworkServices {
  addNode({nodeAddress}: { nodeAddress: string }): Promise<any>;
  clearBanned(): Promise<any>;
  disconnectNode({nodeAddress, nodeId}: { nodeAddress: string, nodeId: number }): Promise<any>;
  getAddedNodeInfo({nodeAddress}: { nodeAddress: string }): Promise<any>;
  getConnectionCount(): Promise<any>;
  getNetTotals(): Promise<any>;
  getNetworkInfo(): Promise<any>;
  getNodeAddresses(): Promise<any>;
  getPeerInfo(): Promise<any>;
  getInfo(): Promise<any>;
  listBanned(): Promise<any>;
  ping(): Promise<any>;
  setBan({subnet,command,banTime}: { subnet: string, command: string, banTime?: number}):Promise<any>;
}
