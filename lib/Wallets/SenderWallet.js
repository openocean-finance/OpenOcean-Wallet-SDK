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
 * @name SenderWallet
 * @author openocean
 * @date 2021/4/21
 * @desc
 */
// @ts-ignore
var sender_svg_1 = __importDefault(require("../assets/sender.svg"));
var types_1 = require("../types");
var BaseWallet_1 = __importDefault(require("./BaseWallet"));
var near_api_js_1 = require("near-api-js");
var transaction_1 = require("near-api-js/lib/transaction");
var utils_1 = require("near-api-js/lib/utils");
var core_1 = require("@near-wallet-selector/core");
var sender_1 = require("@near-wallet-selector/sender");
var SenderWallet = /** @class */ (function (_super) {
    __extends(SenderWallet, _super);
    function SenderWallet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = types_1.EnumWalletName.SenderWallet;
        _this.icon = sender_svg_1.default;
        _this.supportChains = [types_1.EnumChains.NEAR];
        _this.type = types_1.EnumWalletType.Extension;
        _this.sdk = null;
        _this.createTransaction = transaction_1.createTransaction;
        _this.functionCall = transaction_1.functionCall;
        _this.PublicKey = utils_1.PublicKey;
        _this.utils = near_api_js_1.utils;
        return _this;
    }
    /**
     * connect metamask and get wallet address
     * @param chainId specific chainId,throw error when not match
     */
    SenderWallet.prototype.requestConnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sender, selector, wallet, accounts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!window.near || !window.near.isSender) {
                            throw new Error(types_1.EnumErrors.NoSender);
                        }
                        sender = (0, sender_1.setupSender)();
                        return [4 /*yield*/, (0, core_1.setupWalletSelector)({
                                network: "mainnet",
                                debug: true,
                                modules: [sender],
                            })];
                    case 1:
                        selector = _a.sent();
                        return [4 /*yield*/, selector.wallet("sender")];
                    case 2:
                        wallet = _a.sent();
                        return [4 /*yield*/, wallet.signIn({
                                contractId: "a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.factory.bridge.near",
                                accounts: []
                            })];
                    case 3:
                        accounts = _a.sent();
                        this.sdk = wallet;
                        this.address = accounts && accounts[0] && accounts[0].accountId || "";
                        return [2 /*return*/, this.address || ""];
                }
            });
        });
    };
    return SenderWallet;
}(BaseWallet_1.default));
exports.default = SenderWallet;