/**
 * @name PontemWallet
 * @author openocean
 * @date 2021/4/21
 * @desc
 */
// @ts-ignore
import icon from "../assets/pontem.svg";
import {EnumChains, EnumErrors, EnumWalletName, EnumWalletType} from "../types";
import BaseWallet from "./BaseWallet";
import Web3 from 'web3';

class PontemWallet extends BaseWallet {
  public name = EnumWalletName.PontemWallet;
  public icon = icon;
  public supportChains = [EnumChains.Aptos];
  public type = EnumWalletType.Extension;
  public sdk: Web3 | null = null;
  public installUrl = "https://chrome.google.com/webstore/detail/pontem-aptos-wallet/phkbamefinggmakgklpkljjmgibohnba";

  /**
   * connect metamask and get wallet address
   */
  public async requestAptosConnect() {
    if (!window.pontem) {
      throw new Error(EnumErrors.NoPontemWallet);
    }
    const { address } = await window.pontem.connect();
    this.sdk = window.pontem;
    this.address = address;
    this.chainId = ''; // todo tron chainId
    return address;
  }
}

export default PontemWallet;
