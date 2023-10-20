/**
 * @name BscWallet
 * @author openocean
 * @date 2021/4/21
 * @desc
 */
// @ts-ignore
import icon from "../assets/bscwallet.svg";
import { EnumChains, EnumErrors, EnumWalletName, EnumWalletType } from "../types";
import BaseWallet from "./BaseWallet";
import Web3 from 'web3';

class BscWallet extends BaseWallet {
  public name = EnumWalletName.BscWallet;
  public icon = icon;
  public supportChains = [
    EnumChains.BSC
  ];
  public type = EnumWalletType.Extension;
  public sdk: Web3 | null = null;
  public installUrl = "https://chrome.google.com/webstore/detail/binance-wallet/fhbohimaelbohpjbbldcngcnapndodjp";

  /**
   * connect metamask and get wallet address
   * @param chainId specific chainId,throw error when not match
   */
  public async requestConnect(chainId?: number) {
    if (!window.BinanceChain) {
      // go2 download page
      throw new Error(EnumErrors.NotBinance);
    }

    this.sdk = new Web3(window.BinanceChain);
    const [account] = await this.sdk.eth.requestAccounts();
    const currentChainId = await this.sdk.eth.getChainId();
    if (chainId && currentChainId !== chainId) {
      throw new Error(EnumErrors.ChainIdNotMath);
    }
    this.address = account;
    this.chainId = chainId;
    return account;
  }
}

export default BscWallet;
