"use strict";

let imageHight = +prompt("enter image hight: ");
let imageWidth = +prompt("enter image width: ");
let mesurements;

function isLandscape(mesurements) {
    if (imageWidth > imageHight) {
return true;
    } else{
        return false;
    }
}

let result = isLandscape(mesurements);

if(result){
    console.log("image is Landscape");

} else{
    console.log("image is Portrait");
}