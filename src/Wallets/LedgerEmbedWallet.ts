/**
 * @name LedgerEmbedWallet
 * @author openocean
 * @date 2021/4/21
 * @desc
 */
// @ts-ignore
import icon from "../assets/ledger.svg";
import {EnumChains, EnumErrors, EnumWalletName, EnumWalletType} from "../types";
import BaseWallet from "./BaseWallet";
import Web3 from "web3";
import { LedgerHQFrameConnector } from 'web3-ledgerhq-frame-connector';

class LedgerEmbedWallet extends BaseWallet {
  public name = EnumWalletName.LedgerEmbedWallet;
  public icon = icon;
  public supportChains = [EnumChains.ETH];
  public type = EnumWalletType.Extension;
  public sdk: any = {};
  public installUrl = "https://www.ledger.com/";

  /**
   * connect LedgerWallet and get wallet address
   * @param chainId specific chainId,throw error when not match
   */
  public async requestConnect(chainId?: number) {
    try {
      console.log('requestConnect999');
      const LedgerHQFrame = new LedgerHQFrameConnector();
      console.log('requestConnect999 LedgerHQFrame', LedgerHQFrame);
      const { account = '', provider } = await LedgerHQFrame.activate();
      console.log('requestConnect999, account, provider', account, provider);
      const address = account || '';
      const res = await LedgerHQFrame.getChainId();
      console.log('requestConnect999, getChainId', res);
      const chainId = +Web3.utils.hexToNumberString(res);
      console.log('requestConnect999, chainId', chainId);
      this.sdk = new Web3(provider);
      this.address = address;
      this.chainId = chainId;
      return address;
    } catch(e) {
      console.log('requestConnect999', JSON.stringify(e));
      throw new Error(EnumErrors.NoLedger);
    }
  }
}

export default LedgerEmbedWallet;
