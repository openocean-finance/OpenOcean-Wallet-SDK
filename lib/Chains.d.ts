interface Chain {
    chainName: string;
    chainId: string | number;
    key: string;
    blockExplorerUrl: string;
    nativeCurrency: any;
    popularToken: [any];
    rpcUrls: [any];
    compiler: string;
}
declare class Chains {
    chainObj: any;
    chainList: Chain[];
    chainIds: String[];
    chainNames: String[];
    chainApproveNames: String[];
    constructor();
    getNativeToken(chainName: string): any;
    getIsNewChain(): string[];
    getChainById(chainId: string): Chain | undefined;
    getChainByName(name: string): any;
    isNativeToken(chainName: string, address: string): boolean;
}
declare const chainsObj: Chains;
export { chainsObj, Chains, Chain };
