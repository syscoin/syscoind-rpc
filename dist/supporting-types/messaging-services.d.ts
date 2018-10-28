export default interface MessagingServices {
    signMessage({privateKey, message}: {privateKey: string, message:string}): Promise<any>;
    verifyMessage({address, signature, message}: {address: string, signature: string, message: string}): Promise<any>;
}