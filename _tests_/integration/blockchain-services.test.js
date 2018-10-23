//NB - The status of some of the functions exercised herein still needs to be defined.
//in some cases the services may not exist, may not work, or may not work as intended
//these tests should be iterated upon to the point where there is complete parity

import {createClient} from '../utilities';
import config from "../config";

const configOptions = config;

describe('Blockchain Services Tests', () => {
    let client, bcInfo, firstBlock;

    beforeAll( async() => {
        try {
            client = await createClient(configOptions);            
            bcInfo = await client.blockchainServices.getBlockchainInfo()
            firstBlock = await client.blockchainServices.getBlockHash({height: 1});
        } catch (e) {
            console.log("E-ERROR: " + e);
        }
    });
    
    //RE: try/catch - it's proven challenging to interogate the returned
    //object from ow validation, using a try catch makes the returned error
    //explicit - this is not ideal and should be refactored later
    describe('getBlock', () => {
        it('getBlock is consistent with getBlockHash', async() => {
            let result = await client.blockchainServices.getBlock({blockHash: firstBlock});
            expect(typeof result).toBe('string');
        });
    });

    it('getBlockVerbose is consistent with getBlockHash', async() => {
        let result = await client.blockchainServices.getBlockVerbose({blockHash: firstBlock});
        expect(typeof result).toBe('object');
        expect(typeof result.height).toBe('number');
    });

    it('getBestBlockHash returns correct type', async() => {
        let result = await client.blockchainServices.getBestBlockHash();
        expect(typeof result).toEqual('string');
    });

    it('getBlockCount returns correct type', async() => {
        expect(typeof await client.blockchainServices.getBlockCount()).toEqual('number');
    });

    describe('getBlockHash', () => {
        it('getBlock is consistent with getBlockHash', async() => {
            let res = await client.blockchainServices.getBlockHash({height: 1});
            expect(res).toMatch(new RegExp('^[a-zA-Z0-9_.-]*$'));
        });
    });

    describe('getBlockAtHeight', () => {
        it('fails with block hash', async() => {
            let res = await client.blockchainServices.getBlockAtHeight({height: 30});
            expect(typeof res).toBe('string');
        });

        it('getBlockAtHeight is consistent with getBlock', async() => {
            let res = await client.blockchainServices.getBlock({blockHash: firstBlock});
            expect(await client.blockchainServices.getBlockAtHeight({height: 1})).toEqual(res);
        });

        it('getBlockAtHeightVerbose returns correct type', async() => {
            let res = await client.blockchainServices.getBlockAtHeight({height: 1});
            expect(typeof res).toBe('string');
        });
    });
    
    describe('getBlockAtHeightVerbose', () => {
        it('fails with block hash', async() => {
            let result = await client.blockchainServices.getBlockAtHeightVerbose({height: 30});
            expect(typeof result).toBe('object');
        });
        it('getBlockAtHeightVerbose returns correct type', async() => {
            var result = await client.blockchainServices.getBlockAtHeightVerbose({height: 1});
            expect(typeof result).toBe('object');
        });
    });

    describe('getBlockHashes', () => {
        it('getBlockHashes returns array of hashes ', async() => {
            try {
                let low = 1539973195, high = 1539983202;
                let res = await client.blockchainServices.getBlockHashes({timestampHigh: high, timestampLow: low});
            } catch(e) {
                expect(e.code).toEqual(-5);
            }
        });
    });

    it('getBlockHeader returns correct type', async() => {
        let result = await client.blockchainServices.getBlockHeader({hash: firstBlock});
        expect(typeof result).toBe('string');
    });

    it('getBlockHeaderVerbose returns correct type', async() => {
        let result = await client.blockchainServices.getBlockHeaderVerbose({hash: firstBlock});
        expect(typeof result).toBe('object');
        expect(result.height > 0).toBe(true);
    });

    it('getBlockHeaders returns array of strings', async() => {
        let result = await client.blockchainServices.getBlockHeaders({hash: firstBlock});
        expect(Array.isArray(result)).toBe(true);
        expect(typeof result[0]).toBe('string');
    });

    it('getBlockHeadersVerbose returns array of objects', async() => {
        let result = await client.blockchainServices.getBlockHeadersVerbose({hash: firstBlock});
        expect(Array.isArray(result)).toBe(true);
        expect(typeof result[0]).toBe('object');
        expect(result[0].height > 0).toBe(true);
    });

    describe('getChainTips', () => {
        it('getChainTips returns array of objects ', async() => {
            let result = await client.blockchainServices.getChainTips();
            expect(Array.isArray(result)).toBe(true);
            expect(typeof result[0]).toBe('object');
            expect(result[0].height > 0).toBe(true);
        });
    });

    it('getChainVersion returns correct type', async() => {
        let result = await client.blockchainServices.getChainVersion();
        expect(typeof result.chainVersion).toBe('string');
    });

    it('getDifficulty is consistent with getBlockchainInfo', async() => {
        expect(await client.blockchainServices.getDifficulty()).toEqual(bcInfo.difficulty);
    });

    // it('getMemPoolAncestors returns string array', async() => {
    //     //create a basic transaction
    //     let newAddress = await client.walletServices.getNewAddress();
    //     let txId = await client.walletServices.sendToAddress(newAddress, 10);
    //     let result = await client.blockchainServices.getMemPoolAncestors(txId);
    //     expect(Array.isArray(result)).toBe(true);
    //     expect(result[0]).toBe('string');
    // });

    // it('getMemPoolAncestorsVerbose returns object array', async() => {
    //     //create a basic transaction
    //     let newAddress = await client.walletServices.getNewAddress();
    //     let txId = await client.walletServices.sendToAddress(newAddress, 10);
    //     let result = await client.blockchainServices.getMemPoolAncestorsVerbose(txId);
    //     expect(Array.isArray(result)).toBe(true);
    //     expect(typeof result[0]).toBe('object');
    //     expect(result[0].instantsend).toBe(false);
    // });

    // it('getMemPoolDescendants returns string array', async() => {
    //     //create a basic transaction
    //     let newAddress = await client.walletServices.getNewAddress();
    //     let txId = await client.walletServices.sendToAddress(newAddress, 10);
    //     let result = await client.blockchainServices.getMemPoolDescendants(txId);
    //     expect(Array.isArray(result)).toBe(true);
    //     expect(typeof result[0]).toBe('string');
    // });

    // it('getMemPoolDescendantsVerbose returns object array', async() => {
    //     //create a basic transaction
    //     let newAddress = await client.walletServices.getNewAddress();
    //     let txId = await client.walletServices.sendToAddress(newAddress, 10);
    //     let result = await client.blockchainServices.getMemPoolDescendantsVerbose(txId);
    //     expect(Array.isArray(result)).toBe(true);
    //     expect(typeof result[0]).toBe('object');
    //});

    it('getMemPoolEntry returns correct object', async() => {
        //create a basic transaction
        let newAddress = await client.walletServices.getNewAddress();
        let txId = await client.walletServices.sendToAddress(newAddress, 10);
        let result = await client.blockchainServices.getMemPoolEntry({txid: txId});
        expect(typeof result).toBe('object');
        expect(result.instantsend).toBe(false);
    });

    it('getmempoolinfo returns correct object', async() => {
        let result = await client.blockchainServices.getMemPoolInfo();
        expect(typeof result).toBe('object');
    });

    it('getRawMemPool returns string array', async() => {
        let result = await client.blockchainServices.getRawMemPool();
        expect(Array.isArray(result)).toBe(true);
    });

    // it('getRawMemPoolVerbose returns object array', async() => {
    //     let result = await client.blockchainServices.getRawMemPoolVerbose();
    //     expect(Array.isArray(result)).toBe(true);
    //     expect(typeof result[0]).toBe('object');
    //     expect(result[0].instantsend).toBe(false);
    // });

    // it('getSpentInfo returns transaction id and index', async() => {
    //     let result = await client.blockchainServices.getSpentInfo();

    // });

    // it('getTxOut returns transaction id and index', async() => {
    //     let result = await client.blockchainServices.getTxOut();

    // });

    // it('getTxOutProof returns transaction id and index', async() => {
    //     let result = await client.blockchainServices.getTxOutProof();

    // });

    it('getUnspentTxOutputSetInfo returns correct data', async() => {
        let result = await client.blockchainServices.getUnspentTxOutputSetInfo();
        expect(typeof result).toBe('object');
        expect(result.height > 0).toBe(true);
    });

    // it('getSuperBlockBudget returns correct data', async() => {
    //     let result = await client.blockchainServices.getSuperBlockBudget(10);
    //     
    // });

    // it('preciousBlock changes block', async() => {
    //     let result = await client.blockchainServices.preciousBlock(10);
    //     
    // });

    // it('pruneBlockchain prunes blockchain', async() => {
    // call getblockchaininfo before to get num blocks
    //     let result = await client.blockchainServices.pruneBlockchain(10);
    //     
    // });

    // it('verifyTxOutProof verifies the transaction proof', async() => {
    //     let result = await client.blockchainServices.verifyTxOutProof();
    //     
    // });
    
    // it('verifyTxOut verifies proof points to a transaction in a block', async() => {
    //     let result = await client.blockchainServices.verifyTxOut();
    //     
    // });

});