
const db = require('./db'); 
const config = require('./config'); 
const Block = require('./models/Block');
const UTXO = require('./models/UTXO');
const Transaction = require('./models/Transaction');
const TARGET_DIFFICULTY = BigInt("0x000000" + "F".repeat(58)); 
const BLOCK_REWARD = 10; 
var SHA256 = require('crypto-js/sha256');


let isMining = false; 


function startMining() {
    console.log("Start mining...")
    isMining = true;
    setTimeout(mine, 1);  
}

function stopMining() {
    console.log("Mining Stoped.")
    isMining = false; 
}

function mine() {
    if (!isMining) return; 
    const block = new Block(); 

    //add coinbase transaction 
    const coinbaseUTXO = new UTXO(config.publicKey, BLOCK_REWARD); 
    const coinbaseTransaction = new Transaction([], [coinbaseUTXO])
    block.addTransactions(coinbaseTransaction); 
    
    //add transaction from the mempool 
    while(BigInt('0x' + block.hash()) >= TARGET_DIFFICULTY) {
        block.nonce ++; 
    }
    block.execute();
    //TODO: Add real mining here. Look at your previous projects to see what you did. 
    db.blockchain.addBlock(new Block()); 

    console.log(`Just mined block #${db.blockchain.getHeight()} with a hash of ${block.hash()} at a nonce of ${block.nonce}`)
    setTimeout(mine, 1000); 

}

module.exports = {
    mine, startMining, stopMining
}; 