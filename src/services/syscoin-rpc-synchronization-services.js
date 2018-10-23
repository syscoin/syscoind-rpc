import {get, post} from '../endpoint-decorators';

export function syscoinRpcSynchronizationServices(callRpc) {
    return  {
        resetSync: post(resetSync),
        status: get(status),
        updateToNextStep: post(updateToNextStep)
    }

    async function resetSync() {
        return await callRpc('mnsync',['reset']);
    }

    async function status() {
        return await callRpc('mnsync',['status']);
    }

    async function updateToNextStep() {
        return await callRpc('mnsync',['next']);
    }
}