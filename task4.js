"use strict";

let num1 = +prompt("Enter first number: ");
let num2 = +prompt("Enter second number: ");
let num3 = +prompt("Enter third number: ");
let multiplyOf;

function specifySign(multiplyOf) {
    multiplyOf = num1 * num2 * num3;
    return multiplyOf;
}
const numberSign = specifySign(multiplyOf);

if (numberSign === 0){
    console.log("result is 0")
} else if (numberSign > 0) {
console.log("result is positive")
}else {
    console.log("result is negative")
}