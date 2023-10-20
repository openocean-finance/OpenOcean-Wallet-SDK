"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = exports.autoWalletCheck = void 0;
function autoWalletCheck(check, time, count) {
    return new Promise(function (resolve) {
        var i = 0;
        var s = count || 10;
        var id = setInterval(function () {
            if (i++ > s) {
                clearInterval(id);
                resolve(false);
            }
            else {
                var r = check && check();
                console.log('autoWalletCheck', r);
                if (r) {
                    clearInterval(id);
                    resolve(true);
                }
            }
        }, time / s);
    });
}
exports.autoWalletCheck = autoWalletCheck;
function sleep(interval) {
    return new Promise(function (resolve) {
        setTimeout(resolve, interval);
    });
}
exports.sleep = sleep;
