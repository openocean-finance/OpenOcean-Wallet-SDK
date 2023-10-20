"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Krystal = exports.PlenaWallet = exports.LedgerEmbedWallet = exports.LedgerWallet = exports.SenderWallet = exports.MeteorWallet = exports.MyNearWallet = exports.UnstoppableDomains = exports.PontemWallet = exports.MartianWallet = exports.PetraWallet = exports.BloctoWallet = exports.GnosisSafeWallet = exports.BitgetWallet = exports.NearWallet = exports.CryptoCom = exports.BraveWallet = exports.KeplrWallet = exports.OKXWallet = exports.SolflareWallet = exports.SlopeWallet = exports.XDEFIWallet = exports.CloverWallet = exports.CoinbaseWallet = exports.TerraStation = exports.Phantom = exports.Coin98 = exports.TrustWallet = exports.TokenPocket = exports.ImTokenWallet = exports.SafePalWallet = exports.OntoWallet = exports.MathWallet = exports.WalletConnect = exports.OntoMobile = exports.SolletIo = exports.Sollet = exports.TronLink = exports.Cyano = exports.BscWallet = exports.MetaMask = exports.BaseWallet = exports.EnumWalletName = exports.EnumChains = exports.tryWalletConnect = exports.Wallets = exports.walletsObj = exports.Chains = exports.chainsObj = void 0;
/**
 * wallets-manager entry
 * @author openocean
 * @date 2021/4/20
 * @desc
 */
var BaseWallet_1 = __importDefault(require("./Wallets/BaseWallet"));
exports.BaseWallet = BaseWallet_1.default;
var MetaMask_1 = __importDefault(require("./Wallets/MetaMask"));
exports.MetaMask = MetaMask_1.default;
var BscWallet_1 = __importDefault(require("./Wallets/BscWallet"));
exports.BscWallet = BscWallet_1.default;
var Cyano_1 = __importDefault(require("./Wallets/Cyano"));
exports.Cyano = Cyano_1.default;
var TronLink_1 = __importDefault(require("./Wallets/TronLink"));
exports.TronLink = TronLink_1.default;
var Sollet_1 = __importDefault(require("./Wallets/Sollet"));
exports.Sollet = Sollet_1.default;
var SolletIo_1 = __importDefault(require("./Wallets/SolletIo"));
exports.SolletIo = SolletIo_1.default;
var OntoMobile_1 = __importDefault(require("./Wallets/OntoMobile"));
exports.OntoMobile = OntoMobile_1.default;
var WalletConnect_1 = __importDefault(require("./Wallets/WalletConnect"));
exports.WalletConnect = WalletConnect_1.default;
var MathWallet_1 = __importDefault(require("./Wallets/MathWallet"));
exports.MathWallet = MathWallet_1.default;
var OntoWallet_1 = __importDefault(require("./Wallets/OntoWallet"));
exports.OntoWallet = OntoWallet_1.default;
var SafePalWallet_1 = __importDefault(require("./Wallets/SafePalWallet"));
exports.SafePalWallet = SafePalWallet_1.default;
var ImTokenWallet_1 = __importDefault(require("./Wallets/ImTokenWallet"));
exports.ImTokenWallet = ImTokenWallet_1.default;
var TokenPocket_1 = __importDefault(require("./Wallets/TokenPocket"));
exports.TokenPocket = TokenPocket_1.default;
var TrustWallet_1 = __importDefault(require("./Wallets/TrustWallet"));
exports.TrustWallet = TrustWallet_1.default;
var Coin98_1 = __importDefault(require("./Wallets/Coin98"));
exports.Coin98 = Coin98_1.default;
var Phantom_1 = __importDefault(require("./Wallets/Phantom"));
exports.Phantom = Phantom_1.default;
var TerraStation_1 = __importDefault(require("./Wallets/TerraStation"));
exports.TerraStation = TerraStation_1.default;
var CoinbaseWallet_1 = __importDefault(require("./Wallets/CoinbaseWallet"));
exports.CoinbaseWallet = CoinbaseWallet_1.default;
var CloverWallet_1 = __importDefault(require("./Wallets/CloverWallet"));
exports.CloverWallet = CloverWallet_1.default;
var XDeFiWallet_1 = __importDefault(require("./Wallets/XDeFiWallet"));
exports.XDEFIWallet = XDeFiWallet_1.default;
var SlopeWallet_1 = __importDefault(require("./Wallets/SlopeWallet"));
exports.SlopeWallet = SlopeWallet_1.default;
var SolflareWallet_1 = __importDefault(require("./Wallets/SolflareWallet"));
exports.SolflareWallet = SolflareWallet_1.default;
var OKXWallet_1 = __importDefault(require("./Wallets/OKXWallet"));
exports.OKXWallet = OKXWallet_1.default;
var KeplrWallet_1 = __importDefault(require("./Wallets/KeplrWallet"));
exports.KeplrWallet = KeplrWallet_1.default;
var BraveWallet_1 = __importDefault(require("./Wallets/BraveWallet"));
exports.BraveWallet = BraveWallet_1.default;
var CryptoCom_1 = __importDefault(require("./Wallets/CryptoCom"));
exports.CryptoCom = CryptoCom_1.default;
var NearWallet_1 = __importDefault(require("./Wallets/NearWallet"));
exports.NearWallet = NearWallet_1.default;
var BitgetWallet_1 = __importDefault(require("./Wallets/BitgetWallet"));
exports.BitgetWallet = BitgetWallet_1.default;
var GnosisSafeWallet_1 = __importDefault(require("./Wallets/GnosisSafeWallet"));
exports.GnosisSafeWallet = GnosisSafeWallet_1.default;
var BloctoWallet_1 = __importDefault(require("./Wallets/BloctoWallet"));
exports.BloctoWallet = BloctoWallet_1.default;
var PetraWallet_1 = __importDefault(require("./Wallets/PetraWallet"));
exports.PetraWallet = PetraWallet_1.default;
var MartianWallet_1 = __importDefault(require("./Wallets/MartianWallet"));
exports.MartianWallet = MartianWallet_1.default;
var PontemWallet_1 = __importDefault(require("./Wallets/PontemWallet"));
exports.PontemWallet = PontemWallet_1.default;
var UnstoppableDomains_1 = __importDefault(require("./Wallets/UnstoppableDomains"));
exports.UnstoppableDomains = UnstoppableDomains_1.default;
var MyNearWallet_1 = __importDefault(require("./Wallets/MyNearWallet"));
exports.MyNearWallet = MyNearWallet_1.default;
var MeteorWallet_1 = __importDefault(require("./Wallets/MeteorWallet"));
exports.MeteorWallet = MeteorWallet_1.default;
var SenderWallet_1 = __importDefault(require("./Wallets/SenderWallet"));
exports.SenderWallet = SenderWallet_1.default;
var LedgerWallet_1 = __importDefault(require("./Wallets/LedgerWallet"));
exports.LedgerWallet = LedgerWallet_1.default;
var LedgerEmbedWallet_1 = __importDefault(require("./Wallets/LedgerEmbedWallet"));
exports.LedgerEmbedWallet = LedgerEmbedWallet_1.default;
var PlenaWallet_1 = __importDefault(require("./Wallets/PlenaWallet"));
exports.PlenaWallet = PlenaWallet_1.default;
var Krystal_1 = __importDefault(require("./Wallets/Krystal"));
exports.Krystal = Krystal_1.default;
var types_1 = require("./types");
Object.defineProperty(exports, "EnumChains", { enumerable: true, get: function () { return types_1.EnumChains; } });
Object.defineProperty(exports, "EnumWalletName", { enumerable: true, get: function () { return types_1.EnumWalletName; } });
var TryWalletConnect_1 = require("./TryWalletConnect");
Object.defineProperty(exports, "tryWalletConnect", { enumerable: true, get: function () { return TryWalletConnect_1.tryWalletConnect; } });
var Chains_1 = require("./Chains");
Object.defineProperty(exports, "chainsObj", { enumerable: true, get: function () { return Chains_1.chainsObj; } });
Object.defineProperty(exports, "Chains", { enumerable: true, get: function () { return Chains_1.Chains; } });
var index_1 = require("./Wallets/index");
Object.defineProperty(exports, "walletsObj", { enumerable: true, get: function () { return index_1.walletsObj; } });
Object.defineProperty(exports, "Wallets", { enumerable: true, get: function () { return index_1.Wallets; } });