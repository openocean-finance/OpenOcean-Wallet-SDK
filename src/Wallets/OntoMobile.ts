/**
 * @name OntoMobile
 * @author openocean
 * @date 2021/4/21
 * @desc
 */
// @ts-ignore
import icon from "../assets/onto.svg";
import {EnumChains, EnumErrors, EnumWalletName, EnumWalletType} from "../types";
import BaseWallet from "./BaseWallet";
import Web3 from 'web3';

class OntoMobile extends BaseWallet {
  public name = EnumWalletName.OntoMobile;
  public icon = icon;
  public supportChains = [EnumChains.ONT];
  public type = EnumWalletType.Mobile;
  public sdk: Web3 | null = null;

  /**
   * connect metamask and get wallet address
   * @param chainId specific chainId,throw error when not match
   */
  public async requestConnect(chainId?: number) {
    if (!(window.ethereum && window.ethereum.isONTO)) {
      throw new Error(EnumErrors.NoOnto);
    }
    this.sdk = new Web3(window.ethereum);
    const currentChainId = await this.sdk.eth.getChainId();
    if (chainId && currentChainId !== chainId) {
      throw new Error(EnumErrors.ChainIdNotMath);
    }
    const [address] = await this.sdk.eth.requestAccounts();
    this.address = address;
    this.chainId = currentChainId;
    return address;
  }
}

export default OntoMobile;
