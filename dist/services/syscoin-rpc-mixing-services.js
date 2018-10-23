import { post } from '../endpoint-decorators';

export function syscoinRpcMixingServices(callRpc) {
    return {
        resetMixing: post(resetMixing),
        startMixing: post(startMixing),
        stopMixing: post(stopMixing)
    };

    async function resetMixing() {
        return await callRpc('privatesend', ['reset']);
    }

    async function startMixing() {
        return await callRpc('privatesend', ['start']);
    }

    async function stopMixing() {
        return await callRpc('privatesend', ['stop']);
    }
}