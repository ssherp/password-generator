// Assignment code here
var randomNum = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var randomUpper=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var randomSpec=['!','@','#','$','%','^','&','*','-','=','+','"',',',"'",'(',')','.','/',':',';','<',','>'','[',']','_','`','{','{','}','~'];
var randomLower=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var characterSet=[];

// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
//add prompt for pwlength
  var pwlength = parseInt(prompt("Please provide disired password length:", "number from 8-128"));
//make a if else statement
  if (pwlength >= 8 && pwlength <= 128) { 
   //make a alert with pwlength 
  alert("You selected "+ pwlength +" as your length.");  
  //else alert if number is less then 8 or greater then 128
  }else {
    alert("ALERT! LENGTH MUST BE BETWEEN 8-128 CHARACTERS!!!");
    return;
  } 
  //add number y/n
  var numType = confirm("would you like numbers?");
  //empty arry from last generated password
  var password='';
  
  if (numType){
//moved randomNum to characterSet
    characterSet=characterSet.concat(randomNum)

  }
  var upperType = confirm("would you like upper case letters?");
  
  if (upperType){
//move randomupper to characterSet
    characterSet=characterSet.concat(randomUpper)

  }
  var lowerType = confirm("would you like lower case letter?");
  if (lowerType){

    characterSet=characterSet.concat(randomLower)

  }
  var specType = confirm("would you like special characters?");

  if (specType){

    characterSet=characterSet.concat(randomSpec);

  }
  if (characterSet.length===0) {

    alert("You must select at least one character type!");
    return;
  }
  //Math.floor and random for statement
 for (var i = 0; i < pwlength; i++) {

  var randomIndex = Math.floor(Math.random()*characterSet.length);

  password += characterSet[randomIndex];
  }

return password; 



}
  
generateBtn.addEventListener("click", writePassword);

