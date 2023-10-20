/**
 * @name TokenPocket
 * @author openocean
 * @date 2021/4/21
 * @desc
 */
// @ts-ignore
import icon from "../assets/tokenpocket.svg";
import {EnumChains, EnumErrors, EnumWalletName, EnumWalletType} from "../types";
import BaseWallet from "./BaseWallet";
import Web3 from 'web3';

class TokenPocket extends BaseWallet {
  public name = EnumWalletName.TokenPocket;
  public icon = icon;
  public supportChains = [EnumChains.BSC, EnumChains.Polygon, EnumChains.OKEX, EnumChains.XDai, EnumChains.HECO, EnumChains.Fantom, EnumChains.Avalanche];
  public type = EnumWalletType.Extension;
  public sdk: Web3 | null = null;
  public installUrl = "https://chrome.google.com/webstore/detail/tokenpocket/mfgccjchihfkkindfppnaooecgfneiii";

  /**
   * connect TokenPocket and get wallet address
   * @param chainId specific chainId,throw error when not match
   */
  public async requestConnect(chainId?: number) {
    if (!(window.ethereum && window.ethereum.isTokenPocket)) {
      throw new Error(EnumErrors.NoTokenPocket);
    }
    this.sdk = new Web3(window.ethereum);
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

export default TokenPocket;
