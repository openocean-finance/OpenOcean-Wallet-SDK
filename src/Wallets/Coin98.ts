/**
 * @name Coin98
 * @author openocean
 * @date 2021/4/21
 * @desc
 */
// @ts-ignore
import icon from "../assets/coin98.svg";
import {
  EnumChains,
  EnumErrors,
  EnumWalletName,
  EnumWalletType,
} from "../types";
import BaseWallet from "./BaseWallet";
import Web3 from "web3";
import { autoWalletCheck } from "../helper";

class Coin98 extends BaseWallet {
  public name = EnumWalletName.Coin98;
  public icon = icon;
  public supportChains = [
    EnumChains.ETH,
    EnumChains.BSC,
    EnumChains.Polygon,
    EnumChains.HECO,
    EnumChains.XDai,
    EnumChains.Fantom,
    EnumChains.Avalanche,
    EnumChains.Arbitrum,
    EnumChains.OKEX,
    EnumChains.Aurora,
    EnumChains.Scroll,
    EnumChains.Base,
    EnumChains.OpBNB,
    EnumChains.Mantle,
    EnumChains.Manta
  ];
  public type = EnumWalletType.Extension;
  public sdk: any | null = null;
  public installUrl =
    "https://chrome.google.com/webstore/detail/coin98-wallet/aeachknmefphepccionboohckonoeemg";

  /**
   * connect Coin98 and get wallet address
   * @param chainId specific chainId,throw error when not match
   */
  public async requestConnect(chainId?: number) {
    if (!(window.ethereum.isCoin98 || window.coin98)) {
      // go2 download page
      throw new Error(EnumErrors.NoCoin98);
    }
    // this.sdk = new Web3(window.coin98.provider);
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

  /**
   * connect Coin98 and get wallet address
   * @param chainId specific chainId,throw error when not match
   */
  public async requestSolanaConnect() {
    const result = await autoWalletCheck(() => {
      return (
        (window.ethereum && window.ethereum.isCoin98) ||
        (window.coin98 && window.coin98.sol)
      );
    }, 3000);

    if (!result) {
      throw new Error(EnumErrors.NoCoin98);
    }

    this.sdk = window.coin98.sol;
    const accounts = await this.sdk.request({ method: "sol_accounts" });
    const address = (accounts && accounts[0]) || "";
    this.address = address;
    this.chainId = "";
    return address;
  }
}

export default Coin98;
