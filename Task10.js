var Password = "LearningJS@Piaic";
var UserPassword = prompt("Please enter your password?");
if (UserPassword ===  ""){
    alert("Please enter your password");
}
else if ( UserPassword === Password){
    alert("Correct! The password you have entered matches the original password");
    }
    else{
        alert("Incorrect Password");
    }