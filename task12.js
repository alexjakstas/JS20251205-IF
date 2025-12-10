"use strict";

let priceChart = [
    {name: 'MacBook Air', price: 999},
    {name: 'MacBook Pro', price: 1299},
    {name: 'Mac Pro', price: 2499},
    {name: 'Apple Sticker', price: 1}
]

function canIGet(item, money) {
const itemDetails = priceChart.find(product =>product.name === item);

   if (!itemDetails) {
        
        return false;
    }
    if (money >= itemDetails.price) {
        return true;
} else {
       
        return false;
    }
}
console.log(canIGet('MacBook Air', 100));