import WalletAliasServices from "./wallet/wallet-alias-services";
import WalletAssetServices from "./wallet/wallet-asset-services";
import WalletAssetAllocationServices from "./wallet/wallet-asset-allocation-services";
import WalletCertificateServices from "./wallet/wallet-certificate-services";
import WalletEscrowServices from "./wallet/wallet-escrow-services";

export default interface WalletServices {
    alias: WalletAliasServices
    asset: WalletAssetServices
    assetAllocation: WalletAssetAllocationServices
    certificate: WalletCertificateServices
    escrow: WalletEscrowServices
}