import { createClient } from '../utilities';
import config from "../config";
import { SyscoinRpcClient } from "../../src/SyscoinRpcClient";

const configOptions = config;

describe('Syscoin RPC Client Tests', () => {
  let client: SyscoinRpcClient;

  beforeAll(async () => {
    console.log("cl");
    try {
      client = await createClient(configOptions);
    } catch (e) {
      console.log("E-ERROR: " + e);
    }
  });

  describe('callRpc', () => {
    it('callRpc returns data for the most basic command', async () => {
      let result = await client.callRpc("getbestblockhash").call();
      console.log("Getblockhash result:", result);
      expect(typeof result).toBe('string');
    });
  });
});
