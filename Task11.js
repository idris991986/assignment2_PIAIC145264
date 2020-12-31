var Time = prompt("Please enter the time in 0000 hours format?","For example 1900 hours = 7 p.m");
if((Time >= "0000") && (Time < "1200")){
    alert("Good Morning!");
}
else if ((Time >= "1200") && (Time < "1700")){
    alert("Good Afternoon!");
}
else if ((Time >= "1700") && (Time < "2100")){
    alert("Good Evening!");
}
else if ((Time >= "2100") && (Time <= "2359")){
    alert("Good Night!");
}