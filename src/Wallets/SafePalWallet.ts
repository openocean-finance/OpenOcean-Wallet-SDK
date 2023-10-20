/**
 * @name SafePalWallet
 * @author openocean
 * @date 2021/4/21
 * @desc
 */
// @ts-ignore
import icon from "../assets/safepal.svg";
import { EnumChains, EnumErrors, EnumWalletName, EnumWalletType } from "../types";
import BaseWallet from "./BaseWallet";
import Web3 from "web3";

class SafePalWallet extends BaseWallet {
  public name = EnumWalletName.SafePalWallet;
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
    EnumChains.Boba,
    EnumChains.Moonriver,
    EnumChains.Cronos,
    EnumChains.Harmony,
    EnumChains.Metis,
    EnumChains.Kava,
    EnumChains.Celo,
    EnumChains.Klaytn,
    EnumChains.ZKSYNC,
    EnumChains.Linea,
    EnumChains.LineaTest,
    EnumChains.PolygonzkEVM,
    EnumChains.Scroll,
    EnumChains.Base,
    EnumChains.Mantle,
    EnumChains.Manta
  ];
  public type = EnumWalletType.Extension;
  public sdk: Web3 | null = null;
  public installUrl = "https://chrome.google.com/webstore/detail/safepal-extension-wallet/lgmpcpglpngdoalbgeoldeajfclnhafa";

  /**
   * connect SafePalWallet and get wallet address
   * @param chainId specific chainId,throw error when not match
   */
  public async requestConnect(chainId?: number) {
    if (!window.safepalProvider) {
      throw new Error(EnumErrors.NoSafePal);
    }
    this.sdk = new Web3(window.safepalProvider);
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

export default SafePalWallet;
