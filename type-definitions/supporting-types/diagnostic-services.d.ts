export default interface DiagnosticServices {
    getAllRawRpcMethods(): Promise<Array<{method:string,arguments:string}>>;
    helpForRpcCommand({commandName}:{commandName:string}): Promise<any>;
}
