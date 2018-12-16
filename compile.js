const path = require('path');
const fs = require('fs');
const solc = require('solc')

const codePath  = path.resolve (__dirname,'contract','Inbox.sol');  

const source = fs.readFileSync(codePath,'utf8');

// console.log(solc.compile(source,1));
module.exports = solc.compile(source,1).contract[':Inbox'];
