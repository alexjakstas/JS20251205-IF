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

console.log(tipAmount(100, 'good'));
console.log(tipAmount(40, 'fair'));
