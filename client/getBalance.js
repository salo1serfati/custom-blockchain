
const jayson = require('jayson');
const client = jayson.client.http('http://localhost:3000'); 
const {publicKey} = require('../config')


// invoke "add"
client.request('getBalance', [publicKey], function(err, response) {
    if(err) throw err;
    console.log(response.result); //this is the response
});


