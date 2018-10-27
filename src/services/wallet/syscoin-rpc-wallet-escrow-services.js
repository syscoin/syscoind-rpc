import ow from "syscoin-ow";
import {get, post} from '../../endpoint-decorators';

export function walletEscrowServices(callRpc) {
    return {
        acknowledge: post(escrowAcknowledge),
        bid: post(escrowBid),
        completeRefund: post(escrowCompleteRefund),
        createRawTransaction: post(escrowCreateRawTransaction),
        completeRelease: post(escrowCompleteRelease),
        feedback: post(escrowFeedback),
        info: get(escrowInfo),
        list: get(listEscrows),
        listAfterBlock: get(listEscrowsAfterBlock),
        new: post(escrowNew),
        refund: post(escrowRefund),
        release: post(escrowRelease)
    }

    async function escrowAcknowledge(escrowGuid, witness) {
        ow(escrowGuid, ow.string.label("escrowAcknowledge:escrowGuid").not.empty);
        ow(witness, ow.string.label("escrowAcknowledge:alias").not.empty);
        return await callRpc('escrowacknowledge', [escrowGuid, witness]);
    }

    async function escrowBid(alias, escrow, bidInPaymentOption, bidInOfferCurrency, witness) {
        ow(alias, ow.string.label("escrowBid:alias").not.empty);
        ow(escrow, ow.string.label("escrowBid:escrow").not.empty);
        ow(bidInPaymentOption, ow.string.label("escrowBid:bidInPaymentOption").not.empty);
        ow(bidInOfferCurrency, ow.number.label("escrowBid:bidInOfferCurrency").integer.greaterThan(0));
        ow(witness, ow.string.label("escrowBid:witness").not.empty);
        return await callRpc('escrowbid', arguments);
    }

    async function escrowCompleteRefund(escrowGuid, rawTx, witness) {
        ow(escrowGuid, ow.string.label("escrowCompleteRefund:escrowGuid").not.empty);
        ow(rawTx, ow.string.label("escrowCompleteRefund:rawTx").not.empty);
        ow(witness, ow.string.label("escrowCompleteRefund:witness").not.empty);
        return await callRpc('escrowcompleterefund', [escrowGuid, rawTx, witness]);
    }

    async function escrowCreateRawTransaction(type, escrowGuid, inputs, userRole) {
        ow(type, ow.string.label("escrowCreateRawTransaction:type").not.empty);
        ow(escrowGuid, ow.string.label("escrowCreateRawTransaction:escrowGuid").not.empty);
        ow(inputs, ow.object.label("escrowCreateRawTransaction:inputs").not.empty);
        ow(userRole, ow.string.label("escrowCreateRawTransaction:userRole").not.empty);
        return await callRpc('escrowcreaterawtransaction', [type, escrowGuid, inputs, userRole]);
    }

    async function escrowCompleteRelease(escrowGuid, rawTx, witness) {
        ow(escrowGuid, ow.string.label("escrowCompleteRelease:escrowGuid").not.empty);
        ow(rawTx, ow.string.label("escrowCompleteRelease:rawTx").not.empty);
        ow(witness, ow.string.label("escrowCompleteRelease:witness").not.empty);
        return await callRpc('escrowcompleterelease', [escrowGuid, rawTx, witness]);
    }

    async function escrowFeedback(escrowGuid, userFrom, feedback, rating, userTo, witness) {
        ow(escrowGuid, ow.string.label("escrowCompleteRelease:escrowGuid").not.empty);
        ow(userFrom, ow.string.label("escrowCompleteRelease:userFrom").not.empty);
        ow(feedback, ow.string.label("escrowCompleteRelease:feedback").string.minLength(0));
        ow(rating, ow.number.label("escrowCompleteRelease:rating").integer.greaterThan(0));
        ow(userTo, ow.string.label("escrowCompleteRelease:userTo").not.empty);
        ow(witness, ow.string.label("escrowCompleteRelease:witness").not.empty);
        return await callRpc('escrowfeedback', arguments);
    }

    async function escrowInfo(guid) {
        ow(guid, ow.string.label("escrowInfo:guid").not.empty);
        return await callRpc('escrowinfo', arguments);
    }

    async function escrowNew(getAmountAndAddress, alias, arbiterAlias, offer, quantity, buyNow, pricePerUnitInPaymentOption, shippingAmount, networkFee, arbiterFee, witnessFee, extTx, payment, option, bidInPaymentOption, bidInOfferCurrency, witness) {
        ow(getAmountAndAddress, ow.boolean.label("escrowNew:getAmountAndAddress").so(x => x == true || x == false));
        ow(alias, ow.string.label("escrowNew:alias").not.empty);
        ow(offer, ow.string.label("escrowNew:offer").not.empty);
        ow(quantity, ow.number.label("escrowNew:quantity").integer.greaterThan(0));
        ow(buyNow, ow.boolean.label("escrowNew:buyNow").so(x => x == true || x == false));
        ow(pricePerUnitInPaymentOption, ow.number.label("escrowNew:pricePerUnitInPaymentOption").integer.greaterThan(0));
        ow(shippingAmount, ow.number.label("escrowNew:shippingAmount").integer.greaterThan(0));
        ow(networkFee, ow.number.label("escrowNew:networkFee").integer.greaterThan(0));
        ow(arbiterFee, ow.number.label("escrowNew:arbiterFee").integer.greaterThan(0));
        ow(witnessFee, ow.number.label("escrowNew:witnessFee").integer.greaterThan(0));
        ow(exTx, ow.string.label("escrowNew:exTx").not.empty);
        ow(payment, ow.string.label("escrowNew:payment").not.empty);
        ow(option, ow.string.label("escrowNew:option").not.empty);
        ow(bidInPaymentOption, ow.string.label("escrowNew:bidInPaymentOption").not.empty);
        ow(bidInOfferCurrency, ow.string.label("escrowNew:bidInOfferCurrency").not.empty);
        ow(witness, ow.string.label("escrowNew:witness").not.empty);
        return await callRpc('escrownew', arguments);
    }

    async function escrowRefund(escrowGuid, userRole, rawTx, witness) {
        ow(escrowGuid, ow.string.label("escrowRefund:escrowGuid").not.empty);
        ow(userRole, ow.string.label("escrowRefund:userRole").not.empty);
        ow(rawTx, ow.string.label("escrowRefund:rawTx").not.empty);
        ow(witness, ow.string.label("escrowRefund:witness").not.empty);
        return await callRpc('escrowrefund', arguments);
    }

    async function escrowRelease(escrowGuid, userRole, rawTx, witness) {
        ow(escrowGuid, ow.string.label("escrowRelease:escrowGuid").not.empty);
        ow(userRole, ow.string.label("escrowRelease:userRole").not.empty);
        ow(rawTx, ow.string.label("escrowRelease:rawTx").not.empty);
        ow(witness, ow.string.label("escrowRelease:witness").not.empty);
        return await callRpc('escrowrelease', arguments);
    }

    async function listEscrows(count, from, options) {
        if(count) {
            ow(count, ow.number.label("listEscrows:count").integer.greaterThan(0));
        }
        if(from) {
            ow(from, ow.number.label("listEscrows:from").integer.greaterThan(0));
        }
        if(options) {
            ow(options, ow.objects.label("listEscrows:options").not.empty);
        }
        return await callRpc('listescrows', arguments);
    }

    async function listEscrowsAfterBlock(blockNumber) {
        ow(blockNumber, ow.number.label("listEscrowsAfterBlock:blockNumber").integer.greaterThan(0));
        let options = {
            startblock: blockNumber
        }
        let escrows = await listEscrows(0, 0, options);
        return escrows;
    }
}