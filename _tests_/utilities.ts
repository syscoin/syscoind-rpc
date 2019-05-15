import { SyscoinRpcClient } from "../src/SyscoinRpcClient";

async function createClient(rpcConfigOptions) {
    let client = new SyscoinRpcClient(rpcConfigOptions);
    return client;
}

export { createClient };