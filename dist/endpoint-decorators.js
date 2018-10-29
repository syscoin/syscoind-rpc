'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.get = get;
exports.post = post;
function get(sdkMethod) {
    sdkMethod.httpMethod = 'get';
    return sdkMethod;
}

function post(sdkMethod) {
    sdkMethod.httpMethod = 'post';
    return sdkMethod;
}