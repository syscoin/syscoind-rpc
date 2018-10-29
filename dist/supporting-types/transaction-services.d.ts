export default interface TransactionServices {
    createRawTransaction({inputs, outputs, lockTime}: {inputs:Array<string>, outputs:Array<string>, lockTime:number}): Promise<any>;
    decodeRawTransaction({hexString}: {hexString: string}): Promise<any>;
    decodeScript({hexString}: {hexString: string}): Promise<any>;
    fundRawTransaction({hexString, options}: {hexString: string, options: any}): Promise<any>;
    getRawTransaction({txId}: {txId:string}): Promise<any>;
    getRawTransactionVerbose({txId}: {txId:string}): Promise<any>;
    sendRawTransaction({hexString, allowHighFees,instantSend,bypassLimits}: {hexString:string, allowHighFees?:boolean,instantSend?:boolean,bypassLimits?:boolean}): Promise<any>;
    signRawTransaction({hexString, previousTransactionOutputs, privateKeys, signatureHashType}: 
        {hexString: string, previousTransactionOutputs?: Array<any>, privateKeys?: Array<string>, signatureHashType?: string})
}
