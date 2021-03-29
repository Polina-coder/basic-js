const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(dir = true) {
    this.directMachine = dir;
  }
  encrypt(message, key) {
    if(typeof message != "string" || typeof key != "string") throw Error;
    let encrypt_str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    message = message.toUpperCase();
    let k_array = key.toUpperCase().split('');
    let message_arr = message.split('');

    let letters = [];
    message_arr.forEach(function(elem){
      if(encrypt_str.includes(elem)) {
        letters.push(elem);
      }
    });

    let keylong = [];
    for(let i = 0, j = 0; i < letters.length; i++, j++) {
      if(j >= k_array.length) j -= k_array.length;
      keylong.push(k_array[j]);
    }

    for(let i = 0; i < letters.length; i++) {
      let num = letters[i].charCodeAt() + keylong[i].charCodeAt() - 130;
      letters[i] = encrypt_str[num % 26];
    }
    
    for(let i = 0, j = 0; i < message_arr.length; i++) {
      if(encrypt_str.includes(message_arr[i])) {
        message_arr[i] = letters[j];
        j++;
      }
    }
    return this.directMachine? message_arr.join('') : message_arr.reverse().join('');
  }    
  decrypt(encryptedMessage, key) {
    if(typeof encryptedMessage != "string" || typeof key != "string") throw Error;
    let decrypt_str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    let k_array = key.toUpperCase().split('');
    let message_arr = encryptedMessage.split('');
    let letters = [];
    message_arr.forEach(function(elem){
      if(decrypt_str.includes(elem)) {
        letters.push(elem);
      }
    });

    let keylong = [];
    for(let i = 0, j = 0; i < letters.length; i++, j++) {
      if(j >= k_array.length) j -= k_array.length;
      keylong.push(k_array[j]);
    }

    for(let i = 0; i < letters.length; i++) {
      let num = letters[i].charCodeAt() - keylong[i].charCodeAt() + 26;
      letters[i] = decrypt_str[num % 26];
    }
    
    for(let i = 0, j = 0; i < message_arr.length; i++) {
      if(decrypt_str.includes(message_arr[i])) {
        message_arr[i] = letters[j];
        j++;
      }
    }
    return this.directMachine? message_arr.join('') : message_arr.reverse().join('');
  } 
  }

module.exports = VigenereCipheringMachine;
