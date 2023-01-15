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
  if (number <= 9 || number >= 65) {
    number = prompt("how many characters do you want?(between 10 and 64)");
  }
  // - Are Uppercase letters allowed? (Prompt or Confirm?)
  var upp = confirm("Are Uppercase letters allowed?");
  // - Are Lowercase letters allowed? (Prompt or Confirm?)
  var low = confirm("Are Lowercase letters allowed?");
  // - Are Numeric characters allowed? (Prompt or Confirm?)
  var Numeric = confirm("Are Numeric characters allowed?");
  // - Are special characters allowed? (Prompt or Confirm?)
  var special = confirm("Are special characters allowed?");

  var passwordOptions = {
    length: 1,
    hasSpecialCharacters: true,
    hasNumericCharacters: true,
    hasLowerCasedCharacters: true,
    hasUpperCasedCharacters: true,
  };
  // console.log(passwordOptions.length);
  // console.log(passwordOptions.hasLowerCasedCharacters);
  passwordOptions.length = number;
  passwordOptions.hasLowerCasedCharacters = low;
  passwordOptions.hasNumericCharacters = Numeric;
  passwordOptions.hasSpecialCharacters = special;
  passwordOptions.hasUpperCasedCharacters = upp;

  return passwordOptions;

  //console.log(passwordOptions);

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
  var total = getPasswordOptions();
  var passwordlength = total.length;
  var passwordupp = total.hasUpperCasedCharacters;
  var passwordlow = total.hasLowerCasedCharacters;
  var passwordnum = total.hasNumericCharacters;
  var passwordspe = total.hasSpecialCharacters;
  // console.log(total);
  var randompassword = "";
  var array3 = [...specialCharacters, ...numericCharacters];
  var array4 = [...lowerCasedCharacters, ...upperCasedCharacters];
  var array5 = [...array3, ...array4];
  var upplowarray = upperCasedCharacters.concat(lowerCasedCharacters);
  var uppnumarray = upperCasedCharacters.concat(numericCharacters);
  //console.log(uppnumarray);
  var uppseparray = upperCasedCharacters.concat(specialCharacters);
  var lownumarray = lowerCasedCharacters.concat(numericCharacters);
  var lowspearray = lowerCasedCharacters.concat(specialCharacters);
  var numspearray = numericCharacters.concat(specialCharacters);
  var upplownumarray=upperCasedCharacters.concat(lowerCasedCharacters,numericCharacters);
  var upplowspearray=upperCasedCharacters.concat(lowerCasedCharacters,specialCharacters);
  var uppnumspearry=upperCasedCharacters.concat(numericCharacters,specialCharacters);
  var lownumspearray=lowerCasedCharacters.concat(numericCharacters,specialCharacters);
  // console.log(array5);
  // var a = getRandom(array5);
  // console.log(a);
  // console.log(array5[a]);
  //var passwordlength = getPasswordOptions();
  //console.log(passwordlength);
  if (passwordlength > 9 && passwordlength < 65) {
    // only choose one kind of characters
    if (
      passwordupp == true &&
      passwordlow == false &&
      passwordnum == false &&
      passwordspe == false
    ) {
      for (j = 0; j < passwordlength; j++) {
        var index = getRandom(upperCasedCharacters);
        //var randomNumber = Math.floor(Math.random() * array5.length);
        randompassword += upperCasedCharacters[index];
      }
      return randompassword;
    } else if (
      passwordupp == false &&
      passwordlow == true &&
      passwordnum == false &&
      passwordspe == false
    ) {
      for (j = 0; j < passwordlength; j++) {
        var index = getRandom(lowerCasedCharacters);
        //var randomNumber = Math.floor(Math.random() * array5.length);
        randompassword += lowerCasedCharacters[index];
      }
      return randompassword;
    } else if (
      passwordupp == false &&
      passwordlow == false &&
      passwordnum == true &&
      passwordspe == false
    ) {
      for (j = 0; j < passwordlength; j++) {
        var index = getRandom(numericCharacters);
        //var randomNumber = Math.floor(Math.random() * array5.length);
        randompassword += numericCharacters[index];
      }
      return randompassword;
    } else if (
      passwordupp == false &&
      passwordlow == false &&
      passwordnum == false &&
      passwordspe == true
    ) {
      for (j = 0; j < passwordlength; j++) {
        var index = getRandom(specialCharacters);
        //var randomNumber = Math.floor(Math.random() * array5.length);
        randompassword += specialCharacters[index];
      }
      return randompassword;
    }

    // only choose two kinds of characters
    else if (
      passwordupp == true &&
      passwordlow == true &&
      passwordnum == false &&
      passwordspe == false
    ) {
      for (j = 0; j < passwordlength; j++) {
        var index = getRandom(upplowarray);
        //var randomNumber = Math.floor(Math.random() * array5.length);
        randompassword += upplowarray[index];
      }
      return randompassword;
    } else if (
      passwordupp == true &&
      passwordlow == false &&
      passwordnum == true &&
      passwordspe == false
    ) {
      for (j = 0; j < passwordlength; j++) {
        var index = getRandom(uppnumarray);
        //var randomNumber = Math.floor(Math.random() * array5.length);
        randompassword += uppnumarray[index];
      }
      return randompassword;
    } else if (
      passwordupp == true &&
      passwordlow == false &&
      passwordnum == false &&
      passwordspe == true
    ) {
      for (j = 0; j < passwordlength; j++) {
        var index = getRandom(uppseparray);
        //var randomNumber = Math.floor(Math.random() * array5.length);
        randompassword += uppseparray[index];
      }
      return randompassword;
    } else if (
      passwordupp == false &&
      passwordlow == true &&
      passwordnum == true &&
      passwordspe == false
    ) {
      for (j = 0; j < passwordlength; j++) {
        var index = getRandom(lownumarray);
        //var randomNumber = Math.floor(Math.random() * array5.length);
        randompassword += lownumarray[index];
      }
      return randompassword;
    } else if (
      passwordupp == false &&
      passwordlow == true &&
      passwordnum == false &&
      passwordspe == true
    ) {
      for (j = 0; j < passwordlength; j++) {
        var index = getRandom(lowspearray);
        //var randomNumber = Math.floor(Math.random() * array5.length);
        randompassword += lowspearray[index];
      }
      return randompassword;
    } else if (
      passwordupp == false &&
      passwordlow == false &&
      passwordnum == true &&
      passwordspe == true
    ) {
      for (j = 0; j < passwordlength; j++) {
        var index = getRandom(numspearray);
        //var randomNumber = Math.floor(Math.random() * array5.length);
        randompassword += numspearray[index];
      }
      return randompassword;
    }
    //  choose three kinds of characters
  else if (
    passwordupp == true &&
    passwordlow == true &&
    passwordnum == true &&
    passwordspe == false
  ) {
    for (j = 0; j < passwordlength; j++) {
      var index = getRandom(upplownumarray);
      //var randomNumber = Math.floor(Math.random() * array5.length);
      randompassword += upplownumarray[index];
    }
    return randompassword;
  }
  else if (
    passwordupp == true &&
    passwordlow == true &&
    passwordnum == false &&
    passwordspe == true
  ) {
    for (j = 0; j < passwordlength; j++) {
      var index = getRandom(upplowspearray);
      //var randomNumber = Math.floor(Math.random() * array5.length);
      randompassword += upplowspearray[index];
    }
    return randompassword;
  }
  else if (
    passwordupp == true &&
    passwordlow == false &&
    passwordnum == true &&
    passwordspe == true
  ) {
    for (j = 0; j < passwordlength; j++) {
      var index = getRandom(uppnumspearry);
      //var randomNumber = Math.floor(Math.random() * array5.length);
      randompassword += uppnumspearry[index];
    }
    return randompassword;
  }
  else if (
    passwordupp == true &&
    passwordlow == false &&
    passwordnum == true &&
    passwordspe == true
  ) {
    for (j = 0; j < passwordlength; j++) {
      var index = getRandom(lownumspearray);
      //var randomNumber = Math.floor(Math.random() * array5.length);
      randompassword += lownumspearray[index];
    }
    return randompassword;
  }

    // choose four kinds of characters
    else if (
      passwordupp == true &&
      passwordlow == true &&
      passwordnum == true &&
      passwordspe == true
    ) {
      for (j = 0; j < passwordlength; j++) {
        var index = getRandom(array5);
        //var randomNumber = Math.floor(Math.random() * array5.length);
        randompassword += array5[index];
      }
      return randompassword;
    }

    // all choose are false, let user choose again
    else if (
      passwordupp == false &&
      passwordlow == false &&
      passwordnum == false &&
      passwordspe == false
    ) {
      alert("Plesae select at least one kind of characters");
      return false;
    }
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = "";
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
