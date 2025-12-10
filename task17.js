"use strict";

let player1 = prompt("Choose: paper, scissors, rock: ")
let player2 = prompt("Choose: paper, scissors, rock: ")


function rockPaperScissors(player1, player2){
 if (player1 === player2) {
        return 'draw';
    }
 
    if (
        (player1 === 'rock' && player2 === 'scissors') ||  
        (player1 === 'scissors' && player2 === 'paper') ||  
        (player1 === 'paper' && player2 === 'rock')       
    ) {
        return 'player 1 wins';
    }

     
    else {
        return 'player 2 wins';
    }
}

const winner = rockPaperScissors(player1, player2)

console.log(winner);