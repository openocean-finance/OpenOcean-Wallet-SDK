/**
 * @name OKXWallet
 * @author openocean
 * @date 2021/4/21
 * @desc
 */
// @ts-ignore
import icon from "../assets/okx.svg";
import {
  EnumChains,
  EnumErrors,
  EnumWalletName,
  EnumWalletType,
} from "../types";
import BaseWallet from "./BaseWallet";
import Web3 from "web3";

class OKXWallet extends BaseWallet {
  public name = EnumWalletName.OKXWallet;
  public icon = icon;
  public supportChains = [
    EnumChains.ETH,
    EnumChains.BSC,
    EnumChains.OKEX,
    EnumChains.Polygon,
    EnumChains.Avalanche,
    EnumChains.Fantom,
    EnumChains.Arbitrum,
    EnumChains.Optimism,
    EnumChains.Cronos,
    EnumChains.Boba,
    EnumChains.XDai,
    EnumChains.Moonriver,
    EnumChains.Scroll,
    EnumChains.Base,
    EnumChains.OpBNB,
    EnumChains.Mantle,
    EnumChains.Manta
  ];
  public type = EnumWalletType.Extension;
  public sdk: Web3 | null = null;
  public installUrl = "https://chrome.google.com/webstore/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge";

  /**
   * connect OKXWallet and get wallet address
   * @param chainId specific chainId,throw error when not match
   */
  public async requestConnect(chainId?: number) {
    if (!window.okexchain) {
      // go2 download page
      throw new Error(EnumErrors.NoOKX);
    }
    this.sdk = new Web3(window.okexchain);
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

export default OKXWallet;
