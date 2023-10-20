"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallets = exports.walletsObj = void 0;
var MetaMask_1 = __importDefault(require("./MetaMask"));
var BscWallet_1 = __importDefault(require("./BscWallet"));
var Cyano_1 = __importDefault(require("./Cyano"));
var TronLink_1 = __importDefault(require("./TronLink"));
var Sollet_1 = __importDefault(require("./Sollet"));
var OntoMobile_1 = __importDefault(require("./OntoMobile"));
var WalletConnect_1 = __importDefault(require("./WalletConnect"));
var MathWallet_1 = __importDefault(require("./MathWallet"));
var OntoWallet_1 = __importDefault(require("./OntoWallet"));
var SafePalWallet_1 = __importDefault(require("./SafePalWallet"));
var ImTokenWallet_1 = __importDefault(require("./ImTokenWallet"));
var TokenPocket_1 = __importDefault(require("./TokenPocket"));
var TrustWallet_1 = __importDefault(require("./TrustWallet"));
var Coin98_1 = __importDefault(require("./Coin98"));
var Phantom_1 = __importDefault(require("./Phantom"));
var TerraStation_1 = __importDefault(require("./TerraStation"));
var CoinbaseWallet_1 = __importDefault(require("./CoinbaseWallet"));
var CloverWallet_1 = __importDefault(require("./CloverWallet"));
var XDeFiWallet_1 = __importDefault(require("./XDeFiWallet"));
var SlopeWallet_1 = __importDefault(require("./SlopeWallet"));
var SolflareWallet_1 = __importDefault(require("./SolflareWallet"));
var OKXWallet_1 = __importDefault(require("./OKXWallet"));
var KeplrWallet_1 = __importDefault(require("./KeplrWallet"));
var BraveWallet_1 = __importDefault(require("./BraveWallet"));
var CryptoCom_1 = __importDefault(require("./CryptoCom"));
var NearWallet_1 = __importDefault(require("./NearWallet"));
var BitgetWallet_1 = __importDefault(require("./BitgetWallet"));
var GnosisSafeWallet_1 = __importDefault(require("./GnosisSafeWallet"));
var BloctoWallet_1 = __importDefault(require("./BloctoWallet"));
var PetraWallet_1 = __importDefault(require("./PetraWallet"));
var MartianWallet_1 = __importDefault(require("./MartianWallet"));
var PontemWallet_1 = __importDefault(require("./PontemWallet"));
var UnstoppableDomains_1 = __importDefault(require("./UnstoppableDomains"));
var MyNearWallet_1 = __importDefault(require("./MyNearWallet"));
var MeteorWallet_1 = __importDefault(require("./MeteorWallet"));
var SenderWallet_1 = __importDefault(require("./SenderWallet"));
// import LedgerWallet from "./LedgerWallet";
var LedgerEmbedWallet_1 = __importDefault(require("./LedgerEmbedWallet"));
var RabbyWallet_1 = __importDefault(require("./RabbyWallet"));
var ArgentX_1 = __importDefault(require("./ArgentX"));
var Braavos_1 = __importDefault(require("./Braavos"));
var PlenaWallet_1 = __importDefault(require("./PlenaWallet"));
var Krystal_1 = __importDefault(require("./Krystal"));
var WalletObj = {
    MetaMask: new MetaMask_1.default(),
    BscWallet: new BscWallet_1.default(),
    WalletConnect: new WalletConnect_1.default(),
    RabbyWallet: new RabbyWallet_1.default(),
    SafePalWallet: new SafePalWallet_1.default(),
    PlenaWallet: new PlenaWallet_1.default(),
    BraveWallet: new BraveWallet_1.default(),
    BitgetWallet: new BitgetWallet_1.default(),
    TrustWallet: new TrustWallet_1.default(),
    ArgentX: new ArgentX_1.default(),
    Braavos: new Braavos_1.default(),
    UnstoppableDomains: new UnstoppableDomains_1.default(),
    // LedgerWallet: new LedgerWallet(),
    LedgerEmbedWallet: new LedgerEmbedWallet_1.default(),
    CoinbaseWallet: new CoinbaseWallet_1.default(),
    OKXWallet: new OKXWallet_1.default(),
    XDEFIWallet: new XDeFiWallet_1.default(),
    OntoWallet: new OntoWallet_1.default(),
    Coin98Wallet: new Coin98_1.default(),
    TokenPocket: new TokenPocket_1.default(),
    CloverWallet: new CloverWallet_1.default(),
    ImTokenWallet: new ImTokenWallet_1.default(),
    MathWallet: new MathWallet_1.default(),
    CryptoCom: new CryptoCom_1.default(),
    Cyano: new Cyano_1.default(),
    OntoMobile: new OntoMobile_1.default(),
    TronLink: new TronLink_1.default(),
    Sollet: new Sollet_1.default(),
    SolflareWallet: new SolflareWallet_1.default(),
    Phantom: new Phantom_1.default(),
    TerraStation: new TerraStation_1.default(),
    GnosisSafeWallet: new GnosisSafeWallet_1.default(),
    SlopeWallet: new SlopeWallet_1.default(),
    KeplrWallet: new KeplrWallet_1.default(),
    BloctoWallet: new BloctoWallet_1.default(),
    PetraWallet: new PetraWallet_1.default(),
    MartianWallet: new MartianWallet_1.default(),
    PontemWallet: new PontemWallet_1.default(),
    NearWallet: new NearWallet_1.default(),
    MyNearWallet: new MyNearWallet_1.default(),
    MeteorWallet: new MeteorWallet_1.default(),
    SenderWallet: new SenderWallet_1.default(),
    Krystal: new Krystal_1.default(),
};
var Wallets = /** @class */ (function () {
    function Wallets() {
        this.walletObj = {};
        this.walletList = [];
        WalletObj.MetaMask.supportChains.push('rinkeby');
        WalletObj.MetaMask.supportChains.push('ropsten');
        this.walletObj = WalletObj;
        this.walletList = Object.keys(WalletObj).map(function (key) {
            WalletObj[key].key = key;
            return WalletObj[key];
        });
    }
    return Wallets;
}());
exports.Wallets = Wallets;
var walletsObj = new Wallets();
exports.walletsObj = walletsObj;
