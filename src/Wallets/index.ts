
import MetaMask from "./MetaMask";
import BscWallet from "./BscWallet";
import Cyano from "./Cyano";
import TronLink from "./TronLink";
import Sollet from './Sollet';
import SolletIo from './SolletIo';
import OntoMobile from './OntoMobile';
import WalletConnect from './WalletConnect';
import MathWallet from "./MathWallet";
import OntoWallet from "./OntoWallet";
import SafePalWallet from "./SafePalWallet";
import ImTokenWallet from "./ImTokenWallet";
import TokenPocket from "./TokenPocket";
import TrustWallet from "./TrustWallet";
import Coin98 from "./Coin98";
import Phantom from "./Phantom";
import TerraStation from './TerraStation';
import CoinbaseWallet from "./CoinbaseWallet";
import CloverWallet from "./CloverWallet";
import XDEFIWallet from "./XDeFiWallet";
import SlopeWallet from "./SlopeWallet";
import SolflareWallet from "./SolflareWallet";
import OKXWallet from "./OKXWallet";
import KeplrWallet from "./KeplrWallet";
import BraveWallet from "./BraveWallet";
import CryptoCom from './CryptoCom';
import NearWallet from './NearWallet';
import BitgetWallet from './BitgetWallet';
import GnosisSafeWallet from './GnosisSafeWallet';
import BloctoWallet from './BloctoWallet';
import PetraWallet from './PetraWallet';
import MartianWallet from './MartianWallet';
import PontemWallet from './PontemWallet';
import UnstoppableDomains from './UnstoppableDomains';
import MyNearWallet from "./MyNearWallet";
import MeteorWallet from "./MeteorWallet";
import SenderWallet from "./SenderWallet";
// import LedgerWallet from "./LedgerWallet";
import LedgerEmbedWallet from "./LedgerEmbedWallet";
import RabbyWallet from "./RabbyWallet";
import ArgentX from "./ArgentX";
import Braavos from "./Braavos";
import PlenaWallet from './PlenaWallet';
import Krystal from './Krystal';

const WalletObj: any = {
  MetaMask: new MetaMask(),
  BscWallet: new BscWallet(),
  WalletConnect: new WalletConnect(),
  RabbyWallet: new RabbyWallet(),
  SafePalWallet: new SafePalWallet(),
  PlenaWallet: new PlenaWallet(),
  BraveWallet: new BraveWallet(),
  BitgetWallet: new BitgetWallet(),
  TrustWallet: new TrustWallet(),
  ArgentX: new ArgentX(),
  Braavos: new Braavos(),
  UnstoppableDomains: new UnstoppableDomains(),
  // LedgerWallet: new LedgerWallet(),
  LedgerEmbedWallet: new LedgerEmbedWallet(),
  CoinbaseWallet: new CoinbaseWallet(),
  OKXWallet: new OKXWallet(),
  XDEFIWallet: new XDEFIWallet(),
  OntoWallet: new OntoWallet(),
  Coin98Wallet: new Coin98(),
  TokenPocket: new TokenPocket(),
  CloverWallet: new CloverWallet(),
  ImTokenWallet: new ImTokenWallet(),
  MathWallet: new MathWallet(),
  CryptoCom: new CryptoCom(),
  Cyano: new Cyano(),
  OntoMobile: new OntoMobile(),
  TronLink: new TronLink(),
  Sollet: new Sollet(),
  SolflareWallet: new SolflareWallet(),
  Phantom: new Phantom(),
  TerraStation: new TerraStation(),
  GnosisSafeWallet: new GnosisSafeWallet(),
  SlopeWallet: new SlopeWallet(),
  KeplrWallet: new KeplrWallet(),
  BloctoWallet: new BloctoWallet(),
  PetraWallet: new PetraWallet(),
  MartianWallet: new MartianWallet(),
  PontemWallet: new PontemWallet(),
  NearWallet: new NearWallet(),
  MyNearWallet: new MyNearWallet(),
  MeteorWallet: new MeteorWallet(),
  SenderWallet: new SenderWallet(),
  Krystal: new Krystal(),
};

class Wallets {
  walletObj: any = {}
  walletList: any[] = []
  constructor() {
    WalletObj.MetaMask.supportChains.push('rinkeby')
    WalletObj.MetaMask.supportChains.push('ropsten')
    this.walletObj = WalletObj
    this.walletList = Object.keys(WalletObj).map((key: string) => {
      WalletObj[key].key = key
      return WalletObj[key]
    })
  }

}
const walletsObj: Wallets = new Wallets()

export { walletsObj, Wallets }



