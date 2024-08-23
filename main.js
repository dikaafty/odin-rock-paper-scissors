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

// Declare The Players Score Variables

let humanScore = 0;
let computerScore = 0;