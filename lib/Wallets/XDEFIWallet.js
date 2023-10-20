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
 * @name XDeFi
 * @author openocean
 * @date 2021/4/21
 * @desc
 */
// @ts-ignore
var xdefi_svg_1 = __importDefault(require("../assets/xdefi.svg"));
var types_1 = require("../types");
var BaseWallet_1 = __importDefault(require("./BaseWallet"));
var web3_1 = __importDefault(require("web3"));
// @ts-ignore
var terra_js_1 = require("@terra-money/terra.js");
var XDEFIWallet = /** @class */ (function (_super) {
    __extends(XDEFIWallet, _super);
    function XDEFIWallet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = types_1.EnumWalletName.XDEFIWallet;
        _this.icon = xdefi_svg_1.default;
        _this.supportChains = [types_1.EnumChains.ETH, types_1.EnumChains.BSC, types_1.EnumChains.Polygon, types_1.EnumChains.Terra];
        _this.type = types_1.EnumWalletType.Extension;
        _this.sdk = null;
        _this.installUrl = "https://chrome.google.com/webstore/detail/trust-wallet/egjidjbpglichdcondbcbdnbeeppgdph";
        return _this;
    }
    /**
     * connect XDeFi and get wallet address
     * @param chainId specific chainId,throw error when not match
     */
    XDEFIWallet.prototype.requestConnect = function (chainId) {
        return __awaiter(this, void 0, void 0, function () {
            var address, currentChainId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(window.xfi && window.xfi.ethereum)) {
                            throw new Error(types_1.EnumErrors.NoXDeFi);
                        }
                        this.sdk = new web3_1.default(window.xfi.ethereum);
                        return [4 /*yield*/, this.sdk.eth.requestAccounts()];
                    case 1:
                        address = (_a.sent())[0];
                        return [4 /*yield*/, this.sdk.eth.getChainId()];
                    case 2:
                        currentChainId = _a.sent();
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
    /**
     * connect XDeFi and get wallet address
     * @param chainId specific chainId,throw error when not match
     */
    XDEFIWallet.prototype.requestTerraConnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (res) {
                        if (!(window.xfi && window.xfi.terra)) {
                            throw new Error(types_1.EnumErrors.NoXDeFi);
                        }
                        var extension = new terra_js_1.Extension('xdefi-wallet');
                        _this.sdk = extension;
                        extension.on("onConnect", function (data) {
                            var address = (data || {}).address;
                            _this.address = address;
                            _this.chainId = ''; // todo sollet chainId
                            res(address);
                        });
                        extension.connect();
                    })];
            });
        });
    };
    return XDEFIWallet;
}(BaseWallet_1.default));
exports.default = XDEFIWallet;