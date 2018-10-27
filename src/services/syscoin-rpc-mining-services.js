import {get,post} from '../endpoint-decorators';
import ow from "syscoin-ow";

export function syscoinRpcMiningServices(callRpc) {
    return {
        createAuxBlock: post(createAuxBlock),
        getAuxBlock: get(getAuxBlock),
        getBlockTemplate: get(getBlockTemplate),
        getMiningInfo: get(getMiningInfo),
        getNetworkHashesPerSecond: get(getNetworkHashesPerSecond),
        prioritiseTransaction: post(prioritiseTransaction),
        submitAuxBlock: post(submitAuxBlock),
        submitBlock: post(submitBlock),
        getPoolInfo: get(getPoolInfo)
    }

    async function createAuxBlock(address) {
        ow(address, ow.string.label("createAuxBlock:address").not.empty);
        return await callRpc('createauxblock', arguments);
    }

    async function getAuxBlock(blockHash, auxPow) {
        if(blockHash) {
            ow(blockHash, ow.string.label("getAuxBlock:blockHash").not.empty);
        }
        if(blockHash && auxPow) {
            ow(auxPow, ow.string.label("getAuxBlock:auxPow").not.empty);
        }
        return await callRpc('getauxblock', arguments);
    }

    async function getBlockTemplate(blockTemplate) {
        if(blockTemplate) {
            ow(blockTemplate, ow.string.label("getBlockTemplate:blockTemplate").not.empty);
        }
        return await callRpc('getblocktemplate', [blockTemplate])
    }

    async function getMiningInfo() {
        return await callRpc('getmininginfo');
    }

    async function getPoolInfo() {
        return await callRpc('getpoolinfo');
    }

    async function getNetworkHashesPerSecond(numberOfBlocks=120,blockHeight=-1) {
        ow(numberOfBlocks, ow.number.label("getNetworkHashesPerSecond:numberOfBlocks").greaterThan(0));
        ow(blockHeight, ow.number.label("getNetworkHashesPerSecond:blockHeight").greaterThan(0));
        return await callRpc('getnetworkhashps', arguments);
    }

    async function prioritiseTransaction(txid, priorityDelta, feeDeltaInSatoshis) {
        ow(txid, ow.string.label("prioritiseTransaction:txid").not.empty);
        ow(priorityDelta, ow.number.label("prioritiseTransaction:priorityDelta").greaterThan(0));
        ow(feeDeltaInSatoshis, ow.number.label("prioritiseTransaction:feeDelaInSatoshis").greaterThan(0));
        return await callRpc('prioritisetransaction', arguments);
    }

    async function submitAuxBlock(blockHash,auxPow) {
        ow(blockHash, ow.string.label("submitAuxBlock:blockHash").not.empty);
        ow(blockHash, ow.string.label("submitAuxBlock:auxPow").not.empty);
        return await callRpc('submitauxblock',arguments);
    }

    async function submitBlock(hexDataToSubmit) {
        ow(hexDataToSubmit, ow.string.label("submitBlock:hexDataToSubmit").not.empty);
        // submitblock "hexdata" ( "jsonparametersobject" )

        // Attempts to submit new block to network.
        // The 'jsonparametersobject' parameter is currently ignored.
        // See https://en.syscoin.it/wiki/BIP_0022 for full specification.
        return await callRpc('submitblock', [hexDataToSubmit]);
    }
}

