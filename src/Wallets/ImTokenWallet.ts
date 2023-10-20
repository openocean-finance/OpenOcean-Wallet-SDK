/**
 * @name ImTokenWallet
 * @author openocean
 * @date 2021/4/21
 * @desc
 */
// @ts-ignore
import icon from "../assets/imtoken.svg";
import {
  EnumChains,
  EnumErrors,
  EnumWalletName,
  EnumWalletType,
} from "../types";
import BaseWallet from "./BaseWallet";
import Web3 from "web3";

class ImTokenWallet extends BaseWallet {
  public name = EnumWalletName.ImTokenWallet;
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
    EnumChains.ZKSYNC,
    EnumChains.Linea,
    EnumChains.LineaTest,
    EnumChains.PolygonzkEVM,
    EnumChains.Scroll,
    EnumChains.Base,
    EnumChains.OpBNB,
    EnumChains.Mantle,
    EnumChains.Manta
  ];
  public type = EnumWalletType.Mobile;
  public sdk: Web3 | null = null;
  public installUrl = "https://token.im/download";

  /**
   * connect ImTokenWallet and get wallet address
   * @param chainId specific chainId,throw error when not match
   */
  public async requestConnect(chainId?: number) {
    if (!window.ethereum) {
      throw new Error(EnumErrors.NoImToken);
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

export default ImTokenWallet;
