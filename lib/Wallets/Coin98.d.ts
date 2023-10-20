import { EnumChains, EnumWalletName, EnumWalletType } from "../types";
import BaseWallet from "./BaseWallet";
declare class Coin98 extends BaseWallet {
    name: EnumWalletName;
    icon: any;
    supportChains: EnumChains[];
    type: EnumWalletType;
    sdk: any | null;
    installUrl: string;
    /**
     * connect Coin98 and get wallet address
     * @param chainId specific chainId,throw error when not match
     */
    requestConnect(chainId?: number): Promise<any>;
    /**
     * connect Coin98 and get wallet address
     * @param chainId specific chainId,throw error when not match
     */
    requestSolanaConnect(): Promise<any>;
}
export default Coin98;
