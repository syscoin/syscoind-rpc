import ow from 'syscoin-ow';
import {get,post} from '../endpoint-decorators';

export function syscoinRpcBlockchainServices(callRpc) {
    return {
        getBestBlockHash: get(getBestBlockHash),
        getChainVersion: get(getChainVersion),
        getBlock : get(getBlock),
        getBlockVerbose : get(getBlockVerbose),
        getBlockchainInfo : get(getBlockchainInfo),
        getBlockCount : get(getBlockCount),
        getBlockHash : get(getBlockHash),
        getBlockAtHeight: get(getBlockAtHeight),
        getBlockAtHeightVerbose: get(getBlockAtHeightVerbose),
        getBlockHashes : get(getBlockHashes),
        getBlockHeader : get(getBlockHeader),
        getBlockHeaderVerbose : get(getBlockHeaderVerbose),
        getBlockHeaders : get(getBlockHeaders),
        getBlockHeadersVerbose : get(getBlockHeadersVerbose),
        getChainTips : get(getChainTips),
        getDifficulty: get(getDifficulty),
        getMemPoolAncestors : get(getMemPoolAncestors),
        getMemPoolAncestorsVerbose : get(getMemPoolAncestorsVerbose),
        getMemPoolDescendants: get(getMemPoolDescendants),
        getMemPoolDescendantsVerbose : get(getMemPoolDescendantsVerbose),
        getMemPoolEntry: get(getMemPoolEntry),
        getMemPoolInfo : get(getMemPoolInfo),
        getRawMemPool : get(getRawMemPool),
        getRawMemPoolVerbose : get(getRawMemPoolVerbose),
        getSpentInfo : get(getSpentInfo),
        getTxOut : get(getTxOut),
        getTxOutProof : get(getTxOutProof),
        getUnspentTxOutputSetInfo : get(getUnspentTxOutputSetInfo),
        preciousBlock : post(preciousBlock),
        pruneBlockchain : post(pruneBlockchain),
        verifyChain : post(verifyChain),
        verifyTxOutProof : post(verifyTxOutProof),
        verifyTxOut : post(verifyTxOut),
        getSuperBlockBudget: get(getSuperBlockBudget)
    }


    async function getBestBlockHash()  {
        return await callRpc('getbestblockhash');
    }
    
    // GetBlock has been split into getBlock and getBlockVerbose, since the methods
    // return two entirely different objects.
    async function getBlock({blockHash} ={}) {
        ow(blockHash, ow.string.label("getBlock:blockHash").not.empty);
        let Verbose = false;
        return await callRpc('getblock', [blockHash, Verbose]);
    }

    async function getBlockVerbose({blockHash} = {}) {
        ow(blockHash, ow.string.label("getBlockVerbose:blockHash").not.empty);
        let Verbose = true;
        return await callRpc('getblock', [blockHash, Verbose]);
    }

    async function getBlockchainInfo() {
        return await callRpc('getblockchaininfo');
    }

    async function getBlockCount() {
        return await callRpc('getblockcount');
    }

    async function getBlockHash({height} = {}) {
        ow(height, ow.number.label("getBlockHash:height").integer.greaterThanOrEqual(0));
        return await callRpc('getblockhash', [height]);
    }

    async function getBlockAtHeight({height} = {}) {
        ow(height, ow.number.label("getBlockAtHeight:blockHeight").integer.greaterThanOrEqual(0));
        let blockHash = await getBlockHash({height: height});
        if (!blockHash.error) {
            return await getBlock({blockHash: blockHash});
        }
        else {
            return blockHash; // This is an error response.
        }
    }

    async function getBlockAtHeightVerbose({height} = {}) {
        ow(height, ow.number.label("getBlockAtHeightVerbose:blockHeight").integer.greaterThanOrEqual(0));
        let blockHash = await getBlockHash({height: height});
        if (!blockHash.error) {
            return await getBlockVerbose({blockHash: blockHash});
        }
        else {
            return blockHash; // This is an error response.
        }
    }

    async function getBlockHashes({timestampHigh, timestampLow} = {}) {
        ow(timestampHigh, ow.number.label("getBlockHashes:timestamp").integer.greaterThanOrEqual(0));
        ow(timestampLow, ow.number.label("getBlockHashes:timestamp").integer.greaterThanOrEqual(0));
        return await callRpc('getblockhashes', [timestampHigh, timestampLow]);
    }

    async function getBlockHeader({hash} = {}) {
        ow(hash, ow.string.label("getBlockHeader:hash").not.empty);
        let Verbose = false;
        return await callRpc('getblockheader', [hash, Verbose ])
    }

    async function getBlockHeaderVerbose({hash} = {}) {
        ow(hash, ow.string.label("getBlockHeaderVerbose:hash").not.empty);
        let Verbose = true;
        return await callRpc('getblockheader', [hash, Verbose])
    }

    async function getBlockHeaders({hash, headerCount=2000} = {}) {
        ow(hash, ow.string.label("getBlockHeaders:hash").not.empty);
        ow(headerCount, ow.number.label("getBlockHeader:headerCount").integer.greaterThanOrEqual(0));
        let Verbose = false;
        return await callRpc('getblockheaders', [hash, headerCount, Verbose])
    }

    async function getBlockHeadersVerbose({hash, headerCount=2000} = {}) {
        ow(hash, ow.string.label("getBlockHeadersVerbose:hash").not.empty);
        ow(headerCount, ow.number.label("getBlockHeadersVerbose:headerCount").integer.greaterThanOrEqual(0));
        let Verbose = true;
        return await callRpc('getblockheaders', [hash, headerCount, Verbose])
    }

    async function getChainTips({count, branchLength} = {}) {
        if (count) {
            ow(count, ow.number.label("getChainTips:count").integer.greaterThanOrEqual(0));
        }
        if (branchLength) {
            ow(branchLength, ow.number.label("getChainTips:branchLength").integer.greaterThanOrEqual(0));
        }
        return await callRpc('getchaintips', [count,branchLength]);
    }

    async function getChainVersion()  {
        let miningInfo = await callRpc('getmininginfo');
        return { chainVersion: miningInfo.chain};
    }

    async function getDifficulty()  {
        return await callRpc('getdifficulty');
    }

    async function getMemPoolAncestors({txid} = {}) {
        ow(txid, ow.string.label("getMemPoolAncestors:txid").not.empty);
        let Verbose = false;
        return await callRpc('getMemPoolAncestors', [txid, Verbose]);
    }

    async function getMemPoolAncestorsVerbose({txid} = {}) {
        ow(txid, ow.string.label("getMemPoolAncestorsVerbose:txid").not.empty);
        let Verbose = true;
        return await callRpc('getmempoolancestors', [txid, Verbose])
    }
    
    async function getMemPoolDescendants({txid} = {}) {
        ow(txid, ow.string.label("getMemPoolDescendants:txid").not.empty);
        let Verbose = false;
        return await callRpc('getmempooldescendants', [txid, Verbose]);
    }
    
    async function getMemPoolDescendantsVerbose({txid} = {}) {
        ow(txid, ow.string.label("getMemPoolDescendantsVerbose:txid").not.empty);
        let Verbose = true;
        return await callRpc('getmempooldescendants', [txid, Verbose]);
    }
    
    async function getMemPoolEntry({txid} = {}) {
        ow(txid, ow.string.label("getMemPoolEntry:txid").not.empty);
        return await callRpc('getmempoolentry', [txid]);
    }
    
    async function getMemPoolInfo() {
        return await callRpc('getmempoolinfo');
    }

    async function getRawMemPool() {
        return await callRpc('getrawmempool');
    }

    async function getRawMemPoolVerbose() {
        return await callRpc('getrawmempoolverbose');
    }
    
    async function getSpentInfo({txid, startingBlockHeight} = {}) {
        ow(txid, ow.string.label("getSpentInfo:txid").not.empty);
        if (startingBlockHeight) {
            ow(startingBlockHeight, ow.number.label("getSpentInfo:startingBlockHeight").integer.greaterThanOrEqual(0));
        }
        return await callRpc('getspentinfo', arguments);
    }
    
    async function getTxOut({txid, voutNumber, includeMempool=false} = {}) {
        ow(txid, ow.string.label("getTxOut:txid").not.empty);
        ow(includeMempool, ow.number.label("getTxOut:includeMempool").integer.greaterThanOrEqual(0));
        return await callRpc('gettxout', arguments)
    }
    
    async function getTxOutProof({txids, blockHash} = {})  {
//                 NOTE: By default this function only works sometimes. This is when there is an
// unspent output in the utxo for this transaction. To make it always work,
// you need to maintain a transaction index, using the -txindex command line option or
// specify the block in which the transaction is included manually (by blockhash).
        return await callRpc('gettxoutproof', arguments);
    }

    async function getUnspentTxOutputSetInfo() {
        return await callRpc('gettxoutsetinfo');
    }

    async function getSuperBlockBudget({index} = {}) {
        return await callRpc('getsuperblockbudget', index);
    }

    async function preciousBlock({blockHash} = {}) {
        return await callRpc('preciousblock',[blockHash]);
    }

    async function pruneBlockchain({blockHeight} = {}) {
        return await callRpc('pruneblockchain', [blockHeight]);
    }

    async function verifyChain({thoroughnessLevel=4, numberOfBlocksToCheck=6} = {}) {
        return await callRpc('verifychain', arguments)
    } 
    
    async function verifyTxOutProof({proof} = {}) {
        return await callRpc('verifytxoutproof', [proof]);
    }

    async function verifyTxOut({txids,blockHash} = {}) {
        let proof = await getTxOutProof(txids,blockHash);
        return await verifyTxOutProof(proof);
    }
}