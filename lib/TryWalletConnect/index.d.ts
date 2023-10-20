import BaseWallet from "../Wallets/BaseWallet";
import { Chain } from "./../Chains";
import { EnumChains, EnumWalletName } from "./../types";
interface ReqConnectWalletVo {
    chainName: EnumChains;
    walletName: EnumWalletName;
    localRpcUrl?: string;
    noSwitch?: boolean;
    provider?: any;
}
interface Wallet extends BaseWallet {
}
interface ConnectObj {
    wallet: Wallet;
    chain: Chain;
    localProvider: any;
    localRpcUrl: any;
}
declare function tryWalletConnect(reqConnectWalletVo: ReqConnectWalletVo): Promise<ConnectObj>;
export { tryWalletConnect, ReqConnectWalletVo };
