import {get, post} from '../endpoint-decorators';
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
        listAll: get(listAll),
        listFunding: get(listFunding),
        listDelete: get(listDelete),
        listValid: get(listValid),
        listEndorsed: get(listEndorsed),
        prepareGovernanceObject: get(prepareGovernanceObject),
        submitGovernanceObject: post(submitGovernanceObject),
        vote: post(governanceVote),
        voteByName: post(governanceVoteByName),
        voteMany: get(governanceVoteMany),
        voteRaw: post(governanceVoteRaw),
        gobject: post(callGovernanceCommand)
    }

    async function callGovernanceCommand(args) {
        ow(args, ow.string.label("callGovernanceCommand:args").not.empty);
        return await callRpc('gobject', args)
    }

    async function checkProposal({hex}) {
        ow(proposal, ow.string.label("checkProposal:proposal").not.empty);
        return await callGovernanceCommand(['check', hex]);
    }

    async function count({format}) {
        ow(format, ow.string.label("count:format").not.empty);
        return await callGovernanceCommand(['count', format]);
    }

    async function deserializeGovernanceObject({dataHex}) {
        ow(dataHex, ow.string.label("deserializeGovernanceObject.dataHex").not.empty);
        return await callGovernanceCommand(['deserialize']);
    }

    async function differencesSinceLastComparison() {
        return await callGovernanceCommand(['diff']);
    }

    async function getByHash({hash}) {
        ow(hash, ow.string.label("getByHash.hash").not.empty);
        return await callGovernanceCommand(['get', hash]);
    }

    async function getGovernanceInfo() {
        // This looks different from the other 10 methods.  That's intentional;
        // getting info is not a 'gobject' command.
        return await callRpc('getgovernanceinfo');
    }

    async function getSuperblockBudget({blockIndex}) {
        ow(blockIndex, ow.number.label("getSuperblockBudget:blockIndex").integer.greaterThan(0));
        return await callGovernanceCommand(['getsuperblockbudget', blockIndex])
    }

    async function getCurrentVotes() {
        return await callGovernanceCommand('getcurrentvotes')
    }

    async function getVotes({hash}) {
        ow(hash, ow.string.label("getVotes.hash").not.empty);
        return await callGovernanceCommand(['getvotes', hash]);
    }

    async function listAll() {
        return await callGovernanceCommand(['list', 'all']);
    }

    async function listValid() {
        return await callGovernanceCommand(['list', 'valid']);
    }

    async function listFunding() {
        return await callGovernanceCommand(['list', 'funding']);
    }

    async function listDelete() {
        return await callGovernanceCommand(['list', 'delete']);
    }

    async function listEndorsed() {
        return await callGovernanceCommand(['list', 'endorsed']);
    }

    async function prepareGovernanceObject({parentHash,revision,time,dataHex})  {
        ow(parentHash, ow.string.label('prepareGovernanceObject.parentHash').not.empty);
        ow(revision, ow.number.label('prepareGovernanceObject.revision').not.empty);
        ow(time, ow.number.label('prepareGovernanceObject.time').not.empty);
        ow(dataHex, ow.string.label("prepareGovernanceObject.dataHex").not.empty);
        return await callGovernanceCommand(['prepare', parentHash, revision, time, dataHex]);
    }

    async function submitGovernanceObject({parentHash,revision,time,dataHex,feeTxId}) {
        ow(parentHash, ow.string.label('submitGovernanceObject.parentHash').not.empty);
        ow(revision, ow.number.label('submitGovernanceObject.revision').not.empty);
        ow(time, ow.number.label('submitGovernanceObject.time').not.empty);
        ow(dataHex, ow.string.label("submitGovernanceObject.dataHex").not.empty);
        ow(feeTxId, ow.string.label("submitGovernanceObject.feeTxId").not.empty);
        return await callGovernanceCommand(['submit', parentHash, revision, time, dataHex, feeTxId]);
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

    async function governanceVoteRaw({masterNodeTxHash,
                                masterNodeTxIndex,
                                governanceHash,
                                voteSignal,
                                vote,
                                time,
                                voteSignature})  {
        ow(masterNodeTxHash, ow.string.label("callGovernanceCommand:format").not.empty);
        ow(masterNodeTxIndex, ow.number.label("callGovernanceCommand:format").integer.greaterThan(0));
        ow(governanceHash, ow.string.label("callGovernanceCommand:format").not.empty);
        ow(voteSignal, ow.string.label("callGovernanceCommand:format").not.empty);
        ow(vote, ow.string.label("callGovernanceCommand:vote").is(x => (x == "yes" || x == "no" || x =="abstain")));
        ow(time, ow.number.label("callGovernanceCommand:time").integer.greaterThan(0));
        ow(voteSignature, ow.string.label("callGovernanceCommand:voteSignature").not.empty);
        return await callRpc('voteraw',arguments)
    }
}