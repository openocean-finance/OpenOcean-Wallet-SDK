import { EnumChains, EnumWalletName, EnumWalletType } from "../types";
import BaseWallet from "./BaseWallet";
declare class SolletIo extends BaseWallet {
    name: EnumWalletName;
    icon: any;
    supportChains: EnumChains[];
    type: EnumWalletType;
    sdk: any;
    /**
     * connect metamask and get wallet address
     * @param chainId specific chainId,throw error when not match
     */
    requestSolanaConnect(chainId?: number): Promise<string>;
}
export default SolletIo;
