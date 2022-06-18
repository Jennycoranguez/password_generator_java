// Assignment Code
var generateBtn = document.querySelector("#generate");
//Possible password value
var characters_lowercase= "abcdefghijklmnopqrstuvwxyz"
  var numeric_characters = "123456789"
  var character_upper = "ABCDEFGHIJKLMNOPQRSTUVWXY"
  var specialcharacter = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}"
  
  var password_characters = ""
  var final_password = ""
function generatePassword() {
  var passwordLength = prompt ("how many characters do you want your password to be");
  
  if (passwordLength > 128 || passwordLength < 8 ){
  alert("It needs to between 8 and 128!");
 return; 
 }
  
 
var lowercase = confirm ("do you want to lowercase characters in your password");
 var uppercase = confirm ("do you want to uppercase characters in your password");
 var numeric = confirm ("do you want to numeric characters in your password");
var specialcharacters = confirm ("do you want to specialcharacter in your password");
var randomPasswordArray = Array(passwordLength);


//password_characters = {
   //[numeric_characters + character_upper + specialcharacter];
   var randomfunctions = {
    randomcharacter_upperArray: uppercase,
    randomnumeric_charactersArray: numeric,
    randomcharacters_lowercaseArray: lowercase,
    randomspecialcharactersArray: specialcharacters,

    }

    if (lowercase=== true) { 
      password_characters += character_upper;
     }
  if (uppercase=== true) { 
    password_characters+= characters_lowercase; 
  }
  if (numeric === true) {
    password_characters+= numeric_characters; 
  }
  if (specialcharacters === true) {
    password_characters += specialcharacter; 
     
    } 
    
 //creating loops o choose password characters
    for (var i = 0; i < passwordLength; i++) {
    var random = Math.floor(Math.random() * password_characters.length);
    final_password += password_characters.substring(random, random+ 1);
    return final_password
  }
    
  




}
// Write password to the #password input
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

 

