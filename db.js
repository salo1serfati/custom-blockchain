const Blockchain = require('./models/Blockchain'); 
const Block = require('./models/Block');

const db = {
    blockchain: new Blockchain(), 
    utxos: []
}

module.exports = db; 
