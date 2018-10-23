import SyscoinRpcClient from '../src/index'

async function createClient(rpcConfigOptions) {
    let client = new SyscoinRpcClient(rpcConfigOptions);
    let chainVersionData = await client.blockchainServices.getChainVersion();
    if (chainVersionData.chainVersion !== "regtest") {
        console.log(`Integration tests can only be run on regtest; this chain is running on '${chainVersionData.chainVersion}'.  Exiting the process.`)
        process.exit()
    } 

    return client;
}

export { createClient };