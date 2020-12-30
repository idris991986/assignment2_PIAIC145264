var TotalMarks = prompt("Please enter total marks of three subjects?");
var MarksObtained = prompt("Please enter total marks obtained in three subjects?");
TotalMarks = Number(TotalMarks);
MarksObtained = Number(MarksObtained);
var Percentage = (MarksObtained/TotalMarks)*100;
var Grade;
var Remarks;
if( Percentage >= 80){
    Grade = "A-one"; Remarks = "Excellent";
}
    else if (Percentage >= 70){
        Grade = "A"; Remarks = "Good";
    }
        else if(Percentage >= 60){
            Grade = "B"; Remarks = "You need to Improve";
        }
            else if(Percentage <= 60){
                Grade = "Fail"; Remarks = "Sorry";
            }
         
document.write("<br>"); document.write("<br>");
document.write("Total Marks : "+TotalMarks); document.write("<br>");
document.write("Marks Obtained : "+MarksObtained); document.write("<br>");
document.write("Percentage : "+Percentage+"%"); document.write("<br>");
document.write("Grade : "+Grade); document.write("<br>");
document.write("Remarks : "+Remarks); document.write("<br>");