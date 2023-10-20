/**
 * @name Krystal
 * @author openocean
 * @date 2023/9/21
 * @desc
 */
// @ts-ignore
import icon from "../assets/krystal.svg";
import { EnumChains, EnumErrors, EnumWalletName, EnumWalletType } from "../types";
import BaseWallet from "./BaseWallet";
import Web3 from "web3";
import EthereumProvider from '@walletconnect/ethereum-provider'


class Krystal extends BaseWallet {
  public name = EnumWalletName.Krystal;
  public icon = icon;
  public supportChains = [
    EnumChains.ETH,
    EnumChains.BSC,
    EnumChains.Polygon,
    EnumChains.Fantom,
    EnumChains.Avalanche,
    EnumChains.Arbitrum,
    EnumChains.Optimism
  ];
  public type = EnumWalletType.WalletConnect;
  public sdk: any = null;
  public infuraId?: string;


  /**
   * connect metamask and get wallet address
   * @param chainId specific chainId,throw error when not match
   * @param config
   */
  public async requestConnect(chainId: number = 1, config?: any): Promise<any> {
    // if (!this.infuraId) {
    //   throw new Error("infuraId not set");
    // }

    console.log('chainId', chainId)
    let qrModalOptions: any = {
      themeVariables: {
        '--wcm-z-index': '99999',
      }
    }
    const provider = await EthereumProvider.init({
      projectId: 'c1ca7adc83e89c7e7848440702f28f38', // required
      chains: [chainId], // required
      showQrModal: true, // requires
      qrModalOptions
    })
    console.log('provider', provider)
   
    await provider.enable();
    console.log('provider', provider)

    this.sdk = new Web3(provider as any);
    const currentChainId = await this.sdk.eth.getChainId();

    if (chainId && currentChainId != chainId) {
      throw new Error(EnumErrors.ChainIdNotMath);
    }

    const [address] = await this.sdk.eth.getAccounts();
    this.address = address;
    this.chainId = currentChainId;
    return address;
  }
}

export default Krystal;
