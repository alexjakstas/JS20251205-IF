"use strict";

let number = +prompt("Enter first number: ");
let userNumber = +prompt("Enter second number: ");



function favoriteNumber(number, userNumber) {
     if (userNumber > number){
        return "Too high!"
    } else if (number > userNumber){
        return "Too low!";
    }     
     else {
       return "You got it!";
    }
    
}

console.log(favoriteNumber(number, userNumber));