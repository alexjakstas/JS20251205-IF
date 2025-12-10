"use strict"; 

function checkLock(A, B, C, D) {
    
    
    const isAValid = (A === 3 || A === 5 || A === 7); 
    
 
    const isBValid = (B === 2);
    
   
    const isCValid = (C >= 5 && C <= 100);
    
 
    const isDValid = (D < 9 || D > 20);

    if (isAValid && isBValid && isCValid && isDValid) {
        return "correct";
    } else {
        return "incorrect";
    }
}


console.log(`Kombinacija (3, 2, 5, 8): ${checkLock(3, 2, 5, 8)}`);   
console.log(`Kombinacija (5, 2, 100, 21): ${checkLock(5, 2, 100, 21)}`); 

console.log(`Kombinacija (1, 2, 50, 5): ${checkLock(1, 2, 50, 5)}`);  
console.log(`Kombinacija (3, 1, 50, 5): ${checkLock(3, 1, 50, 5)}`);   
console.log(`Kombinacija (7, 2, 4, 1): ${checkLock(7, 2, 4, 1)}`);  
console.log(`Kombinacija (7, 2, 50, 9): ${checkLock(7, 2, 50, 9)}`);   