import { get } from '../endpoint-decorators';
import ow from 'syscoin-ow';

export function syscoinRpcAddressIndexServices(callRpc) {
    return {
        getAddressBalancesAsArray: get(getAddressBalancesAsArray),
        getSummedAddressBalance: get(getSummedAddressBalance),
        getAddressDeltas: get(getAddressDeltas),
        getAddressMempool: get(getAddressMempool),
        getAddressTxids: get(getAddressTxids),
        getAddressUtxos: get(getAddressUtxos)
    };

    async function getAddressDeltas({ addresses, startingBlockHeight, endingBlockHeight } = {}) {
        ow(addresses, ow.string.label("getAddressDeltas:addresses").not.empty);
        let addressJsonCollection = {
            addresses: [addresses]
        };
        //getAddressDeltas currently is not working with it's numerical arguments at core level
        //return await callRpc('getaddressdeltas',[addressJsonCollection, startingBlockHeight, endingBlockHeight])
        return await callRpc('getaddressdeltas', [addressJsonCollection]);
    }

    async function getAddressBalancesAsArray({ addresses } = {}) {
        ow(addresses, ow.string.label("getAddressBalancesAsArray:addresses").not.empty);
        let separateOutputsIntoArray = true;
        return await callRpc('getaddressbalance', [addresses, separateOutputsIntoArray]);
    }

    async function getSummedAddressBalance({ addresses } = {}) {
        ow(addresses, ow.string.label("getSummedAddressBalance:addresses").not.empty);
        let separateOutputsIntoArray = false;
        return await callRpc('getaddressbalance', [addresses, separateOutputsIntoArray]);
    }

    async function getAddressMempool({ addresses } = {}) {
        ow(addresses, ow.string.label("getAddressMempool:addresses").not.empty);
        return await callRpc('getaddressmempool', [addresses]);
    }

    async function getAddressTxids({ addresses, startingBlockHeight, endingBlockHeight } = {}) {
        ow(addresses, ow.string.label("getAddressTxids:addresses").not.empty);
        if (startingBlockHeight) {
            return await callRpc('getaddresstxids', [addresses, startingBlockHeight]);
        }if (endingBlockHeight) {
            return await callRpc('getaddresstxids', [addresses, startingBlockHeight, endingBlockHeight]);
        }
        return await callRpc('getaddresstxids', [addresses]);
    }

    async function getAddressUtxos({ addresses } = {}) {
        ow(addresses, ow.string.label("getAddressUtxos:addresses").not.empty);
        return await callRpc('getaddressutxos', [addresses]);
    }
}