// Assignment code here

// function to get the length of the password
var getPassLength = function () {
  var passwordLength = window.prompt("Choose the length of your password within the range 8 to 128:");
  passwordLength = parseInt(passwordLength);

  if(passwordLength >= 8 && passwordLength <= 128){
    return passwordLength;
  }
  else {
    window.alert("You did not pick a valid option. Try again.");
    return getPassLength();
  }
};

// Function to determine if user wants lowercase letters
var includeLowerCase = function () {
  var lowerCasePrompt = window.prompt("Include lowercase characters? Enter 1 for TRUE, 2 for FALSE.");
  lowerCasePrompt = parseInt(lowerCasePrompt);
  switch(lowerCasePrompt) {
    case 1:
      return true;
    case 2:
      return false;
    default:
      window.alert("You did not pick a valid option. Try again.");
    return includeLowerCase();
  }
};

// Function to determine if user wants uppercase letters
var includeUpperCase = function () {
  var upperCasePrompt = window.prompt("Include uppercase characters? Enter 1 for TRUE, 2 for FALSE.");
  upperCasePrompt = parseInt(upperCasePrompt);
  switch(upperCasePrompt) {
    case 1:
      return true;
    case 2:
      return false;
    default:
      window.alert("You did not pick a valid option. Try again.");
    return includeUpperCase();
  }
};

// Function to determine if user wants numeric characters
var includeNumber = function () {
  var numberPrompt = window.prompt("Include numeric characters? Enter 1 for TRUE, 2 for FALSE.");
  numberPrompt = parseInt(numberPrompt);
  switch(numberPrompt) {
    case 1:
      return true;
    case 2:
      return false;
    default:
      window.alert("You did not pick a valid option? Try again.");
    return includeNumber();
  }
};

// Function to determine if user wants special characters
var includeSpecialChar = function () {
  var specialCharPrompt = window.prompt("Include special characters? Enter 1 for TRUE, 2 for FALSE.");
  specialCharPrompt = parseInt(specialCharPrompt);
  switch(specialCharPrompt) {
    case 1:
      return true;
    case 2:
      return false;
    default:
      window.alert("You did not pick a valid option. Try again.");
    return includeSpecialChar();
  }
};

var generatePassword = function () {
  var passwordLength = getPassLength();

  while (true) {
    var haveLowerCase = includeLowerCase();
    var haveUpperCase = includeUpperCase();
    var haveNumber = includeNumber();
    var haveSpecialChar = includeSpecialChar();
    if (haveLowerCase === false && haveUpperCase === false && haveNumber === false && haveSpecialChar === false) {
      window.alert("There are no characters to use. Try Again.");
    }
    else {
      break;
    }
  }
};

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
