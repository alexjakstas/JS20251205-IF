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

console.log(totalAmount(100, 'good'));
console.log(totalAmount(40, 'fair'));