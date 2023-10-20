/**
 * @name BaseWallet
 * @author openocean
 * @date 2021/4/21
 * @desc openocean base wallet
 */
import { EnumChains, EnumWalletType } from "../types";
import Web3 from "web3";
import { WalletConnection } from "near-api-js";
import {client} from '@ont-dev/ontology-dapi'

abstract class BaseWallet {
  public abstract readonly name: string;
  public abstract readonly icon: string;
  public abstract readonly supportChains: EnumChains[];
  public abstract readonly type: EnumWalletType;
  public account?: string;
  public address?: string;
  public chain?: EnumChains;
  public chainId?: string | number;
  public installUrl?: string;
  public sdk?: Web3 | WalletConnection | typeof client | null = null;

  public requestConnect?(): Promise<string>;
  public requestSolanaConnect?(): Promise<string>;
  public requestTerraConnect?(): Promise<string>;
  public requestAptosConnect?(): Promise<string>;
  public requestStarknetConnect?(): Promise<string>;
}

export default BaseWallet;
