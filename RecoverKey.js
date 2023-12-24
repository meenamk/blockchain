/*
steps to recover public key:
----------------------------

step 1: use the method => recoverPublicKey(hash, signature, recoveryBit)

*/

const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./HashMessage");

async function recoverKey(message, signature, recoveryBit) {
    const hash = hashMessage(message);
    return secp.recoverPublicKey(hash, signature, recoveryBit);

    
}