const buttons = document.querySelectorAll('button');
const result = document.getElementById('gameResult');
const playerPoints = document.getElementById('playerScore');
const cpuPoints = document.getElementById('cpuScore');
let playerSelection;
let computerSelection;
let playerScore = 0;
let cpuScore = 0;


buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playerSelection = button.id;
        computerPlay();
        playRound(playerSelection, computerSelection);
        resetScore(playerScore, cpuScore);

    });
});

function computerPlay(){
    let cpuOptions = ['rock', 'paper', 'scissors'];
    cpuHand = Math.floor(Math.random()*3);
    computerSelection = cpuOptions[cpuHand];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == 'rock' && computerSelection == 'scissors'){
        playerScore++;
        console.log("You Win! Rock beats Scissors.");
        result.textContent = "You Win! Rock beats Scissors.";
        playerPoints.innerText = playerScore;
        cpuPoints.innerText = cpuScore;
    }
    else if (playerSelection =='rock' && computerSelection == 'paper'){
        cpuScore++;
        console.log("You Lose! Paper beats Rock.")
        result.textContent = "You Lose! Paper beats Rock.";
        playerPoints.innerText = playerScore;
        cpuPoints.innerText = cpuScore;
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock'){
        playerScore++;
        console.log ("You Win! Paper beats Rock.")
        result.textContent = "You Win! Paper beats Rock.";
        playerPoints.innerText = playerScore;
        cpuPoints.innerText = cpuScore;
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        cpuScore++;
        console.log("You Lose! Scissors beat Paper.")
        result.textContent = "You Lose! Scissors beat Paper.";
        playerPoints.innerText = playerScore;
        cpuPoints.innerText = cpuScore;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        playerScore++;
        console.log("You Win! Scissors beat Paper.")
        result.textContent = "You Win! Scissors beat Paper.";
        playerPoints.innerText = playerScore;
        cpuPoints.innerText = cpuScore;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        cpuScore++;
        console.log("You Lose! Rock beats Scissors.")
        result.textContent = "You Lose! Rock beats Scissors.";
        playerPoints.innerText = playerScore;
        cpuPoints.innerText = cpuScore;
    }
    else {
        console.log("It's a Tie! Try Again.")
        result.textContent = "It's a Tie! Try Again.";
        playerPoints.innerText = playerScore;
        cpuPoints.innerText = cpuScore;
    }
}

function resetScore(){
    if (playerScore == 5){
        playerScore = 0;
        cpuScore = 0;
        alert ("You win!");
        playerPoints.innerText = playerScore;
        cpuPoints.innerText = cpuScore;
        result.textContent = "Try Again.";

    }

    else if (cpuScore == 5){
        playerScore = 0;
        cpuScore = 0;
        alert("You Lose!");
        playerPoints.innerText = playerScore;
        cpuPoints.innerText = cpuScore;
        result.textContent = "Try Again.";
    }
}


