"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const block_1 = require("./block");
describe("Blockchain", () => {
    let bc, bc2;
    beforeEach(() => {
        bc = new index_1.default();
        bc2 = new index_1.default();
    });
    it("start with the genesis block", () => {
        expect(bc.chain[0]).toEqual(block_1.default.genesis());
    });
    it("adds a new block", () => {
        const data = "foo";
        bc.addBlock(data);
        expect(bc.chain[bc.chain.length - 1].data).toEqual(data);
    });
    it("validates a valid chain", () => {
        bc2.addBlock("foo");
        expect(bc.isValidChain(bc2.chain)).toBe(true);
    });
    it("invalidates a chain with a corrupt genesis block", () => {
        bc2.chain[0].data = "Bad Data";
        expect(bc.isValidChain(bc2.chain)).toBe(false);
    });
    it("invalidates a corrupt chain", () => {
        bc2.addBlock("foo");
        bc2.chain[1].data = "Not Foo";
        expect(bc.isValidChain(bc2.chain)).toBe(false);
    });
    it("replaces the chain with a valid chain", () => {
        bc2.addBlock("goo");
        bc.replaceChain(bc2.chain);
        expect(bc.chain).toEqual(bc2.chain);
    });
    it("does not replace the chain with one of less than or equal to length", () => {
        bc.addBlock("foo");
        bc.replaceChain(bc2.chain);
        expect(bc.chain).not.toEqual(bc2.chain);
    });
});
//# sourceMappingURL=index.test.js.map