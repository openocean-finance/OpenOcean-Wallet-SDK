export function autoWalletCheck(check: any, time: number, count?: number) {
  return new Promise<boolean>((resolve) => {
    let i = 0;
    let s = count || 10;
    let id = setInterval(() => {
      if (i++ > s) {
        clearInterval(id);
        resolve(false);
      } else {
        const r = check && check();
        console.log('autoWalletCheck', r);
        if (r) {
          clearInterval(id);
          resolve(true);
        }
      }
    }, time / s);
  });
}

export function sleep (interval: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, interval);
  });
}
