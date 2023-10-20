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
var sollet_svg_1 = __importDefault(require("../assets/sollet.svg"));
var types_1 = require("../types");
var BaseWallet_1 = __importDefault(require("./BaseWallet"));
// @ts-ignore
var sol_wallet_adapter_1 = __importDefault(require("@project-serum/sol-wallet-adapter"));
var SolletIo = /** @class */ (function (_super) {
    __extends(SolletIo, _super);
    function SolletIo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = types_1.EnumWalletName.SolletIo;
        _this.icon = sollet_svg_1.default;
        _this.supportChains = [types_1.EnumChains.Solana];
        _this.type = types_1.EnumWalletType.Web;
        _this.sdk = null;
        return _this;
    }
    /**
     * connect metamask and get wallet address
     * @param chainId specific chainId,throw error when not match
     */
    SolletIo.prototype.requestSolanaConnect = function (chainId) {
        var _this = this;
        return new Promise(function (res) {
            var wallet = new sol_wallet_adapter_1.default('https://solflare.com/');
            _this.sdk = wallet;
            wallet.on('connect', function (publicKey) {
                var address = publicKey.toBase58();
                _this.address = address;
                _this.chainId = ''; // todo sollet chainId
                res(address);
            });
            wallet.connect();
        });
    };
    return SolletIo;
}(BaseWallet_1.default));
exports.default = SolletIo;
