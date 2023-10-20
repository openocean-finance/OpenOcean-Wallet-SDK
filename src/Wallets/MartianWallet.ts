/**
 * @name PetraWallet
 * @author openocean
 * @date 2021/4/21
 * @desc
 */
// @ts-ignore
import icon from "../assets/martian.svg";
import {
  EnumChains,
  EnumErrors,
  EnumWalletName,
  EnumWalletType,
} from "../types";
import BaseWallet from "./BaseWallet";
import Web3 from "web3";
import { autoWalletCheck } from "../helper";

class MartianWallet extends BaseWallet {
  public name = EnumWalletName.MartianWallet;
  public icon = icon;
  public supportChains = [EnumChains.Aptos];
  public type = EnumWalletType.Extension;
  public sdk: Web3 | null = null;
  public installUrl = "https://chrome.google.com/webstore/detail/martian-aptos-wallet/efbglgofoippbgcjepnhiblaibcnclgk";

  /**
   * connect metamask and get wallet address
   */
  public async requestAptosConnect() {
    const result = await autoWalletCheck(() => {
      return window.martian
    }, 1500);

    if (!result) {
      throw new Error(EnumErrors.NoMartianWallet);
    }

    const { address } = await window.martian.connect();
    this.sdk = window.martian;
    this.address = address;
    this.chainId = ""; // todo tron chainId
    return address;
  }
}

export default MartianWallet;
