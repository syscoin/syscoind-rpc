import {get} from '../endpoint-decorators';
import ow from "syscoin-ow";

export function syscoinRpcEstimateServices(callRpc) {
    return {
        estimateFee: get(estimateFee),
        estimatePriority: get(estimatePriority),
        estimateSmartFee: get(estimateSmartFee),
        estimateSmartPriority: get(estimateSmartPriority),
        aliasNewEstimatedFee: get(aliasNewEstimatedFee),
        aliasUpdateEstimatedFee: get(aliasUpdateEstimatedFee)
    }

    async function estimateFee({numberOfBlocks} = {}) {
        ow(numberOfBlocks, ow.number.label("estimateFee:numberOfBlocks").integer.greaterThan(0));
        return await callRpc('estimatefee', [numberOfBlocks]);
    }

    async function estimatePriority({numberOfBlocks} = {}) {
        ow(numberOfBlocks, ow.number.label("estimatePriority:numberOfBlocks").integer.greaterThan(0));
        console.warn("WARNING:  Estimatepriority is a deprecated method.");
        return await callRpc('estimatepriority', [numberOfBlocks]);
    }

    async function estimateSmartFee({numberOfBlocks} = {}) {
        ow(numberOfBlocks, ow.number.label("estimateSmartFee:numberOfBlocks").integer.greaterThan(0));
        console.warn("WARNING: This interface is unstable and may disappear or change!")
        return await callRpc('estimatesmartfee', [numberOfBlocks]);
    }

    async function estimateSmartPriority({numberOfBlocks} = {}) {
        ow(numberOfBlocks, ow.number.label("estimateSmartPriority:numberOfBlocks").integer.greaterThan(0));
        console.warn("WARNING: This interface is unstable and may disappear or change!")
        return await callRpc('estimatesmartpriority', [numberOfBlocks]);
    }

    async function aliasNewEstimatedFee({aliasName, publicValue, transfersFlag, expireTimestamp, address, encPrivateKey,
                                        encPublicKey, witness} = {}) {
        ow(aliasName, ow.string.label("aliasNewEstimatedFee:aliasName").not.empty);
        ow(publicValue, ow.string.label("aliasNewEstimatedFee:publicValue").minLength(0));
        ow(transfersFlag, ow.number.label("aliasNewEstimatedFee:transfersFlag").is(x => (x >= 0 && x <= 3)));
        ow(expireTimestamp, ow.number.label("aliasNewEstimatedFee:expireTimestamp").integer.greaterThan(0));
        ow(address, ow.string.label("aliasNewEstimatedFee:address").minLength(0));
        ow(encPrivateKey, ow.string.label("aliasNewEstimatedFee:encPrivateKey").minLength(0));
        ow(encPublicKey, ow.string.label("aliasNewEstimatedFee:encPublicKey").minLength(0));
        ow(witness, ow.string.label("aliasNewEstimatedFee:witness").minLength(0));
        return await callRpc('aliasnewestimatedfee', [aliasName,publicValue,transfersFlag,expireTimestamp,address,encPrivateKey,encPublicKey,witness]);
    }

    async function aliasUpdateEstimatedFee({aliasName, publicValue, address, transfersFlag, expireTimestamp, encPrivateKey,
                                        encPublicKey, witness} = {}) {
        ow(aliasName, ow.string.label("aliasNewEstimatedFee:aliasName").not.empty);
        ow(publicValue, ow.string.label("aliasNewEstimatedFee:publicValue").minLength(0));
        ow(transfersFlag, ow.number.label("aliasNewEstimatedFee:transfersFlag").is(x => (x >= 0 && x <= 3)));
        ow(expireTimestamp, ow.number.label("aliasNewEstimatedFee:expireTimestamp").integer.greaterThan(0));
        ow(address, ow.string.label("aliasNewEstimatedFee:address").minLength(0));
        ow(encPrivateKey, ow.string.label("aliasNewEstimatedFee:encPrivateKey").minLength(0));
        ow(encPublicKey, ow.string.label("aliasNewEstimatedFee:encPublicKey").minLength(0));
        ow(witness, ow.string.label("aliasNewEstimatedFee:witness").minLength(0));
        return await callRpc('aliasupdateestimatedfee', [aliasName,publicValue,address,transfersFlag,expireTimestamp,encPrivateKey,encPublicKey,witness]);
    }
}