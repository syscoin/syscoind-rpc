export function get(sdkMethod) {
    sdkMethod.httpMethod = 'get';
    return sdkMethod;
}

export function post(sdkMethod) {
    sdkMethod.httpMethod = 'post';
    return sdkMethod;
}

