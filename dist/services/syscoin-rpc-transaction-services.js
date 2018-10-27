import { get, post } from '../endpoint-decorators';
import ow from "syscoin-ow";

export function syscoinRpcTransactionServices(callRpc) {
    return {
        createRawTransaction: post(createRawTransaction),
        decodeRawTransaction: post(decodeRawTransaction),
        decodeScript: post(decodeScript),
        fundRawTransaction: post(fundRawTransaction),
        getRawTransaction: get(getRawTransaction),
        getRawTransactionVerbose: get(getRawTransactionVerbose),
        sendRawTransaction: post(sendRawTransaction),
        signRawTransaction: post(signRawTransaction)
    };

    async function createRawTransaction({ inputs, outputs, lockTime = 0 }) {
        ow(inputs, ow.array.label("createRawTransaction:inputs").not.empty);
        ow(outputs, ow.object.label("createRawTransaction:outputs").not.empty);
        ow(lockTime, ow.number.label("createRawTransaction:lockTime").greaterThan(0));
        return await callRpc('createrawtransaction', [inputs, outputs, lockTime]);
    }

    async function decodeRawTransaction({ hexString }) {
        ow(hexString, ow.string.label("decodeRawTransaction:hexString").not.empty);
        return await callRpc('decoderawtransaction', [hexString]);
    }

    async function decodeScript({ hexString }) {
        ow(hexString, ow.string.label("decodeScript:hexString").not.empty);
        return await callRpc('decodescript', [hexString]);
    }

    async function fundRawTransaction({ hexString, options }) {
        ow(hexString, ow.string.label("fundRawTransaction:hexString").not.empty);
        if (options) {
            ow(options, ow.object.label("fundRawTransaction:options").not.empty);
        }
        return await callRpc('fundrawtransaction', [hexString, options]);
    }

    async function getRawTransaction({ txId }) {
        ow(txId, ow.string.label("getRawTransaction:txId").not.empty);
        let verbose = false;
        return await callRpc('getrawtransaction', [txId, verbose]);
    }

    async function getRawTransactionVerbose({ txId }) {
        ow(txId, ow.string.label("getRawTransactionVerbose:txId").not.empty);
        let verbose = true;
        return await callRpc('getrawtransaction', [txId, verbose]);
    }

    async function sendRawTransaction({ hexString,
        allowHighFees = false, instantSend = false, bypassLimits = false }) {
        ow(hexString, ow.string.label("sendRawTransaction:hexString").not.empty);
        ow(allowHighFees, ow.boolean.label("sendRawTransaction:allowHighFees").is(x => x == true || x == false));
        ow(instantSend, ow.boolean.label("sendRawTransaction:instantSend").is(x => x == true || x == false));
        ow(bypassLimits, ow.boolean.label("sendRawTransaction:bypassLimits").is(x => x == true || x == false));
        return await callRpc('sendrawtransaction', arguments);
    }

    // Not sure the documentation explains this one appropriately.  Reference for later.
    async function signRawTransaction({ hexString,
        previousTransactionOutputs, privateKeys, signatureHashType = 'ALL' }) {
        ow(hexString, ow.string.label("signRawTransaction:hexString").not.empty);
        if (previousTransactionOutputs && privateKeys) {
            ow(previousTransactionOutputs, ow.array.label("signRawTransaction:previousTransactionOutputs").not.empty);
            ow(privateKeys, ow.array.label("signRawTransaction:privateKeys").not.empty);
            return await callRpc('signrawtransaction', [hexString, previousTransactionOutputs, privateKeys, signatureHashType]);
        }
        return await callRpc('signrawtransaction', [hexString]);
    }
}