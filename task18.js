"use strict";

let numericalGrade = +prompt("Enter numerical grade");

function letterGrade(numericalGrade){
    if (numericalGrade < 100 && numericalGrade >= 97){
        return 'A+'

    }else if (numericalGrade < 97 && numericalGrade >= 94){
        return 'A'

    }else if (numericalGrade < 94 && numericalGrade >= 90){
        return 'A-'

    }else if (numericalGrade < 90 && numericalGrade >= 87){
        return 'B+'

    }else if (numericalGrade < 87 && numericalGrade >= 84){
        return 'B'

    }else if (numericalGrade < 84 && numericalGrade >= 80){
        return 'B-'

    }else if (numericalGrade < 80 && numericalGrade >= 77){
        return 'C+'

    }else if (numericalGrade < 77 && numericalGrade >= 74){
        return 'C'

    }else if (numericalGrade < 74 && numericalGrade >= 70){
        return 'C-'

    }else if (numericalGrade < 70 && numericalGrade >= 67){
        return 'D+'

    }else if (numericalGrade < 67 && numericalGrade >= 64){
        return 'D'
    }else if (numericalGrade < 64 && numericalGrade >= 60){
        return 'D-'
    } else{
        return 'F'
    }
}

const gradeLetter = letterGrade(numericalGrade);

console.log(gradeLetter)