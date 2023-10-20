
import { walletsObj } from "./Wallets/index";
interface Chain {
  chainName: string,
  chainId: string | number,
  key: string,
  blockExplorerUrl: string,
  nativeCurrency: any,
  popularToken: [any],
  rpcUrls: [any],
  compiler: string,
}

let chainObj: any = {
  "eth": {
    chainName: "Ethereum Mainnet",
    chainId: 1,
    blockExplorerUrl: "https://etherscan.io/tx/",
    nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18, address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE" },
    popularToken: ["ETH", "USDT", "USDC", "BUSD", "UNI", "C98", "LINK", "MATIC"],
    rpcUrls: [
      "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
    ],
    compiler: 'EVM'
  },
  // "ropsten": {
  //   chainName: "Ethereum Ropsten",
  //   chainId: 3,
  //   blockExplorerUrl: "https://ropsten.etherscan.io/",
  //   nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18, address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE" },
  //   popularToken: ["ETH", "USDT", "USDC", "BUSD", "UNI", "C98", "LINK", "MATIC"],
  //   rpcUrls: [
  //     "https://ropsten.infura.io/v3"
  //   ],
  //   compiler: 'EVM',
  //   isTest: true
  // },
  // "rinkeby": {
  //   chainName: "Ethereum Rinkeby",
  //   chainId: 4,
  //   blockExplorerUrl: "https://rinkeby.etherscan.io/",
  //   nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18, address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE" },
  //   popularToken: ["ETH", "USDT", "USDC", "BUSD", "UNI", "C98", "LINK", "MATIC"],
  //   rpcUrls: [
  //     "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
  //   ],
  //   compiler: 'EVM',
  //   isTest: true
  // },
  "bsc": {
    chainName: "Binance Smart Chain", chainId: 56, blockExplorerUrl: "https://bscscan.com/tx/",
    popularToken: ["BNB", "USDT", "BUSD", "CAKE", "C98", "BAKE", "MBOX"],
    nativeCurrency: { name: "BNB", symbol: "BNB", decimals: 18, address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE" },
    rpcUrls: ["https://bsc-dataseed1.binance.org/"],
    compiler: 'EVM',

  },
  "solana": {
    compiler: 'SOL',
    chainName: "Solana Mainnet", blockExplorerUrl: "https://solscan.io/tx/", popularToken: ["SOL", "SNY", "USDT", "USDC", "RAY", "STEP"],
    rpcUrls: null
  },
  "starknet": {
    compiler: 'STARKNET',
    chainName: "Starknet Testnet", blockExplorerUrl: "https://starkscan.co/tx/", popularToken: ["ETH", "WBTC", "USDC", "USDT", "DAI"],
    nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18, address: "	0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7" },
    rpcUrls: null
  },
  "flow": {
    compiler: 'FLOW',
    chainName: "Flow Mainnet", blockExplorerUrl: "https://flowscan.org/transaction/", popularToken: ["SOL", "SNY", "USDT", "USDC", "RAY", "STEP"],
    rpcUrls: null
  },
  "polygon": {
    compiler: 'EVM',
    chainName: "Polygon Mainnet", chainId: 137, blockExplorerUrl: "https://polygonscan.com/tx/", popularToken: ["USDT", "USDC", "MATIC", "AAVE", "DINO", "ADDY", "MIMATIC"], nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18, address: "0x0000000000000000000000000000000000001010" },
    rpcUrls: ["https://rpc-mainnet.maticvigil.com"]
  },
  "polygon_zkevm": {
    compiler: 'EVM',
    chainName: "Polygon zkEVM", chainId: 1101, blockExplorerUrl: "https://zkevm.polygonscan.com/tx/", popularToken: ["USDT", "USDC", "MATIC", "AAVE", "DINO", "ADDY", "MIMATIC"], nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18, address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE" },
    rpcUrls: ["https://rpc.ankr.com/polygon_zkevm"]
  },
  "avax": {
    compiler: 'EVM',
    chainName: "Avalanche", chainId: 43114, blockExplorerUrl: "https://cchain.explorer.avax.network/tx/", popularToken: ["AVAX", "PNG", "DAI.E", "ETH", "WAVAX", "JOE", "QI", "USDC.E"], nativeCurrency: { name: "AVAX", symbol: "AVAX", decimals: 18, address: "0x0000000000000000000000000000000000000000" },
    rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"]
  },
  "fantom": {
    compiler: 'EVM',
    chainName: "Fantom", chainId: 250, blockExplorerUrl: "https://ftmscan.com/tx/", popularToken: ["ETH", "USDT", "USDC", "SPIRIT", "1INCH", "C98", "FTM", "fUSDT", "MIM", "BOO"], nativeCurrency: { name: "FTM", symbol: "FTM", decimals: 18, address: "0x0000000000000000000000000000000000000000" },
    rpcUrls: ["https://rpcapi.fantom.network"]
  },
  "arbitrum": {
    compiler: 'EVM',
    chainName: "Arbitrum", chainId: 42161, blockExplorerUrl: "https://arbiscan.io/tx/", nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18, address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE" },
    rpcUrls: ["https://arb1.arbitrum.io/rpc"]
  },
  "terra": {
    compiler: 'TERRA',
    chainName: "Terra Mainnet", blockExplorerUrl: "https://finder.terra.money/columbus-5/tx/",
    rpcUrls: null
  },
  "xdai": {
    compiler: 'EVM',
    chainName: "Gnosis Mainnet",
    chainId: 100,
    blockExplorerUrl: "https://blockscout.com/poa/xdai/tx/", popularToken: ["ETH", "USDT", "USDC", "BUSD", "1INCH", "C98"],
    nativeCurrency: { name: "xDai", symbol: "XDAI", decimals: 18, address: "0x0000000000000000000000000000000000000000" },
    rpcUrls: ["https://rpc.gnosischain.com", "https://rpc.xdaichain.com/"]
  },
  "boba": {
    compiler: 'EVM',
    chainName: "Boba Mainnet", chainId: 288, blockExplorerUrl: "https://blockexplorer.boba.network/tx/", nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18, address: "0x0000000000000000000000000000000000000000" },
    rpcUrls: ["https://mainnet.boba.network"]
  },
  "ont": {
    compiler: 'ONT',
    chainName: "Ontology Mainnet", blockExplorerUrl: "https://explorer.ont.io/transaction/", popularToken: [],
    rpcUrls: null
  },
  "ontevm": {
    compiler: 'EVM',
    chainName: "Ontology Evm", chainId: 58, blockExplorerUrl: "https://explorer.ont.io/transaction/", nativeCurrency: { name: "ONG", symbol: "ONG", decimals: 18, address: "0x0000000000000000000000000000000000000000" },
    rpcUrls: ["https://dappnode10.ont.io:10339"]
  },
  "metis": {
    compiler: 'EVM',
    chainName: "Andromeda (Metis)", chainId: 1088, blockExplorerUrl: "https://andromeda-explorer.metis.io/tx/", nativeCurrency: { name: "METIS", symbol: "METIS", decimals: 18, address: "0x0000000000000000000000000000000000000000" },
    rpcUrls: ["https://andromeda.metis.io/?owner=1088"]
  },
  "tron": {
    compiler: 'TRON',
    chainName: "Tron Mainnet",
    blockExplorerUrl: "https://tronscan.io/#/transaction/",
    popularToken: ["TRX", "WTRX", "ETH", "BTC", "USDT", "USDJ", "JST"],
    rpcUrls: null
  },
  "heco": {
    compiler: 'EVM',
    chainName: "Heco Mainnet",
    chainId: 128,
    blockExplorerUrl: "https://http-mainnet.hecochain.com/tx/",
    popularToken: ["HT", "ETH", "AAVE", "USDT", "USDC", "MDX", "DEP"],
    nativeCurrency: { name: "HT", symbol: "HT", decimals: 18, address: "0x0000000000000000000000000000000000000000" },
    rpcUrls: ["https://http-mainnet.hecochain.com"]
  },
  "okex": {
    compiler: 'EVM',
    chainName: "OEC Mainnet", chainId: 66, blockExplorerUrl: "https://www.oklink.com/okexchain/", popularToken: ["OKT", "OKB", "USDT", "USDC", "BUSD", "BNB", "CHE"], nativeCurrency: { name: "OKT", symbol: "OKT", decimals: 18, address: "0x0000000000000000000000000000000000000000" },
    rpcUrls: ["https://exchainrpc.okex.org"]
  },
  "optimism": {
    compiler: 'EVM',
    chainName: "Optimism",
    chainId: 10,
    blockExplorerUrl: "https://optimism.io/tx/",
    nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18, address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE" },
    rpcUrls: ["https://rpc.ankr.com/optimism", "https://optimism-mainnet.public.blastapi.io", "https://mainnet.optimism.io"]
  },
  "harmony": {
    compiler: 'EVM',
    chainName: "Harmony",
    chainId: 1666600000,
    blockExplorerUrl: "https://explorer.harmony.one/",
    nativeCurrency: { name: "ONE", symbol: "ONE", decimals: 18, address: "0x0000000000000000000000000000000000000000" },
    popularToken: ["ETH", "USDT", "USDC", "BUSD", "1INCH", "C98"],
    rpcUrls: ["https://api.s0.t.hmny.io", "https://api.harmony.one"]
  },
  "dot": {
    compiler: 'EVM',
    chainName: "Polkadot", blockExplorerUrl: "", popularToken: ["ETH", "USDT", "USDC", "BUSD", "1INCH", "C98"]
  },
  "neo": {
    compiler: 'EVM',
    chainName: "Neo", blockExplorerUrl: "", popularToken: ["ETH", "USDT", "USDC", "BUSD", "1INCH", "C98"]
  },
  "aurora": {
    chainName: "Aurora Mainnet",
    chainId: 1313161554,
    blockExplorerUrl: "https://aurorascan.dev/tx/",
    nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18, address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE" },
    popularToken: [],
    rpcUrls: [
      "https://mainnet.aurora.dev"
    ],
    compiler: 'EVM'
  },
  "cronos": {
    chainName: "Cronos Mainnet",
    chainId: 25,
    blockExplorerUrl: "https://cronos.org/explorer",
    nativeCurrency: {
      name: "CRO",
      symbol: "CRO",
      decimals: 18,
      address: "0x0000000000000000000000000000000000000000"
    },
    popularToken: [],
    rpcUrls: [
      "https://evm.cronos.org"
    ],
    compiler: 'EVM'
  },
  "moonriver": {
    chainName: "Moonriver Mainnet",
    chainId: 1285,
    blockExplorerUrl: "https://moonriver.moonscan.io",
    nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18, address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE" },
    popularToken: [],
    rpcUrls: [
      "https://rpc.moonriver.moonbeam.network"
    ],
    compiler: 'EVM'
  },
  "bsctest": {
    chainName: "BSC Test Network",
    chainId: 1285,
    blockExplorerUrl: "https://testnet.bscscan.com/",
    nativeCurrency: { name: "BNB", symbol: "BNB", decimals: 18, address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE" },
    popularToken: [],
    rpcUrls: [
      "https://data-seed-prebsc-1-s1.binance.org:8545"
    ],
    compiler: 'EVM'
  },
  "aptos": {
    compiler: 'APTOS',
    chainName: "Aptos Mainnet",
    blockExplorerUrl: "https://explorer.aptoslabs.com/txn/",
    nativeCurrency: {
      name: "Aptos",
      symbol: "APT",
      decimals: 8,
      address: "0x1"
    },
  },
  "near": {
    compiler: 'NEAR',
    chainName: "Near Mainnet",
    blockExplorerUrl: "https://nearblocks.io/txns/",
    nativeCurrency: {
      name: "Near",
      symbol: "Near",
      decimals: 24,
      address: "near.near"
    },
  },
  cosmos: {
    chainId: 'cosmoshub-4',
    chainName: 'Cosmos',
    rpcUrls: [
      ''
    ],
    blockExplorerUrl: '',
    compiler: 'COSMOS',
  },
  osmosis: {
    chainId: 'osmosis-1',
    chainName: 'Osmosis',
    rpcUrls: [
      'https://rpc.cosmos.directory/osmosis'
    ],
    blockExplorerUrl: 'https://www.mintscan.io/osmosis/txs/',
    compiler: 'COSMOS',
  },
  iris: {
    chainId: 'irishub-1',
    chainName: 'Iris',
    rpcUrls: [
      'https://rpc-iris.keplr.app'
    ],
    blockExplorerUrl: '',
    compiler: 'COSMOS',
  },
  "kava": {
    chainName: "Kava Mainnet",
    chainId: 2222,
    blockExplorerUrl: "https://explorer.kava.io/tx/",
    nativeCurrency: {
      name: "KAVA",
      symbol: "KAVA",
      decimals: 18,
      address: "0x0000000000000000000000000000000000000000"
    },
    popularToken: [],
    rpcUrls: [
      "https://evm.kava.io"
    ],
    compiler: 'EVM'
  },
  "celo": {
    chainName: "Celo Mainnet",
    chainId: 42220,
    blockExplorerUrl: "https://explorer.celo.org/tx/",
    nativeCurrency: { name: "CELO", symbol: "CELO", decimals: 18, address: "" },
    popularToken: [],
    rpcUrls: [
      "https://forno.celo.org"
    ],
    compiler: 'EVM'
  },
  "klaytn": {
    chainName: "Klaytn Cypress Mainnet",
    chainId: 8217,
    blockExplorerUrl: "https://explorer.celo.org/tx/",
    nativeCurrency: { name: "KLAY", symbol: "KLAY", decimals: 18, address: "0x471EcE3750Da237f93B8E339c536989b8978a438" },
    popularToken: [],
    rpcUrls: [
      "https://public-node-api.klaytnapi.com/v1/cypress"
    ],
    compiler: 'EVM'
  },
  "zksync": {
    chainName: "zkSync Era Mainnet",
    chainId: 324,
    blockExplorerUrl: "https://explorer.zksync.io/tx/",
    nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18, address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE" },
    popularToken: [],
    rpcUrls: [
      "https://mainnet.era.zksync.io"
    ],
    compiler: 'EVM'
  },
  "lineaTest": {
    chainName: "Linea Testnet",
    chainId: 59140,
    blockExplorerUrl: "https://explorer.goerli.linea.build/tx/",
    nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18, address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE" },
    popularToken: [],
    rpcUrls: [
      "https://rpc.goerli.linea.build"
    ],
    compiler: 'EVM'
  },
  "linea": {
    chainName: "Linea Mainnet",
    chainId: 59144,
    blockExplorerUrl: "https://explorer.linea.build/tx/",
    nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18, address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE" },
    popularToken: [],
    rpcUrls: [
      "https://linea-mainnet.infura.io/v3/2c7c4d86c2c746c89de722551b606119"
    ],
    compiler: 'EVM'
  },
  "telos": {
    chainName: "Telos Mainnet",
    chainId: 40,
    blockExplorerUrl: "https://teloscan.io/tx/",
    nativeCurrency: { name: "TLOS", symbol: "TLOS", decimals: 18, address: "0x0000000000000000000000000000000000000000" },
    popularToken: [],
    rpcUrls: [
      "https://mainnet.telos.net/evm"
    ],
    compiler: 'EVM'
  },
  "scroll": {
    chainName: "Scroll Test",
    chainId: 534353,
    blockExplorerUrl: "https://blockscout.scroll.io/tx/",
    nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18, address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE" },
    popularToken: [],
    rpcUrls: [
      "https://alpha-rpc.scroll.io/l2"
    ],
    compiler: 'EVM'
  },
  "base": {
    chainName: "Base",
    chainId: 8453,
    blockExplorerUrl: "https://basescan.org/tx/",
    nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18, address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE" },
    popularToken: [],
    rpcUrls: [
      "https://developer-access-mainnet.base.org"
    ],
    compiler: 'EVM'
  },
  "opbnb": {
    chainName: "opBNB",
    chainId: 204,
    blockExplorerUrl: "https://mainnet.opbnbscan.com/tx/",
    nativeCurrency: { name: "BNB", symbol: "BNB", decimals: 18, address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE" },
    popularToken: [],
    rpcUrls: [
      "https://opbnb-mainnet-rpc.bnbchain.org"
    ],
    compiler: 'EVM'
  },
  "mantle": {
    chainName: "Mantle",
    chainId: 5000,
    blockExplorerUrl: "https://explorer.mantle.xyz/tx/",
    nativeCurrency: { name: "MNT", symbol: "MNT", decimals: 18, address: "0x0000000000000000000000000000000000000000" },
    popularToken: [],
    rpcUrls: [
      "https://mantle.publicnode.com"
    ],
    compiler: 'EVM'
  },
  "manta": {
    chainName: "manta",
    chainId: 169,
    blockExplorerUrl: "https://pacific-explorer.manta.network/tx/",
    nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18, address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE" },
    popularToken: [],
    rpcUrls: [
      "https://pacific-rpc.manta.network/http"
    ],
    compiler: 'EVM'
  }
}

class Chains {

  chainObj: any = {}
  chainList: Chain[] = []
  chainIds: String[] = []
  chainNames: String[] = []
  chainApproveNames: String[] = []

  constructor() {
    walletsObj.walletList.forEach((item: any) => {
      item.supportChains.forEach((chainName: string) => {
        if (chainObj[chainName] && chainObj[chainName].wallets) {
          chainObj[chainName].wallets.push(item.key)
        } else {
          if (!chainObj[chainName]) {
            chainObj[chainName] = {}
          }
          chainObj[chainName].key = chainName
          chainObj[chainName].wallets = [item.key]
        }
      })
    })
    this.chainObj = chainObj
    this.chainList = Object.keys(chainObj).map((key: string) => {
      if (chainObj[key].chainId) {
        this.chainIds.push(chainObj[key].chainId)
      }

      this.chainNames.push(key)
      if (chainObj[key].compiler === 'EVM' || chainObj[key].compiler === 'TRON') {
        this.chainApproveNames.push(key)
      }
      return chainObj[key]
    })

    // console.log(JSON.stringify(this.chainList))
  }

  getNativeToken(chainName: string) {
    return this.chainObj[chainName].nativeCurrency
  }
  getIsNewChain() {
    return ['eth', 'bsc', 'xdai', 'boba', 'arbitrum', 'heco', 'moonriver', 'cronos', 'optimism', 'harmony', 'fantom', 'avax', 'polygon', 'okex']
  }
  getChainById(chainId: string) {
    return this.chainList.find((item: any) => {
      return item.chainId == chainId
    })
  }
  getChainByName(name: string) {
    return this.chainObj[name] || null
  }

  isNativeToken(chainName: string, address: string) {
    if (chainObj[chainName] && chainObj[chainName].nativeCurrency && chainObj[chainName].nativeCurrency.address) {
      return chainObj[chainName].nativeCurrency.address.toUpperCase() === address.toUpperCase()
    }
    return false
  }
}

const chainsObj: Chains = new Chains()

export { chainsObj, Chains, Chain }

