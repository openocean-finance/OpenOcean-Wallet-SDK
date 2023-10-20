/**
 * @name MathWallet
 * @author openocean
 * @date 2021/4/21
 * @desc
 */
// @ts-ignore
import icon from "../assets/math.svg";
import {EnumChains, EnumErrors, EnumWalletName, EnumWalletType} from "../types";
import BaseWallet from "./BaseWallet";
import Web3 from 'web3';

class MathWallet extends BaseWallet {
  public name = EnumWalletName.MathWallet;
  public icon = icon;
  public supportChains = [EnumChains.ETH, EnumChains.BSC, EnumChains.HECO, EnumChains.Fantom, EnumChains.OKEX, EnumChains.XDai, EnumChains.Arbitrum, EnumChains.Optimism];
  public type = EnumWalletType.Extension;
  public sdk: Web3 | null = null;
  public installUrl = "https://chrome.google.com/webstore/detail/math-wallet/afbcbjpbpfadlkmhmclhkeeodmamcflc";

  /**
   * connect MathWallet and get wallet address
   * @param chainId specific chainId,throw error when not match
   */
  public async requestConnect(chainId?: number) {
    if (!(window.ethereum && window.ethereum.isMathWallet)) {
      throw new Error(EnumErrors.NoMath);
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

export default MathWallet;
