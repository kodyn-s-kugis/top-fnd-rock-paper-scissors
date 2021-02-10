'use strict';
function computerSelection() {
  let decision = Math.floor(Math.random() * 3) + 1;

  if (decision === 1) return `rock`;
  if (decision === 2) return `paper`;
  if (decision === 3) return `scissors`;
}

function playerSelection() {
  return prompt(`Decide your action: Rock, Paper or Scissors`).toLowerCase();
}

function playRound(player, computer) {
  const tieMsg = `You Tie!`;
  const loseMsg = `You Lose! ${computer} beats ${player}`;
  const winMsg = `You Win! ${player} beats ${computer}`;

  if (!player) return `Select an action`;

  if (computer === player) {
    return tieMsg;
  } else if (computer === `rock` && player === `scissors`) {
    return loseMsg;
  } else if (computer === `paper` && player === `rock`) {
    return loseMsg;
  } else if (computer === `scissors` && player === `paper`) {
    return loseMsg;
  } else {
    return winMsg;
  }
}

for (let i = 1; i <= 5; i++) {
  const computer = computerSelection();
  const player = playerSelection();
  console.log(playRound(player, computer));
}
