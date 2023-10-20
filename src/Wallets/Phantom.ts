/**
 * @name Sollet
 * @author openocean
 * @date 2021/4/21
 * @desc
 */
// @ts-ignore
import icon from "../assets/phantom.svg";
import { EnumChains, EnumErrors, EnumWalletName, EnumWalletType } from "../types";
import BaseWallet from "./BaseWallet";
import { autoWalletCheck } from "../helper";

class Phantom extends BaseWallet {
  public name = EnumWalletName.Phantom;
  public icon = icon;
  public supportChains = [EnumChains.Solana];
  public type = EnumWalletType.Extension;
  public sdk: any = null;
  public installUrl = "https://chrome.google.com/webstore/detail/phantom/bfnaelmomeimhlpmgjnjophhpkkoljpa";

  /**
   * connect metamask and get wallet address
   * @param chainId specific chainId,throw error when not match
   */
  public requestSolanaConnect(chainId?: number) {
    return new Promise<string>(async (res) => {
      const result = await autoWalletCheck(() => {
        return (window.solana && window.solana.isPhantom) || (window.parent && window.parent.solana);
      }, 3000, 30);

      if (!result) {
        throw new Error(EnumErrors.NoPhantom);
      }
      
      const wallet = window.parent && window.parent.solana ? window.parent.solana : window.solana;

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

export default Phantom;
