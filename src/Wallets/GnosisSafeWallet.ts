/**
 * @name GnosisSafe
 * @author openocean
 * @date 2021/4/21
 * @desc
 */
// @ts-ignore
import icon from "../assets/metamask.svg";
import { EnumChains, EnumErrors, EnumWalletName, EnumWalletType } from "../types";
import BaseWallet from "./BaseWallet";
import Web3 from "web3";
import SafeAppsSDK from '@gnosis.pm/safe-apps-sdk';
import { SafeAppProvider } from '@gnosis.pm/safe-apps-provider';

class GnosisSafeWallet extends BaseWallet {
  public name = EnumWalletName.GnosisSafeWallet;
  public icon = icon;
  public supportChains = [ EnumChains.RINKEBY ];
  public type = EnumWalletType.Extension;
  public sdk: any;

  /**
   * connect metamask and get wallet address
   * @param chainId specific chainId,throw error when not match
   */
  public async requestConnect(chainId?: number) {
    const opts = {
        // allowedDomains: [/gnosis-safe.io/],
        allowedDomains: [/gnosis-safe.io$/, /app.safe.global$/, /wallet-test.secux.io$/],
        debug: false
    };
    const sdk = new SafeAppsSDK(opts);
    const safe = await sdk.safe.getInfo();
    const provider = new SafeAppProvider(safe, sdk as any);
    this.sdk = (new Web3(provider as any).currentProvider as any).sdk;
    console.log('sdk', this.sdk);
    const currentChainId = safe.chainId;
    if (chainId && currentChainId !== chainId) {
      throw new Error(EnumErrors.ChainIdNotMath);
    }
    this.address = safe.safeAddress;
    this.chainId = currentChainId;
    return this.address;
  }
}

export default GnosisSafeWallet;
