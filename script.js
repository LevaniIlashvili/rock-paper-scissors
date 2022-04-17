'use strict';

const random = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    let randomStr = random[Math.floor(Math.random() * random.length)];
    return randomStr;
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    if(player === 'scissors' && computerSelection === 'Paper') {
        return "You win! Scissors beats Paper";
    } else if(player === 'paper' && computerSelection === 'Rock') {
        return "You win! Paper beats Rock";
    } else if(player === 'rock' && computerSelection === 'Scissors') {
        return "You win! Rock beats Scissors";
    } else if(player === 'scissors' && computerSelection === 'Rock') {
        return "You lose! Rock beats Scissors";
    } else if(player === 'paper' && computerSelection === 'Scissors') {
        return "You lose! Scissors beats Paper";
    } else if(player === 'rock' && computerSelection === 'Paper') {
        return "You lose! Paper beats Rock";
    } else if(player === 'rock' && computerSelection === 'Rock') {
        return "Draw";
    } else if(player === 'paper' && computerSelection === 'Paper') {
        return "Draw";
    } else if(player === 'scissors' && computerSelection === 'Scissors') {
        return "Draw";
    }
}



function game() {
    let playerScore = 0;
    let computerScore = 0;
    const win = /Win/i;
    const lose = /Lose/i;
    const draw = /Draw/i;
    for(let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = prompt('Enter');
        if(win.test(playRound(playerSelection, computerSelection))) {
            playerScore++;
            alert(playRound(playerSelection, computerSelection));
        } else if(lose.test(playRound(playerSelection, computerSelection))) {
            computerScore++;
            alert(playRound(playerSelection, computerSelection));
        } else if(draw.test(playRound(playerSelection, computerSelection))){
            alert(playRound(playerSelection, computerSelection));
            i--;
        } else {
            alert("Wrong input! Enter again");
        }
    }
    return console.log(`Your score: ${playerScore}`), console.log(`Computer's score: ${computerScore}`), console.log(playerScore > computerScore ? 'You win!' : 'You lose!');
}

game();
