
var playerSelection = prompt("Please choose rock, paper, or scissors");
console.log(playerSelection.toLowerCase());

var choices = ["rock", "paper", "scissors"];

var computerSelection = choices[Math.floor(Math.random() * choices.length)];
console.log(computerSelection.toLowerCase());

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        return alert("Computer Wins!");
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return alert("Computer Wins!");
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return alert("Computer Wins!");

    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return alert("You Win!");
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return alert("You Win!");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return alert("You Win");
    } else {
        return alert("It's a tie!!!");
    }
}

console.log(playRound(playerSelection, computerSelection));

function game(number) {

}

