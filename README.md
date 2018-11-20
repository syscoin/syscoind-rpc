# syscoin-js
syscoin-js is an updated Javascript SDK for the Syscoin cryptocurrency, allowing a javascript-based interface to perform actions with the RPC.  

## Table of contents 
- Overview

  - [Installation](#installation)
  - [Typescript](#typescript)

- Usage

  - [Client](#client)
  - [Root methods](#root-methods)
  - [Special methods](#special-methods)
  - [Decorations](#decorations)
  - [Services](#services)
    - [Addressindex](#addressindex)
    - [Blockchain](#blockchain)
    - [Diagnostic](#diagnostic)
    - [Estimate](#estimate)
    - [Generation](#generation)
    - [Governance](#governance)
    - [Masternode](#masternode)
    - [Messaging](#messaging)
    - [Mining](#mining)
    - [Network](#network)
    - [Synchronization](#synchronization)
    - [Transaction](#transaction)
    - [Utility](#utility)
    - [Wallet](#wallet)
      - [Alias](#alias)
      - [Asset](#asset)
      - [AssetAllocation](#assetallocation)
      - [Escrow](#escrow)
      - [Offer](#offer)


## Overview

### Installation

Install the package via `npm`:

```sh
npm install syscoin-js --save
```

### Typescript

A set of Typescript definitions for the entirety of the API has been provided in the distributable package.  If you are making edits to this library, please ensure that you also keep the Typescript definitions up to date.

## Usage

### Client

The client can be instantiated with the following call (defaults shown):

```
    let client = new SyscoinRpcClient({baseUrl="localhost",
                port=8368,
                username='',
                password='',
                useSsl=false,
                timeout=30000,
                customHttpAgent,
                loggerLevel=LOG_LEVELS.silent, 
                whitelist=[], 
                blacklist=[]}
```

1. `baseUrl="localhost"` - url for connecting.  

2. `port=8368` - port to use.  

3. `username=''` - user credentials.

4. `password=''` - password credentials.

5. `useSsl=false` - whether to use ssl 

6. `timeout=30000` - How long before the request times out in ms.

7. `customHttpAgent` - Optional custom http agent.

8. `loggerLevel=LOG_LEVELS.silent` - Sets logging behavior.  Default is to silent.  Levels are debug, error, info, silent, trace, and warn.  

9. `whitelist` - An array of RPC methods that you want logged - this will effectively "blacklist" all other methods from logging, leaving only the whitelist.  The presence of a non-empty whitelist overrides the blacklist below.

10. `blacklist` - An array of RPC methods that you do *not* want logged by the library.  As mentioned above, the blacklist is overridden by a non-empty whitelist; for example, setting the following:

    ~~~~
    whitelist=['getinfo']
    blacklist=['aliasnew']
    ~~~~

    results in only *getinfo* being logged and all other methods effectively blacklisted. 

### Root methods

### callRpc(methodName, args=[])

*callRpc* represents a direct call to the RPC with a string for a methodname and your arguments stored in an array, much like *bitcoinlib-js* and various other RPC based libraries do things.   This call allows for someone to make a call to the RPC without being constrainted by a method not being directly implemented by this SDK.   

Unlike other exposed SDK methods, this method does not validate any of the arguments passed to it and goes straight through to the RPC (which is then responsible for validating).  

callRpc is set up to return explicit errors in the event that:
a) it cannot successfully connect to the RPC
b) it can connect but cannot successfully authenticate

This call will throw a custom *RpcException* in the event of an error.  It will throw fairly explicit errors in the event of situations outside of the RPC's boundaries, including:

Connection Refused

Authorization Failed (could connect to the RPC, but the credentials supplied to the RPC are incorrect)

RPC method not found (the method asked for is unsupported by the RPC)

### Services

The client is segmented into several different "service areas" that mostly correspond 1 to 1 to the areas in the syscoin core help and syscoin.readme.io.   All service methods listed below:

* perform validation on the arguments they receive (a combination of type checking and format checking...for example, calling client.generationServices.generate(-5000) will throw an exception).
* on successful validation, format the arguments into an RPC call (or multiple RPC calls in certain situations), which is delegated to the *callRpc* method listed above

Certain services have special methods that fall into one of the following three categories:

- cleaner abstractions over the original RPC calls (sometimes represented by more than one method) - for example, *getAddressBalancesAsArray* and *getSummedAddressBalance*
- helper methods that package several RPC calls together or abstract a call slightly differently (e.g. *aliasExists*, *getBlockAtHeight*, *listAssetsAfterBlock*)
- methods that perform a special sort of processing/formatting outside of the RPC (e.g. *getAllRawRpcMethods*)

Typically, a call to the SDK will involve invoking the client, followed by the service subsection you wish to use, along with the method you would like to call.

For example, a call to the syscoind *getInfo* looks like:
```
let client = new SyscoinRpcClient(configOptions);
let info = await client.networkServices.getInfo();
```

All calls made are asynchronous by default, returning a promise and can be *await*ed.

Most methods in these services correspond as a 1 to 1 from the syscoin readme.io page.  Exceptions are listed in each subsection.

All service calls utilize Js destructured arguments, including those with only a single argument.

#### addressindexServices

~~~~
getAddressDeltas({addresses, startingBlockHeight, endingBlockHeight}: {addresses: Array<string>, startingBlockHeight?:number, endingBlockHeight?:number}): Promise<any>;

getAddressBalancesAsArray({addresses}: {addresses: Array<string>}): Promise<any>;

getSummedAddressBalance({addresses}: {addresses: Array<string>}): Promise<any>;

getAddressMempool({addresses}: {addresses: Array<string>}): Promise<any>;

getAddressTxids({addresses,startingBlockHeight,endingBlockHeight}: {addresses: Array<string>, startingBlockHeight?: number, endingBlockHeight?: number}): Promise<any>;

getAddressUtxos({addresses}: {addresses: Array<string>}): Promise<any>;
~~~~

*getAddressBalancesAsArray* and *getSummedAddressBalance* are abstractions overtop of the RPC *addressBalance*, which returns two different objects depending on parameters sent to it (?!)

#### blockchainServices

~~~~javascript
   getBestBlockHash(): Promise<any>;
   
   getBlock({blockHash}: {blockHash: string}): Promise<any>;
   
   getBlockVerbose({blockHash}: {blockHash: string}): Promise<any>;
   
   getBlockchainInfo(): Promise<any>;
   
   getBlockCount(): Promise<any>;
   
   getBlockHash({height}: {height: number}): Promise<any>;
   
   getBlockAtHeight({height}: {height: number}): Promise<any>;
   
   getBlockAtHeightVerbose({height}: {height: number}): Promise<any>;
   
   getBlockHashes({timestampHigh, timestampLow} :
            {timestampHigh: number, timestampLow: number}): Promise<any>;
   
   getBlockHeader({hash}: {hash: string}): Promise<any>;
   
   getBlockHeaderVerbose({hash}: {hash: string}): Promise<any>;
   
   getBlockHeaders({hash, headerCount}: {hash: string, headerCount?: number}): Promise<any>;
   
   getBlockHeadersVerbose({hash, headerCount}: {hash: string, headerCount?: number}): Promise<any>;
   
   getChainTips({count, branchLength}: {count?: number, branchLength?: number}): Promise<any>;
   
   getChainVersion(): Promise<any>;
   
   getDifficulty(): Promise<any>;
   
   getMemPoolAncestors({txid}: {txid: string}): Promise<any>;
   
   getMemPoolAncestorsVerbose({txid}: {txid: string}): Promise<any>;
   
   getMemPoolDescendants({txid}: {txid: string}): Promise<any>;
   
   getMemPoolDescendantsVerbose({txid}: {txid: string}): Promise<any>;
   
   getMemPoolEntry({txid}: {txid: string}): Promise<any>;
   
   getMemPoolInfo(): Promise<any>;
   
   getRawMemPool(): Promise<any>;
   
   getRawMemPoolVerbose(): Promise<any>;
   
   getSpentInfo({txid, startingBlockHeight}: {txid: string, startingBlockHeight?:number}) : Promise<any>;
   
   getTxOut({txid, voutNumber, includeMempool}: {txid: string, voutNumber:number, includeMempool?: boolean}) : Promise<any>;
   
   getTxOutProof({txids, blockHash}: {txids: Array<string>, blockHash: string}): Promise<any>;
   
   getUnspentTxOutputSetInfo() : Promise<any>;
   
   getSuperBlockBudget({index}: {index: string|number}) : Promise<any>;
   
   preciousBlock({blockHash}: {blockHash:string}) : Promise<any>;
   
   pruneBlockchain({blockHeight}: {blockHeight:number}) : Promise<any>;
   
   verifyChain({thoroughnessLevel, numberOfBlocksToCheck}: 
        {thoroughnessLevel?:number,numberOfBlocksToCheck?:number}) : Promise<any>;
   
   verifyTxOutProof({proof}: {proof: string}) : Promise<any>;
   
   verifyTxOut({txids, blockHash}: {txids:Array<string>, blockHash:string}) : Promise<any>;
~~~~

The majority of the methods with an *xxVerbose* method indicate a situation where the RPC returned two different argument formats depending on whether "verbose" was passed as a flag. (!?).  The only exception to the above in *blockchainServices* is the pair *getBlockAtHeight* and *getBlockAtHeightVerbose* which are abstractions to get a block directly by height argument.







### diagnosticServices.getAllRawRpcMethods

This call retrieves the contents of the syscoind 'help' and formats it into a JSON array with the format of 
```
[
  {
    methodName='my method name',
    arguments='string representation of those arguments'
]
```

so as to provide the consumer with a way to determine what methods are supported in their current instance of syscoind.  

### Methods in the RPC that return different types depending on arguments

Several methods in the RPC return completely different objects based on the presence of a boolean parameter.  As this is not generally considered maintainable software practice, syscoin-js creates abstractions over top of these RPC methods and has a function per object type returned.  

For instance, the direct RPC getaddressbalance call has a second argument called "separated_output".  If this is set to true it returns an array of objects.  If this is set to false, it returns a single object.  Rather than force the end user to deal with this knowledge, the SDK exposes *two* methods:

```
client.addressIndexServices.getAddressBalancesAsArray(addresses)
client.addressIndexServices.getSummedAddressBalance(addresses)
```

Likewise with any methods in the RPC that have a 'verbose' boolean parameter that changes the output format, the SDK represents these as two different methods, e.g. getMempoolAncestors and getMempoolAncestorsVerbose.  

### Helper methods with no corresponding RPC call

There are several calls within the SDK that do not correspond directly to an RPC method but have been added for convenience or readability.  These include the following:

* blockchainServices.getBlockAtHeight(height) and blockchainServices.getBlockAtHeightVerbose(height)
* mixingServices.resetMixing,startMixing,stopMixing (these are abstractions over the RPC's 'privatesend')
* networkServices.xxxNode actions (addNode, banNode, etc - these are abstractions over the RPC's 'addnode' to more clearly indicate the behavior)
* synchronizationServices.resetSync,status,updateToNextStep - these are abstractions over the RPC's 'msync'
* transactionServices.getRawTransaction(txId)
* transactionServices.getRawTransactionVerbose(txId)
* walletServices.alias.listAfterBlock(blockNumber) - this retrieves all aliases added to the system after a certain block height
* The same as the above, but for the other Syscoin domain objects (asset, assetAllocation, certificate, escrow, offer)
* walletServices.getWalletLoadPercentage() - due to a quirk in how the RPC handles communication of wallet percentage, this is an explicit abstraction that will either return the % load of the wallet or 100% if loaded.

## Method parity
There is an object in syscoin-js called SyscoinParityRegistry.  This class runs against the core RPC, attempts to check its internal registry to determine whether or not all methods in the RPC are 'covered' by one or more methods in the SDK, and returns the following information:
`
{
  coreMethodCount: // count of all methods exposed in the RPC as determined by the 'help',
  registryMapCount: // count of all registry entries (expected to equal coreMethodCount),
  percentageCoverage: // SDK coverage of the RPC methods
  missingMethods: // an array containing all RPC methods that do not have a corresponding mapped entry in the SDK
}
`
One of the integration tests in syscoin-js looks explicitly for parity to be at 100% and will fail if the parity check gives less.  This allows a user of the library to check coverage against the version of the syscoind core they are using.  


## Contributing

syscoin-js is under (a license to be determined).  Pull requests are welcomed.  A PR should ideally contain:
* only one change per PR (i.e. a new helper method, a change to an existing one)
* either changes to and/or (preferably) a new integration test (see below)

It's heavily recommended to be running the syscoin-integration tests against syscoin-docker.  Contributions that do not have accompanying unit / integration tests need an appropriate justification as to their absence (for example, setting up masternode integration tests is inordinately complicated for the ROI received, so this library eschews them). 

Please ensure that new methods also are added into the parity registry check so as to keep it up to date. 





## Testing 

syscoin-js uses jest as its testing library of choice, along with a dockerized container running syscoind set to regtest.  Of note is that the tests will *automatically fail and exit* if the environment being tested against is set to anything other than regtest.  If you decide to change this behavior, you do so at your own risk.  PRs where this behavior is disabled will be rejected.


### Pre-requisites for docker testing.
1. Install latest docker engine (which comes with docker-compose)
https://docs.docker.com/
2. Start the docker engine
3. Confirm docker and docker-compose have installed successfully with `docker -v` and `docker-compose -v` (in terminal)

### Starting the tests
1. Start docker engine
2. Make sure the port `8336` is free (or change the mapping port in docker-compose.yml `- 8336:8368` )
3. Run `npm run testdocker`

docker-compose will take a few minutes the first time you run.  On consecutive starts, it will begin almost immediately (or should :) )   

### Expected output
```
syscoin-js_app_1 exited with code 0  
Aborting on container exit...
Stopping syscoin-js_syscoin_1 ... done
Removing syscoin-js_app_1     ... done
Removing syscoin-js_syscoin_1 ... done
Removing network syscoin-js_syscoin
```

Exit code and conatiner/network name may vary.

### Troubleshooting
If for some reason the docker-compose does't close as expected it might leak the containers and network. Try running `docker-compose down -v` in the project folder before restarting the process.


### BTS (Important)
- The docker-compose.yml file uses two containers: 
    - [syscoin-docker](https://github.com/justicegray/syscoin-docker) (dockerized image for syscoind for regtest)
    - Node 8.12.0 (runs test cases inside a separate container)
- The syscoin-docker container starts directly with **100%** progress (of syscoind binary; with pre-loaded regtest (with fresh/empty data)) to avoid any delay in running test cases or any potential error.
- syscoin-docker is using a custom network 172.100.0.0/16 with gateway [172.100.0.1](https://github.com/justicegray/syscoin-docker/blob/master/syscoincore/syscoin.conf#L6), so we configured our docker-compose.yml with the same network. Check this [link](https://github.com/justicegray/syscoin-docker#background) for more info on syscoin-docker network configuration.
