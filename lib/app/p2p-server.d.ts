export default class P2pServer {
    blockchain: any;
    sockets: any;
    constructor(blockchain: any);
    listen(): void;
    connectToPeers(): void;
    connectSocket(socket: any): void;
    messageHandler(socket: any): void;
    sendChain(socket: any): void;
    syncChains(): void;
}
