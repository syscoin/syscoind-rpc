import WalletAliasServices from "./wallet/wallet-alias-services";
import WalletAssetServices from "./wallet/wallet-asset-services";
import WalletAssetAllocationServices from "./wallet/wallet-asset-allocation-services";
import WalletCertificateServices from "./wallet/wallet-certificate-services";
import WalletEscrowServices from "./wallet/wallet-escrow-services";

export default interface WalletServices {
    alias: WalletAliasServices
    asset: WalletAssetServices
    assetAllocation: WalletAssetAllocationServices
    certificate: WalletCertificateServices
    escrow: WalletEscrowServices
    abandonTransaction({txId}: {txId: string}): Promise<any>;
    addMultiSigAddress({nRequired, keys, account}: {nRequired: number, keys: Array<string>, account?: String }): Promise<any>;
    backupWallet({destination}: {destination: string}): Promise<any>;
    dumpHdInfo(): Promise<any>;
    dumpPrivKey({address}: {address: string}): Promise<any>;
    dumpWallet({fileName}: {fileName: string}): Promise<any>;
    getAccount({address}: {address: string}): Promise<any>;
    getAccountAddress({account}: {account: string}): Promise<any>;
    getAddressesByAccount({account}: {account: string}): Promise<any>;
    getBalance({account, minConf, addLocked, includeWatchOnly}: {account: string, minConf?: number, addLocked?: boolean,
        includeWatchOnly?: boolean}): Promise<any>;
    getNewAddress({account}: {account?: string}): Promise<any>;
    getRawChangeAddress({address}: {address: string}): Promise<any>;
    getReceivedByAccount({account, minConf, addLocked}: {account: string, minConf?: number, addLocked?: boolean}): Promise<any>;
    getReceivedByAddress({account, minConf, addLocked}: {account: string, minConf?: number, addLocked?: boolean}): Promise<any>;
    getTransaction({txId, includeWatchOnly}: {txId: string, includeWatchOnly?; boolean}): Promise<any>;
    getUnconfirmedBalance(): Promise<any>;
    getWalletInfo(): Promise<any>;
    importAddress({script, label, rescan, p2sh}: {script: string, label?: Array<string>, rescan?: boolean,
        p2sh?: boolean}): Promise<any>;
    importElectrumWallet({fileName, index}: {fileName: string, index?: number}): Promise<any>;
    importMulti({requests, options}: {requests: Array<string>, options?: Array<string>}): Promise<any>;
    importPrivKey({syscoinPrivKey, label, rescan}: {syscoinPrivKey: string, label?: string, rescan?: boolean}): Promise<any>;
    importPrunedFunds({rawTransaction, txOutProof}: {rawTransaction: string, txOutProof: string}): Promise<any>;
    importPubKey({pubKey, label, rescan}: {pubKey: string, label?: string, rescan?: boolean}): Promise<any>;
    importWallet({fileName}: {fileName: string}): Promise<any>;
    instantSendToAddress({address, amount, comment, commentTo, subtractFeeFromAmount}: {address: string, amount: number,
        comment?: string, commentTo?: string, subtractFeeFromAmount?: boolean}): Promise<any>;
    keePass({genKey}: {genKey: number}): Promise<any>;
    keyPoolRefill({newSize}: {newSize?: number}): Promise<any>;
    listAcccounts({minConf, addLocked, includeWatchOnly}: {minConf?: number, addLocked?: boolean, includeWatchOnly?: boolean}): Promise<any>;
    listAddressBalances({minAmount}: {minAmount?: number}): Promise<any>;
    listAddressGroupings(): Promise<any>;
    listLockUnspent(): Promise<any>;
    listReceivedByAccount({minConf, addLocked, includeEmpty, includeWatchOnly}: {minConf?: number, addLocked?: boolean,
        includeEmpty?: boolean, includeWatchOnly?: boolean}): Promise<boolean>;
    listReceivedByAddress({minConf, addLocked, includeEmpty, includeWatchOnly}: {minConf?: number, addLocked?: boolean,
        includeEmpty?: boolean, includeWatchOnly?: boolean}): Promise<boolean>;
    listSinceBlock({blockHash, targetConfirmations, includeWatchOnly}: {blockHash?: string, targetConfirmations?: number, includeWatchOnly?: boolean}): Promise<any>;
    listTransactions({count, skip, includeWatchOnly}: {count?: number, skip?: number, includeWatchOnly?: boolean});
    listUnspent({minConf, maxConf, addresses, includeUnsafe}: {minConf?: number, maxConf?: number, addresses?: object,
        includeUnsafe?: boolean}): Promise<any>;
    lockUnspent({unlock, transactions}: {unlock: string, transactions: string}): Promise<any>;
    move({fromAccount, toAccount, amount, dummy, comment}: {fromAccount: string, toAccount: string, amount: number,
        dummy: string, comment: string}): Promise<any>;
    pruneSyscoinServices(): Promise<any>;
    removePrunedFunds({txId}: {txId: string}): Promise<any>;
    sendFrom({fromAccount, toAddress, amount, minConf, addLocked, comment, commentTo}: {fromAccount: string,
        toAddress: string, amount: number, minConf?: number, addLocked?: boolean, comment?: string,
        commentTo?: string}): Promise<any>;
    sendMany({fromAccount, amounts, minConf, addLocked, comment, subtractFeeFromAmount, useIs, usePs}:
                 {fromAccount: string, amounts: number, minConf?: number, addLocked?: boolean, comment?: string,
                     subtractFeeFromAmount?: boolean, useIs?: boolean, usePs?: boolean}): Promise<any>;
    sendToAddress({address, amount, comment, commentTo, subtractedFeeAmount, useIs, usePs}: {address: string,
        amount: number, comment?: string, commentTo?: string, subtractedFeeAmount?: boolean, useIs?: boolean, usePs?: boolean}): Promise<any>;
    setAccount({address, account}: {address: string, account: string}): Promise<any>;
    setTxFee({amount}: {amount: string}): Promise<any>;
    signMessage({address, message}: {address: string, message: string}): Promise<any>;
    syscoinDecodeRawTransaction({hexString}: {hexString: string}): Promise<any>;
    syscoinListReceivedByAddress(): Promise<any>;
    syscoinSendRawTransaction({hexString, allowHighFees, instantSend}: {hexString: string, allowHighFees?: boolean, instantSend?: boolean}): Promise<any>;
    syscoinTxFund({hexString, addresses}: {hexString: string, addresses?: string}): Promise<any>;
    tpsTestAdd({startTime, rawTransactions}: {startTime: number, rawTransactions: object}): Promise<any>;
    tpsTestEnabled({enabled}: {enabled: boolean}): Promise<any>;
    tpsTestInfo(): Promise<any>;
    walletLock(): Promise<any>;
    walletPassPhrase({passPhrase, timeout, mixingOnly}: {passPhrase: string, timeout: number, mixingOnly: boolean}): Promise<any>;
    walletPassPhraseChange({oldPassPhrase, newPassPhrase}: {oldPassPhrase: string, newPassPhrase: string}): Promise<any>;
    encryptWallet({passphrase}: {passphrase: string}): Promise<any>;
    getWalletLoadPercentage(): Promise<any>;
    getPercentageFromWalletInfo({walletInfo}: {walletInfo: object}): Promise<any>;
}