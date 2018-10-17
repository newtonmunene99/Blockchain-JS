const Blockchain = require("./Blockchain/index");

const bc = new Blockchain();

for (let index = 0; index < 10; index++) {
	console.log(bc.addBlock(`foo ${index}`).toString());
}
