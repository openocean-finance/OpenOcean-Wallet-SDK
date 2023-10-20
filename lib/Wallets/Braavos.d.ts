import { EnumChains, EnumWalletName, EnumWalletType } from "../types";
import BaseWallet from "./BaseWallet";
declare class Braavos extends BaseWallet {
    name: EnumWalletName;
    icon: any;
    supportChains: EnumChains[];
    type: EnumWalletType;
    sdk: any;
    installUrl: string;
    /**
     * connect Coinbase and get wallet address
     */
    requestStarknetConnect(): Promise<string>;
}
export default Braavos;
