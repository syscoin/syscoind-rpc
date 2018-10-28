import {post} from '../endpoint-decorators';
import ow from "syscoin-ow";

export function syscoinRpcMessagingServices(callRpc) {
    return {
        signMessage: post(signMessage),
        verifyMessage: post(verifyMessage)
    }

    async function signMessage({privateKey, message} = {}) {
        ow(privateKey, ow.string.label("signMessage:privateKey").not.empty);
        ow(message, ow.string.label("signMessage:message").not.empty);
        return await callRpc('signmessagewithprivkey', [privateKey, message]);
    }

    async function verifyMessage({address, signature, message} = {}) {
        ow(address, ow.string.label("verifyMessage:address").not.empty);
        ow(signature, ow.string.label("verifyMessage:signature").not.empty);
        ow(message, ow.string.label("verifyMessage:message").not.empty);
        return await callRpc('verifymessage', [address, signature, message]);
    }
}