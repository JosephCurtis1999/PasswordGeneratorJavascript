// Assignment Code, this code targets the generate id
var generateBtn = document.querySelector("#generate");

var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericalChar = "0123456789";
var specialChar = "!$%^&*+-";





function generatePassword() {

  var password = "";
  var passwordChar = "";
  var passwordlength = prompt("Choose a password length between 8-128 characters.")
  passwordlength = parseInt(passwordlength);

  if (passwordlength < 8) {
    alert("Password must have more than 7 characters");
    return "";
  }

  

}

// Write password to the #password input, this code targets the password id
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// When a user clicks the generate password button it calls the write password function
generateBtn.addEventListener("click", writePassword);
