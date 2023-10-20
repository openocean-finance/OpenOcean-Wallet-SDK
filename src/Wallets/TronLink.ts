/**
 * @name TronLink
 * @author openocean
 * @date 2021/4/21
 * @desc
 */
// @ts-ignore
import icon from "../assets/tronlink.svg";
import {EnumChains, EnumErrors, EnumWalletName, EnumWalletType} from "../types";
import BaseWallet from "./BaseWallet";
import Web3 from 'web3';
import { autoWalletCheck } from "../helper";

class TronLink extends BaseWallet {
  public name = EnumWalletName.TronLink;
  public icon = icon;
  public supportChains = [EnumChains.TRON];
  public type = EnumWalletType.Extension;
  public sdk: Web3 | null = null;
  public installUrl = "https://chrome.google.com/webstore/detail/tronlink/ibnejdfjmmkpcnlpebklmnkoeoihofec";

  /**
   * connect metamask and get wallet address
   */
  public async requestTronConnect() {
    return new Promise<string>(async (res) => {
      const result = await autoWalletCheck(() => {
        return window.tronLink;
      }, 3000, 30);

      if (!result) {
        throw new Error(EnumErrors.NoTronLink);
      }

      let tronWeb;
      if (window.tronLink.ready) {
        tronWeb = window.tronLink.tronWeb;
      } else {
        const res = await window.tronLink.request({ method: 'tron_requestAccounts' });
        if (res.code === 200) {
          tronWeb = window.tronLink.tronWeb;
        }
      }

      const account = tronWeb.defaultAddress.base58;
      this.sdk = tronWeb;
      this.address = account;
      this.chainId = ''; // todo tron chainId
      res(account);
    });
  }
}

export default TronLink;
