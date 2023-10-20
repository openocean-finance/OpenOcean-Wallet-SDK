/**
 * @name OntoWallet
 * @author openocean
 * @date 2022/3/1
 * @desc
 */
// @ts-ignore
import icon from "../assets/onto.svg";
import {EnumChains, EnumErrors, EnumWalletName, EnumWalletType} from "../types";
import BaseWallet from "./BaseWallet";
import Web3 from 'web3';

class OntoWallet extends BaseWallet {
  public name = EnumWalletName.OntoWallet;
  public icon = icon;
  public supportChains = [EnumChains.ETH, EnumChains.BSC, EnumChains.OKEX, EnumChains.Polygon, EnumChains.HECO, EnumChains.Arbitrum, EnumChains.Avalanche, EnumChains.ONTEVM];
  public type = EnumWalletType.Extension;
  public sdk: Web3 | null = null;
  public installUrl = "https://chrome.google.com/webstore/detail/onto-wallet/ifckdpamphokdglkkdomedpdegcjhjdp";

  /**
   * connect OntoWallet and get wallet address
   * @param chainId specific chainId,throw error when not match
   */
  public async requestConnect(chainId?: number) {
    if (!(window.onto)) {
      throw new Error(EnumErrors.NoOnto);
    }
    this.sdk = new Web3(window.onto);
    const [address] = await this.sdk.eth.requestAccounts();
    const _currentChainId = await this.sdk.eth.getChainId();
    const currentChainId = Web3.utils.hexToNumber(_currentChainId);
    if (chainId && currentChainId !== chainId) {
      throw new Error(EnumErrors.OntoChainIdNotMath);
    }
    this.address = address;
    this.chainId = currentChainId;
    return address;
  }
}

export default OntoWallet;
