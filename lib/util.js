"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPc = exports.sleep = void 0;
function sleep(interval) {
    return new Promise(function (resolve) {
        setTimeout(resolve, interval);
    });
}
exports.sleep = sleep;
function isPc() {
    var userAgent = navigator.userAgent, Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    console.log('userAgent:', userAgent);
    return Agents.some(function (i) {
        return userAgent.includes(i);
    });
}
exports.isPc = isPc;
