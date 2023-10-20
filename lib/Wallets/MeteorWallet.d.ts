import { EnumChains, EnumWalletName, EnumWalletType } from "../types";
import BaseWallet from "./BaseWallet";
import { WalletConnection, utils } from "near-api-js";
import { createTransaction, functionCall } from "near-api-js/lib/transaction";
declare class MeteorWallet extends BaseWallet {
    name: EnumWalletName;
    icon: any;
    supportChains: EnumChains[];
    type: EnumWalletType;
    sdk: WalletConnection | null;
    createTransaction: typeof createTransaction;
    functionCall: typeof functionCall;
    PublicKey: typeof utils.key_pair.PublicKey;
    utils: typeof utils;
    /**
     * connect metamask and get wallet address
     * @param chainId specific chainId,throw error when not match
     */
    requestConnect(): Promise<string>;
}
export default MeteorWallet;
