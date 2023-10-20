/**
 * @name SenderWallet
 * @author openocean
 * @date 2021/4/21
 * @desc
 */
// @ts-ignore
import icon from "../assets/sender.svg";
import { EnumChains, EnumErrors, EnumWalletName, EnumWalletType } from "../types";
import BaseWallet from "./BaseWallet";
import { WalletConnection, utils } from "near-api-js";
import { createTransaction, functionCall } from "near-api-js/lib/transaction";
import { PublicKey } from "near-api-js/lib/utils";
import { setupWalletSelector } from "@near-wallet-selector/core";
import { setupSender } from "@near-wallet-selector/sender";

class SenderWallet extends BaseWallet {
  public name = EnumWalletName.SenderWallet;
  public icon = icon;
  public supportChains = [EnumChains.NEAR];
  public type = EnumWalletType.Extension;
  public sdk: WalletConnection | null = null;
  public createTransaction = createTransaction;
  public functionCall = functionCall;
  public PublicKey = PublicKey;
  public utils = utils;

  /**
   * connect metamask and get wallet address
   * @param chainId specific chainId,throw error when not match
   */
  public async requestConnect() {
    if (!window.near || !window.near.isSender) {
      throw new Error(EnumErrors.NoSender);
    }
    const sender = setupSender();

    const selector = await setupWalletSelector({
      network: "mainnet",
      debug: true,
      modules: [sender],
    });

    const wallet: any = await selector.wallet("sender");
    const accounts = await wallet.signIn({
      contractId:
        "a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.factory.bridge.near",
      accounts: []
    });
    
    this.sdk = wallet;
    this.address = accounts && accounts[0] && accounts[0].accountId || "";
    
    return this.address || "";
  }
}

export default SenderWallet;
