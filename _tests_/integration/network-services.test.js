import {createClient} from '../utilities';
import config from "../config";

const configOptions = config;

describe('Networking Services Tests', () => {
    let client, localhost = '127.0.0.1', localhostSubnet = '127.0.0.1/32', epochDate = 32526020268;;

    beforeAll( async()=> {
        client = await createClient(configOptions);
    });

    describe('getInfo', () => {
        let info;

        beforeAll( async()=> {
            info = await client.networkServices.getInfo();
        });

        it('version', async() => {
           expect(info.version).toEqual('3.1.3.0');
        });

        it('dashversion', async() => {
           expect(info.dashversion).toEqual('0.12.3');
        });

        it('protocolversion', async() => {
           expect(info.protocolversion).toEqual(70225);
        });

        it('walletversion', async() => {
            expect(info.walletversion).toEqual(3000000);
        });

        it('balance', async() => {
            expect(info.balance).toBeGreaterThanOrEqual(0);
        });

        it('privatesend_balance', async() => {
            expect(info.privatesend_balance).toBeGreaterThanOrEqual(0);
        });

        it('blocks', async() => {
            expect(info.blocks).toBeGreaterThanOrEqual(0);
        });

        it('timeoffset', async() => {
            expect(info.timeoffset).toBeGreaterThanOrEqual(0);
        });

        it('connections', async() => {
            expect(info.connections).toBeGreaterThanOrEqual(0);
        });

        it('proxy', async() => {
            expect(info.proxy).toEqual("");
        });

        it('difficulty', async() => {
            expect(info.difficulty).toBeGreaterThanOrEqual(0);
        });

        it('testnet', async() => {
            expect(info.testnet).toEqual(false);
        });

        it('keypoololdest', async() => {
            expect(info.keypoololdest).toBeGreaterThanOrEqual(0);
        });

        it('keypoolsize', async() => {
            expect(info.keypoolsize).toBeGreaterThanOrEqual(0);
        });

        it('paytxfee', async() => {
            expect(info.paytxfee).toBeGreaterThanOrEqual(0);
        });

        it('relayfee', async() => {
            expect(info.relayfee).toBeGreaterThanOrEqual(0);
        });

        it('errors', async() => {
            expect(info.errors).toEqual("");
        });
    });

    describe('addNode', () => {
        // This test case calls addNode twice as there is no value return upon successful add
        // to determine if add was successful, one must attempt to add an already added node
        beforeAll(async() => {
            await client.networkServices.addNode({nodeAddress:localhost});
        });

        afterAll(async() => {
            await client.networkServices.removeNode({nodeAddress:localhost})
        });

        it('Should get an Error when try to add an existing node', async() => {
            let res  = await client.networkServices.addNode(localhost);
            expect(res).toMatchObject({ code: -23, message: 'Error: Node already added' });
        });

        it('Should get the IP the added node ', async() => {
            let res  = await client.networkServices.getAddedNodeInfo({nodeAddress:localhost});
            expect(res[0].addednode).toEqual(localhost);
        });
    });

    describe('getAddedNodeInfo', () => {
        let info, node;

        beforeAll(async() => {
           await client.networkServices.addNode({nodeAddress:localhost});
           info = await client.networkServices.getAddedNodeInfo();
           node = info[0];
        });

        it('addednode', async() => {
            expect(node.addednode).toMatch(new RegExp('^[0-9]*\.[0-9]*\.[0-9]*\.[0-9]*$'));
        });

        it('connected', async() => {
            expect(node.connected).toEqual(false);
        });

        it('address', async() => {
            expect(node.addresses).toEqual([]);
        });

        it('getAddedNodeInfo --successful lookup', async() => {
           let res = await client.networkServices.getAddedNodeInfo({nodeAddress: node.addednode});
           expect(res).toMatchObject([node]);
        });

        it('getAddedNodeInfo --unsuccessful lookup', async() => {
            let res = await client.networkServices.getAddedNodeInfo({nodeAddress: "0.0.0.0"});
            expect(res).toMatchObject({"code": -24, "message": "Error: Node has not been added."});
        });
    });

    it('getConnectionCount', async() => {
        let res = await client.networkServices.getConnectionCount();
        expect(res).toMatchObject({"error": null, "id": null, "result": 0});
    });

    describe('removeNode', () => {
        beforeAll(async() => {
            await client.networkServices.addNode({nodeAddress:localhost});
        });

        it('removeNode', async() => {
            await client.networkServices.removeNode(localhost);
            let res = await client.networkServices.getAddedNodeInfo({nodeAddress:localhost});
            expect(res).toMatchObject({ code: -24, message: 'Error: Node has not been added.' });
        });
    });

    describe('getNetTotals', () => {
        let info;

        beforeAll(async ()=> {
            info = await client.networkServices.getNetTotals();
        });

        it('totalbytesrecv', async() => {
            expect(info.totalbytesrecv).toBeGreaterThanOrEqual(0);
        });

        it('totalbytesent', async() => {
            expect(info.totalbytessent).toBeGreaterThanOrEqual(0);
        });

        it('timemillis', async() => {
            expect(info.timemillis).toBeGreaterThanOrEqual(0);
        });

        it('uploadtarget.timeframe', async() => {
            expect(info.uploadtarget.timeframe).toBeGreaterThanOrEqual(0);
        });

        it('uploadtarget.target', async() => {
            expect(info.uploadtarget.target).toBeGreaterThanOrEqual(0);
        });

        it('uploadtarget.target_reached', async() => {
            expect(info.uploadtarget.target_reached).toEqual(false);
        });

        it('uploadtarget.serve_historical_blocks', async() => {
            expect(info.uploadtarget.serve_historical_blocks).toEqual(true);
        });

        it('uploadtarget.bytes_left_in_cycle', async() => {
            expect(info.uploadtarget.bytes_left_in_cycle).toBeGreaterThanOrEqual(0);
        });

        it('uploadtarget.time_left_in_cycle', async() => {
            expect(info.uploadtarget.time_left_in_cycle).toBeGreaterThanOrEqual(0);
        });
    });

    describe('getMemoryInfo', async() => {
        let info;

        beforeAll(async ()=> {
            info = await client.networkServices.getMemoryInfo();
        });

        it('locked.used', async() => {
            expect(info.locked.used).toBeGreaterThanOrEqual(0);
        });

        it('locked.free', async() => {
            expect(info.locked.free).toBeGreaterThanOrEqual(0);
        });

        it('locked.total', async() => {
            expect(info.locked.total).toBeGreaterThanOrEqual(0);
        });

        it('locked.locked', async() => {
            expect(info.locked.total).toBeGreaterThanOrEqual(0);
        });

        it('locked.chunks_used', async() => {
            expect(info.locked.chunks_used).toBeGreaterThanOrEqual(0);
        });

        it('locked.chunks_free', async() => {
            expect(info.locked.chunks_free).toBeGreaterThanOrEqual(0);
        });
    });

    it('deactivateNetwork', async() => {
        let res = await client.networkServices.deactivateNetwork();
        expect(res).toMatchObject({"error": null, "id": null, "result": false});
    });

    it('activateNetwork', async() => {
        let res = await client.networkServices.activateNetwork();
        expect(res).toEqual(true);
    });

    describe('banNodeForLengthOfTime', async() => {
        afterAll(async() => {
            await client.networkServices.clearBannedIps();
        });

        it('banNodeForLengthOfTime', async() => {
            await client.networkServices.banNodeForLengthOfTime({nodeAddress:localhost, banTimeInSeconds: 30});
            let res = await client.networkServices.banNodeForLengthOfTime({nodeAddress:localhost, banTimeInSeconds:30});
            expect(res).toMatchObject({ code: -23, message: 'Error: IP/Subnet already banned' });
        });
    });

    describe('banNodeUntilDate', async() => {
        afterAll(async() => {
            await client.networkServices.clearBannedIps();
        });

        it('banNodeUntilDate', async() => {
            await client.networkServices.banNodeForLengthOfTime({nodeAddress: localhost, banTimeInSeconds: epochDate});
            let res = await client.networkServices.banNodeForLengthOfTime({nodeAddress: localhost, banTimeInSeconds: epochDate});
            expect(res).toMatchObject({ code: -23, message: 'Error: IP/Subnet already banned' });
        });
    });

    describe('clearBannedIps', async() => {
        beforeAll(async() => {
            await client.networkServices.banNodeForLengthOfTime({nodeAddress: localhost, banTimeInSeconds:epochDate});
        });

        it('locahost is banned', async() => {
            let res = await client.networkServices.listBannedIps();
            expect(res[0].address).toEqual(localhostSubnet);
        });

        it('localhost is unbanned', async() => {
           await client.networkServices.clearBannedIps();
            let res = await client.networkServices.listBannedIps();
            expect(res).toMatchObject([]);
        });
    });

    it('disconnectNode', async() => {
        // This method returns err because on regtest no nodes are actually connected
        let res = await client.networkServices.disconnectNode({nodeAddress: localhost});
        expect(res).toMatchObject({ code: -29, message: 'Node not found in connected nodes' });
    });

    describe('unbanNode', async() => {
        beforeAll(async() => {
            await client.networkServices.banNodeForLengthOfTime({nodeAddress: localhost, banTimeInSeconds: epochDate});
        });

        it('locahost is banned', async() => {
            let res = await client.networkServices.listBannedIps();
            expect(res[0].address).toEqual(localhostSubnet);
        });

        it('localhost is unbanned', async() => {
            await client.networkServices.unbanNode({nodeAddress: localhost});
            let res = await client.networkServices.listBannedIps();
            expect(res).toMatchObject([]);
        });
    });

    describe('listBannedIps', async() => {
        let info;

        beforeAll(async() => {
            await client.networkServices.banNodeUntilDate({nodeAddress: localhost, banTimeInSeconds: epochDate});
            info = await client.networkServices.listBannedIps();
        });

        afterAll(async() => {
           await client.networkServices.clearBannedIps();
        });

        it('address', async() => {
           expect(info[0].address).toEqual(localhostSubnet);
        });

        it('banned_until', async() => {
            expect(info[0].banned_until).toEqual(epochDate);
        });

        it('ban_created', async() => {
            expect(info[0].ban_created).toBeGreaterThanOrEqual(0);
        });

        it('ban_reason', async() => {
            expect(info[0].ban_reason).toEqual('manually added');
        });
    });

    it('getPeerInfo', async() => {
        let res = await client.networkServices.getPeerInfo();
        expect(res).toMatchObject([]);
    });

    it('ping', async() => {
        // There is no way to test this method -- it returns no value
        let res = await client.networkServices.ping();
        expect(res).toMatchObject({ result: null, error: null, id: null });
    });

    it('aliasClearWhiteList', async() => {
        // This method requires an alias to exist on network
        // An approach as to how to test this method needs to be figured out
        // Maybe this should be in walletServices with other alias functionality?
        let res = await client.networkServices.aliasClearWhiteList();
        expect(res).toMatchObject({ code: -1,
            message: 'aliasclearwhitelist [owner alias] [witness]\nClear your whitelist(controls who can resell).\n' });
    });

    it('stop', async() => {
        // There is no way to test this method - it shuts down the syscoind process entirely
        expect(true).toBe(true);
    });

    describe('sentinelPing', () => {
        let goodVersion = '1.0.2', badVersion = 'xxx';

        it('sentinelPing --succesful', async() => {
            let res = await client.networkServices.sentinelPing({version: goodVersion});
            expect(res).toEqual(true);
        });

        it('sentinelPing --succesful', async() => {
            let res = await client.networkServices.sentinelPing({version: badVersion});
            expect(res).toMatchObject({ code: -1, message: 'std::bad_cast' });
        });
    });

    describe('spork show', () => {
        let info;

        beforeAll(async() => {
           info = await client.networkServices.spork({command: 'show'});
        });

        it('SPORK_2_INSTANTSEND_ENABLED', async() => {
            expect(info.SPORK_2_INSTANTSEND_ENABLED).toBeGreaterThanOrEqual(0);
        });

        it('SPORK_3_INSTANTSEND_BLOCK_FILTERING', async() => {
            expect(info.SPORK_3_INSTANTSEND_BLOCK_FILTERING).toBeGreaterThanOrEqual(0);
        });

        it('SPORK_5_INSTANTSEND_MAX_VALUE', async() => {
            expect(info.SPORK_5_INSTANTSEND_MAX_VALUE).toBeGreaterThanOrEqual(0);
        });

        it('SPORK_6_NEW_SIGS', async() => {
            expect(info.SPORK_6_NEW_SIGS).toBeGreaterThanOrEqual(0);
        });

        it('SPORK_8_MASTERNODE_PAYMENT_ENFORCEMENT', async() => {
            expect(info.SPORK_8_MASTERNODE_PAYMENT_ENFORCEMENT).toBeGreaterThanOrEqual(0);
        });

        it('SPORK_9_SUPERBLOCKS_ENABLED', async() => {
            expect(info.SPORK_9_SUPERBLOCKS_ENABLED).toBeGreaterThanOrEqual(0);
        });

        it('SPORK_10_MASTERNODE_PAY_UPDATED_NODES', async() => {
            expect(info.SPORK_10_MASTERNODE_PAY_UPDATED_NODES).toBeGreaterThanOrEqual(0);
        });

        it('SPORK_12_RECONSIDER_BLOCKS', async() => {
            expect(info.SPORK_12_RECONSIDER_BLOCKS).toBeGreaterThanOrEqual(0);
        });

        it('SPORK_14_REQUIRE_SENTINEL_FLAG', async() => {
            expect(info.SPORK_14_REQUIRE_SENTINEL_FLAG).toBeGreaterThanOrEqual(0);
        });
    });

    describe('spork active', () => {
        let info;

        beforeAll(async() => {
            info = await client.networkServices.spork({command: 'active'});
        });

        it('SPORK_2_INSTANTSEND_ENABLED', async() => {
            expect(info.SPORK_2_INSTANTSEND_ENABLED).toEqual(true);
        });

        it('SPORK_3_INSTANTSEND_BLOCK_FILTERING', async() => {
            expect(info.SPORK_3_INSTANTSEND_BLOCK_FILTERING).toEqual(true);
        });

        it('SPORK_5_INSTANTSEND_MAX_VALUE', async() => {
            expect(info.SPORK_5_INSTANTSEND_MAX_VALUE).toEqual(true);
        });

        it('SPORK_6_NEW_SIGS', async() => {
            expect(info.SPORK_6_NEW_SIGS).toEqual(true);
        });

        it('SPORK_8_MASTERNODE_PAYMENT_ENFORCEMENT', async() => {
            expect(info.SPORK_8_MASTERNODE_PAYMENT_ENFORCEMENT).toEqual(true);
        });

        it('SPORK_9_SUPERBLOCKS_ENABLED', async() => {
            expect(info.SPORK_9_SUPERBLOCKS_ENABLED).toEqual(true);
        });

        it('SPORK_10_MASTERNODE_PAY_UPDATED_NODES', async() => {
            expect(info.SPORK_10_MASTERNODE_PAY_UPDATED_NODES).toEqual(true);
        });

        it('SPORK_12_RECONSIDER_BLOCKS', async() => {
            expect(info.SPORK_12_RECONSIDER_BLOCKS).toEqual(true);
        });

        it('SPORK_14_REQUIRE_SENTINEL_FLAG', async() => {
            expect(info.SPORK_14_REQUIRE_SENTINEL_FLAG).toEqual(true);
        });
    });
});