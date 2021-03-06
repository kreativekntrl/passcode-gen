// Assignment Code
//Initialize variables and create empty var array for user selections
var generateBtn = document.querySelector("#generate");
var length = 0;
var useLower = true;
var useUpper = true;
var useSpecial = true;
var useNumbers = true;

var allLowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var allUppercase = allLowercase.map(allLowercase => allLowercase.toUpperCase());
var allNumbers = [0,1,2,3,4,5,6,7,8,9];
var allSpecial = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-","/",":",";","<",">","=","?","@","[","]","^","`","{","}","|","~"];
var allChars = [];


function generatePassword() {
  var password = "";
  // TODO: add code to generate the password here
  length = prompt("How long would you like your password to be?");
  if (length < 8) {
      alert("Password must contain at least 8 characters");
      return "";
  } else if (length > 128) {
    alert("Password must not contain more than 128 characters");
    return "";
  } 
  //shorten confirm statements with or || and loop
  useLower = confirm("would you like to include lowercase letters in your passcode?");
  if (useLower === true) {
      allChars = allChars.concat(allLowercase);
  }
  useUpper = confirm("Would you like to include uppercase letters in your passcode?");
  if (useUpper === true) {
      allChars = allChars.concat(allUppercase);
    }
    useNumbers = confirm("Would you like to include numbers in your passcode?");
    if (useNumbers === true) {
      allChars = allChars.concat(allNumbers);
    }
    useSpecial = confirm("Would you like to include special characters in your passcode?");
    if (useSpecial === true) {
      allChars = allChars.concat(allSpecial);
    }
    
    if (allChars.length === 0) { 
      alert("You must choose as least one type of character");
      return "";
    } 
    for (let i = 0; i < length; i++) {
      password += allChars[Math.floor(Math.random() * length)];
      console.log(allChars);
    }
  return password;
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Create array from original arrays for the user input for what they accepted to be in the passwordn 

//Let iitial arrays be arrays of all possible chararchters allUppercase, allSpecial, allLowercase
