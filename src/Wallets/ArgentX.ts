/**
 * @name Coinbase
 * @author openocean
 * @date 2021/4/21
 * @desc
 */
// @ts-ignore
import icon from "../assets/argentx.svg";
import {EnumChains, EnumErrors, EnumWalletName, EnumWalletType} from "../types";
import BaseWallet from "./BaseWallet";

class ArgentX extends BaseWallet {
  public name = EnumWalletName.ArgentX;
  public icon = icon;
  public supportChains = [EnumChains.Starknet];
  public type = EnumWalletType.Extension;
  public sdk: any;
  public installUrl = "https://chrome.google.com/webstore/detail/argent-x/dlcobpjiigpikoobohmabehhmhfoodbb";

  /**
   * connect Coinbase and get wallet address
   */
  public async requestStarknetConnect() {
    const wallet = [window.starknet, window.starknet_argentX].find(
      obj => obj?.id === 'argentX'
    );
    if (!wallet) {
      throw new Error(EnumErrors.NoArgentX);
    }
    this.address = wallet.selectedAddress;
    if (!this.address) {
      await wallet.enable();
      this.address = wallet.selectedAddress;
    }
    this.sdk = wallet.provider;
    this.sdk.account = wallet.account;
    return this.address || '';
  }
}

export default ArgentX;
