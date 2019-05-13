export default class RpcException {
    public result?: string;
    public message?: any;
    public code: any;
    public methodName: string;

    constructor(responseData) {
        this.result = responseData.result;
        this.message = responseData.error;
        this.code = responseData.code;
        this.methodName = responseData.methodName || '';
    }
    
}