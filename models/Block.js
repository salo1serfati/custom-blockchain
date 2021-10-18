
var SHA256 = require('crypto-js/sha256');

class Block {

    constructor() {
        this.data = null; 
        this.timestamp = Date.now(); 
        this.nonce = 0; 
        this.transactions = []; 
    }

    hash() {
        return SHA256(
            this.timestamp + 
            this.nonce + '' + 
            JSON.stringify(this.transactions)
            ).toString();
    }

    addTransactions(transaction) {
        this.transactions.push(transaction); 
    }

    execute() {
        this.transactions.forEach(transaction => transaction.execute())
    }
}

module.exports = Block; 