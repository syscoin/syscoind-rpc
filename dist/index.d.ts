// Disclosure: do not love Typescript.
// However, for the proletariat out there we have provided
// this type definitions so that you too can have the warm
// hug of static typing inside of a dynamic language.  Boo yah.

declare module 'syscoin-js' {
    export default class SyscoinRpcClient {
        constructor({baseUrl,
                port,
                username,
                password,
                useSsl,
                timeout,
                customHttpAgent,
                loggerLevel,
                whitelist,
                blacklist}: {baseUrl?: string,
                    port?: number | string,
                    username?: string,
                    password?: string,
                    useSsl?: boolean,
                    timeout?: number,
                    customHttpAgent?: any,
                    loggerLevel?: string,
                    whitelist?: Array<string>,
                    blacklist?: Array<string>});
    }
}