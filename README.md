# syscoin-js
syscoin-js is an updated Javascript SDK for the Syscoin cryptocurrency, allowing a javascript-based interface to perform actions with the RPC.  

## Table of contents 
- Overview

  - [Installation](#installation)
  - [Typescript](#typescript)

- [Pull requests](#pull-requests)

- [Usage](#usage)

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

- [Method parity checking](#method-parity-checking)

- [Testing](#testing)


## Overview

### Installation

Install the package via `npm`:

```sh
npm install syscoin-js --save
```

### Typescript

A set of Typescript definitions for the entirety of the API has been provided in the distributable package.  If you are making edits to this library, please ensure that you also keep the Typescript definitions up to date.

## Contributing

syscoin-js is under (a license to be determined).  Pull requests are welcomed.  A PR should ideally contain:

- only one change per PR (i.e. a new helper method, a change to an existing one)
- either changes to and/or (preferably) a new integration test (see below)

It's heavily recommended to be running the syscoin-integration tests against syscoin-docker.  Contributions that do not have accompanying unit / integration tests need an appropriate justification as to their absence (for example, setting up masternode integration tests is inordinately complicated for the ROI received, so this library eschews them). 

Please ensure that new methods also are added into the parity registry check so as to keep it up to date. 

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

### Decorations

Each service method in *syscoin-js* is decorated with an identifier indicating whether it would logically correspond to an HTTP GET or POST method if it were exposed (as the RPC treats every HTTP call as a POST, which is semantically incorrect by REST standards).  This decoration does not impact a consumer, but if you were building a library that generates endpoints on the basis of syscoin-js methods, you can read the *httpMethod* property attached to the method in question to find out what it would be.  

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

#### diagnosticServices

diagnosticServices is not a listed division in readme.io but has been added in the SDK for convenience.  

~~~~
getAllRawRpcMethods(): Promise<Array<{method:string,arguments:string}>>;
    helpForRpcCommand({commandName}:{commandName:string}): Promise<any>;
~~~~

*getAllRawRpcMethods* retrieves the contents of syscoind 'help' and formats it into a JSON array as described above.  This provides the consumer a way to get the full list of methods supported in the instance of syscoind that's been activated, along with the suggested RPC arguments for that method.

#### estimateServices 

```
estimateFee({numberOfBlocks}: {numberOfBlocks:number}) : Promise<any>;

estimatePriority({numberOfBlocks}: {numberOfBlocks:number}): Promise<any>; 

estimateSmartFee({numberOfBlocks}: {numberOfBlocks:number}): Promise<any>;

estimateSmartPriority({numberOfBlocks}: {numberOfBlocks:number}): Promise<any>;
   aliasNewEstimatedFee({aliasName,publicValue,transfersFlag,expireTimestamp,address,encPrivateKey,encPublicKey,witness}:
            {aliasName: string, publicValue: string, transfersFlag: number, expireTimestamp: number,
            address: string, encPrivateKey: string, encPublicKey: string, witness: string}) : Promise<any>;
            
aliasUpdateEstimatedFee({aliasName, publicValue, address, transfersFlag, expireTimestamp, encPrivateKey, encPublicKey, witness}: {aliasName: string, publicValue: string, address: string, transfersFlag: number, expireTimestamp: number, encPrivateKey: string, encPublicKey: string, witness: string}): Promise<any>;

```

#### generationServices

~~~~
    generate({numberOfBlocks, maxTries}: {numberOfBlocks:number,maxTries?:number}) : Promise<any>;
    
    generateToAddress({numberOfBlocks, address, maxTries}: {numberOfBlocks:number, address:string, maxTries?:number}) : Promise<any>;
~~~~

#### governanceServices

Most of the calls in *governanceServices* are abstractions around the RPC's *gobject* call. 

~~~~
checkProposal({hex}: {hex: string}) : Promise<any>;

count({format} : {format:string}) : Promise<any>;

deserializeGovernanceObject({dataHex} : {dataHex: string}) : Promise<any>;

differencesSinceLastComparison() : Promise<any>;

getByHash({hash} : {hash:string}) : Promise<any>;

getGovernanceInfo() : Promise<any>;

getSuperblockBudget({blockIndex} : {blockIndex:number}) : Promise<any>;

getCurrentVotes(): Promise<any>;

getVotes({hash}: {hash:string}): Promise<any>;

listAll() : Promise<any>;

listValid() : Promise<any>; 

listFunding(): Promise<any>;

listDelete(): Promise<any>;

listEndorsed(): Promise<any>;

prepareGovernanceObject({parentHash,revision,time,dataHex}: {parentHash:string, revision:number, time:number, dataHex:string}): Promise<any>;

submitGovernanceObject({parentHash,revision,time,dataHex,feeTxId} : {parentHash:string, revision: number, time: number, dataHex: string, feeTxId: string}) : Promise<any>;

governanceVote() : Promise<any>;
    
governanceVoteByName(): Promise<any>;

governanceVoteMany(): Promise<any>;

governanceVoteRaw({masterNodeTxHash,
        masterNodeTxIndex,
        governanceHash,
        voteSignal,
        vote,
        time,
        voteSignature}: {masterNodeTxHash:string,masterNodeTxIndex:number,governanceHash:string, voteSignal: string, vote: string, time: number, voteSignature: string}): Promise<any>;
~~~~

#### masternodeServices

The majority of calls in *masternodeServices* are delegations to the RPC calls "masternode", "masternodebroadcast", and "masternodelist", done up in a more discoverable/abstracted format.

~~~~
broadcastByAssignedName({name}: {name:string}) : Promise<any>;
broadcastForAllMasternodes(): Promise<any>;
count({format}: {format:string}): Promise<any>;
decodeMessage({message}: {message:string}): Promise<any>;
generatePrivateKey(): Promise<any>;
getConfiguration(): Promise<any>;
getCurrentMasternodeWinner(): Promise<any>;
initialize({name}:{name:string}): Promise<any>;
list: {
	activeSeconds({filter}: {filter?:string}): Promise<any>;
	address({filter}: {filter?:string}): Promise<any>;
    daemon({filter}: {filter?:string}): Promise<any>;
    info({filter}: {filter?:string}): Promise<any>;
    json({filter}: {filter?:string}): Promise<any>;
    lastPaidBlock({filter}: {filter?:string}): Promise<any>;
    lastPaidTime({filter}: {filter?:string}): Promise<any>;
    lastSeen({filter}: {filter?:string}): Promise<any>;
    payee({filter}: {filter?:string}): Promise<any>;
    protocol({filter}: {filter?:string}): Promise<any>;
    pubkey({filter}: {filter?:string}): Promise<any>;
    rank({filter}: {filter?:string}): Promise<any>;
    sentinel({filter}: {filter?:string}): Promise<any>;
    status({filter}: {filter?:string}): Promise<any>;
    full({filter}: {filter?:string}): Promise<any>;
}
outputs() : Promise<any>;
relayMessage({msg}:{msg:string}): Promise<any>;
startAll(): Promise<any>;
startMissing(): Promise<any>;
startDisabled(): Promise<any>;
status(): Promise<any>;
winner(): Promise<any>;
winners(): Promise<any>;
masternodeList({mode,filter}: {mode:string,filter:string}): Promise<any>;
masternodeBroadcast({command, arg}: {command:string, arg:string}) : Promise<any>;
   
~~~~

#### messagingServices

~~~~
   signMessage({privateKey, message}: {privateKey: string, message:string}): Promise<any>;
   verifyMessage({address, signature, message}: {address: string, signature: string, message: string}): Promise<any>;
~~~~

#### miningServices

~~~~
createAuxBlock({address}: {address:string}): Promise<any>;

getAuxBlock({blockHash, auxPow}: {blockHash?:string,auxPow?:string}): Promise<any>;

getBlockTemplate({blockTemplate}: {blockTemplate?:string}): Promise<any>;

getMiningInfo(): Promise<any>;

getPoolInfo(): Promise<any>;

getNetworkHashesPerSecond({numberOfBlocks, blockHeight} : {numberOfBlocks:number, blockHeight:number}): Promise<any>;

prioritiseTransaction({txid,priorityDelta,feeDeltaInSatoshis}: {txid:string, priorityDelta:number,feeDeltaInSatoshis:number}): Promise<any>;

submitAuxBlock({blockHash,auxPow}: {blockHash:string,auxPow:string}): Promise<any>;

submitBlock({hexDataToSubmit}: {hexDataToSubmit:string}): Promise<any>;
~~~~



#### mixingServices

The calls in mixing services are more explicit commands for the 'privatesend' RPC call.

~~~~
resetMixing(): Promise<any>;
startMixing(): Promise<any>;
stopMixing(): Promise<any>;
~~~~

#### networkServices

~~~~
activateNetwork(): Promise<any>;

addNode({nodeAddress}: {nodeAddress:string}): Promise<any>;

aliasClearWhiteList({ownerAddress, witness}: {ownerAddress: string, witness:string}): Promise<any>;

banNodeForLengthOfTime({subnetOrIp, banTimeInSeconds}: {subnetOrIp: string, banTimeInSeconds:number}): Promise<any>;

banNodeUntilDate({subnetOrIp, banDateTimeEpoch}: {subnetOrIp:string, banDateTimeEpoch:number}): Promise<any>;

clearBannedIps(): Promise<any>;

deactivateNetwork(): Promise<any>;

disconnectNode({nodeAddress}: {nodeAddress: string}): Promise<any>;

getAddedNodeInfo({nodeAddress}: {nodeAddress: string}): Promise<any>;

getChainTxStats({nBlocks, blockHash}: {nBlocks?: number, blockHash?:string});

getConnectionCount(): Promise<any>;

getMemoryInfo(): Promise<any>;

getNetTotals(): Promise<any>;

getNetworkInfo(): Promise<any>;

getPeerInfo(): Promise<any>;

getInfo() : Promise<any>;

listBannedIps(): Promise<any>;

ping(): Promise<any>;

removeNode({nodeAddress}: {nodeAddress:string}): Promise<any>; 

sentinelPing({version} : {version: string}): Promise<any>;

sporks: Sporks;

stop(): Promise<any>;

tryToConnectToNode({nodeAddress}: {nodeAddress:string}): Promise<any>;

unbanNode({subnetOrIp}: {subnetOrIp:string}): Promise<any>;
~~~~

All methods  with *node* in the name (unban, ban, tryToConnect, etc) are abstractions around the confusingly named "addnode" method in the RPC.

#### synchronizationServices

The methods in this service section are abstractions on top of the RPC 'msync' method.

~~~~
resetSync(): Promise<any>;
status(): Promise<any>;
updateToNextStep(): Promise<any>;
~~~~



#### transactionServices

~~~~
   createRawTransaction({inputs, outputs, lockTime}: {inputs:Array<string>, outputs:Array<string>, lockTime:number}): Promise<any>;
    decodeRawTransaction({hexString}: {hexString: string}): Promise<any>;
    decodeScript({hexString}: {hexString: string}): Promise<any>;
    fundRawTransaction({hexString, options}: {hexString: string, options: any}): Promise<any>;
    getRawTransaction({txId}: {txId:string}): Promise<any>;
    getRawTransactionVerbose({txId}: {txId:string}): Promise<any>;
    sendRawTransaction({hexString, allowHighFees,instantSend,bypassLimits}: {hexString:string, allowHighFees?:boolean,instantSend?:boolean,bypassLimits?:boolean}): Promise<any>;
    signRawTransaction({hexString, previousTransactionOutputs, privateKeys, signatureHashType}: 
        {hexString: string, previousTransactionOutputs?: Array<any>, privateKeys?: Array<string>, signatureHashType?: string})

~~~~

#### utilityServices

~~~~
createMultiSig({numberOfRequiredSignatures, keys}: {numberOfRequiredSignatures:number,keys:Array<string>}): Promise<any>;

validateAddress({address}: {address: string}): Promise<any>;

debug({category}: {category:string}): Promise<any>;

help({command}: {command:string}): Promise<any>;

tpsTestSetEnabled({enabled}: {enabled:boolean}): Promise<any>;

tpsTestAdd({startTime, rawTx}: {startTime:number,rawTx:Array<string>}): Promise<any>;
~~~~

## Method parity checking
There is an object in syscoin-js called *SyscoinParityRegistry*.  This class runs against the core RPC, attempts to check its internal registry to determine whether or not all methods in the RPC are 'covered' by one or more methods in the SDK, and returns the following information:

~~~~
{
  coreMethodCount: // count of all methods exposed in the RPC as determined by the 'help',
  registryMapCount: // count of all registry entries (expected to equal coreMethodCount),
  percentageCoverage: // SDK coverage of the RPC methods
  missingMethods: // an array containing all RPC methods that do not have a corresponding mapped entry in the SDK
}

~~~~



One of the integration tests in syscoin-js looks explicitly for parity to be at 100% and will fail if the parity check gives less.  This allows a user of the library to check coverage against the version of the syscoind core they are using.  

## Testing 

syscoin-js uses jest as its testing library of choice, along with a dockerized container running syscoind set to regtest.  Of note is that the tests will ***automatically fail and exit*** if the environment being tested against is set to anything other than regtest.  If you decide to change this behavior, you do so at your own risk.  PRs where this behavior is disabled will be rejected.

You do not need the docker image to be able to run your tests - you can also simply test against a node on your machine if so desired (with the environment set to regtest).


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
