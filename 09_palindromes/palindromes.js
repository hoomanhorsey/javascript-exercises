const palindromes = function (input) {

const rawString = input.split("");

// clean string of punctuation and spaces
const string = [];  // array to store string stripped of non-alpha + whitespace

for (let i = 0; i < rawString.length; i++){
    if (testAlphaNum(rawString[i])) {
        string.push(rawString[i]);
        }}

// get string length
let stringLen = string.length;
let halfStringLen = Math.floor(stringLen / 2);

for (let i = 0; i < halfStringLen; i++)
    if (string[i].toLowerCase() != string[stringLen-1].toLowerCase()) {   
        return false;
    } else { 
        stringLen -= 1; }
    return true;
};

function testAlphaNum(char) {
    return /^[a-zA-Z0-9]$/.test(char);}

// Do not edit below this line
module.exports = palindromes;
