/**
 * @name Cyano
 * @author openocean
 * @date 2021/4/21
 * @desc
 */
import { EnumChains, EnumWalletName, EnumWalletType } from "../types";
import { client } from '@ont-dev/ontology-dapi';
import BaseWallet from "./BaseWallet";
declare class Cyano extends BaseWallet {
    name: EnumWalletName;
    icon: any;
    supportChains: EnumChains[];
    type: EnumWalletType;
    sdk: typeof client | null;
    installUrl: string;
    requestConnect(chainId?: string): Promise<string>;
}
export default Cyano;
