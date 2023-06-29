// Assignment code here
var pwlength = "1234567890"

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  var pwlength = prompt("Please provide disired password length:");

alert("You selected "+ pwlength +" characters.");

if(pwlength >= 8 && pwlength <= 128 ){

confirm (pwlength +" will be your length!!");
} else {

  alert("ALERT! MUST BE BETWEEN 8-128 CHARACTERS!!!");
  
}
alert("please answer the following prompts with 'yes' or'no' to choose your prefered password settings.");

var numType = prompt("would you like numbers?");

var upperType = prompt("would you like upper case letters?");

var lowerType = prompt("would you like lower case letter?");

var specType = prompt("would you like special characters?");
} 











// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

