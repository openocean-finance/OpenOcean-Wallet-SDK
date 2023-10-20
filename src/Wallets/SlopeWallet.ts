/**
 * @name Slope
 * @author openocean
 * @date 2021/4/21
 * @desc
 */
// @ts-ignore
import icon from "../assets/slope.svg";
import { autoWalletCheck } from "../helper";
import {EnumChains, EnumErrors, EnumWalletName, EnumWalletType} from "../types";
import BaseWallet from "./BaseWallet";

class SlopeWallet extends BaseWallet {
  public name = EnumWalletName.SlopeWallet;
  public icon = icon;
  public supportChains = [EnumChains.Solana];
  public type = EnumWalletType.Extension;
  public sdk: any = null;
  public installUrl = "https://chrome.google.com/webstore/detail/slope-wallet/pocmplpaccanhmnllbbkpgfliimjljgo";

  /**
   * connect metamask and get wallet address
   * @param chainId specific chainId,throw error when not match
   */
  public async requestSolanaConnect(chainId?: number) {
    const result = await autoWalletCheck(() => {
      return window.Slope;
    }, 3000);

    if (!result) {
      throw new Error(EnumErrors.NoSlope);
    }
    
    const wallet = new window.Slope();
    wallet.isSlopeWallet = true;
    this.sdk = wallet;
    const { msg, data } = await wallet.connect();
    let address = '';
    if (msg === 'ok') {
      address = data.publicKey;
    }
    this.address = address;
    this.chainId = '';
    return address;
  }
}

export default SlopeWallet;
