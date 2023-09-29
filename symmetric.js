const crypto= require('crypto'); //importing crypto package
let algorithm = 'aes-256-cbc';  //declaring type of algorithm is used
let key = crypto.randomBytes(32); //generating key
let iv = crypto.randomBytes(16);  //ensure that the same value encrypted multiple times, added security layer

let cipher = crypto.createCipheriv(algorithm, key, iv); //create the cipher with the specified algorithm, key, and iv
let encrypted = cipher.update('hello world', 'utf8', 'hex'); //encrypt the text
encrypted += cipher.final('hex'); //return the cipher text in hexadecimal format
console.log(encrypted); //printing the encrypted text

//cipher text can be decrypted using the same key and algorithm used to encrypt it
let decipher = crypto.createDecipheriv(algorithm, key, iv);//create a decipher object
let decrypted = decipher.update(encrypted, 'hex', 'utf8'); // decrypt the cipher text
decrypted += decipher.final('utf8');  //return the decrypted text.
console.log(decrypted);  // printing decrypted text