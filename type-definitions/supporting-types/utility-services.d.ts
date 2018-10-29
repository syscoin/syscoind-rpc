export default interface UtilityServices {
    createMultiSig({numberOfRequiredSignatures, keys}: {numberOfRequiredSignatures:number,keys:Array<string>}): Promise<any>;
    validateAddress({address}: {address: string}): Promise<any>;
    debug({category}: {category:string}): Promise<any>;
    help({command}: {command:string}): Promise<any>;
    tpsTestSetEnabled({enabled}: {enabled:boolean}): Promise<any>;
    tpsTestAdd({startTime, rawTx}: {startTime:number,rawTx:Array<string>}): Promise<any>;
}
