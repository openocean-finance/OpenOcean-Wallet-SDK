/**
 * @name LedgerWallet
 * @author openocean
 * @date 2021/4/21
 * @desc
 */
// @ts-ignore
import icon from "../assets/ledger.svg";
import {EnumChains, EnumErrors, EnumWalletName, EnumWalletType} from "../types";
import BaseWallet from "./BaseWallet";
import { listen } from "@ledgerhq/logs";
import AppEth from "@ledgerhq/hw-app-eth";
import TransportWebUSB from "@ledgerhq/hw-transport-webusb";
// import ProviderEngine from 'web3-provider-engine';
// import createLedgerSubprovider from '@ledgerhq/web3-subprovider';
// import FetchSubprovider from 'web3-provider-engine/subproviders/fetch';
// import VmSubprovider from 'web3-provider-engine/subproviders/vm';
// import Web3 from "web3";

class LedgerWallet extends BaseWallet {
  public name = EnumWalletName.LedgerWallet;
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
      const transport = await TransportWebUSB.create();
      listen((log) => console.log(log));
      const appEth = new AppEth(transport);
      console.log('requestConnect1', appEth);

      /*
      const engine = new ProviderEngine();
      engine.addProvider(createLedgerSubprovider(() => transport, { networkId: 1 }));
      engine.addProvider(new FetchSubprovider({ rpcUrl: "https://eth.llamarpc.com" }));
      engine.addProvider(new VmSubprovider());
      engine.start();
      console.log('requestConnect2', engine);

      this.sdk = new Web3(engine);
      console.log('requestConnect3', this.sdk);

      const accounts = await this.sdk.eth.getAccounts();
      console.log('requestConnect4', accounts);
      */

      const { publicKey, address } = await this.sdk.getAddress("44'/60'/0'/0/0");
      this.sdk.publicKey = publicKey;
      this.address = address;
      this.chainId = chainId;
      return address;
    } catch(e) {
      console.log('requestConnect5', JSON.stringify(e));
      throw new Error(EnumErrors.NoLedger);
    }
  }
}

export default LedgerWallet;
