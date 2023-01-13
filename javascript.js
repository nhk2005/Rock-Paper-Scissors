function getComputerChoice() {
  const rnd = Math.floor(3*Math.random()) + 1;
  return (rnd === 1) ? "ROCK" : (rnd == 2) ? "PAPER" : "SCISSORS";
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    return 0;
  } else if (playerChoice == "ROCK" && computerChoice == "SCISSORS" || playerChoice == "SCISSORS" && computerChoice == "PAPER" || playerChoice == "PAPER" && computerChoice == "ROCK") {
    return 1;
  } else {
    return -1;
  }
}