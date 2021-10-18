const mine = require('./mine'); 
const db = require('./db'); 
const jayson = require('jayson');
const config = require('./config')

// create a server
const server = new jayson.Server({
  startMining: function(_, callback) {
    mine.startMining();
    callback(null, "We have started mining");
  }, 
  stopMining: function(_, callback) {
    mine.stopMining(); 
    callback(null, "We have stopped mining");
  }, 
  getBalance: function(addressReq, callback) {
    const address = addressReq[0];
    const currentUtxos = db.utxos.filter((utxo) => {
      return utxo.owner === address && !utxo.spent
    }); 
    const balance = currentUtxos.reduce((cumilator,utxo) => utxo.amount + cumilator, 0)
    callback(null, "getBalance: " + balance);
  }
});

console.log("Listening on http://localhost:3000")
server.http().listen(config.PORT);
 

