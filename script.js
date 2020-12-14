//onclick of the button prompt for password criteria
var generatePassword = function () {

  var input = false;

  while (input == false){

    //password criteria includes length of password AT LEAST 8 characters NOT MORE THAN 128 characters

    var characterCount = window.prompt("How many characters do you want in your password, please select at least 8 and no more than 128 characters.");

    while (characterCount < 8 || characterCount > 128) {
      window.alert("You must input no more than 128 or no less than 8 in only numberical format. Thank you!");
      var characterCount = window.prompt("How many characters do you want in your password, please select at least 8 and no more than 128 characters.");
    }

    //choices offered to user of the following options, all, some, or none can be selected
        //choose lowercase
        
    var lowerCase = window.confirm("Would you like to include lower case letters?");

        //choose uppercase

    var upperCase = window.confirm("Would you like to include upper case letters?");

        //numeric

    var numeric = window.confirm("Would you like to include numbers?");

        //special characters

    var specialCharacters = window.confirm("Would you like to include special characters?");

    //validation of choices will be made after each choice, at least one type of selection will occur

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

  //generate the password based on character options

  var output = '';
  var lcase = '';
  var ucase = '';
  var num = '';
  var special = '';
  
  //Generate lcase options if lowerCase was selected
  if (lowerCase == true) {
      lcase = 'abcdefghijklmnopqrstuvwxyz';
  }
  //Generate ucase options if upperCase was selected
  if (upperCase == true) {
      ucase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  //Generate num options if numeric was selected
  if (numeric == true) {
    num = '0123456789';
  }
  //Generate special options if specialCharacters was selected
  if (specialCharacters == true) {
    special = '!@#$%^&*()_+=-.,/[]';
  }

  //put options together in one string to randomly pull characters from to ensure 100% randomness in the pull

  var selectedInputsTotal = lcase+ucase+num+special;
  
  // Make the Password Function!!!

  function makePassword(characterCount) {
    var possibleInputs = selectedInputsTotal.length;
    for ( var i = 0; i < characterCount; i++ ) {
        output += selectedInputsTotal.charAt(Math.floor(Math.random() * possibleInputs));
    }
  }

  //"Setting the stage" for validation procedures in case random generator does not pick a character from the selected options

  var lcaseoutput = false;
  var ucaseoutput = false;
  var numoutput = false;
  var specialoutput = false;

  //Continually make PAssword untill all criteria is met based on user input
  while (
    ((lowerCase==true) && (lcaseoutput == false)) || 
    ((upperCase == true) && (ucaseoutput == false)) || 
    ((numeric == true) && (numoutput == false)) || 
    ((specialCharacters == true) && (specialoutput == false))){

    makePassword(characterCount);
  
  //check output for at least 1 character from each of the selected Inputs

    // if 'lowerCase' == true, check each character in 'output' for each character from 'lcase' string until you find one then 
    // stop 'for' loop, if none is found, rerun generate password

        if (lowerCase == true) {
      
      lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
      for(var l = 0; l < lcase.length; l++){
        if ((output.indexOf(lowerCaseArray[l])) > - 1) {
          lcaseoutput = true;
          break;
        }
        if ((l === lcase.length - 1) && (output.indexOf(numericArray[u])) === - 1){
          output = '';
          lcaseoutput = false;
        } 
      }
    }

    // if 'upperCase' == true, check 'output' for each character from 'ucase' string, and 
    // stop 'for' loop once a letter from 'ucase 'is found in 'output'

    if (upperCase == true) {
      
      upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
      for(var u = 0; u < ucase.length; u++){
        if ((output.indexOf(upperCaseArray[u])) > - 1) {
          ucaseoutput = true;
          break;
        }
        if ((u === ucase.length - 1) && (output.indexOf(numericArray[u])) === - 1){
          output = '';
          ucaseoutput = false;
        } 
      }
    }

    // if 'numberic' == true, check 'output' for each character from 'num' string, and 
    // stop 'for' loop once a letter from 'num' is found

    if (numeric == true) {
      
      numericArray = ['0','1','2','3','4','5','6','7','8','9']
      for(var n = 0; n < num.length; n++){
        if ((output.indexOf(numericArray[n])) > - 1) {
          numoutput = true;
          break;
        }
        if ((n === num.length - 1) && (output.indexOf(numericArray[n])) === - 1){
          output = '';
          numoutput = false;
        } 
      }
    }

    // if 'specialCharacters' == true, check 'output' for each character from 'special' string, and 
    // stop 'for' loop once a letter from 'special' is found

    if (specialCharacters == true) {
      specialCharactersArray = ['!','@','#','$','%','^','&','*','(',')','_','+','=','-','.',',','/','[',']']
      for(var s = 0; s < special.length; s++){
        if ((output.indexOf(specialCharactersArray[s])) > - 1) {
          specialoutput = true;
          break;
        }
        if ((s === special.length - 1) && (output.indexOf(numericArray[s])) === - 1){
          output = '';
          specialoutput = false;
        } 
      }
    }
  }
  return output;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button˜
generateBtn.addEventListener("click", writePassword);

