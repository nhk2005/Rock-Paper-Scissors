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

function game() {
  for (let i = 1; i <= 5; ++i) {
    const computerChoice = getComputerChoice();
    const playerChoice = prompt("Do you want to play Rock, Paper, or Scissors?").toUpperCase();
    
    const result = playRound(playerChoice, computerChoice);

    let computerPoints = 0;
    let playerPoints = 0;
    if (result === 0) {
      console.log("It's a draw!");
    } else if (result === 1) {
      ++playerPoints;
      console.log("You win! " + playerChoice + " beats " + computerChoice);
    } else {
      ++computerPoints;
      console("You lose! " + computerChoice + " beats " + playerChoice);
    }
  }

  if (playerPoints == computerPoints) {
    console.log("There's no winner!");
  } else if (playerPoints > computerPoints) {
    console.log("The player won!");
  } else {
    console.log("The player lost :(");
  }
}

game();