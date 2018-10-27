import * as util from 'util' // has no default export
import { constants } from './constants';
import ow from "syscoin-ow";
import { walletAliasServices } from './wallet/syscoin-rpc-wallet-alias-services'
import { walletAssetAllocationServices } from './wallet/syscoin-rpc-wallet-asset-allocation-services';
import { walletAssetServices } from './wallet/syscoin-rpc-wallet-asset-services';
import { walletCertificateServices } from './wallet/syscoin-rpc-wallet-certificate-services';
import { walletEscrowServices } from './wallet/syscoin-rpc-wallet-escrow-services';
import { walletOfferServices } from './wallet/syscoin-rpc-wallet-offer-services';

export function syscoinRpcWalletServices(callRpc, utilityServices) {
    return {
        abandonTransaction: abandonTransaction,
        addMultiSigAddress: addMultiSigAddress,
        alias: walletAliasServices(callRpc),
        assetAllocation: walletAssetAllocationServices(callRpc),
        asset: walletAssetServices(callRpc),
        backupWallet: backupWallet,
        certificate: walletCertificateServices(callRpc),
        dumpHdInfo: dumpHdInfo,
        dumpPrivKey: dumpPrivKey,
        dumpWallet: dumpWallet,
        escrow: walletEscrowServices(callRpc),
        getAccount: getAccount,
        getAccountAddress: getAccountAddress,
        getAddressesByAccount: getAddressesByAccount,
        getBalance: getBalance,
        getNewAddress: getNewAddress,
        getRawChangeAddress: getRawChangeAddress,
        getReceivedByAccount: getReceivedByAccount,
        getReceivedByAddress: getReceivedByAddress,
        getTransaction: getTransaction,
        getUnconfirmedBalance: getUnconfirmedBalance,
        getWalletInfo: getWalletInfo,
        importAddress: importAddress,
        importElectrumWallet: importElectrumWallet,
        importMulti: importMulti,
        importPrivKey: importPrivKey,
        importPrunedFunds: importPrunedFunds,
        importPubKey: importPubKey,
        importWallet: importWallet,
        instantSendToAddress: instantSendToAddress,
        keePass: keePass,
        keyPoolRefill: keyPoolRefill,
        listAccounts: listAccounts,
        listAddressBalances: listAddressBalances,
        listAddressGroupings: listAddressGroupings,
        listLockUnspent: listLockUnspent,
        listReceivedByAccount: listReceivedByAccount,
        listReceivedByAddress: listReceivedByAddress,
        listSinceBlock: listSinceBlock,
        listTransactions: listTransactions,
        listUnspent: listUnspent,
        lockUnspent: lockUnspent,
        move: move,
        offer: walletOfferServices(callRpc),
        pruneSyscoinServices: pruneSyscoinServices,
        removePrunedFunds: removePrunedFunds,
        sendFrom: sendFrom,
        sendMany: sendMany,
        sendToAddress: sendToAddress,
        setAccount: setAccount,
        setTxFee: setTxFee,
        signMessage: signMessage,
        syscoinDecodeRawTransaction: syscoinDecodeRawTransaction,
        syscoinListReceivedByAddress: syscoinListReceivedByAddress,
        syscoinSendRawTransaction: syscoinSendRawTransaction,
        syscoinTxFund: syscoinTxFund,
        tpsTestAdd: tpsTestAdd,
        tpsTestEnabled: tpsTestEnabled,
        tpsTestInfo: tpsTestInfo,
        walletLock: walletLock,
        walletPassPhrase: walletPassPhrase,
        walletPassPhraseChange: walletPassPhraseChange,
        encryptWallet: encryptWallet,
        getWalletLoadPercentage: getWalletLoadPercentage
    }

    async function abandonTransaction(txId) {
        ow(txId, ow.string.label("abandonTransaction:txId").not.empty);
        return await callRpc('abandontransaction', [txId]);
    }

    async function addMultiSigAddress(nRequired, keys, account) {
        ow(nRequired, ow.number.label("addMultiSigAddress:nRequired").integer.greaterThan(0));
        ow(keys, ow.array.label("addMultiSigAddress:keys").not.empty);
        if(account) {
            ow(account, ow.string.label("addMultiSigAddress: account").not.empty);
        }
        return account ? await callRpc('addmultiSigAddress', [nRequired, keys, account]) :
            await callRpc('addmultisigaddress', [nRequired, keys]);
    }
    
    async function backupWallet(destination) {
        ow(destination, ow.string.label("backupWallet:destination").not.empty);
        return await callRpc('backupwallet', arguments);
    }


    async function dumpHdInfo() {
        return await callRpc('dumphdinfo');
    }

    async function dumpPrivKey(address) {
        ow(address, ow.string.label("dumpPrivKey:address").not.empty);
        return await callRpc('dumpprivkey', [address]);
    }

    async function dumpWallet(fileName) {
        ow(fileName, ow.string.label("dumpWallet:fileName").not.empty);
        return await callRpc('dumpwallet', [fileName]);
    }

    

    async function getAccount(address) {
        ow(address, ow.string.label("getAccount:address").not.empty);
        return await callRpc('getaccount', [address]);
    }

    async function getAccountAddress(account) {
        ow(account, ow.string.label("getAccountAddress:account").not.empty);
        return await callRpc('getaccountaddress', arguments);
    }

    async function getAddressesByAccount(account) {
        ow(account, ow.string.label("getAddressesByAccount:account").not.empty);
        return await callRpc('getaddressesbyaccount', arguments);
    }

    async function getBalance(account, minConf, addLocked, includeWatchOnly) {
        ow(account, ow.string.label("getBalance:account").not.empty);
        if(minConf) {
            ow(minConf, ow.number.label("getBalance:minConf").integer.greaterThanOrEqual(1));
        }
        if(addLocked) {
            ow(addLocked, ow.boolean.label("getBalance:addLocked").is(x => x == true || x == false));
        }
        if(includeWatchOnly) {
            ow(includeWatchOnly, ow.boolean.label("getBalance:includeWatchOnly").is(x => x == true || x == false));
        }
        return await callRpc('getbalance', arguments);
    }

    async function getNewAddress(account) {
        if(account){
            ow(account, ow.string.label("getNewAddress:account").not.empty);
        }
        return await callRpc('getnewaddress', arguments);
    }

    async function getRawChangeAddress(address) {
        ow(address, ow.string.label("getRawChangeAddress:address").not.empty);
        return await callRpc('getrawchangeaddress', [address]);
    }

    async function getReceivedByAccount(account, minConf, addLocked) {
        ow(account, ow.string.label("getReceivedByAccount:account").not.empty);
        if(minConf) {
            ow(minConf, ow.number.label("getReceivedByAccount:minConf").integer.greaterThanOrEqual(1));
        }
        if(addLocked) {
            ow(addLocked, ow.boolean.label("getReceivedByAccount:addLocked").is(x => x == true || x == false));
        }
        return await callRpc('getreceivedbyaccount', arguments);
    }

    async function getReceivedByAddress(account, minConf, addLocked) {
        ow(account, ow.string.label("getReceivedByAddress:account").not.empty);
        if(minConf) {
            ow(minConf, ow.number.label("getReceivedByAddress:minConf").integer.greaterThanOrEqual(1));
        }
        if(addLocked) {
            ow(addLocked, ow.boolean.label("getReceivedByAddress:addLocked").is(x => x == true || x == false));
        }
        return await callRpc('getreceivedbyaddress', arguments)
    }

    async function getTransaction(txId, includeWatchOnly) {
        ow(txId, ow.string.label("getTransaction:txId").not.empty);
        if(includeWatchOnly) {
            ow(script, ow.boolean.label("getTransaction:includeWatchOnly").is(x => x == true || x == false));
        }
        return await callRpc('gettransaction', arguments);
    }

    async function getUnconfirmedBalance() {
        return await callRpc('getunconfirmedbalance');
    }

    async function getWalletInfo() {
        return await callRpc('getwalletinfo');
    }

    async function importAddress(script, label, rescan, p2sh) {
        ow(script, ow.string.label("importAddress:script").not.empty);
        if(label) {
            ow(label, ow.array.label("importAddress:label").not.empty);
        }
        if(recan) {
            ow(rescan, ow.boolean.label("importAddress:rescan").is(x => x == true || x == false));
        }
        if(p2sh) {
            ow(p2sh, ow.boolean.label("importAddress:p2sh").is(x => x == true || x == false));

        }
        return await callRpc('importaddress', arguments);
    }

    async function importElectrumWallet(fileName, index) {
        ow(fileName, ow.string.label("importMulti:requests").not.empty);
        if(index) {
            ow(index, ow.number.label("importMulti:index").integer.greaterThan(0));
        }
        return await callRpc('importelectrumwallet', arguments);
    }

    async function importMulti(requests, options) {
        ow(requests, ow.array.label("importMulti:requests").not.empty);
        if(options) {
            ow(options, ow.array.label("importMulti:options").not.empty);
        }
        return await callRpc('importmulti', arguments);
    }

    async function importPrivKey(syscoinPrivKey, label, rescan) {
        ow(syscoinPrivKey, ow.string.label("importPrivKey:syscoinPrivKey").not.empty);
        if(label) {
            ow(label, ow.string.label("importPrivKey:label").not.empty);
        }
        if(rescan) {
            ow(rescan, ow.boolean.label("importPrivKey:rescan").is(x => x == true || x == false));
        }
        return await callRpc('importprivkey', arguments);
    }

    async function importPrunedFunds(rawTransaction, txOutProof) {
        ow(rawTransaction, ow.string.label("importPrunedFunds:rawTransaction").not.empty);
        ow(txOutProof, ow.string.label("importPrunedFunds:txOutProof").not.empty);
        return await callRpc('importprunedfunds', [rawTransaction, txOutProof]);
    }

    async function importPubKey(pubKey, label, rescan) {
        ow(pubKey, ow.string.label("importPubKey:pubKey").not.empty);
        if(label) {
            ow(label, ow.string.label("importPubKey:label").not.empty);
        }
        if(rescan) {
            ow(rescan, ow.boolean.label("importPubKey:rescan").is(x => x == true || x == false));

        }
        return await callRpc('importpubkey', arguments);
    }

    async function importWallet(fileName) {
        ow(fileName, ow.string.label("importWallet:fileName").not.empty);
        return await callRpc('importwallet', [fileName]);
    }

    async function instantSendToAddress(address, amount, comment, commentTo, subtractFeeFromAmount) {
        ow(minConf, ow.string.label("listUnspent:minConf").not.empty);
        ow(amount, ow.number.label("listUnspent:amount").integer.greaterThan(0));
        if(comment) {
            ow(comment, ow.string.label("listUnspent:comment").minLength(0));
        }
        if(commentTo) {
            ow(commentTo, ow.string.label("listUnspent:commentTo").minLength(0));
        }
        if(subtractFeeFromAmount) {
            ow(subtractFeeFromAmount, ow.boolean.label("listUnspent:subtractFeeFromAmount").is(x => x == true  || x == false));
        }
        return await callRpc('instantsendtoaddress', arguments);
    }

    async function keePass(genKey) {
        if(genKey) {
            ow(genKey, ow.number.label("keePassn:genKey").integer.greaterThanOrEqual(1));
        }
        return await callRpc('keepass', genKey);
    }

    async function keyPoolRefill(newSize) {
        if(newSize) {
            ow(newSize, ow.number.label("keyPoolRefill:newSize").integer.greaterThanOrEqual(1));
        }
        return await callRpc('keypoolrefill', arguments);
    }

    async function listAccounts(minConf, addLocked, includeWatchOnly) {
        if(minConf){
            ow(minConf, ow.number.label("listAccounts:minConf").integer.greaterThanOrEqual(1));
        }
        if(addLocked){
            ow(addLocked, ow.boolean.label("listAccounts:addLocked").is(x => x == true || x == false));
        }
        if(includeWatchOnly){
            ow(includeWatchOnly, ow.boolean.label("listAccounts:includeWatchOnly").is(x => x == true || x == false));
        }
        return await callRpc('listaccounts', arguments);
    }

    async function listAddressBalances(minAmount) {
        if(minAmount) {
            ow(minAmount, ow.number.label("listAddressBalances:minAmount").integer.greaterThan(0));
        }
        return await callRpc('listaddressbalances', arguments);
    }

    async function listAddressGroupings() {
        return await callRpc('listaddressgroupings');
    }

    async function listLockUnspent() {
        return await callRpc('listlockunspent');
    }

    async function listReceivedByAccount(minConf, addLocked, includeEmpty, includeWatchOnly) {
        if(minConf){
            ow(minConf, ow.number.label("listReceivedByAccount:minConf").integer.greaterThanOrEqual(1));
        }
        if(addLocked) {
            ow(addLocked, ow.boolean.label("listReceivedByAccount:addLocked").is(x => x == true || x == false));
        }
        if(addressess) {
            ow(includeEmpty, ow.boolean.label("listReceivedByAccount:includeEmpty").is(x => x == true || x == false));
        }
        if(includeUnsafe){
            ow(includeWatchOnly, ow.boolean.label("listReceivedByAccount:includeWatchOnly").is(x => x == true || x == false));
        }
        return await callRpc('listreceivedbyaccount', arguments);
    }

    async function listReceivedByAddress(minConf, addLocked, includeEmpty, includeWatchOnly) {
        if(minConf){
            ow(minConf, ow.number.label("listReceivedByAddress:minConf").integer.greaterThanOrEqual(1));
        }
        if(addLocked) {
            ow(addLocked, ow.boolean.label("listReceivedByAddress:addLocked").is(x => x == true || x == false));
        }
        if(addressess) {
            ow(includeEmpty, ow.boolean.label("listReceivedByAddress:includeEmpty").is(x => x == true || x == false));
        }
        if(includeUnsafe){
            ow(includeWatchOnly, ow.boolean.label("listReceivedByAddress:includeWatchOnly").is(x => x == true || x == false));
        }
        return await callRpc('listreceivedbyaddress', arguments);
    }

    async function listSinceBlock(blockHash, targetConfirmations, includeWatchOnly) {
        if(blockHash) {
            ow(blockHash, ow.string.label("listSinceBlock:blockHash").not.empty);
        }
        if(targetConfirmations) {
            ow(targetConfirmations, ow.number.label("listSinceBlock:targetConfirmations").integer.greaterThan(0));

        }
        if(includeWatchOnly) {
            ow(includeWatchOnly, ow.boolean.label("listSinceBlock:includeWatchOnly").is(x => x == true || x == false));
        }
        return await callRpc('listsinceblock', arguments);
    }

    async function listTransactions(count = 10, skip = 0, includeWatchOnly = false) {
        if(count) {
            ow(count, ow.number.label("listUnspent:count").integer.greaterThan(0));
        }
        if(skip) {
            ow(skip, ow.number.label("listUnspent:skip").integer.greaterThan(0));
        }
        if(includeWatchOnly) {
            ow(includeUnsafe, ow.boolean.label("listUnspent:includeUnsafe").is(x => x == true || x == false));
        }
        return await callRpc('listtransactions', ["*", count, skip, includeWatchOnly]);
    }

    async function listUnspent(minConf, maxConf, addresses, includeUnsafe) {
        if(minConf){
            ow(minConf, ow.number.label("listUnspent:minConf").integer.greaterThanOrEqual(1));
        }
        if(maxConf) {
            ow(maxConf, ow.number.label("listUnspent:maxConf").integer.greaterThanOrEqual(1));
        }
        if(addressess) {
            ow(addresses, ow.object.label("listUnspent:addresses").not.empty);
        }
        if(includeUnsafe){
            ow(includeUnsafe, ow.boolean.label("listUnspent:includeUnsafe").is(x => x == true || x == false));
        }
        return await callRpc('listunspent', arguments);
    }

    async function lockUnspent(unlock, transactions) {
        ow(unlock, ow.string.label("lockUnspent:unlock").not.empty);
        ow(transactions, ow.string.label("lockUnspent:transactions").not.empty);
        return await callRpc('lockunspent', arguments);
    }

    async function move(fromAccount, toAccount, amount, dummy, comment) {
        ow(fromAccount, ow.string.label("move:fromAccount").not.empty);
        ow(toAccount, ow.string.label("move:toAccount").not.empty);
        ow(amount, ow.number.label("move:amount").integer.greaterThan(0));
        ow(dummy, ow.string.label("move:dummy").not.empty);
        ow(comment, ow.string.label("move:comment").string.minLength(0));
        return await callRpc('move', arguments);
    }

    async function pruneSyscoinServices() {
        return await callRpc('prunesyscoinservices');
    }

    async function removePrunedFunds(txId) {
        ow(txId, ow.string.label("removePrunedFunds:txId").not.empty);
        return await callRpc('removeprunedfunds', [txId]);
    }

    async function sendFrom(fromAccount, toAddress, amount, minConf, addLocked, comment, commentTo) {
        ow(fromAccount, ow.string.label("sendFrom:fromAccount").not.empty);
        ow(toAddress, ow.string.label("sendFrom:fromAccount").not.empty);
        ow(amount, ow.number.label("sendFrom:fromAccount").not.empty);
        if(minConf) {
            ow(number, ow.number.label("sendFrom:minConf").integer.greaterThanOrEqual(1));
        }
        if(addLocked) {
            ow(addLocked, ow.boolean.label("sendFrom:addLocked").is(x => x == true || x == false));
        }
        if(comment) {
            ow(comment, ow.string.label("sendFrom:comment").string.minLength(0));
        }
        if(commentTo) {
            ow(comment, ow.string.label("sendFrom:comment").string.minLength(0));
        }
        return await callRpc('sendfrom', arguments);
    }

    async function sendMany(fromAccount, amounts, minConf, addLocked, comment, subtractFeeFromAmount, useIs, usePs) {
        ow(fromAccount, ow.string.label("sendMany:fromAccount").not.empty);
        ow(amounts, ow.number.label("sendMany:amounts").integer.greaterThan(0));
        if(minConf) {
            ow(minConf, ow.number.label("sendMany:minConf").integer.greaterThanOrEqual(1));
        }
        if(addLocked) {
            ow(addLocked, ow.string.label("sendMany:addLocked").not.empty);
        }
        if(comment) {
            ow(comment, ow.string.label("sendMany:comment").string.minLength(0));
        }
        if(subtractFeeFromAmount) {
            ow(subtractFeeFromAmount, ow.boolean.label("sendToAddress:subtractFeeFromAmount").is(x => x == true || x == false));
        }
        if(useIs) {
            ow(useIs, ow.string.label("sendToAddress:useIs").not.empty);
        }
        if(usePs) {
            ow(usePs, ow.string.label("sendToAddress:usePs").not.empty);
        }

        return await callRpc('sendmany', arguments);
    }

    async function sendToAddress(address, amount, comment, commentTo, subtractFeeFromAmount, useIs, usePs) {
        ow(address, ow.string.label("sendToAddress:address").not.empty);
        ow(amount, ow.number.label("sendToAddress:amount").integer.greaterThan(0));
        if(comment){
            ow(comment, ow.string.label("sendToAddress:comment").not.empty);
        }
        if(commentTo) {
            ow(commentTo, ow.string.label("sendToAddress:commentTo").not.empty);
        }
        if(subtractFeeFromAmount) {
            ow(subtractFeeFromAmount, ow.boolean.label("sendToAddress:subtractFeeFromAmount").is(x => x == true || x == false));
        }
        if(useIs) {
            ow(useIs, ow.string.label("sendToAddress:useIs").not.empty);
        }
        if(usePs) {
            ow(usePs, ow.string.label("sendToAddress:usePs").not.empty);
        }
        return await callRpc('sendtoaddress', arguments);
    }

    async function setAccount(address, account) {
        ow(address, ow.string.label("setAccount:address").not.empty);
        ow(account, ow.string.label("setAccount:account").string.minLength(0));
        return await callRpc('setaccount', arguments);
    }

    async function setTxFee(amount) {
        ow(amount, ow.string.label("setTxFee(amount) {:amount").not.empty);
        return await callRpc('settxfee', [amount]);
    }

    async function signMessage(address, message) {
        ow(address, ow.string.label("signMessage:address").not.empty);
        ow(message, ow.string.label("signMessage:message").not.empty);
        return await callRpc('signmessage', [address, message]);
    }

    async function syscoinDecodeRawTransaction(hexString) {
        ow(hexString, ow.string.label("syscoinDecodeRawTransaction:hexString").not.empty);
        return await callRpc('syscoindecoderawtransaction', [hexString]);
    }

    async function syscoinListReceivedByAddress() {
        return await callRpc('syscoinlistreceivedbyaddress');
    }

    async function syscoinSendRawTransaction(hexString, allowHighFees, instantSend) {
        ow(hexString, ow.string.label("syscoinSendRawTransaction:hexString").not.empty);
        if(allowHighFees) {
            ow(allowHighFees, ow.boolean.label("syscoinSendRawTransaction:allowHighFees").is(x => x == true || x == false));
        }
        if(instantSend) {
            ow(instantSend, ow.boolean.label("syscoinSendRawTransaction:instantSend").is(x => x == true || x == false));
        }
        return await callRpc('syscoinsendrawtransaction', arguments);
    }

    async function syscoinTxFund(hexString, addresses) {
        ow(hexString, ow.string.label("syscoinTxFund:hexString").not.empty);
        if(addresses){
            ow(addresses, ow.object.label("syscoinTxFund:address").not.empty);
        }
        return await callRpc('syscointxfund', arguments);
    }

    async function tpsTestAdd(startTime, rawTransactions) {
        ow(startTime, ow.number.label("tpsTestAdd:startTime").integer.greaterThan(0));
        ow(rawTransactions, ow.array.label("tpsTestEnabled:enabled").not.empty);
        return await callRpc('tpstestadd', arguments);
    }

    async function tpsTestEnabled(enabled) {
        ow(enabled, ow.boolean.label("tpsTestEnabled:enabled").is(x => x == true || x == false));
        return await callRpc('tpstestenabled', [enabled]);
    }

    async function tpsTestInfo() {
        return await callRpc('tpstestinfo');
    }


    async function walletLock() {
        return await callRpc('walletlock');
    }

    async function walletPassPhrase(passPhrase, timeout, mixingOnly) {
        ow(passphrase, ow.string.label("walletPassPhrase:passphrase").not.empty);
        ow(timeout, ow.number.label("walletPassPhrase:timeout").integer.greaterThan(0));
        ow(mixingOnly, ow.boolean.label("walletPassPhrase:mixingOnly").is(x => x == true || x == false));
        return await callRpc('walletpassphrase', arguments);
    }

    async function walletPassPhraseChange(oldPassphrase, newPassphrase) {
        ow(passphrase, ow.string.label("walletPassPhraseChange:oldPassphrase").not.empty);
        ow(newPassphrase, ow.string.label("walletPassPhraseChange:newPassphrase").not.empty);
        return await callRpc('walletpassphrasechange', [oldPassphrase, newPassphrase]);
    }

    async function encryptWallet(passphrase) {
        ow(passphrase, ow.string.label("encryptWallet:passphrase").not.empty);
        return await callRpc('encryptwallet', passphrase);
    }

    async function getWalletLoadPercentage() {
        const walletInfo = await callRpc('getwalletinfo');
        return getPercentageFromWalletInfo(walletInfo);
    }
}

export function getPercentageFromWalletInfo(walletInfo) {
    if (walletInfo.walletversion) { return 100 }
    if (walletInfo.code === constants.ERROR_CODE_NO_CONNECTION) { return false }
    if (walletInfo.message || walletInfo.code === constants.ERROR_CODE_WALLET_LOADING) {
        return walletInfo.message.replace(/\D/g, '') / 100;
    }
    return 0
} 