function getComputerChoice() {
  const rnd = Math.floor(3*Math.random()) + 1;
  return (rnd === 1) ? "ROCK" : (rnd == 2) ? "PAPER" : "SCISSORS";
}