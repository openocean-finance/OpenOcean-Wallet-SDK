"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tryWalletConnect = void 0;
var axios = require('axios');
var NotoMobile_1 = require("./NotoMobile");
var web3_js_1 = require("@solana/web3.js");
var web3_1 = __importDefault(require("web3"));
var util_1 = require("../util");
var index_1 = require("../Wallets/index");
var Chains_1 = require("./../Chains");
var SID = require('@siddomains/sidjs').default;
var SIDfunctions = require('@siddomains/sidjs');
function isChainIdEq(wallet, chainId, utilsEht, k) {
    return __awaiter(this, void 0, void 0, function () {
        var key, chainIdNow;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    key = k || 0;
                    return [4 /*yield*/, (0, util_1.sleep)(1000)];
                case 1:
                    _a.sent();
                    chainIdNow = utilsEht.hexToNumber(wallet.sdk.currentProvider.chainId);
                    if (!(chainId == chainIdNow)) return [3 /*break*/, 2];
                    wallet.chainId = chainId;
                    return [2 /*return*/, true];
                case 2:
                    if (!(key < 4)) return [3 /*break*/, 4];
                    return [4 /*yield*/, isChainIdEq(wallet, chainId, utilsEht, key + 1)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: throw new Error('User rejected the request.');
            }
        });
    });
}
function link(reqConnectWalletVo, chain) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, chainId, selectedName, qrData, instance_1, account, res, res, res, res, res, res, res, res, _a, e_1, message, _b, currentProvider, utilsEht;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    wallet = index_1.walletsObj.walletObj[reqConnectWalletVo.walletName];
                    if (!wallet)
                        wallet = index_1.walletsObj.walletList.find(function (item) { return item.name == reqConnectWalletVo.walletName; });
                    chainId = chain.chainId;
                    selectedName = chain.key;
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 28, , 32]);
                    if (!(wallet.type === 'WalletConnect')) return [3 /*break*/, 3];
                    // wallet.infuraId = '2c7c4d86c2c746c89de722551b606119';
                    return [4 /*yield*/, wallet.requestConnect(chainId)];
                case 2:
                    // wallet.infuraId = '2c7c4d86c2c746c89de722551b606119';
                    _c.sent();
                    return [3 /*break*/, 27];
                case 3:
                    if (!(wallet.key === 'OntoMobile')) return [3 /*break*/, 6];
                    return [4 /*yield*/, axios.get('https://ethapi.openocean.finance/v1/ont/login')];
                case 4:
                    qrData = _c.sent();
                    wallet.qrData = qrData.data;
                    instance_1 = new NotoMobile_1.NotoMobile(qrData.data);
                    return [4 /*yield*/, new Promise(function (r, q) {
                            instance_1.$on('close', function (result, action, account) {
                                if (action === 'login' && result === 'success') {
                                    r(account);
                                }
                                else {
                                    q(action);
                                }
                            });
                        })];
                case 5:
                    account = _c.sent();
                    wallet.address = account;
                    return [3 /*break*/, 27];
                case 6:
                    if (!(wallet.key === 'KeplrWallet')) return [3 /*break*/, 8];
                    return [4 /*yield*/, wallet.requestCosmosConnect(chainId)];
                case 7:
                    res = _c.sent();
                    console.log('wallet.requestConnect', res, wallet);
                    return [3 /*break*/, 27];
                case 8:
                    if (!(selectedName === 'terra')) return [3 /*break*/, 11];
                    if (!!wallet.sdk) return [3 /*break*/, 10];
                    return [4 /*yield*/, wallet.requestTerraConnect()];
                case 9:
                    res = _c.sent();
                    if (res) {
                        // connect(wallet);
                    }
                    else {
                        // const message = {
                        //   'XDEFI Wallet': 'wallet_message_40018',
                        //   'Terra Station': 'wallet_message_40015'
                        // }[wallet.name];
                        // showToast($t(message));
                    }
                    _c.label = 10;
                case 10: return [3 /*break*/, 27];
                case 11:
                    if (!(selectedName === "solana")) return [3 /*break*/, 13];
                    return [4 /*yield*/, wallet.requestSolanaConnect()];
                case 12:
                    res = _c.sent();
                    wallet.customPublicKey = new web3_js_1.PublicKey(res);
                    // "https://api.mainnet-beta.solana.com"
                    // "https://solana-mainnet.phantom.tech"
                    // "https://rpc.ankr.com/solana"
                    // https://solana-api.projectserum.com
                    // https://mercuria-fronten-1cd8.mainnet.rpcpool.com/
                    // "https://rpc.ankr.com/solana/ad9d7bb3250b29d691330e63e3b46778099aca307af8f5e49b2ebc0a470dd848"
                    wallet.connection = new web3_js_1.Connection("https://solana-mainnet.g.alchemy.com/v2/aTdPTJc3R936_mNf4ABtPvl1NFgejm8w");
                    if (res) {
                        // connect(wallet);
                    }
                    else {
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
                    return [3 /*break*/, 27];
                case 13:
                    if (!(selectedName === 'tron')) return [3 /*break*/, 15];
                    return [4 /*yield*/, wallet.requestTronConnect()];
                case 14:
                    res = _c.sent();
                    console.log('wallet.requestConnect', res, wallet);
                    return [3 /*break*/, 27];
                case 15:
                    if (!(selectedName === 'aptos')) return [3 /*break*/, 17];
                    return [4 /*yield*/, wallet.requestAptosConnect()];
                case 16:
                    res = _c.sent();
                    // wallet.customPublicKey = new PublicKey(res);
                    console.log('wallet.requestConnect', res, wallet);
                    return [3 /*break*/, 27];
                case 17:
                    if (!(selectedName === 'starknet')) return [3 /*break*/, 19];
                    return [4 /*yield*/, wallet.requestStarknetConnect()];
                case 18:
                    res = _c.sent();
                    // wallet.customPublicKey = new PublicKey(res);
                    console.log('wallet.requestConnect', res, wallet);
                    return [3 /*break*/, 27];
                case 19:
                    if (!(selectedName === 'near')) return [3 /*break*/, 21];
                    return [4 /*yield*/, wallet.requestConnect()];
                case 20:
                    res = _c.sent();
                    console.log('wallet.requestConnect', res, wallet);
                    return [3 /*break*/, 27];
                case 21:
                    if (!chainId) return [3 /*break*/, 23];
                    return [4 /*yield*/, wallet.requestConnect(chainId)];
                case 22:
                    _a = _c.sent();
                    return [3 /*break*/, 25];
                case 23: return [4 /*yield*/, wallet.requestConnect()];
                case 24:
                    _a = _c.sent();
                    _c.label = 25;
                case 25:
                    res = _a;
                    console.log('wallet.requestConnect', res, wallet);
                    return [4 /*yield*/, (0, util_1.sleep)(200)];
                case 26:
                    _c.sent();
                    if (res) {
                        // connect(wallet);
                    }
                    _c.label = 27;
                case 27: return [2 /*return*/, wallet];
                case 28:
                    e_1 = _c.sent();
                    message = e_1.message;
                    _b = wallet.sdk || {}, currentProvider = _b.currentProvider, utilsEht = _b.utils;
                    if (reqConnectWalletVo.noSwitch) {
                        throw new Error('No Switch');
                    }
                    if (!(message === "40006" && currentProvider)) return [3 /*break*/, 30];
                    return [4 /*yield*/, linkAddOrSwitch(wallet, chain)];
                case 29: return [2 /*return*/, _c.sent()];
                case 30: throw new Error(message);
                case 31: return [3 /*break*/, 32];
                case 32: return [2 /*return*/];
            }
        });
    });
}
function linkAddOrSwitch(wallet, chain) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, currentProvider, utilsEht, chainId, params, address, address, switchError_1, address, address, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = wallet.sdk || {}, currentProvider = _a.currentProvider, utilsEht = _a.utils;
                    chainId = chain.chainId + '';
                    if (!chain) return [3 /*break*/, 23];
                    params = {
                        chainId: utilsEht.toHex(chainId),
                        chainName: chain.chainName,
                        nativeCurrency: chain.nativeCurrency,
                        rpcUrls: chain.rpcUrls,
                        blockExplorerUrls: [chain.blockExplorerUrl],
                    };
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 9, , 22]);
                    return [4 /*yield*/, currentProvider.request({
                            method: 'wallet_switchEthereumChain',
                            params: [{ chainId: params.chainId }],
                        })];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, isChainIdEq(wallet, chainId, utilsEht)];
                case 3:
                    if (!_b.sent()) return [3 /*break*/, 8];
                    if (!(wallet.type === 'WalletConnect')) return [3 /*break*/, 5];
                    return [4 /*yield*/, wallet.sdk.eth.getAccounts()];
                case 4:
                    address = (_b.sent())[0];
                    wallet.address = address;
                    return [3 /*break*/, 7];
                case 5: return [4 /*yield*/, wallet.sdk.eth.requestAccounts()];
                case 6:
                    address = (_b.sent())[0];
                    wallet.address = address;
                    _b.label = 7;
                case 7: return [2 /*return*/, wallet];
                case 8: return [3 /*break*/, 22];
                case 9:
                    switchError_1 = _b.sent();
                    console.log('wallet_switchEthereumChain errer');
                    console.log(JSON.stringify(switchError_1));
                    console.log(params);
                    if (!(switchError_1.code === 4902 || (switchError_1.data && switchError_1.data.originalError && switchError_1.data.originalError.code == 4902))) return [3 /*break*/, 20];
                    _b.label = 10;
                case 10:
                    _b.trys.push([10, 18, , 19]);
                    return [4 /*yield*/, currentProvider.request({
                            method: "wallet_addEthereumChain",
                            params: [params]
                        })];
                case 11:
                    _b.sent();
                    return [4 /*yield*/, isChainIdEq(wallet, chainId, utilsEht)];
                case 12:
                    if (!_b.sent()) return [3 /*break*/, 17];
                    if (!(wallet.type === 'WalletConnect')) return [3 /*break*/, 14];
                    return [4 /*yield*/, wallet.sdk.eth.getAccounts()];
                case 13:
                    address = (_b.sent())[0];
                    wallet.address = address;
                    return [3 /*break*/, 16];
                case 14: return [4 /*yield*/, wallet.sdk.eth.requestAccounts()];
                case 15:
                    address = (_b.sent())[0];
                    wallet.address = address;
                    _b.label = 16;
                case 16: return [2 /*return*/, wallet];
                case 17: return [3 /*break*/, 19];
                case 18:
                    error_1 = _b.sent();
                    console.log('wallet_addEthereumChain Error', JSON.stringify(error_1));
                    throw new Error('Network error');
                case 19: return [3 /*break*/, 21];
                case 20: throw new Error(switchError_1);
                case 21: return [3 /*break*/, 22];
                case 22: return [3 /*break*/, 24];
                case 23: throw new Error('Network error');
                case 24: return [2 /*return*/];
            }
        });
    });
}
function tryWalletConnect(reqConnectWalletVo) {
    return __awaiter(this, void 0, void 0, function () {
        var chain, wallet, sdk, account, chainId, localProvider, localRpcUrl, sid, name_1, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!reqConnectWalletVo.chainName || !reqConnectWalletVo.walletName) {
                        throw new Error('Parameter error.');
                    }
                    chain = Chains_1.chainsObj.chainObj[reqConnectWalletVo.chainName];
                    if (!chain)
                        throw new Error('Chain error.');
                    wallet = {};
                    if (!(reqConnectWalletVo.provider && chain.compiler == 'EVM')) return [3 /*break*/, 3];
                    sdk = reqConnectWalletVo.provider;
                    return [4 /*yield*/, sdk.eth.requestAccounts()];
                case 1:
                    account = (_a.sent())[0];
                    return [4 /*yield*/, sdk.eth.getChainId()];
                case 2:
                    chainId = _a.sent();
                    wallet = {
                        address: account,
                        key: reqConnectWalletVo.walletName,
                        name: reqConnectWalletVo.walletName,
                        chainId: chainId,
                        sdk: sdk
                    };
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, link(reqConnectWalletVo, chain)];
                case 4:
                    wallet = _a.sent();
                    _a.label = 5;
                case 5:
                    localProvider = '';
                    localRpcUrl = '';
                    if (!wallet) return [3 /*break*/, 9];
                    if (reqConnectWalletVo.localRpcUrl) {
                        localProvider = new web3_1.default(new web3_1.default.providers.HttpProvider(reqConnectWalletVo.localRpcUrl));
                        localRpcUrl = reqConnectWalletVo.localRpcUrl;
                    }
                    else {
                        localProvider = null;
                        localRpcUrl = '';
                        if (chain.compiler == 'EVM') {
                            if (chain.rpcUrls && chain.rpcUrls.length) {
                                localRpcUrl = chain.rpcUrls[0];
                            }
                            else if (chain.chainId == '1') {
                                localRpcUrl = 'https://mainnet.infura.io/v3/';
                            }
                            else if (chain.chainId == '4') {
                                localRpcUrl = 'https://rinkeby.infura.io/v3/';
                            }
                            if (localRpcUrl) {
                                localProvider = wallet.sdk;
                            }
                        }
                    }
                    if (!(wallet.chainId == 1 || wallet.chainId == 56 || wallet.chainId == 42161)) return [3 /*break*/, 9];
                    _a.label = 6;
                case 6:
                    _a.trys.push([6, 8, , 9]);
                    sid = new SID({ provider: wallet.sdk.currentProvider, sidAddress: SIDfunctions.getSidAddress(wallet.chainId) });
                    return [4 /*yield*/, sid.getName(wallet.address)
                        // const name = await sid.getName('0xB522E32b6B49363f420d2546E13479c05fF27201')
                    ];
                case 7:
                    name_1 = _a.sent();
                    // const name = await sid.getName('0xB522E32b6B49363f420d2546E13479c05fF27201')
                    if (name_1.name)
                        wallet.sidName = name_1.name;
                    return [3 /*break*/, 9];
                case 8:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 9];
                case 9: return [2 /*return*/, {
                        wallet: wallet,
                        chain: chain,
                        localProvider: localProvider,
                        localRpcUrl: localRpcUrl
                    }];
            }
        });
    });
}
exports.tryWalletConnect = tryWalletConnect;
