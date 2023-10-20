/**
 * @name PetraWallet
 * @author openocean
 * @date 2021/4/21
 * @desc
 */
// @ts-ignore
import icon from "../assets/petra.svg";
import {EnumChains, EnumErrors, EnumWalletName, EnumWalletType} from "../types";
import BaseWallet from "./BaseWallet";
import Web3 from 'web3';

class PetraWallet extends BaseWallet {
  public name = EnumWalletName.PetraWallet;
  public icon = icon;
  public supportChains = [EnumChains.Aptos];
  public type = EnumWalletType.Extension;
  public sdk: Web3 | null = null;
  public installUrl = "https://chrome.google.com/webstore/detail/petra-aptos-wallet/ejjladinnckdgjemekebdpeokbikhfci";

  /**
   * connect metamask and get wallet address
   */
  public async requestAptosConnect() {
    if (!window.aptos) {
      throw new Error(EnumErrors.NoPetraWallet);
    }
    const { address } = await window.aptos.connect();
    this.sdk = window.aptos;
    this.address = address;
    this.chainId = ''; // todo tron chainId
    return address;
  }
}

export default PetraWallet;
