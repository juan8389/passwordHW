console.log("Hello world!")

// Assignment Code
var generateBtn = document.querySelector("#generate");

var resultEl = document.getElementById('results');
var lowercaseEl = document.getElementById('lowercase');
var uppercaseEl = document.getElementById('uppercase');
var numbersEl = document.getElementById('numbers');
var symbolsEl = document.getElementById('symbols');
var generateEl = document.getElementById('generate');
var lengthEl = document.getElementById('length');

// Write password to the #password input 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var randomFunc = {
    lower: getRandomLower
    upper: getRandomUpper
    number: getRandomNumber
    symbol: getRandomSymbol

}
function myFunction() {
    var text;
    var favDrink = prompt("What's your favorite cocktail drink?", "Daiquiri");

let lower = prompt ("Do you want lowercase on your password"):

if (lower.toLowerCase() == "yes") {
    alert("I will add lowercase")
} 

generateEl.addEventListener('click', () => {
    var length = +lengthEl.value;
    var hasLower = lowercaseEl. checked;
    var hasLower = uppercaseEl. checked;
    var hasLower = numbersEl. checked;
    var hasLower = symbolsEl. checked;

})

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

// console.log(getRandomSymbol());

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);