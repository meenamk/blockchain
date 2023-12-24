/*
Steps to hash the message:
--------------------------
step 1: convert message to utf8tobytes array
step 2: covert utf8tobytes array to hash
*/

const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

function hashMessage(message) {
    const bytes = utf8ToBytes(message);
    const hash = keccak256(bytes);
    //console.log("Message coverted to hash: " +hash);
    return hash;   
}