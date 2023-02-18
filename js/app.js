"use strict";
const messageEl = document.getElementById("message");
const squareEls = document.querySelector("#.sqr");
const resetBtnEl = document.querySelector("#reset");
let turn, winner, tie, board;
// squareEls?.addEventListener('click', handleBtnClick)
// resetBtnEl?.addEventListener('click', handleBtnClick)
function init() {
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    turn = 1;
    winner = false;
    tie = false;
}
