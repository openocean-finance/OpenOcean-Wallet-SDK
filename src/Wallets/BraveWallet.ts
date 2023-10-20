/**
 * @name BraveWallet
 * @author openocean
 * @date 2021/4/21
 * @desc
 */
// @ts-ignore
import icon from "../assets/brave.svg";
import { EnumChains, EnumErrors, EnumWalletName, EnumWalletType } from "../types";
import BaseWallet from "./BaseWallet";
import Web3 from "web3";

class BraveWallet extends BaseWallet {
  public name = EnumWalletName.BraveWallet;
  public icon = icon;
  public supportChains = [
    EnumChains.ETH,
    EnumChains.ROPSTEN,
    EnumChains.BSC,
    EnumChains.BSCTEST,
    EnumChains.Polygon,
    EnumChains.OKEX,
    EnumChains.XDai,
    EnumChains.HECO,
    EnumChains.Fantom,
    EnumChains.Avalanche,
    EnumChains.Arbitrum,
    EnumChains.Optimism,
    EnumChains.Boba,
    EnumChains.Moonriver,
    EnumChains.Aurora,
    EnumChains.Cronos,
    EnumChains.Harmony
  ];
  public type = EnumWalletType.Extension;
  public sdk: Web3 | null = null;
  public installUrl = "https://brave.com/wallet";

  /**
   * connect metamask and get wallet address
   * @param chainId specific chainId,throw error when not match
   */
  public async requestConnect(chainId?: number) {
    if (!(window.ethereum && window.ethereum.isBraveWallet)) {
      throw new Error(EnumErrors.NoBrave);
    }
    this.sdk = new Web3(window.ethereum);
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

export default BraveWallet;
