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

var generatePassword = function () {
  var passwordLength = getPassLength();
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
