import ow from "syscoin-ow";
import { get, post } from '../../endpoint-decorators';

export function walletCertificateServices(callRpc) {
    return {
        info: get(certInfo),
        list: get(listCerts),
        listAfterBlock: get(listCertificatesAfterBlock),
        new: post(certNew),
        transfer: post(certTransfer),
        update: post(certUpdate)
    };

    async function certInfo(guid) {
        ow(guid, ow.string.label("certInfo:guid").not.empty);
        return await callRpc('certinfo', [guid]);
    }

    async function certNew(alias, title, publicValue, category, witness) {
        ow(alias, ow.string.label("certNew:alias").not.empty);
        ow(title, ow.string.label("certNew:title").not.empty);
        ow(publicValue, ow.string.label("certNew:publicValue").string.minLength(0));
        ow(category, ow.string.label("certNew:category").not.empty);
        ow(witness, ow.string.label("certNew:witness").not.empty);
        return await callRpc('certnew', arguments);
    }

    async function certTransfer(guid, alias, publicValue, accessFlags, witness) {
        ow(guid, ow.string.label("certTransfer:guid").not.empty);
        ow(alias, ow.string.label("certTransfer:alias").not.empty);
        ow(publicValue, ow.string.label("certTransfer:publicValue").string.minLength(0));
        ow(accessFlags, ow.number.label("certTransfer:accessFlags").is(x => 0 <= x && x <= 2));
        ow(witness, ow.string.label("certTransfer:witness").not.empty);
        return await callRpc('certtransfer', arguments);
    }

    async function certUpdate(guid, title, publicValue, category, witness) {
        ow(guid, ow.string.label("certUpdate:guid").not.empty);
        ow(alias, ow.string.label("certUpdate:alias").not.empty);
        ow(publicValue, ow.string.label("certUpdate:publicValue").string.minLength(0));
        ow(category, ow.string.label("certUpdate:category").not.empty);
        ow(witness, ow.string.label("certUpdate:witness").not.empty);
        return await callRpc('certupdate', arguments);
    }

    async function listCerts(count, from, options) {
        if (count) {
            ow(count, ow.number.label("listCerts:count").integer.greaterThanOrEqual(0));
        }
        if (from) {
            ow(from, ow.number.label("listCerts:from").integer.greaterThanOrEqual(0));
        }
        if (options) {
            ow(options, ow.objects.label("listCerts:options").not.empty);
        }
        return await callRpc('listcerts', arguments);
    }

    async function listCertificatesAfterBlock(blockNumber) {
        ow(blockNumber, ow.number.label("listCertificatesAfterBlock:blockNumber").integer.greaterThanOrEqual(0));
        let options = {
            startblock: blockNumber
        };
        let certs = await listCerts(0, 0, options);
        return certs;
    }
}