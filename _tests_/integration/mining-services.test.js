import {createClient} from '../utilities';
import config from "../config";

const configOptions = config;

describe('Mining Services Tests', () => {
    let client, receivingAddress;
    const hashRegExp = '^[a-zA-Z0-9_.-]*$', hexRegExp = '^[a-z0-9]*$';

    beforeAll(async() => {
        client =  await createClient(configOptions);
        receivingAddress = await client.walletServices.getNewAddress();
    });

    describe('createAuxBlock', () => {
        let auxBlock;

        beforeAll(async() => {
            auxBlock = await client.miningServices.createAuxBlock(receivingAddress);
        });

        it('hash', async() => {
            expect(auxBlock.hash).toMatch(new RegExp(hashRegExp));
        });

        it('chaindid', async() => {
            expect(auxBlock.chainid).toBeGreaterThanOrEqual(0);
        });

        it('previousblockhash', async() => {
            expect(auxBlock.previousblockhash).toMatch(new RegExp(hashRegExp));
        });

        it('coinbasevalue', async() => {
            expect(auxBlock.coinbasevalue).toBeGreaterThanOrEqual(0);
        });

        it('bits', async() => {
            expect(auxBlock.bits).toMatch(new RegExp(hexRegExp));
        });

        it('_target', async() => {
            expect(auxBlock._target).toMatch(new RegExp(hexRegExp));
        });
    });

    describe('getAuxBlock', () => {
        let auxBlock;

        beforeAll(async() => {
            auxBlock = await client.miningServices.getAuxBlock();
        });

        it('hash', async() => {
            expect(auxBlock.hash).toMatch(new RegExp(hashRegExp));
        });

        it('chaindid', async() => {
            expect(auxBlock.chainid).toBeGreaterThanOrEqual(0);
        });

        it('previousblockhash', async() => {
            expect(auxBlock.previousblockhash).toMatch(new RegExp(hashRegExp));
        });

        it('coinbasevalue', async() => {
            expect(auxBlock.coinbasevalue).toBeGreaterThanOrEqual(0);
        });

        it('bits', async() => {
            expect(auxBlock.bits).toMatch(new RegExp(hexRegExp));
        });

        it('_target', async() => {
            expect(auxBlock._target).toMatch(new RegExp(hexRegExp));
        });
    });

    it('getBlockTemplate', async() => {
        let res = await client.miningServices.getBlockTemplate();
        expect(res).toMatchObject({ code: -10,
            message: 'Syscoin Core is downloading masternode winners...' });
    });

    describe('getMiningInfo', () => {
        let info;

        beforeAll(async() => {
            info = await client.miningServices.getMiningInfo();
        });

        it('blocks', async() => {
            expect(info.blocks).toBeGreaterThanOrEqual(0);
        });

        it('currentblocksize', async() => {
            expect(info.currentblocksize).toBeGreaterThanOrEqual(0);
        });

        it('currentblocktx', async() => {
            expect(info.currentblocktx).toBeGreaterThanOrEqual(0);
        });

        it('difficulty', async() => {
            expect(info.difficulty).toBeGreaterThanOrEqual(0);
        });

        it('errors', async() => {
            expect(info.errors).toEqual('');
        });

        it('networkhashps', async() => {
            expect(info.networkhashps).toBeGreaterThanOrEqual(0);
        });

        it('pooledtx', async() => {
            expect(info.pooledtx).toBeGreaterThanOrEqual(0);
        });

        it('chain', async() => {
            expect(info.chain).toEqual('regtest');
        });
    });

    describe('getNetworkHashesPerSecond', () => {
        it('no args', async() => {
            let res = await client.miningServices.getNetworkHashesPerSecond();
            expect(res).toBeGreaterThanOrEqual(0);
        });

        it('with nBlocks arg', async() => {
            let res = await client.miningServices.getNetworkHashesPerSecond(127);
            expect(res).toBeGreaterThanOrEqual(0);
        });

        it('with nBlocks & height args', async() => {
            let res = await client.miningServices.getNetworkHashesPerSecond(127, 10);
            expect(res).toBeGreaterThanOrEqual(0);
        });

        it('with nBlocks=0 & height=0 args', async() => {
            let res = await client.miningServices.getNetworkHashesPerSecond(0, 0);
            expect(res.result).toEqual(0);
        });
    });

    describe('prioritiseTransaction', () => {
        let tx;
        const priorityDelta = 0.0, feeDelta = 1000, blockToGenerate = 101, fundsToSend=1;

        beforeAll(async() => {
            let address = await client.walletServices.getNewAddress();
            await client.generationServices.generate(blockToGenerate);
            tx = await client.walletServices.sendToAddress(address, fundsToSend);
        });

        it('prioritiseTransaction', async() => {
            let res = await client.miningServices.prioritiseTransaction(tx, priorityDelta, feeDelta);
            expect(res).toEqual(true);
        });
    });

    describe('submitAuxBlock', () => {
        let blockHash;
        const pow = "ca625ada60ea25fe9d6c1f068a0406c491159108304e80d05dc3b9b7084bf72b"; // This is an arbitrary hash

        beforeAll(async() => {
            let auxBlock = await client.miningServices.getAuxBlock();
            blockHash = auxBlock.hash;
        });

        it('submitAuxBlock', async() => {
            const response = { code: -1, message: 'CDataStream::read(): end of data' }
            let res = await client.miningServices.submitAuxBlock(blockHash, pow);
            expect(JSON.stringify(res)).toContain(JSON.stringify(response));
        });
    });

    describe('submitBlock', () => {
        const hash = "ca625ada60ea25fe9d6c1f068a0406c491159108304e80d05dc3b9b7084bf72b"; // This is an arbitrary hash

        it('submitBlock', async() => {
            let res = await client.miningServices.submitBlock(hash);
            expect(res).toMatchObject({ code: -22, message: 'Block decode failed' });
        });
    });

    describe('getPoolInfo', () => {
        let info;

        beforeAll(async() => {
            info = await client.miningServices.getPoolInfo();
        });

        it('state', async() => {
            expect(info.state).toEqual('IDLE');
        });

        it('mixing_mode', async() => {
            expect(info.mixing_mode).toEqual('normal');
        });

        it('queue', async() => {
            expect(info.queue).toEqual(0);
        });

        it('entries', async() => {
            expect(info.entries).toEqual(0);
        });

        it('status', async() => {
            expect(info.status).toEqual('');
        });

        it('keys_left', async() => {
            expect(info.keys_left).toBeGreaterThanOrEqual(0);
        });

        it('warnings', async() => {
            expect(info.warnings).toEqual('');
        });
    });
});
