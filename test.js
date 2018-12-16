const assert = require('assert');
const ganache = require ('ganache-cli');
const Web3 = require ('web3');
const web3 = new Web3 (ganache.provider());
const { interface, bytecode } = require('../compile');

let account
let inbox

beforeEach(async ()=>{
 account = await web3.eth.getAccounts ();

  // use one of the above mentioned account to deploy the contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({ data: bytecode, arguments: ['HI There :D']})
  .send({ from: account[0], gas: '1000000'})
})

describe('Inbox',()=> {
  it('Deploy a contract', ()=> {
    // console.log(account);
    console.log(inbox);
  })
})
