/**
 * @name types
 * @author openocean
 * @date 2021/4/20
 * @desc
 */

import BscWallet from "./Wallets/BscWallet";
import Cyano from "./Wallets/Cyano";
import MetaMask from "./Wallets/MetaMask";
import TronLink from "./Wallets/TronLink";

export enum EnumChains {
  NEAR = 'near',
  ETH = 'eth',
  ROPSTEN = 'ropsten',
  RINKEBY = 'rinkeby',
  ONT = 'ont',
  ONTEVM = 'ontevm',
  BSC = 'bsc',
  BSCTEST = 'bsctest',
  TRON = 'tron',
  Solana = 'solana',
  Polygon = 'polygon',
  XDai = 'xdai',
  HECO = 'heco',
  Fantom = 'fantom',
  Avalanche = 'avax',
  OKEX = 'okex',
  Arbitrum = 'arbitrum',
  Optimism = 'optimism',
  Terra = 'terra',
  Boba = 'boba',
  Moonriver = 'moonriver',
  Aurora = 'aurora',
  Cronos = 'cronos',
  Harmony = 'harmony',
  Cosmos = 'cosmos',
  Osmosis = 'osmosis',
  Flow = 'flow',
  Aptos = 'aptos',
  Metis = 'metis',
  Kava = 'kava',
  Celo = 'celo',
  Klaytn = 'klaytn',
  ZKSYNC = 'zksync',
  PolygonzkEVM = 'polygon_zkevm',
  Linea = 'linea',
  LineaTest = 'lineaTest',
  Starknet = 'starknet',
  Telos = 'telos',
  Scroll = 'scroll',
  Base = 'base',
  OpBNB = 'opbnb',
  Mantle = 'mantle',
  Manta = 'manta',
}

export enum EnumWalletType {
  Extension = 'Extension',
  WalletConnect = 'WalletConnect',
  Web = 'Web',
  Mobile = 'Mobile',
}

export enum EnumWalletName {
  NearWallet = 'NearWallet',
  MetaMask = 'MetaMask',
  BscWallet = 'Binance Wallet',
  Cyano = 'Cyano',
  TronLink = 'TronLink',
  WalletConnect = 'WalletConnect',
  PlenaWallet = 'Plena Wallet',
  Sollet = 'Sollet',
  SolletIo = 'Sollet.io',
  OntoMobile = 'ONTO Mobile',
  OntoExt = 'ONTO Extension',
  TrustWallet = 'Trust Wallet',
  MathWallet = 'Math Wallet',
  TokenPocket = 'Token Pocket',
  SafePalWallet = 'SafePal Wallet',
  ImTokenWallet = 'ImToken Wallet',
  OntoWallet = 'ONTO Wallet',
  Coin98 = 'Coin98 Wallet',
  Phantom = 'Phantom',
  TerraStation = 'Terra Station',
  CoinbaseWallet = 'Coinbase Wallet',
  CloverWallet = 'Clover Wallet',
  XDEFIWallet = 'XDEFI Wallet',
  SlopeWallet = 'Slope Wallet',
  SolflareWallet = 'Solflare Wallet',
  OKXWallet = 'OKX Wallet',
  keplrWallet = 'Keplr Wallet',
  BraveWallet = 'Brave Wallet',
  CryptoCom = 'Crypto.com DeFi Wallet',
  BitgetWallet = "Bitget Wallet",
  GnosisSafeWallet = "GnosisSafe Wallet",
  BloctoWallet = "Blocto Wallet",
  PetraWallet = "Petra wallet",
  MartianWallet = "Martian wallet",
  PontemWallet = "Pontem Wallet",
  UnstoppableDomains = "Unstoppable Domains",
  MyNearWallet = 'MyNear Wallet',
  MeteorWallet = 'Meteor Wallet',
  SenderWallet = 'Sender Wallet',
  LedgerWallet = 'Ledger Wallet',
  LedgerEmbedWallet = 'LedgerEmbed Wallet',
  RabbyWallet = 'Rabby Wallet',
  ArgentX = 'Argent X',
  Braavos = 'Braavos',
  Krystal = 'Krystal'
}

export enum EnumErrors {
  NotMetamask = '40001',
  NotBinance = '40002',
  NoTronLink = '40003',
  NoTronLinkAccount = '40004',
  NoSollet = '40005',
  ChainIdNotMath = '40006',
  UserCanceled = '40007',
  NotConnected = '40008',
  UnSupported = '40009',
  NoCoin98 = '40011',
  NoMath = '40012',
  NoPhantom = '40013',
  NoTerraStation = '40015',
  NoCoinbase = '40016',
  NoClover = '40017',
  NoXDeFi = '40018',
  NoSlope = '40019',
  NoSolflare = '40020',
  NoOKX = '40021',
  NoOnto = '40022',
  OntoChainIdNotMath = '40023',
  NoKeplr = '40024',
  NoBrave = '40025',
  NoCryptoCom = '40026',
  NoBitget = '40027',
  NoSafePal = '40028',
  NoTrustWallet = '40029',
  NoTokenPocket = '40030',
  NoImToken = '40031',
  NoBlocto = '40032',
  NoBloctoAccount = '40033',
  NoPetraWallet = "40034",
  NoMartianWallet = "40035",
  NoPontemWallet = "40036",
  NoCyano = "40037",
  NoMeteorWallet = "40038",
  NoSender = "40039",
  NoLedger = "40040",
  NoRabbyWallet = "40041",
  NoArgentX = '40042',
  NoBraavos = '40043'
}

export interface ConnectResult {
  chain: EnumChains,
  walletName: EnumWalletName;
  onSuccess?: () => void;
  onError?: (e: any) => void;
}

export type SelectConnect = () => Promise<ConnectResult>;

export type Wallet = MetaMask | BscWallet | Cyano | TronLink;
export type WalletType = typeof MetaMask | typeof BscWallet | typeof Cyano | typeof TronLink;
