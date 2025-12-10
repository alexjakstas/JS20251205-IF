"use strict";


 function tipAmount(billAmount, serviceLevel) {
    let totalTips = "";
    if (serviceLevel === 'good'){
        return billAmount * 0.2;
    } else if (serviceLevel === 'fair'){
        return billAmount * 0.15;
    } else {
        return billAmount * 0.1;
    }
 
   
}

function totalAmount(billAmount, serviceLevel){
    const tips = tipAmount(billAmount, serviceLevel)
    return billAmount + tips;
}

function splitAmount(billAmount, serviceLevel, persons){
const totalPaid = totalAmount(billAmount, serviceLevel);
return totalPaid / persons;
    
}

console.log(splitAmount(100, 'good', 5));
console.log(splitAmount(40, 'fair', 2));