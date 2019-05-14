import config from "./config";
import SyscoinRpcClient from "./SyscoinRpcClient";
import { rpcServices } from "./rpcServices";

let client = new SyscoinRpcClient(config);

let info = rpcServices(client.callRpc).getBestBlockHash().then((info) => {
  console.log("res:", info);
});

