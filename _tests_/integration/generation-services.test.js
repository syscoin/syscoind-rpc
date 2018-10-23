import {createClient} from '../utilities';
import config from "../config";

const configOptions = config;

describe('Generation Services Tests', () => {
    let client, address, balanceBefore, balanceAfter;
    const blocksToGenerate = 1, regExpHash = '^[a-zA-Z0-9_.-]*$';

    beforeAll(async() => {
       client = await createClient(configOptions);
       address = await client.walletServices.getNewAddress();
    });

    it('generate', async() => {
        let block = await client.generationServices.generate({numberOfBlocks: blocksToGenerate});
        expect(block[0]).toMatch(new RegExp(regExpHash));
    });

    it('generate increases wallet balance', async() => {
        balanceBefore = await client.networkServices.getInfo();
        await client.generationServices.generate({numberOfBlocks: blocksToGenerate});
        balanceAfter = await client.networkServices.getInfo();
        expect(balanceAfter.balance).toBeGreaterThan(balanceBefore.balance);
    });

    it('generateToAddress', async() => {
        let block = await client.generationServices.generateToAddress({numberOfBlocks: 1, address: address});
        expect(block[0]).toMatch(new RegExp(regExpHash));
    });

    it('generateToAddress increases wallet balance', async() => {
        balanceBefore = await client.addressIndexServices.getSummedAddressBalance({address: address});
        await client.generationServices.generateToAddress({numberOfBlocks: blocksToGenerate, address: address});
        balanceAfter = await client.addressIndexServices.getSummedAddressBalance({address: address});
        expect(balanceAfter.balance).toBeGreaterThan(balanceBefore.balance);
    });
})