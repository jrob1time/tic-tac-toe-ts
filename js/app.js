"use strict";
// const messageEl = document.getElementById("message")
// const squareEls = document.querySelector<HTMLElement>("#.sqr")!
// const resetBtnEl = document.querySelector<HTMLButtonElement>("#reset")!
// type winningCombos = [[0, 1, 2],[3, 4, 5],[6, 7, 8],
// [0, 3, 6],[1, 4, 7],[2, 5, 8],
// [0, 4, 8],[2, 4, 6]]
// type Turn = "x" | "o" | ""
// type Winner = false
// type Tie = false
// let turn: string, winner: boolean, tie: boolean, board: number[]
// squareEls?.addEventListener('click', handleBtnClick)
// resetBtnEl?.addEventListener('click', handleBtnClick)
// function init() {
//   board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
//   turn = "x"
//   winner = false
//   tie = false
// }
/*-------------------------------- Constants --------------------------------*/
const squareEls = document.querySelectorAll(".sqr");
const messageEl = document.getElementById("message");
const resetBtnEl = document.querySelector(".reset-button");
const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];
/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner, tie;
/*------------------------ Cached Element References ------------------------*/
/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach(square => square.addEventListener("click", handleClick));
if (resetBtnEl)
    resetBtnEl.addEventListener("click", init);
/*-------------------------------- Functions --------------------------------*/
init();
function init() {
    board = [null, null, null, null, null, null, null, null, null];
    turn = 1;
    winner = false;
    tie = false;
    render();
}
function render() {
    updateBoard();
    updateMessage();
}
function updateBoard() {
    board.forEach((square, idx) => {
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
function updateMessage() {
    if (winner === false && tie === false) {
        messageEl.innerText = `It is player ${turn === 1 ? 'X' : 'O'}'s turn`;
    }
    else if (winner === false && tie === true) {
        messageEl.innerText = "It's a tie!";
    }
    else {
        messageEl.innerText = `Player ${turn === 1 ? 'X' : 'O'} Win's!`;
    }
}
function handleClick(evt) {
    const sqrIdx = parseInt(evt.target.id.slice(2));
    if (board[sqrIdx] !== null)
        return;
    if (winner === true)
        return;
    placePiece(sqrIdx);
    checkForTie();
    checkForWinner();
    switchPlayerTurn();
    render();
}
function placePiece(idx) {
    board[idx] = turn;
}
function checkForTie() {
    if (board.includes(null))
        return;
    tie = true;
}
function checkForWinner() {
    winningCombos.forEach((combo) => {
        if (Math.abs(board[combo[0]] + board[combo[1]] + board[combo[2]]) === 3) {
            winner = true;
        }
    });
}
function switchPlayerTurn() {
    if (!winner)
        turn *= -1;
}
