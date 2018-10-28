"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const block_1 = require("./block");
describe("Block", () => {
    let data, lastBlock, block;
    beforeEach(() => {
        data = "bar";
        lastBlock = block_1.default.genesis();
        block = block_1.default.mineBlock(lastBlock, data);
    });
    it("sets `data` to match the input", () => {
        expect(block.data).toEqual(data);
    });
    it("sets the `lastHash` to match the hash of the last block", () => {
        expect(block.lastHash).toEqual(lastBlock.hash);
    });
    it("generates a hash that matches the difficulty", () => {
        expect(block.hash.substring(0, block.difficulty)).toEqual("0".repeat(block.difficulty));
        console.log(block.toString());
    });
    it("lowers the difficulty for slowly mined blocks", () => {
        expect(block_1.default.adjustDifficulty(block, block.timestamp + 360000)).toEqual(block.difficulty - 1);
    });
    it("raises the difficulty for quickly mined blocks", () => {
        expect(block_1.default.adjustDifficulty(block, block.timestamp + 1)).toEqual(block.difficulty + 1);
    });
});
//# sourceMappingURL=block.test.js.map