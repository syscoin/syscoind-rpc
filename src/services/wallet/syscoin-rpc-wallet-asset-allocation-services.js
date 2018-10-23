import ow from "syscoin-ow";
import {get, post} from '../../endpoint-decorators';

export function walletAssetAllocationServices(callRpc) {
    return {
        collectInterest: post(assetAllocationCollectInterest),
        info: get(assetAllocationInfo),
        list: get(listAssetAllocations),
        listTransactions: get(listAssetAllocationTransactions),
        listAfterBlock: get(listAssetAllocationsAfterBlock),
        send: post(assetAllocationSend),
        senderStatus: get(assetAllocationSenderStatus)
    }

    async function assetAllocationCollectInterest({asset, owner, witness} = {}) {
        ow(asset, ow.string.label("assetAllocationCollectInterest:asset").not.empty);
        ow(owner, ow.string.label("assetAllocationCollectInterest:owner").not.empty);
        ow(witness, ow.string.label("assetAllocationCollectInterest:witness").minLength(0));
        return await callRpc('assetallocationcollectinterest', [asset, owner, witness]);
    }

    async function assetAllocationInfo({asset, owner, getInputs} = {}) {
        ow(asset, ow.string.label("assetAllocationInfo:asset").not.empty);
        ow(owner, ow.string.label("assetAllocationInfo:owner").not.empty);
        ow(getInputs, ow.boolean.label("assetAllocationInfo:getInputs").is(x => x == true || x == false));
        return await callRpc('assetallocationinfo', [asset, owner, getInputs]);
    }

    async function listAssetAllocations({count, from, options} = {}) {
        if(count) {
            ow(count, ow.number.label("listAssetAllocations:count").integer.greaterThanOrEqual(0));
        }
        if(from) {
            ow(from, ow.number.label("listAssetAllocations:from").integer.greaterThanOrEqual(0));
        }
        if(options) {
            ow(options, ow.objects.label("listAssetAllocations:options").not.empty);
        }
        return await callRpc('listassetallocations', [count, from, options]);
    }

    async function listAssetAllocationTransactions({count, from, options} = {}) {
        if(count) {
            ow(count, ow.number.label("listAssetAllocationTransactions:count").integer.greaterThanOrEqual(0));
        }
        if(from) {
            ow(from, ow.number.label("listAssetAllocationTransactions:from").integer.greaterThanOrEqual(0));
        }
        if(options) {
            ow(options, ow.objects.label("listAssetAllocationTransactions:options").not.empty);
        }
        return await callRpc('listassetallocationtransactions', [count, from, options]);
    }

    async function listAssetAllocationsAfterBlock({blockNumber}) {
        ow(blockNumber, ow.number.label("listAssetAllocationsAfterBlock:blockNumber").integer.greaterThanOrEqual(0));

        let options = {
            startblock: blockNumber
        }
        let assetAllocations = await listAssetAllocations({count:0, from:0, options:options});
        return assetAllocations;
    }

    async function assetAllocationSend({asset, owner, ownerTo, ranges, memo, witness} = {}) {
        ow(asset, ow.string.label("assetAllocationSend:asset").not.empty);
        ow(owner, ow.string.label("assetAllocationSend:owner").not.empty);
        ow(ownerTo, ow.string.label("assetAllocationSend:ownerTo").not.empty);
        ow(ranges, ow.object.label("assetAllocationCollectInterest:ranges").not.empty);
        ow(memo, ow.string.label("assetAllocationSend:memo").minLength(0));
        ow(witness, ow.string.label("assetAllocationSend:witness").minLength(0));
        return await callRpc('assetallocationsend', [asset, owner, ownerTo, ranges, memo, witness]);
    }

    async function assetAllocationSenderStatus({asset, owner, txId} = {}) {
        ow(asset, ow.string.label("assetAllocationSenderStatus:asset").not.empty);
        ow(owner, ow.string.label("assetAllocationSenderStatus:owner").not.empty);
        ow(txId, ow.string.label("assetAllocationSenderStatus:txId").not.empty);
        return await callRpc('assetallocationsenderstatus', [asset, owner, txId]);
    }

}

