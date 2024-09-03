// Query and Add Var
const waterBtn = document.querySelector(".water-btn");
const earthBtn = document.querySelector(".earth-btn");
const fireBtn = document.querySelector(".fire-btn");
const resultDesc = document.querySelector(".choose-weapon");
const resultBeat = document.querySelector(".beat");

// Add children to their parent
body.appendChild(result);
body.appendChild(scoreBoard);

// Write the logic to get computer choice

function getComputerChoice() {
  let randomNumber = Math.random();

  if(randomNumber < 1/3) {
    return "Water";
  } else if (randomNumber < 2/3) {
    return "Earth";
  } else {
    return "Fire";
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
  if (humanChoice === "water" && computerChoice === "fire") {
    result.textContent = "You win, Water beats Fire";
    humanScore++;
  } else if (humanChoice === "earth" && computerChoice === "water") {
    result.textContent = "You win, Earth beats Water";
    humanScore++;
  } else if (humanChoice === "fire" && computerChoice === "earth") {
    result.textContent = "You win, Fire beats Earth";
    humanScore++;
  } else if (humanChoice === "water" && computerChoice === "earth") {
    result.textContent = "You lose, Water is beaten by Earth";
    computerScore++;
  } else if (humanChoice === "earth" && computerChoice === "fire") {
    result.textContent = "You lose, Earth is beaten by Fire";
    computerScore++;
  } else if (humanChoice === "fire" && computerChoice === "water") {
    result.textContent = "You lose, Fire is beaten by Water";
    computerScore++;
  } else if (humanChoice === computerChoice) {
    result.textContent = "Tie! both chose " + `${humanChoice}`;
  } else {
    result.textContent = "Invalid input"; // Handle invalid inputs
  }

  scoreBoard.textContent = `You : ${humanScore} Computer : ${computerScore}`;
}

// Add event listener
waterBtn.addEventListener("click", () => playRound("Water"));
earthBtn.addEventListener("click", () => playRound("Earth"));
fireBtn.addEventListener("click", () => playRound("Fire"));