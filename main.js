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
const popup = document.querySelector(".popup");
const popupCondition = document.querySelector(".condition");
const restartBtn = document.querySelector(".restart-btn");
let currentSound = null;

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

// Logic For Button Click Sound
function playSound(soundFile) {
  if(currentSound) {
    currentSound.pause(); // Stop Current Sound
    currentSound.currentTime = 0; // Reset Playback Position
  }
  currentSound = new Audio(soundFile);
  currentSound.play();
}

// Logic For Open Popup
function openPopup() {
  if(humanScore === 5 || computerScore === 5) {
    popup.classList.add("open-popup");
  }
}

// Logic For Closing Popup
function closePopup() {
  popup.classList.remove("open-popup");
}

// Reset Logic
function reset() {
  humanScore = 0;
  computerScore = 0;
  scoreBoardPlayer.textContent = humanScore;
  scoreBoardCom.textContent = computerScore;
  resultDesc.textContent = "Choose Your Weapon";
  resultBeat.textContent = "Who scores 5 points first win the game!";
  playerSign.setAttribute("class", "fa-solid fa-question");
  comSign.setAttribute("class", "fa-solid fa-question");
  playerSign.setAttribute("style", "color: #ffffff;");
  comSign.setAttribute("style", "color: #ffffff;");
}

// Write the logic to play a single round

function playRound(humanChoice, computerChoice) {

  const computerSelection = getComputerChoice();
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerSelection.toLowerCase();

  // Check for the winning conditions
  if(humanChoice === computerChoice) {
    resultDesc.textContent = "Tie!";
    resultBeat.textContent = `both chose ${capitalizeFirstLetter(humanChoice)}`;
  } else if (
    humanChoice === "water" && computerChoice === "fire" ||
    humanChoice === "earth" && computerChoice === "water" ||
    humanChoice === "fire" && computerChoice === "earth"
  ) {
    resultDesc.textContent = "You won!";
    resultBeat.textContent = `${capitalizeFirstLetter(humanChoice)} beats
     ${capitalizeFirstLetter(computerChoice)}`;
    humanScore++;
  } else if(
    humanChoice === "water" && computerChoice === "earth" ||
    humanChoice === "earth" && computerChoice === "fire" ||
    humanChoice === "fire" && computerChoice === "water"
  ) {
    resultDesc.textContent = "You lost!";
    resultBeat.textContent = `${capitalizeFirstLetter(humanChoice)} is beaten by
     ${capitalizeFirstLetter(computerChoice)}`;
    computerScore++;
  }

  scoreBoardPlayer.textContent = humanScore;
  scoreBoardCom.textContent = computerScore;
  updateChoices(humanChoice, computerChoice);

  // Declare The Winner
  if(humanScore === 5) {
    popupCondition.textContent = "You Won!";
    openPopup();
    playSound("sounds/win.mp3");
  } else if(computerScore === 5) {
    popupCondition.textContent = "You Lost!";
    openPopup();
    playSound("sounds/lose.mp3");
  }
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
waterBtn.addEventListener("click", () => {
  playSound("sounds/water.mp3")
  playRound("Water")
});
earthBtn.addEventListener("click", () => {
  playSound("sounds/earth.mp3")
  playRound("Earth")
});
fireBtn.addEventListener("click", () => {
  playSound("sounds/fire.mp3")
  playRound("Fire")
});
restartBtn.addEventListener("click", () => {
  closePopup();
  reset();
});