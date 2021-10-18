
class Blockchain {
    constructor() {
        this.blocks = [];
    }

    addBlock(block) {
        this.blocks.push(block); 
    }

    getHeight(){
       return this.blocks.length; 
    }
}

module.exports = Blockchain; 

