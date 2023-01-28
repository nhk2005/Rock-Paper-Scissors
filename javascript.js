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
  document.querySelector(".player-score") = `Player's Score: ${playerPoints}`;
  document.querySelector(".computers-score") = `Computer's Score: ${computerPoints}`;
}

function playOneRound(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = getWinner(playerChoice, computerChoice);

  if (result === 0) {
    document.querySelector(".result").textContent = `The computer chose ${rps[computerChoice]}, so you two had a draw!`;
  } else if (result === 1) {
    ++playerPoints;
    document.querySelector(".result").textContent = `The computer chose ${rps[computerChoice]}, so you won!`;
  } else {
    ++computerPoints;
    document.querySelector(".result").textContent = `The computer chose ${rps[computerChoice]}, so you lost!`;
  }

  updateResult(playerPoints, computerPoints)
}

document.querySelector(".rock").addEventListener("click", playOneRound("rock"));
document.querySelector(".paper").addEventListener("click", playOneRound("paper"));
document.querySelector(".scissors").addEventListener("click", playOneRound("scissors"));