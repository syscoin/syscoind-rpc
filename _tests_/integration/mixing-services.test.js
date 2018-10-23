import { createClient } from '../utilities';
import config from "../config";

const configOptions = config;

describe('Mixing Services Tests', () => {
    let client;

    beforeAll(async () => {
        client = await createClient(configOptions);
    });

    it(`Should get 'Mixing was reset' when you perform a Mixing Reset`, async () => {
        const response = await client.mixingServices.resetMixing();
        expect(response).toEqual('Mixing was reset');
    });


    it.skip(`Should get 'Mixing was started' when you perform a Mixing Start`, async () => {
        const response = await client.mixingServices.startMixing();
        // This command does not seem to work at core level yet
    });

    it(`Should get 'Mixing was stopped' when you perform a Mixing Stop`, async () => {
        const response = await client.mixingServices.stopMixing();
        expect(response).toEqual('Mixing was stopped');
    });
})