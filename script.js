// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCasePass = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCasePass = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbersPass = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharPass = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "|", "/", ':', "<", ">", ",", ".", "?"];

var userClicked = [];
var workShopPass = [];
var randomPass = [];
var password = [];

function promptUser() {

  var userClicked = prompt("What would the length of your secure password be?(Choose between 8 and 128 Character)");

  if (userClicked >= 8 && userClicked < 129) {
    if (confirm("Do you want to include 'UPPERCASE' characters in your password?") === true) {
      // workShopPass.push(upperCasePass);
      for (var i = 0; i < upperCasePass.length; i++) {
        workShopPass.push(upperCasePass[i])
      }
    }
    if (confirm("Do you want to include 'lowercase' characters in your password?") === true) {
      // workShopPass.push(lowerCasePass);
      for (var i = 0; i < lowerCasePass.length; i++) {
        workShopPass.push(lowerCasePass[i])
      }
    }
    if (confirm("Do you want to include 'numbers (0,1,...,9)' in your password?") == true) {
      // workShopPass.push(numbersPass);
      for (var i = 0; i < numbersPass.length; i++) {
        workShopPass.push(numbersPass[i])
      }
    }
    if (confirm("Do you want to include 'Speci@l ch@r@cters' in your password?") === true) {
      // workShopPass.push(specialCharPass);
      for (var i = 0; i < specialCharPass.length; i++) {
        workShopPass.push(specialCharPass[i])
      }
    }
    console.log(workShopPass);

  } else {
    alert('The password must be between 8 and 128 characters long. Try Again!');
  }
  
  for (var i = 0; i < userClicked; i++) {
    var randomPass = workShopPass[Math.floor(Math.random() * workShopPass.length)];
    password.push(randomPass);
  }

  document.getElementById("password").innerHTML = password.join("");

  console.log(password);
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); //button
  //password is the output
  passwordText.value = password;
  // generatePassword.append(password)
};

// Add event listener to generate button
generateBtn.addEventListener("click", (event) => {
});

