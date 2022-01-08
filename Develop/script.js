// Assignment Code, this code targets the generate id
var generateBtn = document.querySelector("#generate");
var numbers = [1,2,3,4,5,6,7,8,9,0];
var symbols = ["@", "%", "$", "#"];
var characterCodes = Array.from(Array(26)).map( (_, i) => i + 97);
var lowercaseLetters = characterCodes.map(code => String.fromCharCode(code));
var uppercaseLetters = lowercaseLetters.map(letter => letter.toUpperCase());





function generatePassword(length, hasNumbers, hasSymbols, hasLowecase, hasUppercase) =>{
  var availableCharacters = [
    ...(hasSymbols ? symbols : []),
    ...(hasNumbers ? numbers : []),
    ...(hasUppercase ? uppercaseLetters : []),
    ...(hasLowercase ? lowercaseLetters : []),
  ]


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
