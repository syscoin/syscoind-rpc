import WalletAssetServices from "./wallet/wallet-asset-services";
import WalletAssetAllocationServices from "./wallet/wallet-asset-allocation-services";

export default interface WalletServices {
    asset: WalletAssetServices
    assetAllocation: WalletAssetAllocationServices
}