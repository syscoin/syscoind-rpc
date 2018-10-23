import {post} from '../endpoint-decorators';
import ow from "syscoin-ow";

export function syscoinRpcGenerationServices(callRpc) {
    return {
        generate : post(generate),
        generateToAddress : post(generateToAddress)
    }

    async function generate({numberOfBlocks, maxTries=10000}) {
        ow(numberOfBlocks, ow.number.label("generate:numberOfBlocks").integer.greaterThanOrEqual(0));
        ow(maxTries, ow.number.label("generate:maxTries").integer.greaterThanOrEqual(0));
        return await callRpc('generate', arguments);
    }

    async function generateToAddress({numberOfBlocks, address, maxTries=10000}) {
        ow(numberOfBlocks, ow.number.label("generateToAddress:numberOfBlocks").integer.greaterThanOrEqual(0));
        ow(address, ow.string.label("generateToAddress:address").not.empty);
        ow(maxTries, ow.number.label("generateToAddress:maxTries").integer.greaterThanOrEqual(0));
        return await callRpc('generatetoaddress', arguments);
    }
}