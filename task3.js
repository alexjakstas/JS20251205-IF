"use strict";

let firstNumber = +prompt("Enter first number: ");
let secondNumber = +prompt("Enter second number: ");
let largerNumber;

function compareNumbers(firstNumber, secondNumber) {
    if (firstNumber > secondNumber){
        return firstNumber;
    } else {
        return secondNumber;
    }
    
}

largerNumber = compareNumbers(firstNumber, secondNumber);

console.log("larger number is", largerNumber);

let result = (firstNumber > secondNumber) ? "first number is larger" : "second Number is larger"
console.log(result);