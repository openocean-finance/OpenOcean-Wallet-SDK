/**
 * @name Sollet
 * @author openocean
 * @date 2021/4/21
 * @desc
 */
// @ts-ignore
import icon from "../assets/keplr.png";
import { EnumChains, EnumErrors, EnumWalletName, EnumWalletType } from "../types";
import BaseWallet from "./BaseWallet";
import {
  LcdClient,
  setupAuthExtension,
  setupBankExtension,
  setupDistributionExtension,
  setupGovExtension,
  setupMintExtension,
  setupSlashingExtension,
  setupStakingExtension,
  setupSupplyExtension,
} from "@cosmjs/launchpad";
import { SigningStargateClient, AminoTypes } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";

import {
  cosmosAminoConverters,
  cosmosProtoRegistry,
  cosmwasmAminoConverters,
  cosmwasmProtoRegistry,
  ibcProtoRegistry,
  ibcAminoConverters,
  osmosisAminoConverters,
  osmosisProtoRegistry,
  FEES,
  ibc
} from 'osmojs';


const protoRegistryBase = [
  ...cosmosProtoRegistry,
  ...cosmwasmProtoRegistry,
  ...ibcProtoRegistry,
];
const aminoConvertersBase = {
  ...cosmosAminoConverters,
  ...cosmwasmAminoConverters,
  ...ibcAminoConverters,
};

let chainObj: any = {
  'cosmoshub-4': {
    chainId: 'cosmoshub-4',
    chainName: 'Cosmos',
    rpcUrls: [
      ''
    ],
    blockExplorerUrl: '',
    apiUrl: '',
    protoRegistry: [...protoRegistryBase],
    aminoConverters: { ...aminoConvertersBase }
  },
  'osmosis-1': {
    chainId: 'osmosis-1',
    chainName: 'Osmosis',
    rpcUrls: [
      'https://rpc.cosmos.directory/osmosis'
    ],
    blockExplorerUrl: 'https://www.mintscan.io/osmosis/txs',
    compiler: 'COSMOS',
    apiUrl: 'https://lcd-osmosis.keplr.app',
    protoRegistry: [...protoRegistryBase, ...osmosisProtoRegistry],
    aminoConverters: { ...aminoConvertersBase, ...osmosisAminoConverters }
  },
  'irishub-1': {
    chainId: 'irishub-1',
    chainName: 'Iris',
    rpcUrls: [
      'https://rpc-iris.keplr.app'
    ],
    blockExplorerUrl: '',
    apiUrl: '',
    protoRegistry: [...protoRegistryBase],
    aminoConverters: { ...aminoConvertersBase }
  },

}

class KeplrWallet extends BaseWallet {
  public name = EnumWalletName.keplrWallet;
  public icon = icon;
  public supportChains = [EnumChains.Cosmos, EnumChains.Osmosis];
  public type = EnumWalletType.Web;
  public sdk: any = null;
  public installUrl = "https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap";

  /**
   * connect metamask and get wallet address
   * @param chainId specific chainId,throw error when not match
   */
  public requestCosmosConnect(
    chainId: string,
  ) {
    return new Promise<string>(async (res) => {
      if (!window.keplr) {
        throw new Error(EnumErrors.NoKeplr);
      }
      let { rpcUrls, apiUrl, protoRegistry, aminoConverters } = chainObj[chainId]
      const wallet = window.keplr;
      await wallet.enable(chainId);
      const offlineSigner = wallet.getOfflineSignerOnlyAmino(chainId);
      const accounts = await offlineSigner.getAccounts();
      const address: string = accounts[0].address;
      this.sdk = await SigningStargateClient.connectWithSigner(rpcUrls[0], offlineSigner, {
        registry: new Registry(protoRegistry),
        aminoTypes: new AminoTypes(aminoConverters),
      });
      if (apiUrl) {
        this.sdk.lcdClient = LcdClient.withExtensions(
          { apiUrl },
          setupAuthExtension,
          setupBankExtension,
          setupDistributionExtension,
          setupGovExtension,
          setupMintExtension,
          setupSlashingExtension,
          setupStakingExtension,
          setupSupplyExtension
        );
      }
      this.address = address;
      this.chainId = chainId;
      res(address);
    });
  }
}

export default KeplrWallet;
