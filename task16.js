"use strict";

let number = +prompt("Enter number: ")


function isEven(number){
    if (!Number.isInteger(number)){
        return false;
    }
        return number % 2 ===0;
}


function isOdd(number){
        if (!Number.isInteger(number)){
        return false;
    }
    else{
        return number % 2 !== 0;
    }
}

console.log(number, "ïs even " + isEven(number), "is odd " + isOdd(number));