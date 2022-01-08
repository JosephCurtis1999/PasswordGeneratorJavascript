// Assignment Code, this code targets the generate id
var generateBtn = document.querySelector("#generate");



function generatePassword() {


  prompt('How many characters would you like the password to be?');

  prompt('Should we include lowercase, uppercase, numeric and/or special characters?');







  return "Generated password will go there!";
}

// Write password to the #password input, this code targets the password id
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// When a user clicks the generate password button it calls the write password function
generateBtn.addEventListener("click", writePassword);
