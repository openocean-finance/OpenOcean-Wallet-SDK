/**
 * @name Coinbase
 * @author openocean
 * @date 2021/4/21
 * @desc
 */
// @ts-ignore
import icon from "../assets/braavos.svg";
import {EnumChains, EnumErrors, EnumWalletName, EnumWalletType} from "../types";
import BaseWallet from "./BaseWallet";

class Braavos extends BaseWallet {
  public name = EnumWalletName.Braavos;
  public icon = icon;
  public supportChains = [EnumChains.Starknet];
  public type = EnumWalletType.Extension;
  public sdk: any;
  public installUrl = "https://chrome.google.com/webstore/detail/braavos-smart-wallet/jnlgamecbpmbajjfhmmmlhejkemejdma";

  /**
   * connect Coinbase and get wallet address
   */
  public async requestStarknetConnect() {
    const wallet = [window.starknet, window.starknet_braavos].find(
      obj => obj?.id === 'braavos'
    );
    if (!wallet) {
      throw new Error(EnumErrors.NoBraavos);
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

export default Braavos;
