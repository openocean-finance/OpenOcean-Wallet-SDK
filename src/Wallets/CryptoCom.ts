/**
 * @name Coinbase
 * @author openocean
 * @date 2021/4/21
 * @desc
 */
// @ts-ignore
import icon from "../assets/cryptoCom.svg";
import {EnumChains, EnumErrors, EnumWalletName, EnumWalletType} from "../types";
import BaseWallet from "./BaseWallet";
import Web3 from 'web3';

class CryptoCom extends BaseWallet {
  public name = EnumWalletName.CryptoCom;
  public icon = icon;
  public supportChains = [EnumChains.Cronos];
  public type = EnumWalletType.Extension;
  public sdk: Web3 | null = null;
  public installUrl = "https://crypto.com/defi-wallet";

  /**
   * connect Coinbase and get wallet address
   * @param chainId specific chainId,throw error when not match
   */
  public async requestConnect(chainId?: number) {
    if (!window.deficonnectProvider) {
      throw new Error(EnumErrors.NoCryptoCom);
    }
    this.sdk = new Web3(window.deficonnectProvider);
    const [address] = await this.sdk.eth.requestAccounts();
    const currentChainId = await this.sdk.eth.getChainId();
    if (chainId && currentChainId !== chainId) {
      throw new Error(EnumErrors.ChainIdNotMath);
    }
    this.address = address;
    this.chainId = currentChainId;
    return address;
  }
}

export default CryptoCom;
