"use strict";

const johnArray = [89, 141, 103];
const mikeArray = [116, 94, 123];

function getAvgJohn(johnArray){
    if(johnArray === 0) return 'Empty grades array';
    return johnArray.reduce((a, b) => a + b) / johnArray.length;
}

function getAvgMike(mikeArray){
    if(mikeArray === 0) return 'Empty grades array';
    return mikeArray.reduce((a, b) => a + b) / mikeArray.length;
}

let johnAverageScore = getAvgJohn(johnArray);
let mikeAverageScore = getAvgMike(mikeArray)

console.log(johnAverageScore, mikeAverageScore);

function winsGame(johnAverageScore, mikeAverageScore){
    if (johnAverageScore > mikeAverageScore){
        return "John is Winner";
    } else if (mikeAverageScore > johnAverageScore) {
        return "Mike is Winner";
    
    }else{
        return "Draw"
    }
}
console.log(winsGame(johnAverageScore, mikeAverageScore));

const maryArray = [97, 134, 105];

function getAvgMary(maryArray){
    if(maryArray === 0) return 'Empty grades array';
    return maryArray.reduce((a, b) => a + b) / maryArray.length;
}

let maryAverageScore = getAvgMary(maryArray);

console.log(johnAverageScore, mikeAverageScore, maryAverageScore);

function winsGame2(johnAverageScore, mikeAverageScore, maryAverageScore){
    if (johnAverageScore > mikeAverageScore && johnAverageScore > maryAverageScore){
        return "John is Winner";
    } else if (mikeAverageScore > johnAverageScore && mikeAverageScore > maryAverageScore) {
        return "Mike is Winner";
    } else if (maryAverageScore > johnAverageScore && maryAverageScore > mikeAverageScore){
        return "Mary is Winner"
    }
    else{
        return "Draw"
    }
}

console.log(winsGame2(johnAverageScore, mikeAverageScore, maryAverageScore));