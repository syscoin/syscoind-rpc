export default class RpcException {
    
    constructor(responseData) {
        this.result = responseData.result;
        this.message = responseData.error;
        this.code = responseData.code;
        this.methodName = responseData.methodName || '';
    }
    
}