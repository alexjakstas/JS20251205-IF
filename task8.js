"use strict";

let a = +prompt("Enter first number: ");
let b = +prompt("Enter second number: ");
let c = +prompt("Enter third number: ");


function isValidTriangle(a, b, c) {
    let trianglePossible = "";

    if (a + b > c && a + c > b &&  b + c > a){
        return trianglePossible = true;
    }
       
     else {
       return trianglePossible = false;
    }
    
}

const isPossible = isValidTriangle(a, b, c);
console.log("valid triangle", isPossible );