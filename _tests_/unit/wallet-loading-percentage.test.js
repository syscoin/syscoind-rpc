import { getPercentageFromWalletInfo } from '../../src/services/syscoin-rpc-wallet-services';
import { constants } from '../../src/services/constants';


describe(`Wallet Percentage loading`, () => {
    const walletLoadedPercentage = 100;
    const walletLoadingPercentage = 12.34;
    const walletOnErrorPercentage = 0;
    const walletOnConnectionErrorPercentage = false;

    const walletLoadedStatus = { walletversion: 3 };
    const walletLoadingStatus = { code: constants.ERROR_CODE_WALLET_LOADING, message: `Loading... (${walletLoadingPercentage} %)` };
    const walletOnErrorStatus = { code: -10, message: `Totally invented error code` };
    const walletOnConnectionError = { code: constants.ERROR_CODE_NO_CONNECTION, message: `May be there are more props but code is the only necessary` };

    it(`Should returns 100 on wallet loaded`, () => {
        const percentage = getPercentageFromWalletInfo(walletLoadedStatus);
        expect(percentage).toBe(walletLoadedPercentage);
    })
    it(`Should returns ${walletLoadingPercentage} on wallet loading`, () => {
        const percentage = getPercentageFromWalletInfo(walletLoadingStatus);
        expect(percentage).toBe(walletLoadingPercentage);
    })
    it(`Should returns 0 on wallet error`, () => {
        const percentage = getPercentageFromWalletInfo(walletOnErrorStatus);
        expect(percentage).toBe(walletOnErrorPercentage);
    })
    it(`Should returns 'false' on wallet connection error`, () => {
        const percentage = getPercentageFromWalletInfo(walletOnConnectionError);
        expect(percentage).toBe(walletOnConnectionErrorPercentage);
    })
})