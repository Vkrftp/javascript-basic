//  conditional statement
let input;
input =  "No";
/*
if(input === 1){
   document.write("carry on......");
}
else if(input === "Y"){
    document.write("carry on......");
}
else if(input === "Yes"){
    document.write("carry on......");
}
else if(input === 0){
    document.write("End......");
}
else if(input === "N"){
    document.write("End......");
}
else if(input === "No"){
    document.write("End......");
}
else{
    document.write("some accures problem.. ");
}
*/
// using switch break method
switch(input){
    case 1:
        document.write("carry on guys......");
    break;
    case "Y":
        document.write("carry on guys......");
    break;
    case "Yes":
        document.write("carry on guys......");
    break;
    case 0:
        document.write("End.....");
    break;
    case "N":
        document.write("End.......");
    break;
    case "No":
        document.write("End.......");
    break;
    default:
        document.write("errer.......");
}

document.write('<br>');

// for loop while loop and do while loop 

// let pointer = 0;
// while(pointer < 10){
//     document.write(" welcome to vk portfolio");
//     document.write('<br>');
//      pointer++;
// }
// document.write('<br>');
let i= 0;
do{
    document.write("hello guys...");
    document.write('<br>');
    i++;
}
while(i<10);
