/*
This is the example program for proof-of-work
*/

const SHA256 = require('crypto-js/sha256'); //required package
// defining the target difficulty
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
// difiing number transactions can be added into a block
const MAX_TRANSACTIONS = 10;

const mempool = [];//mempool array where transactions are held by miner
const blocks = [];//block array

//this function is to add transaction to mempool
function addTransaction(transaction) {
    mempool.push(transaction);
}

//this function is to mine a block
function mine() {
    //declaring an array for getting/pulling transactions from mempool
    let transactions = [];

    //transactions will be pulled from mempool and deleting transactions from mempool,
    // if the number of transactions is less than Maximum limit
    //and memppol is not empty
    while(transactions.length < MAX_TRANSACTIONS && mempool.length>0){
        transactions.push(mempool.pop())
    }
    // creating block with id, transactions array
    const block = {id:blocks.length,transactions};

    // adding nonce element into block object. nonce starts from 0
    block.nonce = 0;
    let hash;
    //creating hash until find the less than target difficulty by incrementing nonce.
    while(true){
        hash = SHA256(JSON.stringify(block)).toString();
        if (BigInt(`0x${hash}`)<TARGET_DIFFICULTY){
            break;
        } 
        block.nonce++;
    }
    // once we find the correct hash, mined block will be added to blockchain network
    blocks.push({...block, hash});
}