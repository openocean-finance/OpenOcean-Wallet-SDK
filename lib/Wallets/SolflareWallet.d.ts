import { EnumChains, EnumWalletName, EnumWalletType } from "../types";
import BaseWallet from "./BaseWallet";
declare class SolflareWallet extends BaseWallet {
    name: EnumWalletName;
    icon: any;
    supportChains: EnumChains[];
    type: EnumWalletType;
    sdk: any;
    installUrl: string;
    /**
     * connect metamask and get wallet address
     * @param chainId specific chainId,throw error when not match
     */
    requestSolanaConnect(chainId?: number): Promise<string>;
}
export default SolflareWallet;
