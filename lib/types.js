"use strict";
/**
 * @name types
 * @author openocean
 * @date 2021/4/20
 * @desc
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumErrors = exports.EnumWalletName = exports.EnumWalletType = exports.EnumChains = void 0;
var EnumChains;
(function (EnumChains) {
    EnumChains["NEAR"] = "near";
    EnumChains["ETH"] = "eth";
    EnumChains["ROPSTEN"] = "ropsten";
    EnumChains["RINKEBY"] = "rinkeby";
    EnumChains["ONT"] = "ont";
    EnumChains["ONTEVM"] = "ontevm";
    EnumChains["BSC"] = "bsc";
    EnumChains["BSCTEST"] = "bsctest";
    EnumChains["TRON"] = "tron";
    EnumChains["Solana"] = "solana";
    EnumChains["Polygon"] = "polygon";
    EnumChains["XDai"] = "xdai";
    EnumChains["HECO"] = "heco";
    EnumChains["Fantom"] = "fantom";
    EnumChains["Avalanche"] = "avax";
    EnumChains["OKEX"] = "okex";
    EnumChains["Arbitrum"] = "arbitrum";
    EnumChains["Optimism"] = "optimism";
    EnumChains["Terra"] = "terra";
    EnumChains["Boba"] = "boba";
    EnumChains["Moonriver"] = "moonriver";
    EnumChains["Aurora"] = "aurora";
    EnumChains["Cronos"] = "cronos";
    EnumChains["Harmony"] = "harmony";
    EnumChains["Cosmos"] = "cosmos";
    EnumChains["Osmosis"] = "osmosis";
    EnumChains["Flow"] = "flow";
    EnumChains["Aptos"] = "aptos";
    EnumChains["Metis"] = "metis";
    EnumChains["Kava"] = "kava";
    EnumChains["Celo"] = "celo";
    EnumChains["Klaytn"] = "klaytn";
    EnumChains["ZKSYNC"] = "zksync";
    EnumChains["PolygonzkEVM"] = "polygon_zkevm";
    EnumChains["Linea"] = "linea";
    EnumChains["LineaTest"] = "lineaTest";
    EnumChains["Starknet"] = "starknet";
    EnumChains["Telos"] = "telos";
    EnumChains["Scroll"] = "scroll";
    EnumChains["Base"] = "base";
    EnumChains["OpBNB"] = "opbnb";
    EnumChains["Mantle"] = "mantle";
    EnumChains["Manta"] = "manta";
})(EnumChains || (exports.EnumChains = EnumChains = {}));
var EnumWalletType;
(function (EnumWalletType) {
    EnumWalletType["Extension"] = "Extension";
    EnumWalletType["WalletConnect"] = "WalletConnect";
    EnumWalletType["Web"] = "Web";
    EnumWalletType["Mobile"] = "Mobile";
})(EnumWalletType || (exports.EnumWalletType = EnumWalletType = {}));
var EnumWalletName;
(function (EnumWalletName) {
    EnumWalletName["NearWallet"] = "NearWallet";
    EnumWalletName["MetaMask"] = "MetaMask";
    EnumWalletName["BscWallet"] = "Binance Wallet";
    EnumWalletName["Cyano"] = "Cyano";
    EnumWalletName["TronLink"] = "TronLink";
    EnumWalletName["WalletConnect"] = "WalletConnect";
    EnumWalletName["PlenaWallet"] = "Plena Wallet";
    EnumWalletName["Sollet"] = "Sollet";
    EnumWalletName["SolletIo"] = "Sollet.io";
    EnumWalletName["OntoMobile"] = "ONTO Mobile";
    EnumWalletName["OntoExt"] = "ONTO Extension";
    EnumWalletName["TrustWallet"] = "Trust Wallet";
    EnumWalletName["MathWallet"] = "Math Wallet";
    EnumWalletName["TokenPocket"] = "Token Pocket";
    EnumWalletName["SafePalWallet"] = "SafePal Wallet";
    EnumWalletName["ImTokenWallet"] = "ImToken Wallet";
    EnumWalletName["OntoWallet"] = "ONTO Wallet";
    EnumWalletName["Coin98"] = "Coin98 Wallet";
    EnumWalletName["Phantom"] = "Phantom";
    EnumWalletName["TerraStation"] = "Terra Station";
    EnumWalletName["CoinbaseWallet"] = "Coinbase Wallet";
    EnumWalletName["CloverWallet"] = "Clover Wallet";
    EnumWalletName["XDEFIWallet"] = "XDEFI Wallet";
    EnumWalletName["SlopeWallet"] = "Slope Wallet";
    EnumWalletName["SolflareWallet"] = "Solflare Wallet";
    EnumWalletName["OKXWallet"] = "OKX Wallet";
    EnumWalletName["keplrWallet"] = "Keplr Wallet";
    EnumWalletName["BraveWallet"] = "Brave Wallet";
    EnumWalletName["CryptoCom"] = "Crypto.com DeFi Wallet";
    EnumWalletName["BitgetWallet"] = "Bitget Wallet";
    EnumWalletName["GnosisSafeWallet"] = "GnosisSafe Wallet";
    EnumWalletName["BloctoWallet"] = "Blocto Wallet";
    EnumWalletName["PetraWallet"] = "Petra wallet";
    EnumWalletName["MartianWallet"] = "Martian wallet";
    EnumWalletName["PontemWallet"] = "Pontem Wallet";
    EnumWalletName["UnstoppableDomains"] = "Unstoppable Domains";
    EnumWalletName["MyNearWallet"] = "MyNear Wallet";
    EnumWalletName["MeteorWallet"] = "Meteor Wallet";
    EnumWalletName["SenderWallet"] = "Sender Wallet";
    EnumWalletName["LedgerWallet"] = "Ledger Wallet";
    EnumWalletName["LedgerEmbedWallet"] = "LedgerEmbed Wallet";
    EnumWalletName["RabbyWallet"] = "Rabby Wallet";
    EnumWalletName["ArgentX"] = "Argent X";
    EnumWalletName["Braavos"] = "Braavos";
    EnumWalletName["Krystal"] = "Krystal";
})(EnumWalletName || (exports.EnumWalletName = EnumWalletName = {}));
var EnumErrors;
(function (EnumErrors) {
    EnumErrors["NotMetamask"] = "40001";
    EnumErrors["NotBinance"] = "40002";
    EnumErrors["NoTronLink"] = "40003";
    EnumErrors["NoTronLinkAccount"] = "40004";
    EnumErrors["NoSollet"] = "40005";
    EnumErrors["ChainIdNotMath"] = "40006";
    EnumErrors["UserCanceled"] = "40007";
    EnumErrors["NotConnected"] = "40008";
    EnumErrors["UnSupported"] = "40009";
    EnumErrors["NoCoin98"] = "40011";
    EnumErrors["NoMath"] = "40012";
    EnumErrors["NoPhantom"] = "40013";
    EnumErrors["NoTerraStation"] = "40015";
    EnumErrors["NoCoinbase"] = "40016";
    EnumErrors["NoClover"] = "40017";
    EnumErrors["NoXDeFi"] = "40018";
    EnumErrors["NoSlope"] = "40019";
    EnumErrors["NoSolflare"] = "40020";
    EnumErrors["NoOKX"] = "40021";
    EnumErrors["NoOnto"] = "40022";
    EnumErrors["OntoChainIdNotMath"] = "40023";
    EnumErrors["NoKeplr"] = "40024";
    EnumErrors["NoBrave"] = "40025";
    EnumErrors["NoCryptoCom"] = "40026";
    EnumErrors["NoBitget"] = "40027";
    EnumErrors["NoSafePal"] = "40028";
    EnumErrors["NoTrustWallet"] = "40029";
    EnumErrors["NoTokenPocket"] = "40030";
    EnumErrors["NoImToken"] = "40031";
    EnumErrors["NoBlocto"] = "40032";
    EnumErrors["NoBloctoAccount"] = "40033";
    EnumErrors["NoPetraWallet"] = "40034";
    EnumErrors["NoMartianWallet"] = "40035";
    EnumErrors["NoPontemWallet"] = "40036";
    EnumErrors["NoCyano"] = "40037";
    EnumErrors["NoMeteorWallet"] = "40038";
    EnumErrors["NoSender"] = "40039";
    EnumErrors["NoLedger"] = "40040";
    EnumErrors["NoRabbyWallet"] = "40041";
    EnumErrors["NoArgentX"] = "40042";
    EnumErrors["NoBraavos"] = "40043";
})(EnumErrors || (exports.EnumErrors = EnumErrors = {}));
