/**
 * wallets-manager entry
 * @author openocean
 * @date 2021/4/20
 * @desc
 */
import BaseWallet from "./Wallets/BaseWallet";
import MetaMask from "./Wallets/MetaMask";
import BscWallet from "./Wallets/BscWallet";
import Cyano from "./Wallets/Cyano";
import TronLink from "./Wallets/TronLink";
import Sollet from './Wallets/Sollet';
import SolletIo from './Wallets/SolletIo';
import OntoMobile from './Wallets/OntoMobile';
import WalletConnect from './Wallets/WalletConnect';
import MathWallet from "./Wallets/MathWallet";
import OntoWallet from "./Wallets/OntoWallet";
import SafePalWallet from "./Wallets/SafePalWallet";
import ImTokenWallet from "./Wallets/ImTokenWallet";
import TokenPocket from "./Wallets/TokenPocket";
import TrustWallet from "./Wallets/TrustWallet";
import Coin98 from "./Wallets/Coin98";
import Phantom from "./Wallets/Phantom";
import TerraStation from './Wallets/TerraStation';
import CoinbaseWallet from "./Wallets/CoinbaseWallet";
import CloverWallet from "./Wallets/CloverWallet";
import XDEFIWallet from "./Wallets/XDeFiWallet";
import SlopeWallet from "./Wallets/SlopeWallet";
import SolflareWallet from "./Wallets/SolflareWallet";
import OKXWallet from "./Wallets/OKXWallet";
import KeplrWallet from "./Wallets/KeplrWallet";
import BraveWallet from "./Wallets/BraveWallet";
import CryptoCom from './Wallets/CryptoCom';
import NearWallet from './Wallets/NearWallet';
import BitgetWallet from './Wallets/BitgetWallet';
import GnosisSafeWallet from './Wallets/GnosisSafeWallet';
import BloctoWallet from './Wallets/BloctoWallet';
import PetraWallet from './Wallets/PetraWallet';
import MartianWallet from './Wallets/MartianWallet';
import PontemWallet from './Wallets/PontemWallet';
import UnstoppableDomains from './Wallets/UnstoppableDomains';
import MyNearWallet from "./Wallets/MyNearWallet";
import MeteorWallet from "./Wallets/MeteorWallet";
import SenderWallet from "./Wallets/SenderWallet";
import LedgerWallet from "./Wallets/LedgerWallet";
import LedgerEmbedWallet from "./Wallets/LedgerEmbedWallet";
import PlenaWallet from './Wallets/PlenaWallet';
import Krystal from './Wallets/Krystal';
import { EnumChains, EnumWalletName } from "./types";
import { tryWalletConnect, ReqConnectWalletVo } from "./TryWalletConnect";
import { chainsObj, Chains, Chain } from "./Chains";
import { walletsObj, Wallets } from "./Wallets/index";
export { chainsObj, Chains, Chain, walletsObj, Wallets, ReqConnectWalletVo, tryWalletConnect, EnumChains, EnumWalletName, BaseWallet, MetaMask, BscWallet, Cyano, TronLink, Sollet, SolletIo, OntoMobile, WalletConnect, MathWallet, OntoWallet, SafePalWallet, ImTokenWallet, TokenPocket, TrustWallet, Coin98, Phantom, TerraStation, CoinbaseWallet, CloverWallet, XDEFIWallet, SlopeWallet, SolflareWallet, OKXWallet, KeplrWallet, BraveWallet, CryptoCom, NearWallet, BitgetWallet, GnosisSafeWallet, BloctoWallet, PetraWallet, MartianWallet, PontemWallet, UnstoppableDomains, MyNearWallet, MeteorWallet, SenderWallet, LedgerWallet, LedgerEmbedWallet, PlenaWallet, Krystal, };
