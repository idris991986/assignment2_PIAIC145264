var NumberInput = prompt("What is your choice of number?");
NumberInput = Number(NumberInput);
if(NumberInput%2 === 0){
    alert("You have chosen an Even number");
}
else{
    alert("You have chosen an Odd number");
}