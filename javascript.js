let computerPoints = 0;
let playerPoints = 0;

function getComputerChoice() {
  const rnd = Math.floor(3*Math.random());
  return (rnd === 0) ? "rock" : (rnd == 1) ? "paper" : "scissor";
}

function getWinner(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    return 0;
  } else if (playerChoice == "rock" && computerChoice == "scissor" || playerChoice == "scissor" && computerChoice == "paper" || playerChoice == "paper" && computerChoice == "rock") {
    return 1;
  } else {
    return -1;
  }
}

function updateResult(playerPoints, computerPoints) {
  document.querySelector(".player-score").textContent = `Player's Score: ${playerPoints}`;
  document.querySelector(".computer-score").textContent = `Computer's Score: ${computerPoints}`;
}

function playOneRound(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = getWinner(playerChoice, computerChoice);

  if (result === 0) {
    document.querySelector(".result").textContent = `The computer chose ${computerChoice}, so you two had a draw!`;
  } else if (result === 1) {
    ++playerPoints;
    document.querySelector(".result").textContent = `The computer chose ${computerChoice}, so you won!`;
  } else {
    ++computerPoints;
    document.querySelector(".result").textContent = `The computer chose ${computerChoice}, so you lost!`;
  }

  updateResult(playerPoints, computerPoints);

  if (playerPoints >= 3 || computerPoints >= 3) {
    if (playerPoints >= 3) {
      document.querySelector(".result").textContent = `The player won with ${playerPoints} points!`;
    } else {
      document.querySelector(".result").textContent = `The player lost since they only had ${playerPoints} points!`;
    }

    document.querySelector(".rock").removeEventListener("click", playRock);
    document.querySelector(".paper").removeEventListener("click", playPaper);
    document.querySelector(".scissors").removeEventListener("click", playScissors);
  }
}

function playRock() {
  playOneRound("rock");
}

function playPaper() {
  playOneRound("paper");
}

function playScissors() {
  playOneRound("scissors");
}

document.querySelector(".rock").addEventListener("click", playRock);
document.querySelector(".paper").addEventListener("click", playPaper);
document.querySelector(".scissors").addEventListener("click", playScissors);