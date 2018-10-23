import {createClient} from '../utilities';
import config from "../config";

const configOptions = config;


const parentHash = '0';
const revision = '1';

let hexEncode = (str) => {
    let hex, i, result;
    result = "";

    for (i=0; i<str.length; i++) {
        hex = str.charCodeAt(i).toString(16);
        result += hex;
    }

    return result
}

let addDays = (date, days) => {
    date.setDate(date.getDate() + days);
    return date;
} 

let createProposal = (address) => {
    let d, start, end, proposalStr;

    d = new Date();
    start = Math.floor(d / 1000);
    end = Math.floor(addDays(d, 10) / 1000);

    proposalStr = `[["proposal",{"name":"First_Proposal","type":1,"start_epoch":${start},"end_epoch":${end},"payment_address":"${address}","payment_amount":10,"url":"https://www.blockchainfoundry.co"}]]`;

    return hexEncode(proposalStr);
}

describe('Governance Service Tests', () => {
    let client, address;
   
    beforeAll( async() => {
        try {
            client = await createClient(configOptions);
            address = await client.walletServices.getNewAddress();
        } catch (e) {
            console.log("E-ERROR: " + e);
        }
    });

    describe('gobject check', () => {
        it('Validate governance object data (proposal only)', async() => {
            let proposal;

            proposal =  createProposal(address);
            let result = await client.governanceServices.checkProposal({proposal: proposal});
            expect(result['Object status']).toBe("OK");
        });
    });

    describe('gobject prepare', () => {
        it('Prepare governance object by signing and creating tx', async() => {
            let proposal, time, result;
            time = Math.floor(new Date() / 1000);

            //create proposal
            proposal =  createProposal(address);
            result = await client.governanceServices.checkProposal({proposal:proposal});
            expect(result['Object status']).toBe("OK");
            
            //prepare gobject
            //TODO
            result = await client.governanceServices.prepareGovernanceObject(parentHash, revision, time.toString(), proposal);
            expect(typeof result).toBe('string');
        });
    });

    describe('gobject count', () => {
        it('Count governance objects and votes returns object', async() => {
            let result = await client.governanceServices.count();
            expect(typeof result).toBe('object');
        });
        it('Count governance objects and votes returns string', async() => {
            let result = await client.governanceServices.count('all');
            expect(typeof result).toBe('string');
        });
    });
});