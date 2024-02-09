/*Variaveis*/
const $buttonStonePlayer1 = document.querySelector(".button-move-stone-1");
const $buttonPaperPlayer1 = document.querySelector(".button-move-paper-1");
const $buttonScissorPlayer1 = document.querySelector(".button-move-scissors-1");

const $buttonStonePlayer2 = document.querySelector(".button-move-stone-2");
const $buttonPaperPlayer2 = document.querySelector(".button-move-paper-2");
const $buttonScissorPlayer2 = document.querySelector(".button-move-scissors-2");

const $moveBox1 = document.querySelector("#move-box-1");
const $moveBox2 = document.querySelector("#move-box-2");

const $scorePlayer1 = document.querySelector("#score-1");
const $scorePlayer2 = document.querySelector("#score-2");

const $winnerTitle = document.querySelector(".winner-title");

const $buttonReset = document.querySelector("#reset-button");

const $buttonStart = document.querySelector("#start-button");

let movePlayer1 = "";
let movePlayer2 = "";
let winner = 0;
let player1Score = 0;
let player2Score = 0;
let gameStart = false;

/*Funcoes*/

function setWinner() {
  if (movePlayer1 == "" || movePlayer2 == "") {
    return;
  }

  if (movePlayer1 == "stone" && movePlayer2 == "paper") {
    winner = 2;
  } else if (movePlayer1 == "stone" && movePlayer2 == "scissor") {
    winner = 1;
  } else if (movePlayer1 == "paper" && movePlayer2 == "stone") {
    winner = 1;
  } else if (movePlayer1 == "paper" && movePlayer2 == "scissor") {
    winner = 2;
  } else if (movePlayer1 == "scissor" && movePlayer2 == "paper") {
    winner = 1;
  } else if (movePlayer1 == "scissor" && movePlayer2 == "stone") {
    winner = 2;
  } else if (movePlayer1 == movePlayer2) {
    winner = 3;
  }
}

function addWinnerScore() {
  if (winner == 1) {
    player1Score = player1Score + 1;
  } else if (winner == 2) {
    player2Score = player2Score + 1;
  }
}

function printWinnerScore() {
  $scorePlayer1.innerHTML = player1Score.toString().padStart(2, "0");
  $scorePlayer2.innerHTML = player2Score.toString().padStart(2, "0");
}

function printWinnerName() {
  if (winner == 1) {
    $winnerTitle.innerHTML = "Jogador 1 venceu";
  }
  if (winner == 2) {
    $winnerTitle.innerHTML = "Jogador 2 venceu";
  }
  if (winner == 3) {
    $winnerTitle.innerHTML = "Empatou";
  }
  if (winner == 0) {
    $winnerTitle.innerHTML = "Jogando";
  }
}

function resetBattlefield() {
  $moveBox1.innerHTML = "";
  $moveBox2.innerHTML = "";
}

function resetMoveVariables() {
  movePlayer1 = "";
  movePlayer2 = "";
}

function resetGame() {
  resetMoveVariables();
  resetBattlefield();
  resetScore();
  printWinnerScore();
  printWinnerName();
}

function resetScore() {
  player1Score = 0;
  player2Score = 0;
}

function handleStone1Move() {
  if (gameStart == false) return;
  $moveBox1.innerHTML =
    '<img src="images/stone.png" alt="imagem pedra" title="imagem pedra">';
  movePlayer1 = "stone";
  setWinner();
  addWinnerScore();
  printWinnerScore();
  printWinnerName();
  if (winner != 0) {
    setTimeout(resetBattlefield, 1300);
    resetMoveVariables();
    winner = 0;
  }
}

function handlePaper1Move() {
  if (gameStart == false) return;
  $moveBox1.innerHTML =
    '<img src="images/paper.png" alt="imagem papel" title="imagem papel">';
  movePlayer1 = "paper";
  setWinner();
  addWinnerScore();
  printWinnerScore();
  printWinnerName();
  if (winner != 0) {
    setTimeout(resetBattlefield, 1300);
    resetMoveVariables();
    winner = 0;
  }
}

function handleScissors1Move() {
  if (gameStart == false) return;
  $moveBox1.innerHTML =
    '<img src="images/scissors.png" alt="imagem tesoura" title="imagem tesoura">';
  movePlayer1 = "scissor";
  setWinner();
  addWinnerScore();
  printWinnerScore();
  printWinnerName();
  if (winner != 0) {
    setTimeout(resetBattlefield, 1300);
    resetMoveVariables();
    winner = 0;
  }
}

function handleStone2Move() {
  if (gameStart == false) return;
  $moveBox2.innerHTML =
    '<img src="images/stone.png" alt="imagem pedra" title="imagem pedra">';
  movePlayer2 = "stone";
  setWinner();
  addWinnerScore();
  printWinnerScore();
  printWinnerName();
  if (winner != 0) {
    setTimeout(resetBattlefield, 1300);
    resetMoveVariables();
    winner = 0;
  }
}

function handlePaper2Move() {
  if (gameStart == false) return;
  $moveBox2.innerHTML =
    '<img src="images/paper.png" alt="imagem papel" title="imagem papel">';
  movePlayer2 = "paper";
  setWinner();
  addWinnerScore();
  printWinnerScore();
  printWinnerName();
  if (winner != 0) {
    setTimeout(resetBattlefield, 1300);
    resetMoveVariables();
    winner = 0;
  }
}

function handleScissors2Move() {
  if (gameStart == false) return;
  $moveBox2.innerHTML =
    '<img src="images/scissors.png" alt="imagem tesoura" title="imagem tesoura">';
  movePlayer2 = "scissor";
  setWinner();
  addWinnerScore();
  printWinnerScore();
  printWinnerName();
  if (winner != 0) {
    setTimeout(resetBattlefield, 1300);
    resetMoveVariables();
    winner = 0;
  }
}

function handleToggleGame() {
  if (gameStart == true) {
    gameStart = false;
    $buttonStart.textContent = "Iniciar";
    $buttonStart.classList.remove('started')
  } else {
    gameStart = true;
    $buttonStart.classList.add('started')
    $buttonStart.textContent = "Parar";
  }
}

/*Eventos*/

$buttonStonePlayer1.addEventListener("click", handleStone1Move);
$buttonPaperPlayer1.addEventListener("click", handlePaper1Move);
$buttonScissorPlayer1.addEventListener("click", handleScissors1Move);

$buttonStonePlayer2.addEventListener("click", handleStone2Move);
$buttonPaperPlayer2.addEventListener("click", handlePaper2Move);
$buttonScissorPlayer2.addEventListener("click", handleScissors2Move);

$buttonReset.addEventListener("click", resetGame);
$buttonStart.addEventListener("click", handleToggleGame);
