/**
 * @name Solflare
 * @author openocean
 * @date 2021/4/21
 * @desc
 */
// @ts-ignore
import icon from "../assets/solflare.svg";
import { autoWalletCheck } from "../helper";
import { EnumChains, EnumErrors, EnumWalletName, EnumWalletType } from "../types";
import BaseWallet from "./BaseWallet";

class SolflareWallet extends BaseWallet {
  public name = EnumWalletName.SolflareWallet;
  public icon = icon;
  public supportChains = [EnumChains.Solana];
  public type = EnumWalletType.Extension;
  public sdk: any = null;
  public installUrl = "https://chrome.google.com/webstore/detail/solflare-wallet/bhhhlbepdkbapadjdnnojkbgioiodbic";

  /**
   * connect metamask and get wallet address
   * @param chainId specific chainId,throw error when not match
   */
  public async requestSolanaConnect(chainId?: number) {
    return new Promise<string>(async (res) => {
      const result = await autoWalletCheck(() => {
        return window.solflare && window.solflare.isSolflare;
      }, 3000);
  
      if (!result) {
        throw new Error(EnumErrors.NoSolflare);
      }

      const wallet  = window.parent && window.parent.solflare ? window.parent.solflare : window.solflare;
      // const wallet = window.solflare;
      this.sdk = wallet;
      wallet.on('connect', (publicKey: any) => {
        const address: string = wallet.publicKey.toString();
        this.address = address;
        this.chainId = ''; // todo sollet chainId
        res(address);
      });
      wallet.connect();
    });
  }
}

export default SolflareWallet;
