import { get, post } from '../endpoint-decorators';
import ow from "syscoin-ow";

export function syscoinRpcNetworkServices(callRpc) {
    return {
        activateNetwork: post(activateNetwork),
        aliasClearWhiteList: post(aliasClearWhiteList),
        addNode: post(addNode),
        banNodeForLengthOfTime: post(banNodeForLengthOfTime),
        banNodeUntilDate: post(banNodeUntilDate),
        clearBannedIps: post(clearBannedIps),
        deactivateNetwork: post(deactivateNetwork),
        disconnectNode: post(disconnectNode),
        getAddedNodeInfo: get(getAddedNodeInfo),
        getConnectionCount: get(getConnectionCount),
        getChainTxStats: get(getChainTxStats),
        getInfo: get(getInfo),
        getMemoryInfo: get(getMemoryInfo),
        getNetTotals: get(getNetTotals),
        getNetworkInfo: get(getNetworkInfo),
        getPeerInfo: get(getPeerInfo),
        listBannedIps: get(listBannedIps),
        ping: post(ping),
        removeNode: post(removeNode),
        sentinelPing: post(sentinelPing),
        spork: post(spork),
        stop: post(stop),
        tryToConnectToNode: post(tryToConnectToNode),
        unbanNode: post(unbanNode)
    };

    async function activateNetwork() {
        return await callRpc('setnetworkactive', [true]);
    }

    async function spork({ command }) {
        ow(command, ow.string.label("spork:command").not.empty);
        return await callRpc('spork', [command]);
    }

    async function sentinelPing({ version }) {
        ow(version, ow.string.label("sentinelPingn:version").not.empty);
        return await callRpc('sentinelping', [version]);
    }

    async function addNode({ nodeAddress }) {
        ow(nodeAddress, ow.string.label("addNode:nodeAddress").not.empty);
        return await callRpc('addnode', [nodeAddress, 'add']);
    }

    async function getInfo() {
        return await callRpc('getinfo');
    }

    async function stop() {
        return await callRpc('stop');
    }

    async function banNodeForLengthOfTime({ subnetOrIp, banTimeInSeconds = 0 }) {
        ow(subnetOrIp, ow.string.label("banNodeUntilDate:subnetOrIp").not.empty);
        ow(banTimeInSeconds, ow.number.label("banNodeForLengthOfTime:banTimeInSeconds").integer.greaterThan(0));
        const AbsoluteTime = false;
        return await callRpc('setban', [subnetOrIp, 'add', banTimeInSeconds, AbsoluteTime]);
    }

    async function banNodeUntilDate({ subnetOrIp, banDateTimeEpoch }) {
        ow(subnetOrIp, ow.string.label("banNodeUntilDate:subnetOrIp").not.empty);
        ow(banDateTimeEpoch, ow.number.label("banNodeUntilDate:banDateTimeEpoch").integer.greaterThan(0));
        const AbsoluteTime = true;
        return await callRpc('n', [subnetOrIp, 'add', banDateTimeEpoch, AbsoluteTime]);
    }

    async function clearBannedIps() {
        return await callRpc('clearbanned');
    }

    async function deactivateNetwork() {
        return await callRpc('setnetworkactive', [false]);
    }

    async function disconnectNode({ nodeAddress }) {
        ow(nodeAddress, ow.string.label("disconnectNode:nodeAddress").not.empty);
        return await callRpc('disconnectnode', [nodeAddress]);
    }

    async function getAddedNodeInfo({ nodeAddress }) {
        if (nodeAddress) {
            ow(nodeAddress, ow.string.label("getAddedNodeInfo:nodeAddress").not.empty);
        }
        return nodeAddress ? await callRpc('getaddednodeinfo', [nodeAddress]) : await callRpc('getaddednodeinfo');
    }

    async function aliasClearWhiteList({ ownerAddress, witness }) {
        ow(ownerAddress, ow.string.label("aliasClearWhiteList:ownerAddress").not.empty);
        ow(witness, ow.string.label("aliasClearWhiteList:witness").not.empty);
        return await callRpc('aliasclearwhitelist', [ownerAddress, witness]);
    }

    async function getConnectionCount() {
        return await callRpc('getconnectioncount');
    }

    async function getNetTotals() {
        return await callRpc('getnettotals');
    }

    async function getNetworkInfo() {
        return await callRpc('getnetworkinfo');
    }

    async function getPeerInfo() {
        return await callRpc('getpeerinfo');
    }

    async function getMemoryInfo() {
        return await callRpc('getmemoryinfo');
    }

    async function listBannedIps() {
        return await callRpc('listbanned');
    }

    async function ping() {
        return await callRpc('ping');
    }

    async function removeNode({ nodeAddress }) {
        ow(nodeAddress, ow.string.label("removeNode:nodeAddress").not.empty);
        return await callRpc('addnode', [nodeAddress, 'remove']);
    }

    async function tryToConnectToNode({ nodeAddress }) {
        ow(nodeAddress, ow.string.label("tryToConnectToNode:nodeAddress").not.empty);
        return await callRpc('addnode', [nodeAddress, 'onetry']);
    }

    async function unbanNode({ subnetOrIp }) {
        ow(subnetOrIp, ow.string.label("unbanNode:subnetOrIp").not.empty);
        return await callRpc('setban', [subnetOrIp, 'remove']);
    }

    async function getChainTxStats({ nBlocks, blockHash }) {
        if (nBlocks) {
            ow(nBlocks, ow.number.label("getChainTxStats:nBlocks").integer.greaterThan(0));
            return await callRpc('getchaintxstats', [nBlocks]);
        }
        if (blockHash) {
            ow(blockHash, ow.string.label("getChainTxStats:blockHash").not.empty);
            return await callRpc('getchaintxstats', [nBlocks, blockHash]);
        }
    }
}