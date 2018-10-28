export default class Block {
    timestamp: any;
    lastHash: any;
    hash: any;
    data: any;
    nonce: any;
    difficulty: number;
    constructor(timestamp: any, lastHash: any, hash: any, data: any, nonce: any, difficulty: number);
    toString(): string;
    static genesis(): Block;
    static mineBlock(lastBlock: any, data: any): Block;
    static hash(timestamp: any, lastHash: any, data: any, nonce: any, difficulty: any): string;
    static blockHash(block: any): string;
    static adjustDifficulty(lastBlock: any, currentTime: any): any;
}
