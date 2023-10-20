import { EnumChains, EnumWalletName, EnumWalletType } from "../types";
import BaseWallet from "./BaseWallet";
declare class Krystal extends BaseWallet {
    name: EnumWalletName;
    icon: any;
    supportChains: EnumChains[];
    type: EnumWalletType;
    sdk: any;
    infuraId?: string;
    /**
     * connect metamask and get wallet address
     * @param chainId specific chainId,throw error when not match
     * @param config
     */
    requestConnect(chainId?: number, config?: any): Promise<any>;
}
export default Krystal;
