// Assignment code here
const uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const special = [" ","!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
const numbers = ['0','1','2','3','4','5','6','7','8','9'];

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

  // initial password setup
  var password = "";

  // index for at least one of each
  // lowercase index
  var lcIndex = -1;
  // uppercase index
  var ucIndex = -1;
  // numeric index
  var nIndex = -1;
  // special index
  var sIndex = -1;
  
  // Array of available chars to use
  var availChar = [];

  // Checking through each of the promp statements
  // if any are true, set an index to have at least one of that character
  // and add those type of characters to the available character list
  if(haveLowerCase) {
    lcIndex = Math.floor(Math.random()*passwordLength);
    availChar.push.apply(availChar,lowercase);
  }
  if(haveUpperCase) {
    while (ucIndex == lcIndex || ucIndex == -1) {
      ucIndex = Math.floor(Math.random()*passwordLength);
    }
    availChar.push.apply(availChar,uppercase);
  }
  if(haveNumber) {
    while(nIndex == ucIndex || nIndex == lcIndex || nIndex == -1) {
      nIndex = Math.floor(Math.random()*passwordLength);
    }
    availChar.push.apply(availChar,numbers);
  }
  if(haveSpecialChar) {
    while(sIndex == nIndex || sIndex == ucIndex || sIndex == lcIndex || sIndex == -1) {
      sIndex = Math.floor(Math.random()*passwordLength);
    }
    availChar.push.apply(availChar,special);
  }

  for(var i = 0; i < passwordLength; i++) {
    if(i == lcIndex) {
      password += lowercase[Math.floor(Math.random()*lowercase.length)];
    }
    else if (i == ucIndex) {
      password += uppercase[Math.floor(Math.random()*uppercase.length)];
    }
    else if (i == nIndex) {
      password += numbers[Math.floor(Math.random()*numbers.length)];
    }
    else if (i == sIndex) {
      password += special[Math.floor(Math.random()*special.length)];
    }
    else {
      password += availChar[Math.floor(Math.random()*availChar.length)];
    }
  }

  return password;
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
