// Write the logic to get computer choice


function getComputerChoice() {
  let randomNumber = Math.random();

  if(randomNumber < 1/3) {
    return "Rock";
  } else if (randomNumber < 2/3) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// Write the logic to get human choice

function getHumanChoice() {
  let userInput = prompt("Rock Paper Scissors!").toLowerCase();

  if(userInput === "rock") {
    return "Rock";
  } else if(userInput === "paper") {
    return "Paper";
  } else if(userInput === "scissors") {
    return "Scissors";
  } else {
    return "Invalid Input";
  }
}


// Write the logic to play the entire game

function playGame() {

  // Declare The Players Score Variables

let humanScore = 0;
let computerScore = 0;

// Write the logic to play a single round

function playRound(humanChoice, computerChoice) {

  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  // Check for the winning conditions
  if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win, Rock beats Scissors");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win, Paper beats Rock");
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win, Scissors beats Paper");
    humanScore++;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose, Paper beats Rock");
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose, Scissors beats Paper");
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose, Rock beats Scissors");
    computerScore++;
  } else if (humanChoice === computerChoice) {
    console.log("Tie!");
  } else {
    console.log("Invalid input"); // Handle invalid inputs
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

}