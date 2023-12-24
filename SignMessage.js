/*
Steps to digital signature:
---------------------------
step 1: hash the message
step 2: sign the message using private key
*/


const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require('./hashMessage');

const PRIVATE_KEY = "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";

async function signMessage(msg) {
    //console.log(secp.sign(hashMessage(msg), PRIVATE_KEY,{recovered : true}))
    return secp.sign(hashMessage(msg), PRIVATE_KEY,{recovered : true});
    
}