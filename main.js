// Query and Add Var
const body = document.getElementById("body");

// Create Necessary Element
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");
const result = document.createElement("div");
const scoreBoard = document.createElement("div");

// Add button text content
rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";

// Add children to their parent
body.appendChild(rockButton);
body.appendChild(paperButton);
body.appendChild(scissorsButton);
body.appendChild(result);
body.appendChild(scoreBoard);

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

// Declare The Players Score Variables

let humanScore = 0;
let computerScore = 0;

// Write the logic to play a single round

function playRound(humanChoice, computerChoice) {

  const computerSelection = getComputerChoice();
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerSelection.toLowerCase();

  // Check for the winning conditions
  if (humanChoice === "rock" && computerChoice === "scissors") {
    result.textContent = "You win, Rock beats Scissors";
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    result.textContent = "You win, Paper beats Rock";
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    result.textContent = "You win, Scissors beats Paper";
    humanScore++;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    result.textContent = "You lose, Paper beats Rock";
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    result.textContent = "You lose, Scissors beats Paper";
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    result.textContent = "You lose, Rock beats Scissors";
    computerScore++;
  } else if (humanChoice === computerChoice) {
    result.textContent = "Tie! both chose " + `${humanChoice}`;
  } else {
    result.textContent = "Invalid input"; // Handle invalid inputs
  }

  scoreBoard.textContent = `You : ${humanScore} Computer : ${computerScore}`;
}

// Add event listener
rockButton.addEventListener("click", () => playRound("Rock"));
paperButton.addEventListener("click", () => playRound("Paper"));
scissorsButton.addEventListener("click", () => playRound("Scissors"));