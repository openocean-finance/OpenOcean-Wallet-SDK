import { EnumChains, EnumWalletName, EnumWalletType } from "../types";
import BaseWallet from "./BaseWallet";
declare class KeplrWallet extends BaseWallet {
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
    requestCosmosConnect(chainId: string): Promise<string>;
}
export default KeplrWallet;
