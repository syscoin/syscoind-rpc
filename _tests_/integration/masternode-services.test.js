import { createClient } from '../utilities';
import config from "../config";

describe('Masternode Services Tests', () => {
    let client;
    const testName = 'test-name';
    const hashRegExp = '^[a-zA-Z0-9_.-]*$';
    const unknown = 'unknown';

    const malformedMessage = '0200000003280217c09851808f';
    const messageDecodeFailedResponse = {
        code: -22,
        message: 'Masternode broadcast message decode failed'
    };

    beforeAll(async () => {
        client = await createClient(config);
    });

    it('broadcastByAssignedName: Could not find name', async () => {
        const expected = {
            errorMessage: 'Could not find name in config. Verify with list-conf.',
            name: testName,
            result: 'not found',
        }
        let response = await client.masternodeServices.broadcastByAssignedName(testName);
        expect(response).toEqual(expected);
    });

    it('broadcastForAllMasternodes', async () => {
        const expected = {
            detail: {},
            hex: '00',
            overall: 'Successfully created broadcast messages for 0 masternodes, failed to create 0, total 0'
        }
        let response = await client.masternodeServices.broadcastForAllMasternodes();
        expect(response).toEqual(expected);
    });

    it('count', async () => {
        const expected = {
            total: 0,
            ps_compatible: 0,
            enabled: 0,
            qualify: 0
        }
        let response = await client.masternodeServices.count();
        expect(response).toEqual(expected);
    });

    it('decodeMessage: message decode failed', async () => {
        let response = await client.masternodeServices.decodeMessage(malformedMessage);
        expect(response).toEqual(messageDecodeFailedResponse);
    });

    it('generatePrivateKey', async () => {
        let response = await client.masternodeServices.generatePrivateKey();
        expect(typeof response).toBe('string');
        expect(response).toMatch(new RegExp(hashRegExp));
        expect(response).toHaveLength(51);

    });

    it('getConfiguration', async () => {
        let response = await client.masternodeServices.getConfiguration();
        expect(response).toEqual({});
    });

    it('getCurrentMasternodeWinner: unknown', async () => {
        let response = await client.masternodeServices.getCurrentMasternodeWinner();
        expect(response).toEqual(unknown);
    });

    it('initialize: Could not find name', async () => {
        const expected = {
            errorMessage: 'Could not find name in config. Verify with list-conf.',
            name: testName,
            result: 'failed',
        }
        let response = await client.masternodeServices.initialize(testName);
        expect(response).toEqual(expected);
    });

    it('List: activeSeconds', async () => {
        let response = await client.masternodeServices.list.activeSeconds();
        expect(response).toEqual({});
    });

    it('List: address', async () => {
        let response = await client.masternodeServices.list.address();
        expect(response).toEqual({});
    });

    it('List: daemon', async () => {
        let response = await client.masternodeServices.list.daemon();
        expect(response).toEqual({});
    });

    it('List: info', async () => {
        let response = await client.masternodeServices.list.info();
        expect(response).toEqual({});
    });

    it('List: json', async () => {
        let response = await client.masternodeServices.list.json();
        expect(response).toEqual({});
    });

    it('List: lastPaidBlock', async () => {
        let response = await client.masternodeServices.list.lastPaidBlock();
        expect(response).toEqual({});
    });

    it('List: lastPaidTime', async () => {
        let response = await client.masternodeServices.list.lastPaidTime();
        expect(response).toEqual({});
    });

    it('List: lastSeen', async () => {
        let response = await client.masternodeServices.list.lastSeen();
        expect(response).toEqual({});
    });

    it('List: payee', async () => {
        let response = await client.masternodeServices.list.payee();
        expect(response).toEqual({});
    });

    it('List: protocol', async () => {
        let response = await client.masternodeServices.list.protocol();
        expect(response).toEqual({});
    });

    it('List: pubkey', async () => {
        let response = await client.masternodeServices.list.pubkey();
        expect(response).toEqual({});
    });

    it('List: rank', async () => {
        let response = await client.masternodeServices.list.rank();
        expect(response).toEqual({});
    });

    it('List: sentinel', async () => {
        let response = await client.masternodeServices.list.sentinel();
        expect(response).toEqual({});
    });

    it('List: status', async () => {
        let response = await client.masternodeServices.list.status();
        expect(response).toEqual({});
    });

    it('List: full', async () => {
        let response = await client.masternodeServices.list.full();
        expect(response).toEqual({});
    });

    it('outputs', async () => {
        let response = await client.masternodeServices.outputs();
        expect(response).toEqual({});
    });

    it('relayMessage: message decode failed', async () => {
        let response = await client.masternodeServices.relayMessage(malformedMessage);
        expect(response).toEqual(messageDecodeFailedResponse);
    });

    it('start', async () => {
        const expected = {
            detail: {},
            overall: 'Successfully started 0 masternodes, failed to start 0, total 0'
        };
        let response = await client.masternodeServices.start('all');
        expect(response).toEqual(expected);
    });

    it('status: not a masternode', async () => {
        const expected = {
            code: -32603,
            message: 'This is not a masternode'
        };
        let response = await client.masternodeServices.status();
        expect(response).toMatchObject(expected);
    });

    it('winner: unknown', async () => {
        let response = await client.masternodeServices.winner();
        expect(response).toEqual(unknown);
    });

    it('winners', async () => {
        let response = await client.masternodeServices.winners();
        expect(typeof response).toBe('object');
    });

});