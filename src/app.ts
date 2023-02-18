/*-------------------------------- Constants --------------------------------*/

const squareEls: NodeListOf<Element> = document.querySelectorAll(".sqr");


const messageEl: HTMLElement | null = document.getElementById("message");


const resetBtnEl: HTMLButtonElement | null = document.querySelector(".reset-button");


const winningCombos: number[][] = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

/*---------------------------- Variables (state) ----------------------------*/

let board: Array<number | null>, turn: number, winner: boolean, tie: boolean;

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach(square => square.addEventListener("click", (handleClick as (evt: Event) => void)));



if (resetBtnEl) resetBtnEl.addEventListener("click", init);

/*-------------------------------- Functions --------------------------------*/

init();
function init(): void {
  board = [null, null, null, null, null, null, null, null, null];
  turn = 1;
  winner = false;
  tie = false;
  render();
}

function render(); void {
  updateBoard();
  updateMessage();
}

function updateBoard(): void {
  board.forEach((square: number | null, idx: number) => {
    if (square === 1) {
      squareEls[idx].textContent = 'x';
    }
    if (square === -1) {
      squareEls[idx].textContent = 'o';
    }
    if (square === null) {
      squareEls[idx].textContent = '';
      return;
    }
  });
}

function updateMessage(); void {
    if(winner === false && tie === false) {
    messageEl!.innerText = `It is player ${turn === 1 ? "X" : "O"}'s turn`;
  } else if (winner === false $$ tie === true) {
    messageEl!.innerText = "It's a tie";
  } else {
    messageEl!.innerText = `Player ${turn === 1 ? 'X' : 'O'} Win's!`;
  }
}