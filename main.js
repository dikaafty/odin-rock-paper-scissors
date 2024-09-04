// Query and Add Var
const waterBtn = document.querySelector(".water-btn");
const earthBtn = document.querySelector(".earth-btn");
const fireBtn = document.querySelector(".fire-btn");
const resultDesc = document.querySelector(".choose-weapon");
const resultBeat = document.querySelector(".beat");
const scoreBoardPlayer = document.querySelector(".player-score");
const scoreBoardCom = document.querySelector(".com-score");
const playerSign = document.getElementById("player-sign");
const comSign = document.getElementById("com-sign");

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

// For Capitalize First Letter
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// Write the logic to play a single round

function playRound(humanChoice, computerChoice) {

  const computerSelection = getComputerChoice();
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerSelection.toLowerCase();

  // Check for the winning conditions
  if (humanChoice === "water" && computerChoice === "fire") {
    resultDesc.textContent = "You won!";
    resultBeat.textContent = `${capitalizeFirstLetter(humanChoice)} beats
     ${capitalizeFirstLetter(computerChoice)}`;
    humanScore++;
  } else if (humanChoice === "earth" && computerChoice === "water") {
    resultDesc.textContent = "You won!";
    resultBeat.textContent = `${capitalizeFirstLetter(humanChoice)} beats 
    ${capitalizeFirstLetter(computerChoice)}`;
    humanScore++;
  } else if (humanChoice === "fire" && computerChoice === "earth") {
    resultDesc.textContent = "You won!";
    resultBeat.textContent = `${capitalizeFirstLetter(humanChoice)} beats 
    ${capitalizeFirstLetter(computerChoice)}`;
    humanScore++;
  } else if (humanChoice === "water" && computerChoice === "earth") {
    resultDesc.textContent = "You lost!";
    resultBeat.textContent = `${capitalizeFirstLetter(humanChoice)} is beaten by
     ${capitalizeFirstLetter(computerChoice)}`;
    computerScore++;
  } else if (humanChoice === "earth" && computerChoice === "fire") {
    resultDesc.textContent = "You lost!";
    resultBeat.textContent = `${capitalizeFirstLetter(humanChoice)} is beaten by
     ${capitalizeFirstLetter(computerChoice)}`;
    computerScore++;
  } else if (humanChoice === "fire" && computerChoice === "water") {
    resultDesc.textContent = "You lost!";
    resultBeat.textContent = `${capitalizeFirstLetter(humanChoice)} is beaten by
     ${capitalizeFirstLetter(computerChoice)}`;
    computerScore++;
  } else if (humanChoice === computerChoice) {
    resultDesc.textContent = "Tie!";
    resultBeat.textContent = `both chose ${capitalizeFirstLetter(humanChoice)}`;
  } else {
    result.textContent = "Invalid input"; // Handle invalid inputs
  }

  scoreBoardPlayer.textContent = humanScore;
  scoreBoardCom.textContent = computerScore;
  updateChoices(humanChoice, computerChoice);
}

// Add Update Image Choices
function updateChoices(humanChoice, computerChoice) {
  switch(humanChoice) {
    case "water":
      playerSign.setAttribute("class", "fa-solid fa-droplet")
      playerSign.setAttribute("style", "color: aqua;");
      break
    case "earth":
      playerSign.setAttribute("class", "fa-solid fa-earth-europe")
      playerSign.setAttribute("style", "color: rgb(0, 255, 0);")
      break
    case "fire":
      playerSign.setAttribute("class", "fa-solid fa-fire")
      playerSign.setAttribute("style", "color: red;")
      break
  }

  switch(computerChoice) {
    case "water":
      comSign.setAttribute("class", "fa-solid fa-droplet")
      comSign.setAttribute("style", "color: aqua;");
      break
    case "earth":
      comSign.setAttribute("class", "fa-solid fa-earth-europe")
      comSign.setAttribute("style", "color: rgb(0, 255, 0);")
      break
    case "fire":
      comSign.setAttribute("class", "fa-solid fa-fire")
      comSign.setAttribute("style", "color: red;")
      break
  }
}

// Add event listener
waterBtn.addEventListener("click", () => playRound("Water"));
earthBtn.addEventListener("click", () => playRound("Earth"));
fireBtn.addEventListener("click", () => playRound("Fire"));