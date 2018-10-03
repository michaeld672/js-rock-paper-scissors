
var playerSelection = prompt("Please choose rock, paper, or scissors");
console.log(playerSelection.toLowerCase());

var choices = ["rock", "paper", "scissors"];

var computerSelection = choices[Math.floor(Math.random() * choices.length)];
console.log(computerSelection.toLowerCase());

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        return ("Computer Wins!");
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return ("Computer Wins!");
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return ("Computer Wins!");

    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return ("You Win!");
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return ("You Win!");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return ("You Win");
    } else {
        return ("It's a tie!!!");
    }
}

console.log(playRound(playerSelection, computerSelection));

function game(number) {

}

