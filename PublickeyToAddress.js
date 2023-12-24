/*
Steps to generate address
-------------------------

step 1: take the first byte off the public key. 
step 2: the last 20 bytes of the keccak hash

*/
const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
    return keccak256(publicKey.slice(1)).slice(-20);
    
}