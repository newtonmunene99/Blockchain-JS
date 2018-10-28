"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const block_1 = require("./block");
class Blockchain {
    constructor() {
        this.chain = [block_1.default.genesis()];
    }
    addBlock(data) {
        const block = block_1.default.mineBlock(this.chain[this.chain.length - 1], data);
        this.chain.push(block);
        return block;
    }
    isValidChain(chain) {
        if (JSON.stringify(chain[0]) !== JSON.stringify(block_1.default.genesis())) {
            return false;
        }
        for (let index = 1; index < chain.length; index++) {
            const block = chain[index];
            const lastBlock = chain[index - 1];
            if (block.lastHash !== lastBlock.hash ||
                block.hash !== block_1.default.blockHash(block)) {
                return false;
            }
        }
        return true;
    }
    replaceChain(newChain) {
        if (newChain.length <= this.chain.length) {
            console.log("Recieved chain is not longer than the current chain");
            return;
        }
        else if (!this.isValidChain(newChain)) {
            console.log("The recieved chain is not valid.");
            return;
        }
        console.log("Replacing Blockchain with the new chain.");
        this.chain = newChain;
    }
}
exports.default = Blockchain;
//# sourceMappingURL=index.js.map