import {createClient} from '../utilities';
import config from "../config";

const configOptions = config;

describe('Address Index Service Tests', () => {
    let client, address;
    const blocksToGenerate = 1;

    beforeAll(async() => {
        client = await createClient(configOptions);
        address = await client.walletServices.getNewAddress();
        await client.generationServices.generateToAddress(blocksToGenerate, address);
    });

    it('getaddressdeltas', async() => {
        let res = await client.addressIndexServices.getAddressDeltas({addresses: address});
        expect(res[0].address).toEqual(address);
    });

    it('getAddressBalancesAsArray', async() => {
        let res = await client.addressIndexServices.getAddressBalancesAsArray({addresses: address});
        expect(res[0].balance).toBeGreaterThan(0);
    });

    it('getSummedAddressBalance', async() => {
        let res = await client.addressIndexServices.getSummedAddressBalance({addresses: address});
        expect(res.balance).toBeGreaterThan(0);
    });

    it('getAddressMempool', async() => {
        let res = await client.addressIndexServices.getAddressMempool({addresses: address});
        expect(res).toEqual([]);
    });

    it('getAddressTxids', async() => {
        let res = await client.addressIndexServices.getAddressTxids({addresses: address});
        expect(res[0]).toMatch(new RegExp('^[a-zA-Z0-9_.-]*$'));
    });

    it('getAddressUtxos', async() => {
        let res = await client.addressIndexServices.getAddressUtxos({addresses: address});
        expect(res[0].address).toEqual(address);
    });
})