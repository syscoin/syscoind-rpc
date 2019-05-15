import { rpcServices } from "../../src/rpcServices";

describe('RPC Services Tests', () => {

  describe('callThroughToRpc', () => {
    let mockRpc = (method, args) => {
      return {method, args};
    };
    let callThru = rpcServices(mockRpc).callThroughToRpc;

    //requires non-anonymous function
    function someRpcMethod(paramA?) { return callThru(arguments); }

    it('callThroughToRpc parses the arguments object correctly', async () => {
      let result = await someRpcMethod({propA: "A", propB: "B"});
      expect(result.method).toBe('somerpcmethod');
      expect(result.args[0]).toBe('A');
      expect(result.args[1]).toBe('B');
    });

    it('callThroughToRpc should work with no params passed', async () => {
      let result = await someRpcMethod();
      expect(result.method).toBe('somerpcmethod');
    });
  });
});