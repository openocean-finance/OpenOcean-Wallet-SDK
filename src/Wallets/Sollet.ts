/**
 * @name Sollet
 * @author openocean
 * @date 2021/4/21
 * @desc
 */
// @ts-ignore
import icon from "../assets/sollet.svg";
import {EnumChains, EnumErrors, EnumWalletName, EnumWalletType} from "../types";
import BaseWallet from "./BaseWallet";
// @ts-ignore
import Wallet from '@project-serum/sol-wallet-adapter';
import { autoWalletCheck } from "../helper";

class Sollet extends BaseWallet {
  public name = EnumWalletName.Sollet;
  public icon = icon;
  public supportChains = [EnumChains.Solana];
  public type = EnumWalletType.Extension;
  public sdk: any = null;
  public installUrl = "https://chrome.google.com/webstore/detail/sollet/fhmfendgdocmcbmfikdcogofphimnkno";

  /**
   * connect metamask and get wallet address
   * @param chainId specific chainId,throw error when not match
   */
  public requestSolanaConnect(chainId?: number) {
    return new Promise<string>(async (res) => {
      const result = await autoWalletCheck(() => {
        return window.sollet;
      }, 3000);
  
      if (!result) {
        throw new Error(EnumErrors.NoSollet);
      }
      const wallet = new Wallet(window.sollet);
      this.sdk = wallet;
      wallet.on('connect', (publicKey: any) => {
        const address: string = publicKey.toBase58();
        this.address = address;
        this.chainId = ''; // todo sollet chainId
        res(address);
      });
      wallet.connect();
    });
  }
}

export default Sollet;
