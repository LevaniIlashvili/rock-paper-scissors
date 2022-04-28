'use strict';

const random = ["rock", "paper", "scissors"];
function computerSelection() {
    let randomStr = random[Math.floor(Math.random() * random.length)];
    return randomStr;
}

const yourScore = document.querySelector(".your-score");
const computerScore = document.querySelector(".computer-score");
const result = document.querySelector(".result");

let yScore = 0;
let cScore = 0;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const reset = document.querySelector(".reset")


rock.addEventListener("click", () => {
    if(yScore === 5 || cScore === 5) {
        return; 
    }
    let comp = computerSelection();
    if(comp === "scissors") {
        yScore++;
        yourScore.textContent = yScore;
        result.textContent = "You win! Rock beats Scissors" 
    } else if(comp === "paper") {
        cScore++;
        computerScore.textContent = cScore;
        result.textContent = "You lose! Paper beats Rock";
    } else {
        result.textContent = "Tie!";
    }

    if(yScore === 5) {
        result.textContent = "Game Over! You win!"
    } else if(cScore === 5) {
        result.textContent = "Game Over! Computer wins!";
    }
} );



paper.addEventListener("click", () => {
    if(yScore === 5 || cScore === 5) {
        return; 
    }
    let comp = computerSelection();
    if(comp === "rock") {
        yScore++;
        yourScore.textContent = yScore;
        result.textContent = "You win! Paper beats Rock" 
    } else if(comp === "scissors") {
        cScore++;
        computerScore.textContent = cScore;
        result.textContent = "You lose! Scissors beats Paper";
    } else {
        result.textContent = "Tie!";
    }

    if(yScore === 5) {
        result.textContent = "Game Over! You win!"
    } else if(cScore === 5) {
        result.textContent = "Game Over! Computer wins!";
    }
} );



scissors.addEventListener("click", () => {
    if(yScore === 5 || cScore === 5) {
        return; 
    }
    let comp = computerSelection();
    if(comp === "paper") {
        yScore++;
        yourScore.textContent = yScore;
        result.textContent = "You win! Scissors beats Paper" 
    } else if(comp === "rock") {
        cScore++;
        computerScore.textContent = cScore;
        result.textContent = "You lose! Rock beats Scissors";
    } else {
        result.textContent = "Tie!";
    }

    if(yScore === 5) {
        result.textContent = "Game Over! You win!"
    } else if(cScore === 5) {
        result.textContent = "Game Over! Computer wins!";
    }
} );


reset.addEventListener("click", () => {
    result.textContent = "";
    yourScore.textContent = "0";
    computerScore.textContent = "0";
    yScore = 0;
    cScore = 0; 
})



