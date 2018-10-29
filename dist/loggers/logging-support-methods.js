"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.methodShouldBeLogged = methodShouldBeLogged;
exports.createListing = createListing;
function methodShouldBeLogged(methodName, listing) {
    if (listing.whitelist.length > 0) {
        return listing.whitelist.includes(methodName);
    } else if (listing.blacklist.length > 0) {
        return !listing.blacklist.includes(methodName);
    }
    return true;
}

function createListing(whitelist, blacklist) {

    var methodListing = {
        whitelist: [],
        blacklist: []

        // If the whitelist exists, don't use blacklist.  
    };if (whitelist && whitelist.length > 0) {
        methodListing.whitelist = whitelist;
    } else if (blacklist && blacklist.length > 0) {
        methodListing.blacklist = blacklist;
    }

    return methodListing;
}