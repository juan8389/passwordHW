// Assignment Code
var generateBtn = document.querySelector("#generate");

var greeting = alert("Hello and welcome to creating your secured password");

var uppercaseEl = prompt("Would you like uppercase in your password?");
    if (uppercaseEl=='yes'){
        alert("Great I will add uppercase to your password");
    }
    if (uppercaseEl=='no'){
        alert("I will not add uppercase to your password");
    }
    console.log(uppercaseEl.toString());  

var lowercaseEl = prompt("Would you like lowercase in your password?");
    if (lowercaseEl=='yes'){
        alert("Great I will add lowercase to your password");
    }
    if (lowercaseEl=='no'){
        alert("I will not add lowercase to your password");
    }
    console.log(lowercaseEl.toString());  

var symbolsEl = prompt("Would you like symbols in your password?");
    if (symbolsEl=='yes'){
        alert("Great I will add symbols to your password");
    }
    if (symbolsEl=='no'){
        alert("I will not add symbols to your password");
    }
    console.log(symbolsEl.toString());  

var numbersEl = prompt("Would you like numbers in your password?");
    if (numbersEl=='yes'){
        alert("Great I will add numbers to your password");
    }
    if (numbersEl=='no'){
        alert("I will not add numbers to your password");
    }
    console.log(numbersEl.toString());  

var lengthEl = prompt("How long do you want your password from 8-128 characters?",0);
    if (lengthEl.between > 8 && lengthEl < 128);
    while (lengthEl.between > 128 && lengthEl < ~8)
        
var passwordLength = lengthEl;

    console.log(lengthEl.toString());  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() *26) + 97);
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() *26) + 65);
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() *26) + 48);
}

function getRandomSymbol(){
    var symbols = '!#$%&()*+,-./:;<=>?@[\]^_`{|}~';
    return symbols[Math.floor(Math.random() * symbols.length)];
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
