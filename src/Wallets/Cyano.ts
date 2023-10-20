/**
 * @name Cyano
 * @author openocean
 * @date 2021/4/21
 * @desc
 */
import {EnumChains, EnumErrors, EnumWalletName, EnumWalletType} from "../types";
import {client} from '@ont-dev/ontology-dapi'
import BaseWallet from "./BaseWallet";
// @ts-ignore
import icon from "../assets/cyano.svg";

class Cyano extends BaseWallet {
  public name = EnumWalletName.Cyano;
  public icon = icon;
  public supportChains = [EnumChains.ONT];
  public type = EnumWalletType.Extension;
  public sdk: typeof client | null = null;
  public installUrl = "https://chrome.google.com/webstore/detail/cyano-wallet/dkdedlpgdmmkkfjabffeganieamfklkm";

  public async requestConnect(chainId?: string) {
    try {
      client.registerClient({
        logMessages: false,
        logWarnings: false,
      });
    } catch (e) {
      throw new Error(EnumErrors.NoCyano);
    }
    this.sdk = client; // not support return instance currently
    const network = await client.api.network.getNetwork();
    if (chainId && network.type !== chainId) {
      throw new Error(EnumErrors.ChainIdNotMath);
    }
    const account = await client.api.asset.getAccount();
    this.address = account;
    this.chainId = network.type;
    return account;
  }
}

export default Cyano;
