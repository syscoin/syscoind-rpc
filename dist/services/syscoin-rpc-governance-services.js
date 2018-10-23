import { get, post } from '../endpoint-decorators';
import ow from "syscoin-ow";

export function syscoinRpcGovernanceServices(callRpc) {
    return {
        checkProposal: get(checkProposal),
        count: get(count),
        deserializeGovernanceObject: post(deserializeGovernanceObject),
        differencesSinceLastComparison: get(differencesSinceLastComparison),
        getByHash: get(getByHash),
        getGovernanceInfo: get(getGovernanceInfo),
        getSuperblockBudget: get(getSuperblockBudget),
        getCurrentVotes: get(getCurrentVotes),
        getVotes: get(getVotes),
        list: get(list),
        prepareGovernanceObject: get(prepareGovernanceObject),
        submitGovernanceObject: post(submitGovernanceObject),
        vote: post(governanceVote),
        voteByName: post(governanceVoteByName),
        voteMany: get(governanceVoteMany),
        voteRaw: post(governanceVoteRaw),
        gobject: post(callGovernanceCommand)
    };

    async function callGovernanceCommand({ args }) {
        ow(args, ow.string.label("callGovernanceCommand:args").not.empty);
        return await callRpc('gobject', args);
    }

    async function checkProposal({ proposal }) {
        ow(proposal, ow.string.label("checkProposal:proposal").not.empty);
        return await callGovernanceCommand(['check', proposal]);
    }

    async function count({ format }) {
        ow(format, ow.string.label("count:format").not.empty);
        return await callGovernanceCommand(['count', format]);
    }

    async function deserializeGovernanceObject() {
        return await callGovernanceCommand('deserialize');
    }

    async function differencesSinceLastComparison() {
        return await callGovernanceCommand('diff');
    }

    async function getByHash() {
        return await callGovernanceCommand('get');
    }

    async function getGovernanceInfo() {
        // This looks different from the other 10 methods.  That's intentional;
        // getting info is not a 'gobject' command.
        return await callRpc('getgovernanceinfo');
    }

    async function getSuperblockBudget({ blockIndex }) {
        ow(blockIndex, ow.number.label("getSuperblockBudget:blockIndex").integer.greaterThanOrEqual(0));
        return await callGovernanceCommand('getsuperblockbudget', [blockIndex]);
    }

    async function getCurrentVotes() {
        return await callGovernanceCommand('getcurrentvotes');
    }

    async function getVotes() {
        return await callGovernanceCommand('getvotes');
    }

    async function list() {
        return await callGovernanceCommand('list');
    }

    async function prepareGovernanceObject(...args) {
        ow(args, ow.string.label("callGovernanceCommand:...args").not.empty);
        return await callGovernanceCommand(['prepare', ...args]);
    }

    async function submitGovernanceObject() {
        return await callGovernanceCommand('submit');
    }

    async function governanceVote() {
        return await callGovernanceCommand('vote');
    }

    async function governanceVoteByName() {
        return await callGovernanceCommand('vote-name');
    }

    async function governanceVoteMany() {
        return await callGovernanceCommand('vote-many');
    }

    async function governanceVoteRaw({ masterNodeTxHash,
        masterNodeTxIndex,
        governanceHash,
        voteSignal,
        vote,
        time,
        voteSignature }) {
        ow(masterNodeTxHash, ow.string.label("callGovernanceCommand:format").not.empty);
        ow(masterNodeTxIndex, ow.number.label("callGovernanceCommand:format").integer.greaterThanOrEqual(0));
        ow(governanceHash, ow.string.label("callGovernanceCommand:format").not.empty);
        ow(voteSignal, ow.string.label("callGovernanceCommand:format").not.empty);
        ow(vote, ow.string.label("callGovernanceCommand:vote").is(x => x == "yes" || x == "no" || x == "abstain"));
        ow(time, ow.number.label("callGovernanceCommand:time").integer.greaterThanOrEqual(0));
        ow(voteSignature, ow.string.label("callGovernanceCommand:voteSignature").not.empty);
        return await callRpc('voteraw', arguments);
    }
}