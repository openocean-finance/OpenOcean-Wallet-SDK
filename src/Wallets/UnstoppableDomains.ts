/**
 * @name UnstoppableDomains
 * @author openocean
 * @date 2021/4/21
 * @desc
 */
// @ts-ignore
import icon from "../assets/unstoppabledomains.svg";
import {EnumChains, EnumErrors, EnumWalletName, EnumWalletType} from "../types";
import BaseWallet from "./BaseWallet";
import Web3 from 'web3';
import UAuth from '@uauth/js';

class UnstoppableDomains extends BaseWallet {
  public name = EnumWalletName.UnstoppableDomains;
  public icon = icon;
  public supportChains = [
    EnumChains.ETH,
    EnumChains.ROPSTEN,
    EnumChains.RINKEBY,
    EnumChains.BSC,
    EnumChains.BSCTEST,
    EnumChains.Polygon,
    EnumChains.OKEX,
    EnumChains.XDai,
    EnumChains.HECO,
    EnumChains.Fantom,
    EnumChains.Avalanche,
    EnumChains.Arbitrum,
    EnumChains.Optimism,
    EnumChains.Boba,
    EnumChains.Moonriver,
    EnumChains.Aurora,
    EnumChains.Cronos,
    EnumChains.Harmony,
    EnumChains.Telos,

  ];
  public type = EnumWalletType.Mobile;
  public sdk: Web3 | null = null;

  /**
   * connect UnstoppableDomains and get wallet address
   * @param chainId specific chainId,throw error when not match
   */
  public async requestConnect(chainId?: number) {
    const uauth = new UAuth({
      clientID: "05c3a150-4fef-49c9-a153-af16851c75ba",
      redirectUri: "https://app.openocean.finance/CLASSIC",
      // redirectUri: window.location.origin + (window.location.pathname || ""),
      // responseMode: "fragment",
      // clientAuthMethod: "none",
      prompt: "login",
      scope: "openid wallet"
    })
    const _account = window.localStorage.getItem('uAuthAccount');
    if (_account) {
      try  {
        const { sub } = await uauth.user();
        console.log('account', sub);
        this.account = sub;
      } catch(e) {
        const authorization = await uauth.loginWithPopup();
        const account = uauth.getAuthorizationAccount(authorization);
        const { sub, wallet_address } = await uauth.user();
        console.log('account', account, sub, wallet_address);
        this.account = sub;
      }
    } else {
      const authorization = await uauth.loginWithPopup();
      const account = uauth.getAuthorizationAccount(authorization);
      const { sub, wallet_address } = await uauth.user();
      console.log('account', account, sub, wallet_address);
      this.account = sub;
    }
    window.localStorage.setItem('uAuthAccount', this.account);

    if (!window.ethereum) {
      throw new Error(EnumErrors.NotMetamask);
    }
    this.sdk = new Web3(window.ethereum);
    const [address] = await this.sdk.eth.requestAccounts();
    const currentChainId = await this.sdk.eth.getChainId();
    if (chainId && currentChainId !== chainId) {
      throw new Error(EnumErrors.ChainIdNotMath);
    }
    this.address = address;
    this.chainId = currentChainId;
    return address;
  }
}

export default UnstoppableDomains;
