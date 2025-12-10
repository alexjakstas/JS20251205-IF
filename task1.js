"use strict";

let userNumber = +prompt("Enter number: ");


function isPositive(userNumber) {
    

if (userNumber > 0){
    return true;
}
else {
    return false;
}

}

let result = isPositive(userNumber);

if (result){
    console.log("User number is positive");

 } else{
    console.log("user number is negative");
 }
