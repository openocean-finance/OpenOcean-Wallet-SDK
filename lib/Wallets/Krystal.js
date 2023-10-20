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
/**
 * @name Krystal
 * @author openocean
 * @date 2023/9/21
 * @desc
 */
// @ts-ignore
var krystal_svg_1 = __importDefault(require("../assets/krystal.svg"));
var types_1 = require("../types");
var BaseWallet_1 = __importDefault(require("./BaseWallet"));
var web3_1 = __importDefault(require("web3"));
var ethereum_provider_1 = __importDefault(require("@walletconnect/ethereum-provider"));
var Krystal = /** @class */ (function (_super) {
    __extends(Krystal, _super);
    function Krystal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = types_1.EnumWalletName.Krystal;
        _this.icon = krystal_svg_1.default;
        _this.supportChains = [
            types_1.EnumChains.ETH,
            types_1.EnumChains.BSC,
            types_1.EnumChains.Polygon,
            types_1.EnumChains.Fantom,
            types_1.EnumChains.Avalanche,
            types_1.EnumChains.Arbitrum,
            types_1.EnumChains.Optimism
        ];
        _this.type = types_1.EnumWalletType.WalletConnect;
        _this.sdk = null;
        return _this;
    }
    /**
     * connect metamask and get wallet address
     * @param chainId specific chainId,throw error when not match
     * @param config
     */
    Krystal.prototype.requestConnect = function (chainId, config) {
        if (chainId === void 0) { chainId = 1; }
        return __awaiter(this, void 0, void 0, function () {
            var qrModalOptions, provider, currentChainId, address;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // if (!this.infuraId) {
                        //   throw new Error("infuraId not set");
                        // }
                        console.log('chainId', chainId);
                        qrModalOptions = {
                            themeVariables: {
                                '--wcm-z-index': '99999',
                            }
                        };
                        return [4 /*yield*/, ethereum_provider_1.default.init({
                                projectId: 'c1ca7adc83e89c7e7848440702f28f38',
                                chains: [chainId],
                                showQrModal: true,
                                qrModalOptions: qrModalOptions
                            })];
                    case 1:
                        provider = _a.sent();
                        console.log('provider', provider);
                        return [4 /*yield*/, provider.enable()];
                    case 2:
                        _a.sent();
                        console.log('provider', provider);
                        this.sdk = new web3_1.default(provider);
                        return [4 /*yield*/, this.sdk.eth.getChainId()];
                    case 3:
                        currentChainId = _a.sent();
                        if (chainId && currentChainId != chainId) {
                            throw new Error(types_1.EnumErrors.ChainIdNotMath);
                        }
                        return [4 /*yield*/, this.sdk.eth.getAccounts()];
                    case 4:
                        address = (_a.sent())[0];
                        this.address = address;
                        this.chainId = currentChainId;
                        return [2 /*return*/, address];
                }
            });
        });
    };
    return Krystal;
}(BaseWallet_1.default));
exports.default = Krystal;
