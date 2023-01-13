// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {
  // - How many characters would you like in the password? (Prompt or Confirm?)
  var number = prompt("how many characters do you want?(between 10 and 64)");

  // - Are Uppercase letters allowed? (Prompt or Confirm?)
  var upp = confirm("Are Uppercase letters allowed?");
  // - Are Lowercase letters allowed? (Prompt or Confirm?)
  var low = confirm("Are Lowercase letters allowed?");
  // - Are Numeric characters allowed? (Prompt or Confirm?)
  var Numeric = confirm("Are Numeric characters allowed?");
  // - Are special characters allowed? (Prompt or Confirm?)
  var special = confirm("Are special characters allowed?");

  var passwordOptions = {
    length: length,
    hasSpecialCharacters: 1,
    hasNumericCharacters: 1,
    hasLowerCasedCharacters: 1,
    hasUpperCasedCharacters: 1,
  };
  // console.log(passwordOptions.length);
  // console.log(passwordOptions.hasLowerCasedCharacters);

  passwordOptions.length = number;
  passwordOptions.hasLowerCasedCharacters = low;
  passwordOptions.hasNumericCharacters = Numeric;
  passwordOptions.hasSpecialCharacters = special;
  passwordOptions.hasUpperCasedCharacters = upp;

  //return passwordOptions;

  console.log(passwordOptions);

  // Other Requirements:
  // - code should validate for each input:
  //     - Many times users will try to input incorrect input to try and break the app. What if a user inserts
  //       a letter instead of a number when we ask for password length? How can we check to see that the correct
  //       data type (a number) was inserted?
  //   - What can we use to display a message to the user in the browser if they input incorrect content ?
  //  where should this function be called within the file?
}

// Function for getting a random element from an array
function getRandom(arr) {
  // accepts an array as input
  // how can we generate random numbers and use them to grab content from the arrays ?
  //  where should this function be called within the file?
  var number = Math.floor(Math.random() * arr.length);
  return number;
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
