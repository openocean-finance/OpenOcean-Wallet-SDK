import { EnumChains, EnumWalletName, EnumWalletType } from "../types";
import BaseWallet from "./BaseWallet";
import { WalletConnection, utils } from "near-api-js";
import { createTransaction, functionCall } from 'near-api-js/lib/transaction';
declare class NearWallet extends BaseWallet {
    name: EnumWalletName;
    icon: any;
    supportChains: EnumChains[];
    type: EnumWalletType;
    sdk: WalletConnection | null;
    createTransaction: typeof createTransaction;
    functionCall: typeof functionCall;
    PublicKey: typeof utils.key_pair.PublicKey;
    utils: typeof utils;
    init(): Promise<void>;
    /**
     * connect metamask and get wallet address
     * @param chainId specific chainId,throw error when not match
     */
    requestConnect(): Promise<string>;
    constructor();
}
export default NearWallet;
