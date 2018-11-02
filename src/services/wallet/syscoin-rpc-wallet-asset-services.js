import ow from "syscoin-ow";
import {get, post} from '../../endpoint-decorators';

export function walletAssetServices(callRpc) {
    return {
        info: get(assetInfo),
        list: get(listAssets),
        listAfterBlock: get(listAssetsAfterBlock),
        create: get(assetNew),
        send: post(assetSend),
        transfer: get(assetTransfer),
        update: get(assetUpdate)
    }

    async function assetInfo({asset, getInputs} = {}) {
        ow(asset, ow.string.label("assetInfo:asset").not.empty);
        ow(getInputs, ow.boolean.label("assetInfo:getInputs").is(x => x == true || x == false));
        return await callRpc('assetinfo', [asset, getInputs]);
    }

    async function assetNew({symbol, owner, publicValue, category, precision, useInputRanges,
        supply, maxSupply, interestRate, canAdjustInterestRate, witness=''} = {}) {
        ow(symbol, ow.string.label("assetNew:symbol").not.empty);
        ow(owner, ow.string.label("assetNew:owner").not.empty);
        ow(publicValue, ow.string.label("assetNew:publicValue").string.minLength(0));
        ow(category, ow.string.label("assetNew:category").not.empty);
        ow(precision, ow.number.label("assetNew:precision").is(x => (0 <= x && x <= 8)));
        ow(useInputRanges, ow.boolean.label("assetNew:useInputRanges").is(x => x == true && x == false));
        ow(supply, ow.number.label("assetNew:supply").integer.greaterThan(0));
        ow(maxSupply, ow.numer.label("assetNew:maxSupply").integer.greaterThan(0));
        ow(interestRate, ow.number.label("assetNew:interestRate").integer.greaterThan(0));
        ow(canAdjustInterestRate, ow.string.label("assetNew:canAdjustInterestRate").is(x => x == true && x == false));
        ow(witness, ow.string.label("assetNew:witness").string.minLength(0));
        return await callRpc('assetnew', [symbol, owner, publicValue, category, precision, useInputRanges, 
            supply, maxSupply, interestRate, canAdjustInterestRate, witness]);
    }

    async function assetSend({asset, aliasFrom, aliasTo, amount, ranges, memo} = {}) {
        ow(asset, ow.string.label("assetSend:asset").not.empty);
        ow(aliasFrom, ow.string.label("assetSend:aliasFrom").not.empty);
        ow(aliasTo, ow.string.label("assetSend:aliasTo").not.empty);
        ow(amount, ow.number.label("assetSend:amount").integer.greaterThan(0));
        ow(ranges, ow.object.label("assetSend:ranges").not.empty);
        ow(memo, ow.string.label("assetSend:memo").minLength(0));
        return await callRpc('assetsend', [asset, aliasFrom, aliasTo, amount, ranges, memo]);
    }

    async function assetTransfer({asset, newOwner, witness=''} = {}) {
        ow(asset, ow.string.label("assetTransfer:asset").not.empty);
        ow(newOwner, ow.string.label("assetTransfer:newOwner").not.empty);
        ow(witness, ow.string.label("assetTransfer:witness").minLength(0));
        return await callRpc('assettransfer', [asset, ownerTo, witness]);
    }

    async function assetUpdate({asset, publicValue, category, supply, interestRate, witness=''} = {}) {
        ow(asset, ow.string.label("assetUpdate:asset").not.empty);
        ow(publicValue, ow.string.label("assetUpdate:publicValue").minLength(0));
        ow(category, ow.string.label("assetUpdate:category").not.empty);
        ow(supply, ow.number.label("assetUpdate:supply").integer.greaterThan(0));
        ow(interestRate, ow.number.label("assetUpdate:interestRate").integer.greaterThan(0));
        ow(witness, ow.string.label("assetUpdate:witness").minLength(0));
        return await callRpc('assetUpdate', [asset, publicValue, category, supply, interestRate, witness]);
    }   
    
    async function listAssets({count, from, options} = {}) {
        if(count) {
            ow(count, ow.number.label("listAssets:count").integer.greaterThan(0));
        }
        if(from) {
            ow(from, ow.number.label("listAssets:from").integer.greaterThan(0));
        }
        if(options) {
            ow(options, ow.objects.label("listAssets:options").not.empty);
        }
        return await callRpc('listassets', [count, from, options]);
    }

    async function listAssetsAfterBlock({blockNumber} = {}) {
        ow(blockNumber, ow.number.label("blockNumber:blockNumber").integer.greaterThan(0));
        let options = {
            startblock: blockNumber
        }
        let assets = await listAssets({count:0, from:0, options:options});
        return assets;
    }
}
