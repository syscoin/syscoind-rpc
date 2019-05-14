import { rpcServices } from "../../src/rpcServices";

describe('RPC Services Tests', () => {

  describe('callThroughToRpc', () => {
    let mockRpc = (method, args) => {
      return {method, args};
    };
    let callThru = rpcServices(mockRpc).callThroughToRpc;

    //requires non-anonymous function
    function method(paramA, paramB) { return callThru(arguments); }

    it('callThroughToRpc parses the arguments object correctly', async () => {
      let result = await method("method", ["A", "B"]);
      expect(result.method).toBe('method');
      expect(result.args[0]).toBe('A');
      expect(result.args[1]).toBe('B');
    });
  });
});