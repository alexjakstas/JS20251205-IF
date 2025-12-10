"use strict";

let n = +prompt("Enter n number: ");
let d = +prompt("Enter d number: ");

function isMultiplyOf(n,d){
    return n % d === 0
}

const number = isMultiplyOf(n,d);

console.log(number);