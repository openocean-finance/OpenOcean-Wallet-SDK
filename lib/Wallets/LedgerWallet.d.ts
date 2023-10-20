import { EnumChains, EnumWalletName, EnumWalletType } from "../types";
import BaseWallet from "./BaseWallet";
declare class LedgerWallet extends BaseWallet {
    name: EnumWalletName;
    icon: any;
    supportChains: EnumChains[];
    type: EnumWalletType;
    sdk: any;
    installUrl: string;
    /**
     * connect LedgerWallet and get wallet address
     * @param chainId specific chainId,throw error when not match
     */
    requestConnect(chainId?: number): Promise<any>;
}
export default LedgerWallet;
