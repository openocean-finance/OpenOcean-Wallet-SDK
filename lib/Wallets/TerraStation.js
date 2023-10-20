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
 * @name TerraStation
 * @author openocean
 * @date 2021/4/21
 * @desc
 */
// @ts-ignore
var terra_svg_1 = __importDefault(require("../assets/terra.svg"));
var types_1 = require("../types");
var BaseWallet_1 = __importDefault(require("./BaseWallet"));
// @ts-ignore
var terra_js_1 = require("@terra-money/terra.js");
var TerraStation = /** @class */ (function (_super) {
    __extends(TerraStation, _super);
    function TerraStation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = types_1.EnumWalletName.TerraStation;
        _this.icon = terra_svg_1.default;
        _this.supportChains = [types_1.EnumChains.Terra];
        _this.type = types_1.EnumWalletType.Extension;
        _this.sdk = null;
        _this.installUrl = "https://chrome.google.com/webstore/detail/terra-station-wallet/aiifbnbfobpmeekipheeijimdpnlpgpp";
        return _this;
    }
    /**
     * connect metamask and get wallet address
     * @param chainId specific chainId,throw error when not match
     */
    TerraStation.prototype.requestTerraConnect = function () {
        var _this = this;
        return new Promise(function (res) {
            var extension = new terra_js_1.Extension('station');
            _this.sdk = extension;
            extension.on("onConnect", function (data) {
                var address = (data || {}).address;
                _this.address = address;
                _this.chainId = ''; // todo sollet chainId
                res(address);
            });
            extension.connect();
        });
    };
    return TerraStation;
}(BaseWallet_1.default));
exports.default = TerraStation;
