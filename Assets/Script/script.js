// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialChar = ["@","!","#","$","%","`","^","&","*","*","(",")","_","-","<",">"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var capitalLet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerLet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  var password = parseInt(prompt("How many characters would you like your password to be? (Must be between 8 and 128 charcters"));

  if (!password) {
    alert("Please enter a number!")
  }
  else if (password < 8 || password >128) {
    password = parseInt(prompt("Must Be Between 8 and 128 characters long"));
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
    passwordText = specialChar.concat(numbers, capitalLet, lowerLet);
  }
  else if (specialChar && numbers && capitalLet) {
    passwordText = specialChar.concat(numbers,capitalLet);
  }
  else if (specialChar && numbers && lowerLet) {
    passwordText = specialChar.concat(numbers, lowerLet);
  }
  else if (specialChar && capitalLet && lowerLet) {
    passwordText = specialChar.concat(capitalLet, lowerLet);
  }
  else if (specialChar && numbers) {
    passwordText = specialChar.concat(numbers);
  }
  else if (specialChar && capitalLet) {
    passwordText = specialChar.concat(capitalLet);
  }
  else if (specialChar && lowerLet) {
    passwordText = specialChar.concat(lowerLet);
  }
  else if (capitalLet && numbers) {
    passwordText = capitalLet.concat(numbers);
  }
  else if (capitalLet && lowerLet) {
    passwordText = capitalLet.concat(lowerLet);
  }
  else if (numbers && lowerLet) {
    passwordText = numbers.concat(lowerLet);
  }
  else if (specialChar) {
    passwordText = specialChar;
  }
  else if (numbers) {
    passwordText = numbers;
  }
  else if (capitalLet) {
    passwordText = capitalLet;
  }
  else if (lowerLet) {
    passwordText = lowerLet;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
