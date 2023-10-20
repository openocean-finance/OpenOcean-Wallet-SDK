/**
 * @name Sollet
 * @author openocean
 * @date 2021/4/21
 * @desc
 */
// @ts-ignore
import icon from "../assets/blocto.svg";
import { EnumChains, EnumErrors, EnumWalletName, EnumWalletType } from "../types";
import BaseWallet from "./BaseWallet";
import Web3 from "web3";
import * as fcl from "@onflow/fcl";
import { autoWalletCheck } from "../helper";

class BloctoWallet extends BaseWallet {
  public name = EnumWalletName.BloctoWallet;
  public icon = icon;
  public supportChains = [
    EnumChains.ETH,
    EnumChains.BSC,
    EnumChains.Polygon,
    EnumChains.Avalanche,
    // EnumChains.TRON,
    EnumChains.Solana
  ];
  public type = EnumWalletType.Mobile;
  public sdk: Web3 | null = null;
  public installUrl = "https://portto.com/download";

  /**
   * connect metamask and get wallet address
   * @param chainId specific chainId,throw error when not match
   */
  public async requestConnect(chainId?: number) {
    if(!(navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
      throw new Error(EnumErrors.NoBlocto);
    }
    if (!((window.ethereum && window.ethereum.isBlocto) || (Web3 && Web3.givenProvider))) {
      throw new Error(EnumErrors.NoBlocto);
    }
    this.sdk = new Web3(window.ethereum || Web3.givenProvider)
    // this.sdk = new Web3(window.ethereum);
    const [address] = await this.sdk.eth.requestAccounts();
    const currentChainId = await this.sdk.eth.getChainId();
    if (chainId && currentChainId !== chainId) {
      throw new Error(EnumErrors.ChainIdNotMath);
    }
    this.address = address;
    this.chainId = currentChainId;
    return address;
  }

  /**
   * connect metamask and get wallet address
   */
  public async requestTronConnect() {
    return new Promise<string>((res) => {
      if (!window.tron) {
        throw new Error(EnumErrors.NoBlocto);
      }
      let account = window.tron.defaultAddress.base58;
      if (!account) {
        setTimeout(()=> {
          account = window.tron.defaultAddress.base58;
          if (!account) {
            throw new Error(EnumErrors.NoBloctoAccount);
          } else {
            this.sdk = window.tron;
            this.address = account;
            this.chainId = ''; // todo tron chainId
            res(account);
          }
        }, 1000);
      } else {
        this.sdk = window.tron;
        this.address = account;
        this.chainId = ''; // todo tron chainId
        res(account);
      }
    });
  }
  
  /**
   * connect metamask and get wallet address
   * @param chainId specific chainId,throw error when not match
   */
  public requestSolanaConnect(chainId?: number) {
    return new Promise<string>(async (res) => {
      const result = await autoWalletCheck(() => {
        return (window.solana && window.solana.isBlocto) || (window.parent && window.parent.solana);
      }, 3000);
  
      if (!result) {
        throw new Error(EnumErrors.NoBlocto);
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

  /**
   * connect metamask and get wallet address
   * @param chainId specific chainId,throw error when not match
   */
  public async requestFlowConnect(chainId?: number) {
    return new Promise<string>((res) => {
      fcl.config()
      .put("challenge.scope", "email") // request for Email
      .put("accessNode.api", "https://rest-mainnet.onflow.org") // Flow mainnet
      .put("discovery.wallet", "https://flow-wallet.blocto.app/authn") // Blocto wallet
      .put("service.OpenID.scopes", "email!")

      this.sdk = fcl;
      fcl
      .currentUser()
      .subscribe((user: any) => {
        console.log('currentUser', user);
        const { addr } = user || {};
        if (!addr) {
          fcl.authenticate()
        } else {
          this.address = addr;
          res(addr);
        }
      })
      this.address = '';
      this.chainId = ''; // todo sollet chainId
    });
  }
}

export default BloctoWallet;
