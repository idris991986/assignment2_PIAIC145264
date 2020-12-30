var GuessNumber = prompt("Guess the secret number from 1 to 10?");
GuessNumber = Number(GuessNumber);
var SecretNumber = 6;
if(GuessNumber === SecretNumber){
    alert("Bingo! Correct Answer");
}
   else if (GuessNumber === ++SecretNumber){
        alert("Close enough to the correct answer");
    }