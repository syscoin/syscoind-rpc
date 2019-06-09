# syscoin-js

A javascript library for interacting directly with the Syscoin RPC Server. Provides 1:1 mappings for all RPC endpoints. For full endpoint list see [RPCFunctions.ts](https://github.com/syscoin/syscoin-js/blob/sys4/src/RPCServiceFunctions.ts). Built for NodeJS or for browser.

## Installation

`npm install`

## Usage 

Works as a Typescript library or a ES6 Javascript libarary.

*Typescript*
```
import { SyscoinRpcClient, rpcServices } from "syscoin-js";

const config = {
  host: "localhost",
  rpcPort: 8368,
  username: "u",
  password: "p",
  logLevel: 'error'
};
let client = new SyscoinRpcClient(config);
rpcServices(client.callRpc).getBestBlockHash().then((info) => {
  console.log("res:", info);
});
```

*NodeJS*
```
const SyscoinRpcClient = require("syscoin-js").SyscoinRpcClient;
const rpcServices = require("syscoin-js").rpcServices;

const config = {
  host: "localhost",
  rpcPort: 8368, // This is the port used in the docker-based integration tests, change at your peril
  username: "u",
  password: "p",
  logLevel: 'error'
};
let client = new SyscoinRpcClient(config);
rpcServices(client.callRpc).getBestBlockHash().then((info) => {
  console.log("res:", JSON.stringify(info));
});
```

## Contributing

Please submit all updates and improvements via pull request.

