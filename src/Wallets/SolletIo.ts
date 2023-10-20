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

class SolletIo extends BaseWallet {
  public name = EnumWalletName.SolletIo;
  public icon = icon;
  public supportChains = [EnumChains.Solana];
  public type = EnumWalletType.Web;
  public sdk: any = null;

  /**
   * connect metamask and get wallet address
   * @param chainId specific chainId,throw error when not match
   */
  public requestSolanaConnect(chainId?: number) {
    return new Promise<string>((res) => {
      const wallet = new Wallet('https://solflare.com/');
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

export default SolletIo;
