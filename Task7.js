var FirstNumber = prompt("Please enter first number?");
var SecondNumber = prompt("Please enter second number?");
var Operation = prompt("Please enter the operation you want to perform?"," + , - , * , / , % ");
FirstNumber = Number(FirstNumber);
SecondNumber = Number(SecondNumber);
if(Operation === "+"){
    alert(FirstNumber+SecondNumber);
}
if(Operation === "-"){
    alert(FirstNumber-SecondNumber);
}
if(Operation === "*"){
    alert(FirstNumber*SecondNumber);
}
if(Operation === "/"){
    alert(FirstNumber/SecondNumber);
}
if(Operation === "%"){
    alert(FirstNumber%SecondNumber);
}