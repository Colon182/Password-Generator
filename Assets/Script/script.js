// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialChar = ["@", "!", "#", "$", "%", "`", "^", "&", "*", "*", "(", ")", "_", "-", "<", ">"];
var numberArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var capitalLet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerLet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function userPrompts() {
  // variable to grab user input of password length
  var passcode = parseInt(prompt("How many characters would you like your password to be? (Must be between 8 and 128 charcters"));

  if (!passcode) {
    alert("Please enter a number!")
  }
  else if (passcode < 8 || passcode > 128) {
    alert("Must Be Between 8 and 128 characters long");
    return null;
  }
  var specialCharChoice = confirm("Will this include special characters?");
  var numbersChoice = confirm("Will this include numbers?");
  var capitalLetChoice = confirm("Will this include capital letters?");
  var lowerLetChoice = confirm("Will this include lowercase letters?");

  // validate if user has chosen one character type
  if (specialCharChoice === false &&
    numbersChoice === false &&
    capitalLetChoice === false &&
    lowerLetChoice === false) {
    alert("Choose at least one character type!");
    return null;
  }



  // object to store input
  var userInput = {
    length: passcode,
    special: specialCharChoice,
    numbers: numbersChoice,
    capitals: capitalLetChoice,
    lowers: lowerLetChoice
  }
  return userInput;
}

// function to grab user selected character types and randomly select from arrays of the selected characters
function randomizeInputs(index) {
  var ranInd = Math.floor(Math.random() * index.length);
  var ranPass = index[ranInd]
  return ranPass;
}

console.log(randomizeInputs(specialChar));
console.log(randomizeInputs(numberArr));
console.log(randomizeInputs(capitalLet));
console.log(randomizeInputs(lowerLet));

function generatePassword() {
  var input = userPrompts();
  console.log(input)
  // empty array to store password characters
  var pwArray = [];
  // empty array to store characters 
  var charArr = [];

  if (input.special === true) {
    charArr = charArr.concat(specialChar);
    // console.log(charArr);
  } 
  
  if (input.numbers === true) {
    charArr = charArr.concat(numberArr);
    // console.log(charArr);
  }
  
  if (input.capitals === true) {
    charArr = charArr.concat(capitalLet);
    // console.log(charArr);
  }
  if (input.lowers === true) {
    charArr = charArr.concat(lowerLet);
    // console.log(charArr);
  }
  console.log(charArr);
  
  for (var i = 0; i < input.length; i++) {
    var passfinal = randomizeInputs(charArr);
    pwArray.push(passfinal);
  }
  return pwArray.join('');
}



