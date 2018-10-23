import {createClient} from '../utilities';
import config from "../config";

const configOptions = config;

describe('Utility Services Tests', () => {
    let client;
    const multisigAddressLength = 35;
    const addressLength = 34;

    beforeAll(async () => {
        client = await createClient(configOptions);
    });

    describe('createmultisig with 2+ signatures', () => {
        let multisigAddy
        beforeAll(async () => {
            const addyOne = await client.walletServices.getNewAddress();
            const addyTwo = await client.walletServices.getNewAddress();
            multisigAddy = await client.utilityServices.createMultiSig({numberOfRequiredSignatures: 2, keys: [addyOne, addyTwo]})
        });

        it(`sys address length`, async () => {
            expect(multisigAddy.address.length).toEqual(multisigAddressLength);
        });

        it(`btc address length`, async () => {
            expect(multisigAddy.btcaddress.length).toEqual(multisigAddressLength);
        });

        it(`zcash address length`, async () => {
            expect(multisigAddy.zaddress.length).toEqual(multisigAddressLength);
        });

        it(`redeemScriptlength`, async () => {
            expect(multisigAddy.redeemScript.length).toBeGreaterThan(0)
        });
    });

    describe('validateaddress (with valid address)', () => {
        let validateAddressInfo;
        beforeAll(async () => {
            const newAddress = await client.walletServices.getNewAddress();
            validateAddressInfo = await client.utilityServices.validateAddress({address: newAddress})
        });

        it(`sys address length`, async () => {
            expect(validateAddressInfo.address.length).toEqual(addressLength);
        });

        it(`btc address length`, async () => {
            expect(validateAddressInfo.btcaddress.length).toEqual(addressLength);
        });

        it(`zcash address length`, async () => {
            expect(validateAddressInfo.zaddress.length).toEqual(35);
        });

        it(`s address length`, async () => {
            expect(validateAddressInfo.saddress.length).toEqual(addressLength);
        });

        it(`s address length`, async () => {
            expect(validateAddressInfo.alias.length).toEqual(0);
        });

        it(`scriptPubKey length`, async () => {
            expect(validateAddressInfo.scriptPubKey.length).toBeGreaterThan(0);
        });

        it(`ismine`, async () => {
            expect(typeof (validateAddressInfo.ismine)).toEqual('boolean');
        });

        it(`iswatchonly`, async () => {
            expect(typeof(validateAddressInfo.iswatchonly)).toEqual('boolean');
        });

        it(`isscript`, async () => {
            expect(typeof (validateAddressInfo.isscript)).toEqual('boolean');
        });

        it(`pubkey`, async () => {
            expect(validateAddressInfo.pubkey.length).toBeGreaterThan(0);
        });

        it(`iscompressed`, async () => {
            expect(typeof (validateAddressInfo.iscompressed)).toEqual('boolean');
        });

        it(`account`, async () => {
            expect(validateAddressInfo.account).toEqual('');
        });

        it(`account`, async () => {
            expect(validateAddressInfo.timestamp).toBeGreaterThan(0);
        });

        it(`hdkeypath`, async () => {
            expect(validateAddressInfo.hdkeypath).toContain("m/44\'/1\'/0\'/0");
        });

        it(`hdchainid`, async () => {
            expect(validateAddressInfo.hdchainid.length).toBeGreaterThan(0);
        });
    });

    describe('validateaddress (with invalid address)', () => {
        let validateAddressInfo;
        beforeAll(async () => {
            validateAddressInfo = await client.utilityServices.validateAddress({address: ''})
        });

        it(`should return isValid=false`, async () => {
            expect(validateAddressInfo.isvalid).toEqual(false);
        });

    });

    describe('debug (valid)', () => {
        let debugInfo;
        let debugCmd = 'addrman'
        beforeAll(async () => {
            debugInfo = await client.utilityServices.debug({category: debugCmd})
        });

        it(`should return debug mode with passed in mode`, async () => {
            expect(debugInfo).toContain(debugCmd);
        });

    });

    describe('debug (invalid)', () => {
        let debugInfo;
        beforeAll(async () => {
            debugInfo = await client.utilityServices.debug({category: ''});
        });

        it(`should return empty as debug mode`, async () => {
            expect(debugInfo.replace('Debug mode: ', '')).toBe('');
        });

    });

    describe('help (valid)', () => {
        let debugInfo;
        const helpCmd = 'sendrawtransaction'
        beforeAll(async () => {
            debugInfo = await client.utilityServices.help({command: helpCmd})
        });

        it(`result should contain "${helpCmd}" as a substring`, async () => {
            expect(debugInfo).toContain(helpCmd);
        });
    });
})