/**
 * @name TerraStation
 * @author openocean
 * @date 2021/4/21
 * @desc
 */
// @ts-ignore
import icon from "../assets/terra.svg";
import {EnumChains, EnumWalletName, EnumWalletType} from "../types";
import BaseWallet from "./BaseWallet";
// @ts-ignore
import { Extension } from "@terra-money/terra.js";

class TerraStation extends BaseWallet {
  public name = EnumWalletName.TerraStation;
  public icon = icon;
  public supportChains = [EnumChains.Terra];
  public type = EnumWalletType.Extension;
  public sdk: any = null;
  public installUrl = "https://chrome.google.com/webstore/detail/terra-station-wallet/aiifbnbfobpmeekipheeijimdpnlpgpp";

  /**
   * connect metamask and get wallet address
   * @param chainId specific chainId,throw error when not match
   */
  public requestTerraConnect() {
    return new Promise<string>((res) => {
      const extension = new Extension('station');
      this.sdk = extension;
      extension.on("onConnect", (data: any) => {
        const { address } = data || {};
        this.address = address;
        this.chainId = ''; // todo sollet chainId
        res(address);
      });
      extension.connect();
    });
  }
}

export default TerraStation;
