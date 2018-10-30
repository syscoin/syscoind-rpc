import WalletAliasServices from "./wallet/wallet-alias-services";
import WalletAssetServices from "./wallet/wallet-asset-services";

export default interface WalletServices {
    alias: WalletAliasServices
    asset: WalletAssetServices
}