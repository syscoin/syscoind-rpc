import WalletAliasServices from "./wallet/wallet-alias-services";
import WalletAssetServices from "./wallet/wallet-asset-services";
import WalletAssetAllocationServices from "./wallet/wallet-asset-allocation-services";

export default interface WalletServices {
    alias: WalletAliasServices
    asset: WalletAssetServices
    assetAllocation: WalletAssetAllocationServices
}