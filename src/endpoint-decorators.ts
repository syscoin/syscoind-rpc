export function get<T extends Function>(sdkMethod: T): T {
    (sdkMethod as any).httpMethod = 'get';
    return sdkMethod;
}

export function post(sdkMethod) {
    (sdkMethod as any).httpMethod = 'post';
    return sdkMethod;
}

export interface HTTPFunction extends Function {
    httpMethod: string;
}

