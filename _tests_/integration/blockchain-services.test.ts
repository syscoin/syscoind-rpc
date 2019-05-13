//NB - The status of some of the functions exercised herein still needs to be defined.
//in some cases the services may not exist, may not work, or may not work as intended
//these tests should be iterated upon to the point where there is complete parity

import { createClient } from '../utilities';
import config from "../config";
import SyscoinRpcClient from "../../src";

const configOptions = config;

describe('Blockchain Services Tests', () => {
  let client: SyscoinRpcClient, bcInfo, firstBlock;

  beforeAll(async () => {
    console.log("cl");
    try {
      client = await createClient(configOptions);
      bcInfo = await client.blockchainServices.getBlockchainInfo()
      firstBlock = await client.blockchainServices.getBlockHash({height: 1});

      console.log("client:", client);
    } catch (e) {
      console.log("E-ERROR: " + e);
    }
  });

  it('getBestBlockHash returns correct type', async () => {
    let result = await client.blockchainServices.getBestBlockHash();
    expect(typeof result).toEqual('string');
  });

  //RE: try/catch - it's proven challenging to interogate the returned
  //object from ow validation, using a try catch makes the returned error
  //explicit - this is not ideal and should be refactored later
  describe('getBlock', () => {
    it('getBlock is consistent with getBlockHash', async () => {
      let result = await client.blockchainServices.getBlock({blockHash: firstBlock});
      expect(typeof result).toBe('object');
    });
  });

  it('getBlockchainInfo returns correct type', async () => {
    expect(typeof await client.blockchainServices.getBlockchainInfo()).toEqual('object');
  });

  it('getBlockCount returns correct type', async () => {
    expect(typeof await client.blockchainServices.getBlockCount()).toEqual('number');
  });

  describe('getBlockHash', () => {
    it('getBlock is consistent with getBlockHash', async () => {
      let res = await client.blockchainServices.getBlockHash({height: 1});
      expect(res).toMatch(new RegExp('^[a-zA-Z0-9_.-]*$'));
    });
  });

  it('getBlockHeader returns correct type', async () => {
    let result = await client.blockchainServices.getBlockHeader({blockHash: firstBlock});
    expect(typeof result).toBe('object');
  });

  describe('getChainTips', () => {
    it('getChainTips returns array of objects ', async () => {
      let result = await client.blockchainServices.getChainTips({});
      expect(Array.isArray(result)).toBe(true);
      expect(typeof result[0]).toBe('object');
      expect(result[0].height > 0).toBe(true);
    });
  });

  it('getDifficulty is consistent with getBlockchainInfo', async () => {
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

  // it('getMemPoolDescendants returns string array', async() => {
  //     //create a basic transaction
  //     let newAddress = await client.walletServices.getNewAddress();
  //     let txId = await client.walletServices.sendToAddress(newAddress, 10);
  //     let result = await client.blockchainServices.getMemPoolDescendants(txId);
  //     expect(Array.isArray(result)).toBe(true);
  //     expect(typeof result[0]).toBe('string');
  // });

  // it('getMemPoolEntry returns correct object', async() => {
  //     //create a basic transaction
  //     let newAddress = await client.walletServices.getNewAddress();
  //     let txId = await client.walletServices.sendToAddress(newAddress, 10);
  //     let result = await client.blockchainServices.getMemPoolEntry({txid: txId});
  //     expect(typeof result).toBe('object');
  //     expect(result.instantsend).toBe(false);
  // });

  it('getMemPoolInfo returns correct object', async () => {
    let result = await client.blockchainServices.getMemPoolInfo();
    expect(typeof result).toBe('object');
  });

  it('getRawMemPool returns string array', async () => {
    let result = await client.blockchainServices.getRawMemPool({});
    expect(Array.isArray(result)).toBe(true);
  });

  it('preciousBlock changes block', async () => {
    let result = await client.blockchainServices.preciousBlock({blockHash: firstBlock});

  });
});