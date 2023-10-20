/**
 * @name BitgetWallet
 * @author openocean
 * @date 2021/4/21
 * @desc
 */
// @ts-ignore
import icon from "../assets/bitget.svg";
import { EnumChains, EnumErrors, EnumWalletName, EnumWalletType } from "../types";
import BaseWallet from "./BaseWallet";
import Web3 from "web3";

class BitgetWallet extends BaseWallet {
  public name = EnumWalletName.BitgetWallet;
  public icon = icon;
  public supportChains = [
    EnumChains.ETH,
    EnumChains.BSC,
    EnumChains.Polygon,
    EnumChains.OKEX,
    EnumChains.XDai,
    EnumChains.HECO,
    EnumChains.Fantom,
    EnumChains.Avalanche,
    EnumChains.Arbitrum,
    EnumChains.Optimism,
    EnumChains.ZKSYNC,
    EnumChains.Linea,
    EnumChains.LineaTest,
    EnumChains.PolygonzkEVM
    // EnumChains.Boba,
    // EnumChains.Moonriver,
    // EnumChains.Aurora,
    // EnumChains.Cronos,
    // EnumChains.Harmony
  ];
  public type = EnumWalletType.Extension;
  public sdk: Web3 | null = null;
  public installUrl = "https://chrome.google.com/webstore/detail/bitkeep-bitcoin-crypto-wa/jiidiaalihmmhddjgbnbgdfflelocpak";

  /**
   * connect metamask and get wallet address
   * @param chainId specific chainId,throw error when not match
   */
  public async requestConnect(chainId?: number) {
    if (!(window.isBitKeep && window.bitkeep.ethereum)) {
      throw new Error(EnumErrors.NoBitget);
    }
    this.sdk = new Web3(window.bitkeep.ethereum)
    // this.sdk = new Web3(window.ethereum);
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

export default BitgetWallet;
