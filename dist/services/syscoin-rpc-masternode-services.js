import { get, post } from '../endpoint-decorators';

export function syscoinRpcMasternodeServices(callRpc) {

    return {
        broadcastByAssignedName: post(async ({ name } = {}) => {
            return await callMasterNodeBroadcastCommand('create-name', [name]);
        }),
        broadcastForAllMasternodes: post(async () => {
            return await callMasterNodeBroadcastCommand('create-all');
        }),
        count: get(async ({ format } = {}) => {
            return await callMasterNodeCommand('count', format ? [format] : []);
        }),
        decodeMessage: post(async ({ message } = {}) => {
            return await callMasterNodeBroadcastCommand('decode', [message]);
        }),
        generatePrivateKey: post(async () => {
            return await callMasterNodeCommand('genkey');
        }),
        getConfiguration: get(async () => {
            return await callMasterNodeCommand('list-conf');
        }),
        getCurrentMasternodeWinner: get(async () => {
            return await callMasterNodeCommand('current');
        }),
        initialize: post(async ({ name } = {}) => {
            return await callMasterNodeCommand('initialize', [name]);
        }),
        list: {
            activeSeconds: get(async ({ filter } = {}) => {
                return await listMasterNodeCall('activeseconds', filter);
            }),
            address: get(async ({ filter } = {}) => {
                return await listMasterNodeCall('addr', filter);
            }),
            daemon: get(async ({ filter } = {}) => {
                return await listMasterNodeCall('daemon', filter);
            }),
            info: get(async ({ filter } = {}) => {
                return await listMasterNodeCall('info', filter);
            }),
            json: get(async ({ filter } = {}) => {
                return await listMasterNodeCall('json', filter);
            }),
            lastPaidBlock: get(async ({ filter } = {}) => {
                return await listMasterNodeCall('lastpaidblock', filter);
            }),
            lastPaidTime: get(async ({ filter } = {}) => {
                return await listMasterNodeCall('lastpaidtime', filter);
            }),
            lastSeen: get(async ({ filter } = {}) => {
                return await listMasterNodeCall('lastseen', filter);
            }),
            payee: get(async ({ filter } = {}) => {
                return await listMasterNodeCall('payee', filter);
            }),
            protocol: get(async ({ filter } = {}) => {
                return await listMasterNodeCall('protocol', filter);
            }),
            pubkey: get(async ({ filter } = {}) => {
                return await listMasterNodeCall('pubkey', filter);
            }),
            rank: get(async ({ filter } = {}) => {
                return await listMasterNodeCall('rank', filter);
            }),
            sentinel: get(async ({ filter } = {}) => {
                return await listMasterNodeCall('sentinel', filter);
            }),
            status: get(async ({ filter } = {}) => {
                return await listMasterNodeCall('status', filter);
            }),
            full: get(async ({ filter } = {}) => {
                return await listMasterNodeCall('full', filter);
            })
        },
        outputs: get(async () => {
            return await callMasterNodeCommand('outputs');
        }),
        relayMessage: post(async ({ msg } = {}) => {
            return await callMasterNodeBroadcastCommand('relay', [msg]);
        }),
        startAll: post(async () => {
            return await callMasterNodeCommand(`start-all`);
        }),
        startMissing: post(async () => {
            return await callMasterNodeCommand(`start-missing`);
        }),
        startDisabled: post(async () => {
            return await callMasterNodeCommand(`start-disabled`);
        }),
        status: get(async () => {
            return await callMasterNodeCommand('status');
        }),
        winner: get(async () => {
            return await callMasterNodeCommand('winner');
        }),
        winners: get(async () => {
            return await callMasterNodeCommand('winners');
        }),
        masternodeList: get(async ({ mode, filter } = {}) => {
            return await listMasterNodeCall(mode, filter);
        }),
        masternodeBroadcast: post(async ({ command, arg } = {}) => {
            return await callMasterNodeBroadcastCommand(command, arg);
        })
    };

    async function callMasterNodeCommand(command, params) {
        let args = params ? [command, ...params] : [command];
        return await callRpc('masternode', args);
    }

    async function callMasterNodeBroadcastCommand(command, params) {
        let args = params ? [command, ...params] : [command];
        return await callRpc('masternodebroadcast', args);
    }

    async function listMasterNodeCall(mode = "json", filter) {
        return filter ? await callRpc('masternodelist', [mode, filter]) : await callRpc('masternodelist', [mode]);
    }
}