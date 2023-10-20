"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @name Sollet
 * @author openocean
 * @date 2021/4/21
 * @desc
 */
// @ts-ignore
var keplr_png_1 = __importDefault(require("../assets/keplr.png"));
var types_1 = require("../types");
var BaseWallet_1 = __importDefault(require("./BaseWallet"));
var launchpad_1 = require("@cosmjs/launchpad");
var stargate_1 = require("@cosmjs/stargate");
var proto_signing_1 = require("@cosmjs/proto-signing");
var osmojs_1 = require("osmojs");
var protoRegistryBase = __spreadArray(__spreadArray(__spreadArray([], osmojs_1.cosmosProtoRegistry, true), osmojs_1.cosmwasmProtoRegistry, true), osmojs_1.ibcProtoRegistry, true);
var aminoConvertersBase = __assign(__assign(__assign({}, osmojs_1.cosmosAminoConverters), osmojs_1.cosmwasmAminoConverters), osmojs_1.ibcAminoConverters);
var chainObj = {
    'cosmoshub-4': {
        chainId: 'cosmoshub-4',
        chainName: 'Cosmos',
        rpcUrls: [
            ''
        ],
        blockExplorerUrl: '',
        apiUrl: '',
        protoRegistry: __spreadArray([], protoRegistryBase, true),
        aminoConverters: __assign({}, aminoConvertersBase)
    },
    'osmosis-1': {
        chainId: 'osmosis-1',
        chainName: 'Osmosis',
        rpcUrls: [
            'https://rpc.cosmos.directory/osmosis'
        ],
        blockExplorerUrl: 'https://www.mintscan.io/osmosis/txs',
        compiler: 'COSMOS',
        apiUrl: 'https://lcd-osmosis.keplr.app',
        protoRegistry: __spreadArray(__spreadArray([], protoRegistryBase, true), osmojs_1.osmosisProtoRegistry, true),
        aminoConverters: __assign(__assign({}, aminoConvertersBase), osmojs_1.osmosisAminoConverters)
    },
    'irishub-1': {
        chainId: 'irishub-1',
        chainName: 'Iris',
        rpcUrls: [
            'https://rpc-iris.keplr.app'
        ],
        blockExplorerUrl: '',
        apiUrl: '',
        protoRegistry: __spreadArray([], protoRegistryBase, true),
        aminoConverters: __assign({}, aminoConvertersBase)
    },
};
var KeplrWallet = /** @class */ (function (_super) {
    __extends(KeplrWallet, _super);
    function KeplrWallet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = types_1.EnumWalletName.keplrWallet;
        _this.icon = keplr_png_1.default;
        _this.supportChains = [types_1.EnumChains.Cosmos, types_1.EnumChains.Osmosis];
        _this.type = types_1.EnumWalletType.Web;
        _this.sdk = null;
        _this.installUrl = "https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap";
        return _this;
    }
    /**
     * connect metamask and get wallet address
     * @param chainId specific chainId,throw error when not match
     */
    KeplrWallet.prototype.requestCosmosConnect = function (chainId) {
        var _this = this;
        return new Promise(function (res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, rpcUrls, apiUrl, protoRegistry, aminoConverters, wallet, offlineSigner, accounts, address, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!window.keplr) {
                            throw new Error(types_1.EnumErrors.NoKeplr);
                        }
                        _a = chainObj[chainId], rpcUrls = _a.rpcUrls, apiUrl = _a.apiUrl, protoRegistry = _a.protoRegistry, aminoConverters = _a.aminoConverters;
                        wallet = window.keplr;
                        return [4 /*yield*/, wallet.enable(chainId)];
                    case 1:
                        _c.sent();
                        offlineSigner = wallet.getOfflineSignerOnlyAmino(chainId);
                        return [4 /*yield*/, offlineSigner.getAccounts()];
                    case 2:
                        accounts = _c.sent();
                        address = accounts[0].address;
                        _b = this;
                        return [4 /*yield*/, stargate_1.SigningStargateClient.connectWithSigner(rpcUrls[0], offlineSigner, {
                                registry: new proto_signing_1.Registry(protoRegistry),
                                aminoTypes: new stargate_1.AminoTypes(aminoConverters),
                            })];
                    case 3:
                        _b.sdk = _c.sent();
                        if (apiUrl) {
                            this.sdk.lcdClient = launchpad_1.LcdClient.withExtensions({ apiUrl: apiUrl }, launchpad_1.setupAuthExtension, launchpad_1.setupBankExtension, launchpad_1.setupDistributionExtension, launchpad_1.setupGovExtension, launchpad_1.setupMintExtension, launchpad_1.setupSlashingExtension, launchpad_1.setupStakingExtension, launchpad_1.setupSupplyExtension);
                        }
                        this.address = address;
                        this.chainId = chainId;
                        res(address);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    return KeplrWallet;
}(BaseWallet_1.default));
exports.default = KeplrWallet;
