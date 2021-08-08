// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialChar = ["@","!","#","$","%","`","^","&","*","*","(",")","_","-","<",">"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var capitalLet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerLet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var all = specialChar.concat("numbers", "capitalLet", "lowerLet");
var speNumCap = specialChar.concat("numbers", "capitalLet"); 
var speNumLow = specialChar.concat("numbers", "lowerLet");
var speCapLow = specialChar.concat("capitalLet", "lowerLet");
var numCapLow = numbers.concat("capitalLet","lowerLet");
var speNum = specialChar.concat("numbers");
var speCap = specialChar.concat("capitalLet");
var speLow = specialChar.concat("lowerLet");
var numCap = numbers.concat("capitalLet");
var numLow = numbers.concat("lowerLet");
var capLow = capitalLet.concat("lowerLet");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  var passcode = parseInt(prompt("How many characters would you like your password to be? (Must be between 8 and 128 charcters"));

  if (!passcode) {
    alert("Please enter a number!")
  }
  else if (passcode < 8 || passcode >128) {
    alert("Must Be Between 8 and 128 characters long");
    console.log(passcode);
  }
  else {
    specialChar = confirm("Will this include special characters?");
    numbers = confirm("Will this include numbers?");
    capitalLet = confirm("Will this include capital letters?");
    lowerLet = confirm("Will this include lowercase letters?");
  }

  if (!specialChar && !numbers && !capitalLet && !lowerLet) {
    alert("You must select at least one option")
  }
  else if (specialChar && numbers && capitalLet && lowerLet) {
    choices = all;
  }
  else if (specialChar && numbers && capitalLet) {
    choices = speNumCap;
  }
  else if (specialChar && numbers && lowerLet) {
    choices = speNumLow;
  }
  else if (specialChar && capitalLet && lowerLet) {
    choices = speCapLow;
  }
  else if (specialChar && numbers) {
    choices = speNum;
  }
  else if (specialChar && capitalLet) {
    choices = speCap;
  }
  else if (specialChar && lowerLet) {
    choices = speLow;
  }
  else if (capitalLet && numbers) {
    choices = numCap;
  }
  else if (capitalLet && lowerLet) {
    choices = capLow;
  }
  else if (numbers && lowerLet) {
    choices = numLow;
  }
  else if (specialChar) {
    choices = specialChar;
  }
  else if (numbers) {
    choices = numbers;
  }
  else if (capitalLet) {
    choices = capitalLet;
  }
  else if (lowerLet) {
    choices = lowerLet;
  }

  var passOptions = {
    passcode,
    specialChar,
    numbers,
    capitalLet,
    lowerLet,
  };

  return passOptions;
}

function getSpecialChar() {
  return specialChar[Math.floor(Math.random() * specialChar.length)];
}

function getNumbers() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getCapitalLet() {
  return capitalLet[Math.floor(Math.random() * capitalLet.length)];
}

function getLowerLet() {
  return lowerLet[Math.floor(Math.random() * lowerLet.length)];
}


function generatePassword() {
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
