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
 * @name UnstoppableDomains
 * @author openocean
 * @date 2021/4/21
 * @desc
 */
// @ts-ignore
var unstoppabledomains_svg_1 = __importDefault(require("../assets/unstoppabledomains.svg"));
var types_1 = require("../types");
var BaseWallet_1 = __importDefault(require("./BaseWallet"));
var web3_1 = __importDefault(require("web3"));
var js_1 = __importDefault(require("@uauth/js"));
var UnstoppableDomains = /** @class */ (function (_super) {
    __extends(UnstoppableDomains, _super);
    function UnstoppableDomains() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = types_1.EnumWalletName.UnstoppableDomains;
        _this.icon = unstoppabledomains_svg_1.default;
        _this.supportChains = [
            types_1.EnumChains.ETH,
            types_1.EnumChains.ROPSTEN,
            types_1.EnumChains.RINKEBY,
            types_1.EnumChains.BSC,
            types_1.EnumChains.BSCTEST,
            types_1.EnumChains.Polygon,
            types_1.EnumChains.OKEX,
            types_1.EnumChains.XDai,
            types_1.EnumChains.HECO,
            types_1.EnumChains.Fantom,
            types_1.EnumChains.Avalanche,
            types_1.EnumChains.Arbitrum,
            types_1.EnumChains.Optimism,
            types_1.EnumChains.Boba,
            types_1.EnumChains.Moonriver,
            types_1.EnumChains.Aurora,
            types_1.EnumChains.Cronos,
            types_1.EnumChains.Harmony,
            types_1.EnumChains.Telos,
        ];
        _this.type = types_1.EnumWalletType.Mobile;
        _this.sdk = null;
        return _this;
    }
    /**
     * connect UnstoppableDomains and get wallet address
     * @param chainId specific chainId,throw error when not match
     */
    UnstoppableDomains.prototype.requestConnect = function (chainId) {
        return __awaiter(this, void 0, void 0, function () {
            var uauth, _account, sub, e_1, authorization, account, _a, sub, wallet_address, authorization, account, _b, sub, wallet_address, address, currentChainId;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        uauth = new js_1.default({
                            clientID: "05c3a150-4fef-49c9-a153-af16851c75ba",
                            redirectUri: "https://app.openocean.finance/CLASSIC",
                            // redirectUri: window.location.origin + (window.location.pathname || ""),
                            // responseMode: "fragment",
                            // clientAuthMethod: "none",
                            prompt: "login",
                            scope: "openid wallet"
                        });
                        _account = window.localStorage.getItem('uAuthAccount');
                        if (!_account) return [3 /*break*/, 7];
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 6]);
                        return [4 /*yield*/, uauth.user()];
                    case 2:
                        sub = (_c.sent()).sub;
                        console.log('account', sub);
                        this.account = sub;
                        return [3 /*break*/, 6];
                    case 3:
                        e_1 = _c.sent();
                        return [4 /*yield*/, uauth.loginWithPopup()];
                    case 4:
                        authorization = _c.sent();
                        account = uauth.getAuthorizationAccount(authorization);
                        return [4 /*yield*/, uauth.user()];
                    case 5:
                        _a = _c.sent(), sub = _a.sub, wallet_address = _a.wallet_address;
                        console.log('account', account, sub, wallet_address);
                        this.account = sub;
                        return [3 /*break*/, 6];
                    case 6: return [3 /*break*/, 10];
                    case 7: return [4 /*yield*/, uauth.loginWithPopup()];
                    case 8:
                        authorization = _c.sent();
                        account = uauth.getAuthorizationAccount(authorization);
                        return [4 /*yield*/, uauth.user()];
                    case 9:
                        _b = _c.sent(), sub = _b.sub, wallet_address = _b.wallet_address;
                        console.log('account', account, sub, wallet_address);
                        this.account = sub;
                        _c.label = 10;
                    case 10:
                        window.localStorage.setItem('uAuthAccount', this.account);
                        if (!window.ethereum) {
                            throw new Error(types_1.EnumErrors.NotMetamask);
                        }
                        this.sdk = new web3_1.default(window.ethereum);
                        return [4 /*yield*/, this.sdk.eth.requestAccounts()];
                    case 11:
                        address = (_c.sent())[0];
                        return [4 /*yield*/, this.sdk.eth.getChainId()];
                    case 12:
                        currentChainId = _c.sent();
                        if (chainId && currentChainId !== chainId) {
                            throw new Error(types_1.EnumErrors.ChainIdNotMath);
                        }
                        this.address = address;
                        this.chainId = currentChainId;
                        return [2 /*return*/, address];
                }
            });
        });
    };
    return UnstoppableDomains;
}(BaseWallet_1.default));
exports.default = UnstoppableDomains;
