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

    var specialCharacters = window.confirm("Would you like to include specialCharacters?");

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

    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log("A. output after makePassword() i.e. Password: " + output);
    console.log("B. output.length after makePassword(): " + output.length);
    console.log("C. characterCount after makePassword(): " + characterCount);
  
  //check output for at least 1 character from each of the selected Inputs

    // if 'lowerCase' == true, check each character in 'output' for each character from 'lcase' string until you find one then 
    // stop 'for' loop, if none is found, rerun generate password

        if (lowerCase == true) {
      
      lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
      for(var l = 0; l < lcase.length; l++){
        console.log("3l. lowerCaseArray[l]: " + lowerCaseArray[l]);
        console.log("1l. output.indexOf(lowerCaseArray[l]): " + output.indexOf(lowerCaseArray[l]));
        console.log("2l. lcaseoutput: " + lcaseoutput);
        console.log("4l. l: " + l);
        console.log("5l. output: " + output);
        console.log("6l. output.length: " + output.length);
        console.log("7l. characterCount: " + characterCount);
        console.log("8l. output.charAt(output.length -1 ): " + output.charAt(output.length - 1));
        console.log("9l. output.charAt(characterCount -1 ): " + output.charAt(characterCount - 1));
        console.log("10l. selectedInputsTotal.length: " + selectedInputsTotal.length);
        console.log("11l. lcase.length : " + lcase.length);
        if ((output.indexOf(lowerCaseArray[l])) > - 1) {
          lcaseoutput = true;
          console.log('&&&&&&&&&&&&&&&&&&&&&&&&LOWERCASE TRUE&&&&&&&&&&&&&&&&&&&&&&: ' + lcaseoutput);
          break;
        }
        if ((l === lcase.length - 1) && (output.indexOf(numericArray[u])) === - 1){
          console.log("*******************Dl.before makePassword ZERO: " + output);
          output = '';
          console.log("*******************El. after makePassword ZERO: " + output);
          lcaseoutput = false;
          debugger;
          console.log('&&&&&&&&&&&&&&&&&&&&&&&LOWERCASE FALSE&&&&&&&&&&&&&&&&&&&&&: ' + lcaseoutput);
          // makePassword();
        } 
      }
    }

    // if 'upperCase' == true, check 'output' for each character from 'ucase' string, and 
    // stop 'for' loop once a letter from 'ucase 'is found in 'output'

    if (upperCase == true) {
      
      upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
      for(var u = 0; u < ucase.length; u++){
        console.log("3u. upperCaseArray[u]: " + upperCaseArray[u]);
        console.log("1u. output.indexOf(upperCaseArray[j]): " + output.indexOf(upperCaseArray[u]));
        console.log("2u. ucaseoutput: " + ucaseoutput);
        console.log("4u. u: " + u);
        console.log("5u. output: " + output);
        console.log("6u. output.length: " + output.length);
        console.log("7u. characterCount: " + characterCount);
        console.log("8u. output.charAt(output.length -1 ): " + output.charAt(output.length - 1));
        console.log("9u. output.charAt(characterCount -1 ): " + output.charAt(characterCount - 1));
        console.log("10u. selectedInputsTotal.length: " + selectedInputsTotal.length);
        console.log("11u. ucase.length : " + ucase.length);
        if ((output.indexOf(upperCaseArray[u])) > - 1) {
          ucaseoutput = true;
          console.log('&&&&&&&&&&&&&&&&&&&&UPPER CASE TRUE&&&&&&&&&&&&&&&&&&&&&&&&: ' + ucaseoutput);
          break;
        }
        if ((u === ucase.length - 1) && (output.indexOf(numericArray[u])) === - 1){
          console.log("*******************Du.before makePassword ZERO: " + output);
          output = '';
          console.log("*******************Eu. after makePassword ZERO: " + output);
          ucaseoutput = false;
          debugger;
          console.log('&&&&&&&&&&&&&&&&&&&&UPPER CASE FALSE&&&&&&&&&&&&&&&&&&&&&&&: ' + ucaseoutput);
          // makePassword();
        } 
      }
    }

    // if 'numberic' == true, check 'output' for each character from 'num' string, and 
    // stop 'for' loop once a letter from 'num' is found

    if (numeric == true) {
      
      numericArray = ['0','1','2','3','4','5','6','7','8','9']
      for(var n = 0; n < num.length; n++){
        console.log("3n. numericArray[n]: " + numericArray[n]);
        console.log("1n. output.indexOf(numericArray[n]): " + output.indexOf(numericArray[n]));
        console.log("2n. numoutput: " + numoutput);
        console.log("4n. n: " + n);
        console.log("5n. output: " + output);
        console.log("6n. output.length: " + output.length);
        console.log("7n. characterCount: " + characterCount);
        console.log("8n. output.charAt(output.length -1 ): " + output.charAt(output.length - 1));
        console.log("9n. output.charAt(characterCount -1 ): " + output.charAt(characterCount - 1));
        console.log("10n. selectedInputsTotal.length: " + selectedInputsTotal.length);
        console.log("11n. num.length : " + num.length);
        if ((output.indexOf(numericArray[n])) > - 1) {
          numoutput = true;
          console.log('&&&&&&&&&&&&&&&&&&&&&&&&&NUMERIC TRUE&&&&&&&&&&&&&&&&&&&&&&&&&&: ' + numoutput);
          break;
        }
        if ((n === num.length - 1) && (output.indexOf(numericArray[n])) === - 1){
          console.log("*******************Dn.before makePassword ZERO: " + output);
          output = '';
          console.log("*******************En. after makePassword ZERO: " + output);
          numoutput = false;
          debugger;
          console.log('&&&&&&&&&&&&&&&&&&&&&&&&NUMERIC FALSE&&&&&&&&&&&&&&&&&&&&&&&&&&: ' + numoutput);
          // makePassword();
        } 
      }
    }

    // if 'specialCharacters' == true, check 'output' for each character from 'special' string, and 
    // stop 'for' loop once a letter from 'special' is found


    if (specialCharacters == true) {
      specialCharactersArray = ['!','@','#','$','%','^','&','*','(',')','_','+','=','-','.',',','/','[',']']
      for(var s = 0; s < special.length; s++){
        console.log("3s. specialCharactersArray[s]: " + specialCharactersArray[s]);
        console.log("1s. output.indexOf(specialCharactersArray[s]): " + output.indexOf(specialCharactersArray[s]));
        console.log("2s. specialoutput: " + specialoutput);
        console.log("4s. s: " + s);
        console.log("5s. output: " + output);
        console.log("6s. output.length: " + output.length);
        console.log("7s. characterCount: " + characterCount);
        console.log("8s. output.charAt(output.length -1 ): " + output.charAt(output.length - 1));
        console.log("9s. output.charAt(characterCount -1 ): " + output.charAt(characterCount - 1));
        console.log("10s. selectedInputsTotal.length: " + selectedInputsTotal.length);
        console.log("11s. lcase.length : " + special.length);
        if ((output.indexOf(specialCharactersArray[s])) > - 1) {
          specialoutput = true;
          console.log('&&&&&&&&&&&&&&&&&&&&&&&SPECIAL TRUE&&&&&&&&&&&&&&&&&&&&&&&: ' + specialoutput);
          break;
        }
        if ((s === special.length - 1) && (output.indexOf(numericArray[s])) === - 1){
          console.log("*******************Ds.before makePassword ZERO: " + output);
          output = '';
          console.log("*******************Es. after makePassword ZERO: " + output);
          debugger;
          specialoutput = false;
          console.log('&&&&&&&&&&&&&&&&&&&&&SPECIAL FALSE&&&&&&&&&&&&&&&&&&&&&&&&: ' + specialoutput);
          // makePassword();
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

