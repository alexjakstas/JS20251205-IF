"use strict";

let userNumber = +prompt("enter 3 digits number: ");


function checkIsArmstrong(number){
    const orignalNumber = number;
    const digitsArray = number.toString().split('');
    const sumOfCubes = digitsArray.map(digit =>{

        const numDigit = parseInt(digit);
        return Math.pow(numDigit, 3);

    })
    .reduce((sum, currentCube) => sum + currentCube, 0);
    return sumOfCubes === orignalNumber;
}
const isArmstrong = checkIsArmstrong(userNumber);

if (isArmstrong) {
    console.log("It's Amstrong number.");
} else {
    console.log("it is not Amstrong number");
}