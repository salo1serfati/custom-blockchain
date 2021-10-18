const jayson = require('jayson');

const client = jayson.client.http('http://localhost:3000'); 

// invoke "add"
client.request('stopMining', null, function(err, response) {
    if(err) throw err;
    console.log(response.result); //this is the response
});

