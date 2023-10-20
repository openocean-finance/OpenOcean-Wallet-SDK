import { EnumChains, EnumWalletName, EnumWalletType } from "../types";
import BaseWallet from "./BaseWallet";
import Web3 from 'web3';
declare class CoinbaseWallet extends BaseWallet {
    name: EnumWalletName;
    icon: any;
    supportChains: EnumChains[];
    type: EnumWalletType;
    sdk: Web3 | null;
    installUrl: string;
    /**
     * connect Coinbase and get wallet address
     * @param chainId specific chainId,throw error when not match
     */
    requestConnect(chainId?: number): Promise<string>;
}
export default CoinbaseWallet;
