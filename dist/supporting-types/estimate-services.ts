export default interface EstimateServices {
     estimateFee({numberOfBlocks}: {numberOfBlocks:number}) : Promise<any>;
     estimatePriority({numberOfBlocks}: {numberOfBlocks:number}): Promise<any>; 
     estimateSmartFee({numberOfBlocks}: {numberOfBlocks:number}): Promise<any>;
     estimateSmartPriority({numberOfBlocks}: {numberOfBlocks:number}): Promise<any>;
     aliasNewEstimatedFee({aliasName,publicValue,transfersFlag,expireTimestamp,address,encPrivateKey,encPublicKey,witness}:
            {aliasName: string, publicValue: string, transfersFlag: number, expireTimestamp: number,
            address: string, encPrivateKey: string, encPublicKey: string, witness: string}) : Promise<any>;
     aliasUpdateEstimatedFee({aliasName, publicValue, address, transfersFlag, expireTimestamp, encPrivateKey,
                                        encPublicKey, witness}: {aliasName: string, publicValue: string, address: string, transfersFlag: number,
                                        expireTimestamp: number, encPrivateKey: string, encPublicKey: string, witness: string}): Promise<any>;
}