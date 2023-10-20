import { EnumChains, EnumWalletName, EnumWalletType } from "../types";
import BaseWallet from "./BaseWallet";
import Web3 from 'web3';
declare class PetraWallet extends BaseWallet {
    name: EnumWalletName;
    icon: any;
    supportChains: EnumChains[];
    type: EnumWalletType;
    sdk: Web3 | null;
    installUrl: string;
    /**
     * connect metamask and get wallet address
     */
    requestAptosConnect(): Promise<any>;
}
export default PetraWallet;
