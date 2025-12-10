"use strict";

let a = +prompt("Enter first number: ");
let b = +prompt("Enter second number: ");
let c = +prompt("Enter third number: ");


function sortNumbers(a, b, c) {
    let resultString = "";

    if (a >= b && a >= c){
        if(a >= b){
            resultString = `${a}, ${b}, ${c}`;
        } else{
            resultString = `${a}, ${c}, ${b}`;
        }
       
    } else if (b >= a && b >= c){
        if (b >= a) {
            resultString = `${b}, ${a}, ${c}`;
        } else {
            resultString = `${b}, ${c}, ${a}`;
        }
    } else {
        if (c >= b){
            resultString = `${c}, ${a}, ${b}`;
        } else {
            resultString = `${c}, ${b}, ${a}`;
        }
    }
    return resultString;
}

const sorted = sortNumbers(a, b, c);
alert(`Sorted by descending ${sorted}`);