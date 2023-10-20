/**
 * @name BaseWallet
 * @author openocean
 * @date 2021/4/21
 * @desc openocean base wallet
 */
import { EnumChains, EnumWalletType } from "../types";
import Web3 from "web3";
import { WalletConnection } from "near-api-js";
import { client } from '@ont-dev/ontology-dapi';
declare abstract class BaseWallet {
    abstract readonly name: string;
    abstract readonly icon: string;
    abstract readonly supportChains: EnumChains[];
    abstract readonly type: EnumWalletType;
    account?: string;
    address?: string;
    chain?: EnumChains;
    chainId?: string | number;
    installUrl?: string;
    sdk?: Web3 | WalletConnection | typeof client | null;
    requestConnect?(): Promise<string>;
    requestSolanaConnect?(): Promise<string>;
    requestTerraConnect?(): Promise<string>;
    requestAptosConnect?(): Promise<string>;
    requestStarknetConnect?(): Promise<string>;
}
export default BaseWallet;
