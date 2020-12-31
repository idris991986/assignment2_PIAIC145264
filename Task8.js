var InputNumber = prompt("Please enter the number of your choice?");
InputNumber = Number(InputNumber);
if(InputNumber > 0){
    alert("This a positive number!");
}
else if(InputNumber < 0){
    alert("This a negative number!");
}
else if(InputNumber === 0){
    alert("This a zero number!");
}