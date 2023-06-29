// Assignment code here


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
} 











// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

