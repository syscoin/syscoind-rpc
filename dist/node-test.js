Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
var SyscoinRpcClient_1 = require("./SyscoinRpcClient");
var rpcServices_1 = require("./rpcServices");
var client = new SyscoinRpcClient_1.SyscoinRpcClient(config_1.default);
var info = rpcServices_1.rpcServices(client.callRpc).getBestBlockHash().then(function (info) {
    console.log("res:", info);
});
//# sourceMappingURL=node-test.js.map