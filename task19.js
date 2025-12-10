"use strict";
let monthNum = +prompt("Enter month number (1-12): ");


function daysInMonthByNumber(monthNum) {
 
  if (!Number.isInteger(monthNum) || monthNum < 1 || monthNum > 12) {
    alert(`Expected a month number from 1-12, received: ${monthNum}`);
    return "Incorrect month number"
}
    if(monthNum === 1 || monthNum === 3 || monthNum === 5 || monthNum === 7 || monthNum === 8 || monthNum === 10 || monthNum === 12){
return "this month has 31 day";
    } else if(monthNum === 4 || monthNum === 6 || monthNum === 9 || monthNum === 11){
return "this month has 30 day";
    } else {
        return "this month has 29 day";
    }
  
}
const thisMonth = daysInMonthByNumber(monthNum);

console.log(thisMonth);