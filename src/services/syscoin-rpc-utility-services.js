import {get, post} from '../endpoint-decorators';
import ow from "syscoin-ow";

export function syscoinRpcUtilityServices(callRpc) {

    return {
        createMultiSig: post(createMultiSig),
        validateAddress: post(validateAddress),
        debug: post(debug),
        help: get(help),
        tpsTestSetEnabled: post(tpsTestSetEnabled),
        tpsTestAdd: post(tpsTestAdd)
    }

    async function createMultiSig({numberOfRequiredSignatures, keys} = {}) {
        ow(numberOfRequiredSignatures, ow.number.label("createMultiSig:numberOfRequiredSignatures").integer.greaterThan(0));
        ow(keys, ow.array.label("createMultiSig:keys").not.empty);
        return await callRpc('createmultisig', [numberOfRequiredSignatures, keys]);
    }

    async function validateAddress({address} = {}) {
        ow(address, ow.string.label("validateAddress:address").minLength(0));
        return await callRpc('validateaddress', [address]);
    }

    async function debug({category} = {}) {
        ow(category, ow.string.label("debug:category").minLength(0));
        return await callRpc('debug', [category]);
    }

    async function help({command} = {}) {
        ow(command, ow.string.label("help:command").not.empty);
        return await callRpc('help', [command]);
    }

    async function tpsTestSetEnabled({enabled} = {}) {
        ow(enabled, ow.boolean.label("tpsTestSetEnabled:enabled").is(x => x == true || x == false));
        return await callRpc('tpstestsetenabled', [enabled]);
    }

    async function tpsTestAdd({startTime, rawTx} = {}) {
        ow(startTime, ow.number.label("tpsTestAdd:startTime").integer.greaterThan(0));
        ow(rawTx, ow.array.label("tpsTestAdd:rawTx").not.empty);
        return await callRpc('tpstestadd', [startTime, rawTx]);
    }
}
