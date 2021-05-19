# syscoind-rpc

A javascript library for interacting directly with the Syscoin RPC Server. Provides 1:1 mappings for all RPC endpoints. For full 
endpoint list see [RPCFunctions.ts](https://github.com/syscoin/syscoind-rpc/blob/develop/src/RPCServiceFunctions.ts). Built for NodeJS or for browser.

## Installation

`npm install @syscoin/syscoind-rpc`

## Usage 

Works as a Typescript library or a ES6 Javascript library. Calls can be made individually or batched. Typescript helper interfaces for 
request and response object can be found in [src/model/request](https://github.com/syscoin/syscoind-rpc/blob/develop/src/model/request) and 
[src/model/response](https://github.com/syscoin/syscoind-rpc/blob/develop/src/model/response).  

*Typescript*
```
import { SyscoinRpcClient, rpcServices } from "@syscoin/syscoind-rpc";

const config = {
  host: "localhost",
  rpcPort: 8368,
  username: "u",
  password: "p",
  logLevel: 'error'
};
const client = new SyscoinRpcClient(config);
const rpc = rpcServices(client.callRpc);
const info = await rpc.getBestBlockHash().call();
```

*NodeJS*
```
const SyscoinRpcClient = require("@syscoin/syscoind-rpc").SyscoinRpcClient;
const rpcServices = require("@syscoin/syscoind-rpc").rpcServices;

const config = {
  host: "localhost",
  rpcPort: 8368, // This is the port used in the docker-based integration tests, change at your peril
  username: "u",
  password: "p",
  logLevel: 'error'
};
const client = new SyscoinRpcClient(config);
const rpc = rpcServices(client.callRpc);
const info = await rpc.getBestBlockHash().call();
```

### Batch Calls

Batch requests can be constructed using the `batch` function. Results will be an array based on the requests.
```
const result = await client.batch([
  rpc.getBestBlockHash(),
  rpc.getWallteInfo()]);

// result[0] = getBestBlockHash result
// result[1] = getWalletInfo result

```

### Wrapped and Unwrapped Responses

The Syscoin RPC server returns results wrapped in an object - `{rersult: null, id: null, error: null }`. By default 
syscoind-rpc will unwrap RPC responses to provide consumers with `data.result` or `data.error` directly. Consumers can 
optionally disable this to process the full wrapped object. 

*Example single call with unwrapping disabled*
```
const result = await rpc.getBestBlockHash().call(false);
```

*Example batch call with unwrapping disabled*
```
const result = await client.batch([
  rpc.getBestBlockHash(),
  rpc.getWallteInfo()], false);
```

## Contributing

Please submit all updates and improvements via pull request.

