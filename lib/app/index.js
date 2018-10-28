"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Blockchain_1 = require("../Blockchain");
const bodyParser = require("body-parser");
const p2p_server_1 = require("./p2p-server");
const HTTP_PORT = process.env.HTTP_PORT || 3001;
const app = express();
const bc = new Blockchain_1.default();
const p2pServer = new p2p_server_1.default(bc);
app.use(bodyParser.json());
app.get("/blocks", (req, res) => {
    res.json(bc.chain);
});
app.post("/mine", (req, res) => {
    const block = bc.addBlock(req.body.data);
    console.log(`New block added: ${block.toString()}`);
    p2pServer.syncChains();
    res.redirect("/blocks");
});
app.listen(HTTP_PORT, () => {
    console.log(`Listening on port ${HTTP_PORT}`);
});
p2pServer.listen();
//# sourceMappingURL=index.js.map