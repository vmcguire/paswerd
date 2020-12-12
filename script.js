// Assignment code here

//onclick of the button

//prompt for password criteria

var input = false;

while (input == false){

  var characterCount = window.prompt("How many characters do you want in your password, please select at least 8 and no more than 128 characters.");
  console.log(characterCount);

  while (characterCount < 8 || characterCount > 128) {
    window.alert("You must input no more than 128 or no less than 8 in only numberical format. Thank you!");
    var characterCount = window.prompt("How many characters do you want in your password, please select at least 8 and no more than 128 characters.");
  }
  console.log(characterCount);

var lowerCase = window.confirm("Would you like to include lower case letters?");

console.log(lowerCase);

var upperCase = window.confirm("Would you like to include upper case letters?");

console.log(upperCase);

var numeric = window.confirm("Would you like to include numbers?");

console.log(numeric);

var specialCharacters = window.confirm("Would you like to include specialCharacters?");

console.log(specialCharacters);

if (
  (lowerCase == false) &&
  (upperCase == false) &&
  (numeric == false) &&
  (specialCharacters == false)) {
    window.alert("You did not select one of the four options of lower case, upper case, numeric, or special characters. Please select at least one. Please try again.");
  } else {
    input == true;
    break;
  }
}

console.log("Out of loop");


//password criteria includes
  //length of password
   //AT LEAST 8 characters
   //NOT MORE THAN 128 characters
  
  //choices offered to user of the following options, all, some, or none can be selected
    //choose lowercase
    //choose uppercase
    //numeric
    //special characters
  //validation of choices will be made after each choice, at least one type of selection will occur

  //Once all prompts answered,
    //password is generated
  
  //password displayed either on the page, or as an alert



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
