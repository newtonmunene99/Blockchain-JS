import Block from "./block";
export default class Blockchain {
    chain: any;
    constructor();
    addBlock(data: any): Block;
    isValidChain(chain: any): boolean;
    replaceChain(newChain: any): void;
}
