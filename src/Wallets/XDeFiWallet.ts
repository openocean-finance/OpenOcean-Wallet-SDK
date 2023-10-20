/**
 * @name XDeFi
 * @author openocean
 * @date 2021/4/21
 * @desc
 */
// @ts-ignore
import icon from "../assets/xdefi.svg";
import {EnumChains, EnumErrors, EnumWalletName, EnumWalletType} from "../types";
import BaseWallet from "./BaseWallet";
import Web3 from 'web3';
// @ts-ignore
import { Extension } from "@terra-money/terra.js";

class XDEFIWallet extends BaseWallet {
  public name = EnumWalletName.XDEFIWallet;
  public icon = icon;
  public supportChains = [EnumChains.ETH, EnumChains.BSC, EnumChains.Polygon, EnumChains.Terra];
  public type = EnumWalletType.Extension;
  public sdk: any | null = null;
  public installUrl = "https://chrome.google.com/webstore/detail/trust-wallet/egjidjbpglichdcondbcbdnbeeppgdph";

  /**
   * connect XDeFi and get wallet address
   * @param chainId specific chainId,throw error when not match
   */
  public async requestConnect(chainId?: number) {
    if (!(window.xfi && window.xfi.ethereum)) {
      throw new Error(EnumErrors.NoXDeFi);
    }
    this.sdk = new Web3(window.xfi.ethereum);
    const [address] = await this.sdk.eth.requestAccounts();
    const currentChainId = await this.sdk.eth.getChainId();
    if (chainId && currentChainId !== chainId) {
      throw new Error(EnumErrors.ChainIdNotMath);
    }
    this.address = address;
    this.chainId = currentChainId;
    return address;
  }

  /**
   * connect XDeFi and get wallet address
   * @param chainId specific chainId,throw error when not match
   */
  public async requestTerraConnect() {
    return new Promise<string>((res) => {
      if (!(window.xfi && window.xfi.terra)) {
        throw new Error(EnumErrors.NoXDeFi);
      }
      const extension = new Extension('xdefi-wallet');
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

export default XDEFIWallet;
