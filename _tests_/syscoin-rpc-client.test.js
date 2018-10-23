import * as util from 'util' // has no default export;
import SyscoinParityRegistry from '../src/syscoin-rpc-client-parity-registry';
import {createClient} from './utilities';
import config from "./config";

// Justice client
const configOptions = config;

describe('Core Parity', () => {
    let client, parityRegistry;
    
    beforeAll(async() => {
        client = await createClient(configOptions);
        parityRegistry = new SyscoinParityRegistry(client);
    });

    it('is at 100%', async() => {
        let parityCheck = parityRegistry.getParityCheck();
        expect(parityCheck.percentageCoverage).toBe(100);
    });
})

describe('Network Services', () => {
    let client, stateData, netData, chainVersionData;

    beforeAll( async() => {
            client = await createClient(configOptions);
            stateData = await client.getInfo();
            netData = await client.networkServices.getNetworkInfo();
            chainVersionData = await client.blockchainServices.getChainVersion();
    });

    it('Syscoind is running on regtest', async() => {
        expect(chainVersionData.chainVersion).toEqual("regtest");
    });

    it('Wallet running test cases has sufficient balance to run test suite', () => {
       expect(stateData.balance).toBeGreaterThan(10);
    });

    it('Syscoind is running on version 3.0.6.2', async() => {
        expect(stateData.version).toEqual("3.0.6.2");
    });

    it('Current block height is not zero', async() => {
        expect(stateData.blocks).toBeGreaterThan(0);
    });

    it('Testnet has at least one active node', async() => {
       expect(stateData.connections).toEqual(0);
    });

    it('getInfo and getNetworkInfo return consistent protocol version', async() => {
       expect(stateData.protocolversion).toEqual(netData.protocolversion);
    });

    it('getInfo and getNetworkInfo return consistent number of connections', async() => {
        expect(stateData.connections).toEqual(netData.connections);
    });

    it('getInfo and getConnectionCount return consistent number of connections', async() => {
        let connectionCount = await client.networkServices.getConnectionCount();
        expect(connectionCount.result).toEqual(stateData.connections);
    });


});

describe('Alias Services', () => {
    let client, aliasList, testAlias, testAlias_id;
    let newAliasId;

    beforeAll( async() => {
        try {
            client = await createClient(configOptions);
            aliasList = await client.walletServices.alias.list();
            testAlias = aliasList[Object.keys(aliasList)[0]];
            testAlias_id = aliasList[Object.keys(aliasList)[0]]._id;
            newAliasId = await client.walletServices.getNewAddress();
        } catch (e) {
            console.log("E-ERROR: " + e);
        }
    });

    it('At least one alias exists on network', async() => {
        expect(Object.keys(aliasList).length).toBeGreaterThan(0);
    });

    it('aliasinfo returns valid alias info', async() => {
        expect(await client.walletServices.alias.info({aliasName: testAlias_id})).toMatchObject(testAlias);
    });

    it('aliasbalance can succesfully query balance', async() => {
        let aliasBalance = await client.walletServices.alias.balance({aliasName: testAlias_id});
        expect(aliasBalance.balance).toBeGreaterThanOrEqual(0);
    });


    it('Can reserve alias - first half of the process to create an alias', async() => {
        let stepOne = await client.walletServices.alias.new(
            { aliasName: newAliasId, 
                publicValue: "", 
                acceptTransferFlags: 3, 
                expireTimeStamp: 1548184538, 
                address: "", 
                encryptionPrivateKey: "", 
                encryptionPublicKey: "", 
                witness: ""});
        let stepTwo = await client.walletServices.syscoinTxFund(stepOne);
        let stepThree = await client.transactionServices.signRawTransaction(stepTwo);
        let stepFour = await client.walletServices.syscoinSendRawTransaction(stepThree.hex);
        let aliasTransaction = await client.walletServices.getTransaction(stepFour.txid);
        await client.generationServices.generate(1);
        expect(aliasTransaction.trusted).toEqual(true);
    });

    it('Can create alias - second half of the process to create an alias', async() => {
        await client.generationServices.generate(1);
        let stepOne = await client.walletServices.alias.new({aliasName: newAliasId, 
            publicValue: "", 
            acceptTransferFlags: 3, 
            expireTimestamp: 1548184538, 
            address: "", 
            encryptionPrivateKey: "", 
            encryptionPublicKey: "", 
            witness: ""});
        let stepTwo = await client.walletServices.syscoinTxFund(stepOne);
        let stepThree = await client.transactionServices.signRawTransaction(stepTwo);
        let stepFour = await client.walletServices.syscoinSendRawTransaction(stepThree.hex);
        await client.generationServices.generate(1);
        let aliasInfo = await client.walletServices.alias.info({aliasName: newAliasId});
        await client.generationServices.generate(1);
        expect(aliasInfo._id).toEqual(newAliasId.toLowerCase());
    });
});

describe('Asset Services', () => {
    let client, assetList, testAsset, testAsset_id;

    beforeAll( async() => {
        try {
            client = await createClient(configOptions);            
            testAsset = assetList[Object.keys(assetList)[0]];
            testAsset_id = assetList[Object.keys(assetList)[0]]._id;

        } catch (e) {
            console.log("E-ERROR: " + e);
        }
    });

    it('At least one asset exists on network', async() => {
       expect(Object.keys(assetList).length).toBeGreaterThan(0);
    });

    it('assetinfo returns asset with inputs', async() => {
        expect(await client.walletServices.asset.info({asset:testAsset_id, getInputs:true}))
            .toMatchObject(testAsset);
    });

    it('assetinfo returns asset without inputs', async() => {
        expect(await client.walletServices.asset.info({asset: testAsset_id, getInputs: false}));
    });
});

describe('Offer Services', () => {
    let client, offerList, testOffer, testOffer_id;

    beforeAll( async() => {
        try {
            client = await createClient(configOptions);
            offerList = await client.walletServices.offer.list();
            testOffer = offerList[Object.keys(offerList)[0]];
            testOffer_id = offerList[Object.keys(offerList)[0]]._id;
        } catch (e) {
            console.log("E-ERROR: " + e);
        }
    });

    it('At least one offer exists on network', async() => {
        expect(Object.keys(offerList).length).toBeGreaterThan(0);
    });

    it('offerInfo returns valid offer info', async() => {
       expect(await client.walletServices.offerInfo(testOffer_id)).toMatchObject(testOffer);
    });
});

describe('Certificate Services', () => {
    let client, certList, testCert, testCert_id;

    beforeAll( async() => {
        try {
            client = await createClient(configOptions);
            certList = await client.walletServices.certificate.list();
            testCert = certList[Object.keys(certList)[0]];
            testCert_id = certList[Object.keys(certList)[0]]._id;
        } catch (e) {
            console.log("E-ERROR: " + e);
        }
    });

    it('At least one certificate exists on network', () => {
        expect(Object.keys(certList).length).toBeGreaterThan(0);
    });

    it('certInfo returns valid cert info', async() => {
       expect(await client.walletServices.certificate.info(testCert_id)).toMatchObject(testCert);
    });
});

describe('Blockchain Services', () => {
    let client, bcInfo, firstBlock;

    beforeAll( async() => {
        try {
            client = await createClient(configOptions);            
            bcInfo = await client.blockchainServices.getBlockchainInfo()
            firstBlock = await client.blockchainServices.getBlockHash(1);
        } catch (e) {
            console.log("E-ERROR: " + e);
        }
    });

    it('getDifficulty is consistent with getBlockchainInfo', async() => {
        expect(await client.blockchainServices.getDifficulty()).toEqual(bcInfo.difficulty);
    });

    it('getBestBlockHash is consistent with getBlockchainInfo', async() => {
       expect(await client.blockchainServices.getBestBlockHash()).toEqual(bcInfo.bestblockhash);
    });

    it('getBlockCount is consistent with getBlockchainInfo', async() => {
       expect(await client.blockchainServices.getBlockCount()).toEqual(bcInfo.blocks);
    });

    it('getBlock is consistent with getBlockHash', async() => {
       let getBlockHeight = await client.blockchainServices.getBlockVerbose(firstBlock);
       expect(getBlockHeight.height).toEqual(1);
    });
});

describe('Wallet Services', () => {
    let client, testAddress, walletInfo;
    const testAccount = "testAccount";

    beforeAll( async() => {
        try {
            client = await createClient(configOptions);           
            walletInfo = await client.walletServices.getWalletInfo();
            testAddress = await client.walletServices.getNewAddress();
        } catch (e) {
            console.log("E-ERROR: " + e);
        }
    });

    it('Wallet version is 3000000', async() => {
       expect(walletInfo.walletversion).toEqual(3000000);
    });

    it('syscoinListReceivedByAddress returns more than 1 result', async() => {
       let listLength = await client.walletServices.syscoinListReceivedByAddress();
        expect(Object.keys(listLength).length).toBeGreaterThan(0);
    });

    it('setAccount can set label', async() => {
       expect(await client.walletServices.setAccount(testAddress, testAccount));
    });

    it('getAccount returns correct account label', async() => {
       expect(await client.walletServices.getAccount(testAddress)).toEqual(testAccount);
    });

    it('getBalance returns a balance of 0 for testAddress', async() => {
       let balance = await client.walletServices.getBalance(testAddress);
       expect(balance.result).toEqual(0);
    });

    it('getUnconfirmedBalance returns 0', async() => {
       let balance = await client.walletServices.getUnconfirmedBalnce();
       expect(balance.result).toEqual(0);
    });

    it('getReceivedByAccount returns a balance of 0 for testAccount', async() => {
       let balance = await client.walletServices.getReceivedByAccount(testAccount);
       expect(balance.result).toEqual(0);
    });

    it('getReceivedByAddress returns a balance of 0 for testAddress', async() => {
       let balance = await client.walletServices.getReceivedByAddress(testAddress);
       expect(balance.result).toEqual(0);
    });

    it('setTxFee successfully sets transaction fee amount', async() => {
        expect(await client.walletServices.setTxFee("1")).toEqual(true);
    })
});
