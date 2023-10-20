/**
 * @name NearWallet
 * @author openocean
 * @date 2021/4/21
 * @desc
 */
// @ts-ignore
import icon from "../assets/near.svg";
import { EnumChains, EnumWalletName, EnumWalletType } from "../types";
import BaseWallet from "./BaseWallet";
import { keyStores, connect, WalletConnection, utils } from "near-api-js";
import { createTransaction, functionCall } from 'near-api-js/lib/transaction';
import { PublicKey } from 'near-api-js/lib/utils';
import { sleep } from "../helper";

class NearWallet extends BaseWallet {
  public name = EnumWalletName.NearWallet;
  public icon = icon;
  public supportChains = [
    EnumChains.NEAR
  ];
  public type = EnumWalletType.Extension;
  public sdk: WalletConnection | null = null;
  public createTransaction = createTransaction
  public functionCall = functionCall
  public PublicKey = PublicKey
  public utils = utils

  async init() {
    if (window.localStorage.getItem('connectwallet') !== this.name) {
      return;
    }
    let account_id = ''
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (pair[0] == 'account_id') { account_id = pair[1]; }
    }
    if (account_id) {
      await this.requestConnect()
    }
  }
  /**
   * connect metamask and get wallet address
   * @param chainId specific chainId,throw error when not match
   */
  public async requestConnect() {
    await sleep(1000);
    
    window.localStorage.setItem('connectwallet', this.name);

    let wallet = await connect({
      networkId: "mainnet",
      keyStore: new keyStores.BrowserLocalStorageKeyStore(),
      nodeUrl: "https://rpc.mainnet.near.org",
      walletUrl: "https://wallet.mainnet.near.org",
      helperUrl: "https://helper.mainnet.near.org",
      headers: {}
      // explorerUrl: "https://explorer.mainnet.near.org",
    });

    this.sdk = new WalletConnection(wallet, 'OpenOcean');
    let account = this.sdk.account()
    if (!account.accountId) {
      await this.sdk.requestSignIn({
        contractId: 'a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.factory.bridge.near',
        methodNames: [], // optional
      });
    }
    account = this.sdk.account()
    this.address = account.accountId

    return this.address || '';
  }

  constructor() {
    super()
    this.init()
  }
}

export default NearWallet;