const db = require('../db'); 

class Transaction {
    constructor(inputs, outputs) {
        this.inputs = inputs;
        this.outputs = outputs;
    }

    execute() {
        //Validate balance is proper
        this.inputs.forEach(inputUtxo => {
            inputUtxo.spent = true; 
        });

        this.outputs.forEach(outputUtxo => {
            db.utxos.push(outputUtxo); 
        });

    }
}

module.exports = Transaction;