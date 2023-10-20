

const axios = require('axios');
import { NotoMobile } from "./NotoMobile";
import { Connection, PublicKey } from "@solana/web3.js";
import Web3 from 'web3';
import { isPc } from "./../util";
import { sleep } from '../util';
import BaseWallet from "../Wallets/BaseWallet";
import { walletsObj } from "../Wallets/index";
import { chainsObj, Chain } from "./../Chains";
import { EnumChains, EnumWalletName } from "./../types";
const SID = require('@siddomains/sidjs').default
const SIDfunctions = require('@siddomains/sidjs')

interface ReqConnectWalletVo {
  chainName: EnumChains;
  walletName: EnumWalletName;
  localRpcUrl?: string;
  noSwitch?: boolean;
  provider?: any,
}
interface Wallet extends BaseWallet {
}
interface ConnectObj {
  wallet: Wallet,
  chain: Chain,
  localProvider: any,
  localRpcUrl: any
}


async function isChainIdEq(wallet: any, chainId: string, utilsEht: any, k?: number): Promise<any> {
  let key: number = k || 0
  await sleep(1000)
  let chainIdNow = utilsEht.hexToNumber(wallet.sdk.currentProvider.chainId)
  if (chainId == chainIdNow) {
    wallet.chainId = chainId
    return true
  } else {
    if (key < 4) {
      return await isChainIdEq(wallet, chainId, utilsEht, key + 1)
    } else {
      throw new Error('User rejected the request.')
    }
  }
}
async function link(reqConnectWalletVo: any, chain: Chain): Promise<any> {
  let wallet = walletsObj.walletObj[reqConnectWalletVo.walletName]
  if (!wallet) wallet = walletsObj.walletList.find(item => item.name == reqConnectWalletVo.walletName)

  const chainId: any = chain.chainId
  const selectedName: string = chain.key
  try {
    if (wallet.type === 'WalletConnect') {
      // wallet.infuraId = '2c7c4d86c2c746c89de722551b606119';
      await wallet.requestConnect(chainId)
    }
    else if (wallet.key === 'OntoMobile') {
      const qrData = await axios.get('https://ethapi.openocean.finance/v1/ont/login');
      wallet.qrData = qrData.data
      const instance = new NotoMobile(qrData.data);

      let account = await new Promise((r, q) => {
        instance.$on('close', (result: any, action: any, account: any) => {
          if (action === 'login' && result === 'success') {
            r(account)
          } else {
            q(action)
          }
        })
      })

      wallet.address = account;
    }
    else if (wallet.key === 'KeplrWallet') {
      const res = await wallet.requestCosmosConnect(chainId);
      console.log('wallet.requestConnect', res, wallet);
    }
    else if (selectedName === 'terra') {
      if (!wallet.sdk) {
        const res = await wallet.requestTerraConnect()
        if (res) {
          // connect(wallet);
        } else {
          // const message = {
          //   'XDEFI Wallet': 'wallet_message_40018',
          //   'Terra Station': 'wallet_message_40015'
          // }[wallet.name];
          // showToast($t(message));
        }
      }
    } else if (selectedName === "solana") {
      const res = await wallet.requestSolanaConnect();
      wallet.customPublicKey = new PublicKey(res);

      // "https://api.mainnet-beta.solana.com"
      // "https://solana-mainnet.phantom.tech"
      // "https://rpc.ankr.com/solana"
      // https://solana-api.projectserum.com
      // https://mercuria-fronten-1cd8.mainnet.rpcpool.com/
      // "https://rpc.ankr.com/solana/ad9d7bb3250b29d691330e63e3b46778099aca307af8f5e49b2ebc0a470dd848"
      wallet.connection = new Connection(
        "https://solana-mainnet.g.alchemy.com/v2/aTdPTJc3R936_mNf4ABtPvl1NFgejm8w"
      );
      if (res) {
        // connect(wallet);
      } else {
        // const message = {
        //   'Sollet': 'wallet_message_40010',
        //   'Coin98 Wallet': 'wallet_message_40011',
        //   'Phantom': 'wallet_message_40013',
        //   'Clover Wallet': 'wallet_message_40017',
        //   'Slope Wallet': 'wallet_message_40019',
        //   'Solflare Wallet': 'wallet_message_40020',
        // };
        // return {
        //   code: 401,
        //   message: message
        // }
      }
    } else if (selectedName === 'tron') {
      const res = await wallet.requestTronConnect();
      console.log('wallet.requestConnect', res, wallet);
    } else if (selectedName === 'aptos') {
      const res = await wallet.requestAptosConnect();
      // wallet.customPublicKey = new PublicKey(res);
      console.log('wallet.requestConnect', res, wallet);
    } else if (selectedName === 'starknet') {
      const res = await wallet.requestStarknetConnect();
      // wallet.customPublicKey = new PublicKey(res);
      console.log('wallet.requestConnect', res, wallet);
    } else if (selectedName === 'near') {
      const res = await wallet.requestConnect();
      console.log('wallet.requestConnect', res, wallet);
    } else {
      const res = chainId ? await wallet.requestConnect(chainId) : await wallet.requestConnect();
      console.log('wallet.requestConnect', res, wallet);
      await sleep(200)
      if (res) {
        // connect(wallet);
      }
    }
    return wallet
  } catch (e: any) {
    const { message } = e;
    const { currentProvider, utils: utilsEht } = wallet.sdk || {};
    if (reqConnectWalletVo.noSwitch) {
      throw new Error('No Switch')
    }
    if (message === "40006" && currentProvider) {
      return await linkAddOrSwitch(wallet, chain)
    } else {
      throw new Error(message)
    }
  }
}
async function linkAddOrSwitch(wallet: any, chain: Chain) {
  const { currentProvider, utils: utilsEht } = wallet.sdk || {};
  const chainId = chain.chainId + ''
  if (chain) {
    const params = {
      chainId: utilsEht.toHex(chainId),
      chainName: chain.chainName,
      nativeCurrency: chain.nativeCurrency,
      rpcUrls: chain.rpcUrls,
      blockExplorerUrls: [chain.blockExplorerUrl],
    }
    try {
      await currentProvider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: params.chainId }],
      });

      if (await isChainIdEq(wallet, chainId, utilsEht)) {
        if (wallet.type === 'WalletConnect') {
          const [address] = await wallet.sdk.eth.getAccounts()
          wallet.address = address
        } else {
          const [address] = await wallet.sdk.eth.requestAccounts()
          wallet.address = address
        }
        return wallet
      }
    } catch (switchError: any) {
      console.log('wallet_switchEthereumChain errer')
      console.log(JSON.stringify(switchError))
      console.log(params)
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902 || (switchError.data && switchError.data.originalError && switchError.data.originalError.code == 4902)) {
        try {
          await currentProvider.request({
            method: "wallet_addEthereumChain",
            params: [params]
          })
          if (await isChainIdEq(wallet, chainId, utilsEht)) {
            if (wallet.type === 'WalletConnect') {
              const [address] = await wallet.sdk.eth.getAccounts()
              wallet.address = address
            } else {
              const [address] = await wallet.sdk.eth.requestAccounts()
              wallet.address = address
            }
            return wallet
          }
        } catch (error) {
          console.log('wallet_addEthereumChain Error', JSON.stringify(error))
          throw new Error('Network error')
        }
      } else {
        throw new Error(switchError)
      }
    }
  } else {
    throw new Error('Network error')
  }
}

async function tryWalletConnect(reqConnectWalletVo: ReqConnectWalletVo): Promise<ConnectObj> {
  if (!reqConnectWalletVo.chainName || !reqConnectWalletVo.walletName) {
    throw new Error('Parameter error.')
  }
  const chain: Chain = chainsObj.chainObj[reqConnectWalletVo.chainName]
  if (!chain) throw new Error('Chain error.')

  let wallet: any = {}
  if (reqConnectWalletVo.provider && chain.compiler == 'EVM') {
    const sdk = reqConnectWalletVo.provider
    const [account] = await sdk.eth.requestAccounts();
    const chainId = await sdk.eth.getChainId();
    wallet = {
      address: account,
      key: reqConnectWalletVo.walletName,
      name: reqConnectWalletVo.walletName,
      chainId,
      sdk
    }
  } else {
    wallet = await link(reqConnectWalletVo, chain);
  }


  let localProvider: any = '';
  let localRpcUrl: any = '';
  if (wallet) {
    if (reqConnectWalletVo.localRpcUrl) {
      localProvider = new Web3(new Web3.providers.HttpProvider(reqConnectWalletVo.localRpcUrl))
      localRpcUrl = reqConnectWalletVo.localRpcUrl
    } else {
      localProvider = null
      localRpcUrl = ''
      if (chain.compiler == 'EVM') {
        if (chain.rpcUrls && chain.rpcUrls.length) {
          localRpcUrl = chain.rpcUrls[0]
        } else if (chain.chainId == '1') {
          localRpcUrl = 'https://mainnet.infura.io/v3/'
        } else if (chain.chainId == '4') {
          localRpcUrl = 'https://rinkeby.infura.io/v3/'
        }
        if (localRpcUrl) {
          localProvider = wallet.sdk
        }
      }
    }
    if (wallet.chainId == 1 || wallet.chainId == 56 || wallet.chainId == 42161) {
      try {
        let sid = new SID({ provider: wallet.sdk.currentProvider, sidAddress: SIDfunctions.getSidAddress(wallet.chainId) })
        const name = await sid.getName(wallet.address)
        // const name = await sid.getName('0xB522E32b6B49363f420d2546E13479c05fF27201')
        if (name.name) wallet.sidName = name.name
      } catch (error) {
        console.error(error)
      }
    }
  }
  return {
    wallet,
    chain,
    localProvider,
    localRpcUrl
  }
}

export { tryWalletConnect, ReqConnectWalletVo }

