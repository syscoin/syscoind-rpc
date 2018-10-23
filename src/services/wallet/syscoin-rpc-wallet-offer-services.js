import ow from "syscoin-ow";
import {get, post} from '../../endpoint-decorators';

export function walletOfferServices(callRpc) {
    return {
        info: get(offerInfo),
        link: post(offerLink),
        list: get(listOffers),
        listAfterBlock: get(listOffersAfterBlock),
        new: post(offerNew),
        update: post(offerUpdate)
    }

    async function offerInfo(guid) {
        ow(guid, ow.string.label("offerInfo:guid").not.empty);
        return await callRpc('offerinfo', arguments);
    }

    async function offerLink(alias, guid, commission, description, witness) {
        ow(alias, ow.string.label("offerLink:alias").not.empty);
        ow(guid, ow.string.label("offerLink:guid").not.empty);
        ow(commission, ow.string.label("offerLink:commission").not.empty);
        ow(description, ow.string.label("offerLink:description").string.minLength(0));
        ow(witness, ow.string.label("offerLink:witness").not.empty);

        return await callRpc('offerlink', arguments);
    }

    async function offerNew(alias, category, title, quantity, price, description, currency, certGuid,
        paymentOptions, priv, units, offerType, auctionExpires, auctionReserve,
        auctionRequireWitness, auctionDeposit, witness) {
        ow(alias, ow.string.label("offerNew:alias").not.empty);
        ow(category, ow.string.label("offerNew:category").not.empty);
        ow(title, ow.string.label("offerNew:title").not.empty);
        ow(quantity, ow.number.label("offerNew:quantity").integer.greaterThanOrEqual(0));
        ow(price, ow.number.label("offerNew:price").integer.greaterThanOrEqual(0));
        ow(description, ow.string.label("offerNew:description").string.minLength(0));
        ow(currency, ow.string.label("offerNew:currency").not.empty);
        ow(certGuid, ow.string.label("offerNew:certGuid").not.empty);
        ow(paymentOptions, ow.string.label("offerNew:paymentOptions").not.empty);
        ow(priv, ow.boolean.label("offerNew:priv").is(x => x == true || x == false));
        ow(units, ow.string.label("offerNew:units").not.empty);
        ow(offerType, ow.string.label("offerNew:offerType").not.empty);
        ow(auctionExpires, ow.string.label("offerNew:auctionExpires").not.empty);
        ow(auctionReserve, ow.string.label("offerNew:auctionReserve").not.empty);
        ow(auctionRequireWitness, ow.string.label("offerNew:auctionRequireWitness").not.empty);
        ow(auctionDeposit, ow.string.label("offerNew:auctionDeposit").not.empty);
        ow(witness, ow.string.label("offerNew:witness").not.empty);
        return await callRpc('offernew', arguments);
    }

    async function offerUpdate(alias, category, title, quantity, price, description, currency, certGuid,
        paymentOptions, priv, units, offerType, auctionExpires, auctionReserve,
        auctionRequireWitness, auctionDeposit, witness) {
        ow(alias, ow.string.label("offerUpdate:alias").not.empty);
        ow(category, ow.string.label("offerUpdate:category").not.empty);
        ow(title, ow.string.label("offerUpdate:title").not.empty);
        ow(quantity, ow.number.label("offerUpdate:quantity").integer.greaterThanOrEqual(0));
        ow(price, ow.number.label("offerUpdate:price").integer.greaterThanOrEqual(0));
        ow(description, ow.string.label("offerUpdate:description").string.minLength(0));
        ow(currency, ow.string.label("offerUpdate:currency").not.empty);
        ow(certGuid, ow.string.label("offerUpdate:certGuid").not.empty);
        ow(paymentOptions, ow.string.label("offerUpdate:paymentOptions").not.empty);
        ow(priv, ow.boolean.label("offerUpdate:priv").is(x => x == true || x == false));
        ow(units, ow.string.label("offerUpdate:units").not.empty);
        ow(offerType, ow.string.label("offerUpdate:offerType").not.empty);
        ow(auctionExpires, ow.string.label("offerUpdate:auctionExpires").not.empty);
        ow(auctionReserve, ow.string.label("offerUpdate:auctionReserve").not.empty);
        ow(auctionRequireWitness, ow.string.label("offerUpdate:auctionRequireWitness").not.empty);
        ow(auctionDeposit, ow.string.label("offerUpdate:auctionDeposit").not.empty);
        ow(witness, ow.string.label("offerUpdate:witness").not.empty);
        return await callRpc('offerUpdate', arguments);
    }

    async function listOffers(count, from, options) {
        if(count) {
            ow(count, ow.number.label("listOffers:count").integer.greaterThanOrEqual(0));
        }
        if(from) {
            ow(from, ow.number.label("listOffers:from").integer.greaterThanOrEqual(0));
        }
        if(options) {
            ow(options, ow.objects.label("listOffers:options").not.empty);
        }
        return await callRpc('listoffers', arguments);
    }

    async function listOffersAfterBlock(blockNumber) {
        ow(blockNumber, ow.number.label("listOffersAfterBlock:blockNumber").integer.greaterThanOrEqual(0));
        let options = {
            startblock: blockNumber
        }
        let offers = await listOffers(0, 0, options);
        return offers;
    }
}