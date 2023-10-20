import { EnumChains, EnumWalletName, EnumWalletType } from "../types";
import BaseWallet from "./BaseWallet";
declare class XDEFIWallet extends BaseWallet {
    name: EnumWalletName;
    icon: any;
    supportChains: EnumChains[];
    type: EnumWalletType;
    sdk: any | null;
    installUrl: string;
    /**
     * connect XDeFi and get wallet address
     * @param chainId specific chainId,throw error when not match
     */
    requestConnect(chainId?: number): Promise<any>;
    /**
     * connect XDeFi and get wallet address
     * @param chainId specific chainId,throw error when not match
     */
    requestTerraConnect(): Promise<string>;
}
export default XDEFIWallet;
