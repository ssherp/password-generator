// Assignment code here
var randomNum = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var randomUpper=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Z","Y","Z"];
var randomSpec=['!','@','#','$','%','^','&','*','-','=','+','"',',',"'"];
var randomLower
var allCharater=[]

// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  //spread oprater//
}

function generatePassword() {

  var pwlength = parseInt(prompt("Please provide disired password length:", "number from 1-128"));

  if (pwlength >= 8 && pwlength <= 128) { 
    
  alert("You selected "+ pwlength +" as your length.");  
  
  }else {
    alert("ALERT! MUST BE BETWEEN 8-128 CHARACTERS!!!");
    return;
  } 
  
  var numType = confirm("would you like numbers?");

  if (numType){

    allCharater=allCharater.concat(randomNum)

  }
  var upperType = confirm("would you like upper case letters?");
  
  if (upperType){

    allCharater=allCharater.concat(randomUpper)

  }
  var lowerType = confirm("would you like lower case letter?");
  if (lowerType){

    allCharater=allCharater.concat(randomLower)

  }
  var specType = confirm("would you like special characters?");

  if (specType){

    allCharater=allCharater.concat(randomSpec)

  }
  pwlength

  for (allCharater

}



// const array = ['1', '2', 'a', 'b', 'A', 'B', '%']
// let password;
// // let randomIndex = 
// password = array[1]
// password = password + array[4]
// password = password + array[0]

// // password









// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

