import ow from "syscoin-ow";
import {get, post} from '../../endpoint-decorators';

export function walletAliasServices(callRpc) {
    return {
        balance: get(aliasBalance),
        balanceMulti: get(aliasBalanceMulti),
        info: get(aliasInfo),
        isExpired: get(aliasIsExpired),
        estimatedFeeForNew: get(aliasNewEstimatedFee),
        list: get(listAliases),
        listAfterBlock: get(listAliasesAfterBlock),
        new: post(aliasNew),
        pay: post(aliasPay),
        update: post(aliasUpdate),
        updateEstimatedFee: get(aliasUpdateEstimatedFee),
        updateWhiteList: post(aliasUpdateWhiteList),
        validate: post(validateAlias),
        whiteList: get(aliasWhiteList),
        aliasAddScript: post(aliasAddScript)
    }


    async function aliasBalance({alias, instantSend} = {}) {
        ow(alias, ow.string.label("aliasBalance:alias").not.empty);
        if(instantSend){
            ow(account, ow.boolean.label("aliasBalance:instantSend").is(x => x == true || x == false));
        }
        return instantSend ? await callRpc('aliasbalance', [alias, instantSend]) :
            await callRpc('aliasbalance', [alias]);
    }

    async function aliasBalanceMulti({aliases, instantSend=false} = {}) {
        ow(aliases, ow.array.label("aliasBalanceMulti:aliases").not.empty);
        if(instantSend){
            ow(account, ow.boolean.label("aliasBalance:instantSend").is(x => x == true || x == false));
        }
        let aliasesObj = {
            aliases: aliases
        }
        return instantSend ? await callRpc('aliasbalancemulti', [aliasesObj, instantSend]) :
            await callRpc('aliasbalancemulti', [aliasesObj]);
    }

    async function aliasIsExpired({aliasName} = {}) {
        ow(aliasName, ow.string.label("aliasIsExpired:aliasName").not.empty);
        let info = await aliasInfo(aliasName);
        if (!info.error) {
            return info.expired;
        }
    }

    async function aliasInfo({aliasName} = {}) {
        ow(aliasName, ow.string.label("aliasInfo:aliasName").not.empty);
        return await callRpc('aliasinfo', [aliasName]);
    }

    async function aliasNew({aliasName, publicValue, acceptTransferFlags=3, expireTimestamp, address,
        encryptionPrivateKey, encryptionPublicKey, witness=''} = {}) {
        ow(aliasName, ow.string.label("aliasNew:aliasName").not.empty);
        ow(publicValue, ow.string.label("aliasNew:publicValue").minLength(0));
        ow(acceptTransferFlags, ow.number.label("aliasNew:transfersFlag").is(x => (x >= 0 && x <= 3)));
        ow(expireTimestamp, ow.number.label("aliasNew:expireTimestamp").integer.greaterThan(0));
        ow(address, ow.string.label("aliasNew:address").minLength(0));
        ow(encryptionPrivateKey, ow.string.label("aliasNew:encPrivateKey").minLength(0));
        ow(encryptionPublicKey, ow.string.label("aliasNew:encPublicKey").minLength(0));
        ow(witness, ow.string.label("aliasNew:witness").minLength(0));
        return await callRpc('aliasnew', [aliasName,publicValue,acceptTransferFlags,expireTimestamp,
            address,encryptionPrivateKey,encryptionPublicKey,witness]);
    }

    async function aliasNewEstimatedFee({aliasName, publicValue, acceptTransferFlags=3, expireTimestamp, address,
        encryptionPrivateKey, encryptionPublicKey, witness=''} = {}) {
        ow(aliasName, ow.string.label("aliasNewEstimatedFee:aliasName").not.empty);
        ow(publicValue, ow.string.label("aliasNewEstimatedFee:publicValue").minLength(0));
        ow(transfersFlag, ow.number.label("aliasNewEstimatedFee:transfersFlag").is(x => (x >= 0 && x <= 3)));
        ow(expireTimestamp, ow.number.label("aliasNewEstimatedFee:expireTimestamp").integer.greaterThan(0));
        ow(address, ow.string.label("aliasNewEstimatedFee:address").minLength(0));
        ow(encPrivateKey, ow.string.label("aliasNewEstimatedFee:encPrivateKey").minLength(0));
        ow(encPublicKey, ow.string.label("aliasNewEstimatedFee:encPublicKey").minLength(0));
        ow(witness, ow.string.label("aliasNewEstimatedFee:witness").minLength(0));
        return await callRpc('aliasnewestimatedfee', [aliasName,publicValue,acceptTransferFlags,expireTimestamp,
            address, encryptionPrivateKey,encryptionPublicKey, witness]);
    }

    async function aliasPay({aliasFrom, amountsToAliases, instantSend=false, subtractFeeFromAmount} = {}) {
        ow(aliasFrom, ow.string.label("aliasPay:aliasFrom").not.empty);
        ow(amountsToAliases, ow.object.label("aliasPay:amountsToAliases").not.empty);
        ow(instantSend, ow.boolean.label("aliasPay:instantSend").is(x => x == true || x == false));
        if(subtractFeeFromAmount) {
            ow(subtractFeeFromAmount, ow.object.label("aliasPay:subtractFeeFromAmount").not.empty);
        }
        return await callRpc('aliaspay', [aliasFrom, amountsToAliases, instantSend, subtractFeeFromAmount]);
    }

    async function aliasUpdate({aliasName, publicValue, acceptTransferFlags=3, expireTimestamp=3600, address,
        encryptionPrivateKey, encryptionPublicKey, witness=''} = {}) {
        ow(aliasName, ow.string.label("aliasUpdate:aliasName").not.empty);
        ow(publicValue, ow.string.label("aliasUpdate:publicValue").minLength(0));
        ow(transfersFlag, ow.number.label("aliasUpdate:transfersFlag").is(x => (x >= 0 && x <= 3)));
        ow(expireTimestamp, ow.number.label("aliasUpdate:expireTimestamp").integer.greaterThan(0));
        ow(address, ow.string.label("aliasUpdate:address").minLength(0));
        ow(encPrivateKey, ow.string.label("aliasUpdate:encPrivateKey").minLength(0));
        ow(encPublicKey, ow.string.label("aliasUpdate:encPublicKey").minLength(0));
        ow(witness, ow.string.label("aliasUpdate:witness").minLength(0));
        return await callRpc('aliasupdate', [aliasName, publicValue, acceptTransferFlags, expireTimestamp,
            address, encryptionPrivateKey, encryptionPublicKey, witness]);
    }

    async function aliasUpdateWhiteList({ownerAlias, whitelistEntries, witness=''} = {}) {
        ow(ownerAlias, ow.string.label("aliasUpdateWhitelist:ownerAlias").not.empty);
        ow(whitelistEntries, ow.object.label("aliasUpdateWhitelist:whitelistEntries").not.empty);
        ow(witness, ow.string.label("aliasUpdateWhitelist:witness").not.empty);
        return await callRpc('aliasupdatewhitelist', [ownerAlias, whitelistEntries, witness]);
    }

    async function aliasAddScript({script} = {}) {
        ow(script, ow.string.label("aliasAddScript:script").not.empty);
        return await callRpc('aliasaddscript', [script]);
    }

    async function aliasWhiteList({alias} = {}) {
        ow(alias, ow.string.label("aliasWhiteList:alias").not.empty);
        return await callRpc('aliaswhitelist', [alias]);
    }

    async function aliasUpdateEstimatedFee({aliasName, publicValue, address, acceptTransferFlags, expireTimestamp,
        encryptionPrivateKey, encryptionPublicKey, witness=''} = {}) {
        ow(aliasName, ow.string.label("aliasUpdateEstimatedFee:aliasName").not.empty);
        ow(publicValue, ow.string.label("aliasUpdateEstimatedFee:publicValue").minLength(0));
        ow(address, ow.string.label("aliasUpdateEstimatedFee:address").not.empty);
        ow(transfersFlag, ow.number.label("aliasUpdateEstimatedFee:transfersFlag").is(x => (x >= 0 && x <= 3)));
        ow(expireTimestamp, ow.number.label("aliasUpdateEstimatedFee:expireTimestamp").integer.greaterThan(0));
        ow(address, ow.string.label("aliasUpdateEstimatedFee:address").minLength(0));
        ow(encPrivateKey, ow.string.label("aliasUpdateEstimatedFee:encPrivateKey").minLength(0));
        ow(encPublicKey, ow.string.label("aliasUpdateEstimatedFee:encPublicKey").minLength(0));
        ow(witness, ow.string.label("aliasUpdateEstimatedFee:witness").minLength(0));
        return await callRpc('aliasupdate', [aliasName, publicValue, address, acceptTransferFlags, expireTimestamp,
            encryptionPrivateKey, encryptionPublicKey, witness]);
    }

    async function listAliases({count=10, from=0, options} = {}) {
        if(count) {
            ow(count, ow.number.label("listAliases:count").integer.greaterThan(0));
        }
        if(from) {
            ow(from, ow.number.label("listAliases:from").integer.greaterThanOrEqual(0));
        }
        if(options) {
            ow(options, ow.object.label("listAliases:options").not.empty);
        }
        return await callRpc('listaliases', [count, from, options]);
    }

    // Helper method that can eventually live in wallet
    async function validateAlias({aliasName} = {}) {
        ow(aliasName, ow.string.label("validateAlias:aliasName").not.empty);
        try {
            let aliasData = await aliasInfo(aliasName);
            let addressValidationData = await utilityServices.validateAddress(aliasData.address);
            return addressValidationData;
        }
        catch (err) {
            throw new Error(`Could not validate alias:${err}`);
        }
    }

    async function listAliasesAfterBlock({blockNumber} = {}) {
        ow(blockNumber, ow.number.label("listAliasesAfterBlock:blockNumber").integer.greaterThan(0));
        let options = {
            startblock: blockNumber
        }
        let aliases = await listAliases({count:0, from:0, options:options});
        return aliases;
    }
}
