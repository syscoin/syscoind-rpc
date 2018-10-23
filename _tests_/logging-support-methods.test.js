import {methodShouldBeLogged,createListing} from '../src/loggers/logging-support-methods';

describe('methodShouldBeLogged', () => {

    it('returns true if method exists in whitelist', async() => {
        let listing = {
            whitelist: ['mymethod'],
            blacklist: []
        }
        expect(methodShouldBeLogged('mymethod',listing)).toBe(true);
    });

    it('returns false if method does not exist in whitelist and whitelist is non-empty', async() => {
        let listing = {
            whitelist: ['mymethod'],
            blacklist: []
        }
        expect(methodShouldBeLogged('myothermethod',listing)).toBe(false);
    });

    it('returns false if method exists in blacklist', async() => {
        let listing = {
            whitelist: [],
            blacklist: ['mymethod']
        }
        expect(methodShouldBeLogged('mymethod',listing)).toBe(false);
    });

    it('returns true if blacklist exists but method is not in blacklist', async() => {
        let listing = {
            whitelist: [],
            blacklist: ['mymethod']
        }
        expect(methodShouldBeLogged('mygoodmethod',listing)).toBe(true);
    });

    it('returns true if method exists in blacklist *and* whitelist (since it overrides)', async() => {
        let listing = {
            whitelist: ['mymethod'],
            blacklist: ['mymethod']
        }
        expect(methodShouldBeLogged('mymethod',listing)).toBe(true);
    });

    it('returns true if blacklist and whitelist are empty', async() => {
        let listing = {
            whitelist: [],
            blacklist: []
        }
        expect(methodShouldBeLogged('mymethod',listing)).toBe(true);
    });
})