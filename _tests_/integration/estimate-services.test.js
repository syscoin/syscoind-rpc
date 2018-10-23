import {createClient} from '../utilities';
import config from "../config";

const configOptions = config;

describe('Estimate Services Tests', () => {
    let client;
    const ranBlockHeight = 123;
    const invalidBlockCount = -5;
    const expectedFeesForInvalidBlockCount = -1;
    const edgeCaseBlockCount = 5;
    const ExpectedMinimumBlock = 25;
    const testAlias = {
        aliasName: 'test',
        publicValue: '',
        transfersFlag: 3,
        expireTimestamp: 0,
        address: '',
        encPrivateKey: '',
        encPublicKey: '',
        witness: ''
    }

    beforeAll(async () => {
        client = await createClient(configOptions);
    });

    describe('estimatefee', () => {
        it(`with nBlocks > 0`, async () => {
            let fees = await client.estimateServices.estimateFee({numberOfBlocks: ranBlockHeight});
            expect(fees).toBe(-1);
        });

    });

    describe('estimatePriority', () => {
        it('with nBlocks > 0', async () => {
            let fees = await client.estimateServices.estimatePriority({numberOfBlocks:ranBlockHeight});
            expect(fees).toBe(-1);
        });
    });

    describe('estimateSmartFee', () => {
        let fees;
        let edgeFees;
        beforeAll(async () => {
            fees = await client.estimateServices.estimateSmartFee({numberOfBlocks:ranBlockHeight});
            edgeFees = await client.estimateServices.estimateSmartFee({numberOfBlocks:edgeCaseBlockCount});
        });

        it('with nBlocks > 0 blocks', async () => {
            expect(fees.blocks).toEqual(ranBlockHeight);
        });

        it('with nBlocks > 0 feerate', async () => {
            expect(fees.feerate).toBe(-1);
        });
    });

    describe('estimateSmartPriority', () => {
        let fees;
        let invalidFees;
        beforeAll(async () => {
            fees = await client.estimateServices.estimateSmartPriority({numberOfBlocks:ranBlockHeight});
        });
        it('with nBLocks > 0 blocks', async () => {
            console.log("E-test")
            expect(fees.blocks).toEqual(ranBlockHeight);
        });

        it('with nBLocks > 0 priority', async () => {
            expect(fees.priority).toBe(-1);
        });
    });

    describe('aliasnewestimatedfee (valid)', () => {
        let aliasEta;
        beforeAll(async () => {
            aliasEta = await client.estimateServices.aliasNewEstimatedFee({aliasName: testAlias.aliasName,
                    publicValue: testAlias.publicValue, transfersFlag: testAlias.transfersFlag,
                expireTimestamp: testAlias.expireTimestamp, address: testAlias.address, encPrivateKey: testAlias.encPrivateKey,
                encPublicKey: testAlias.encPublicKey, witness: testAlias.witness})
        });

        it(`should return the eta cost`, async () => {
            expect(aliasEta[0]).toBeGreaterThan(0);
        });

    });

    describe('aliasupdateestimatedfee (valid)', () => {
        let aliasUpdateEta, aliasInfo;
        beforeAll(async () => {
            let newAliasId = await client.walletServices.getNewAddress();
            let rStepOne = await client.walletServices.alias.new(newAliasId, "", 3, 0, "", "", "", "");
            let rStepTwo = await client.walletServices.syscoinTxFund(rStepOne[0]);
            let rStepThree = await client.transactionServices.signRawTransaction(rStepTwo[0]);
            let rStepFour = await client.walletServices.syscoinSendRawTransaction(rStepThree.hex);
            await client.generationServices.generate(1);

            let stepOne = await client.walletServices.alias.new(newAliasId, "", 3, 0, "", "", "", "");
            let stepTwo = await client.walletServices.syscoinTxFund(stepOne[0]);
            let stepThree = await client.transactionServices.signRawTransaction(stepTwo[0]);
            let stepFour = await client.walletServices.syscoinSendRawTransaction(stepThree.hex);
            await client.generationServices.generate(1);

            aliasInfo = await client.walletServices.alias.info(newAliasId);

            aliasUpdateEta = await client.estimateServices.aliasUpdateEstimatedFee({aliasName: aliasInfo._id, publicValue: testAlias.publicValue,
                    address: testAlias.address, transfersFlag: testAlias.transfersFlag, expireTimestamp: testAlias.expireTimestamp, encPrivateKey:
                testAlias.encPrivateKey, encPublicKey: testAlias.encPublicKey, witness: testAlias.witness});
        });

        it(`should return aliasupdate eta fee cost`, async () => {
            expect(aliasUpdateEta.code).toEqual(-1);
        });

    });
})