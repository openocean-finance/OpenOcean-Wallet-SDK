/**
 * @name MetaMask
 * @author openocean
 * @date 2021/4/21
 * @desc
 */
// @ts-ignore
import icon from "../assets/metamask.svg";
import { EnumChains, EnumErrors, EnumWalletName, EnumWalletType } from "../types";
import BaseWallet from "./BaseWallet";
import Web3 from "web3";

class MetaMask extends BaseWallet {
  public name = EnumWalletName.MetaMask;
  public icon = icon;
  public supportChains = [
    EnumChains.ETH,
    EnumChains.ROPSTEN,
    EnumChains.RINKEBY,
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
    EnumChains.Harmony,
    EnumChains.ONTEVM,
    EnumChains.Metis,
    EnumChains.Kava,
    EnumChains.Celo,
    EnumChains.Klaytn,
    EnumChains.ZKSYNC,
    EnumChains.Linea,
    EnumChains.LineaTest,
    EnumChains.PolygonzkEVM,
    EnumChains.Telos,
    EnumChains.Scroll,
    EnumChains.Base,
    EnumChains.OpBNB,
    EnumChains.Mantle,
    EnumChains.Manta
  ];
  public type = EnumWalletType.Extension;
  public sdk: Web3 | null = null;
  public installUrl = "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn";

  /**
   * connect metamask and get wallet address
   * @param chainId specific chainId,throw error when not match
   */
  public async requestConnect(chainId?: number) {
    if (!(window.ethereum || (Web3 && Web3.givenProvider) || window.safepal_wallet_app)) {
      throw new Error(EnumErrors.NotMetamask);
    }
    this.sdk = new Web3(Web3.givenProvider || window.ethereum || window.safepal_wallet_app)
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

export default MetaMask;
