// Assignment Code, this code targets the generate id
var generateBtn = document.querySelector("#generate");

var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericalChar = "0123456789";
var specialChar = "!$%^&*+-";





function generatePassword() {

  var password = "";
  var passwordChar = "";
  var passwordlength = prompt("Choose a password length between 8-128 characters.");
  passwordlength = parseInt(passwordlength);

  if (passwordlength < 8) {
    alert("Password must have more than 7 characters");
    return "";
  }

  if (passwordlength > 128) {
    alert("Password must not have more than 128 characters");
    return "";
  }

  var lowercaseCharacters = confirm("Add lowercase characters to your password?");

  if (lowercaseCharacters) {
    passwordChar += lowercaseChar;
  }

  var uppercaseCharacters = confirm("Add uppercase characters to your password?");

  if (uppercaseCharacters) {
    passwordChar += uppercaseChar;
  }

  var numericalCharacters = confirm("Add numbers to your password?");

  if (numericalCharacters) {
    passwordChar += numericalChar;

  var specialCharacters = confirm("Add special characters to your password?");
  }

  if (specialCharacters) {
    passwordChar += specialChar;
  }

  for (var i = 0; i < passwordlength; i++) {
    password += passwordChar[Math.floor(Math.random() * passwordChar.length)];
  }

  return password;


}

// Write password to the #password input, this code targets the password id
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// When a user clicks the generate password button it calls the write password function
generateBtn.addEventListener("click", writePassword);
