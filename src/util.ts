
export function sleep(interval: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, interval);
  });
}


export function isPc() {
  let userAgent = navigator.userAgent, Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
  console.log('userAgent:', userAgent)
  return Agents.some((i) => {
    return userAgent.includes(i)
  })
}
