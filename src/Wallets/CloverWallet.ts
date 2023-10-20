/**
 * @name CloverWallet
 * @author openocean
 * @date 2021/4/21
 * @desc
 */
// @ts-ignore
import icon from "../assets/clover.svg";
import { EnumChains, EnumErrors, EnumWalletName, EnumWalletType } from "../types";
import BaseWallet from "./BaseWallet";
import Web3 from 'web3';
// @ts-ignore
import Wallet from '@project-serum/sol-wallet-adapter';
import { autoWalletCheck } from "../helper";

class CloverWallet extends BaseWallet {
  public name = EnumWalletName.CloverWallet;
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
    EnumChains.Solana,
  ];
  public type = EnumWalletType.Extension;
  public sdk: any | null = null;
  public installUrl = "https://chrome.google.com/webstore/detail/clv-wallet/nhnkbkgjikgcigadomkphalanndcapjk";

  /**
   * connect Clover and get wallet address
   * @param chainId specific chainId,throw error when not match
   */
  public async requestConnect(chainId?: number) {
    if (!window.clover) {
      throw new Error(EnumErrors.NoClover);
    }
    this.sdk = new Web3(window.clover);
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
   * connect metamask and get wallet address
   * @param chainId specific chainId,throw error when not match
   */
  public async requestSolanaConnect() {
    const result = await autoWalletCheck(() => {
      return window.clover_solana;
    }, 3000);

    if (!result) {
      throw new Error(EnumErrors.NoClover);
    }
    const wallet = window.clover_solana;
    this.sdk = wallet;
    const address = await wallet.getAccount();
    this.address = address;
    this.chainId = '';
    return address;
  }
}

export default CloverWallet;
