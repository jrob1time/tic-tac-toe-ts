"use strict";
const messageEl = document.getElementById("message");
const squareEls = document.querySelector("#.sqr");
const resetBtnEl = document.querySelector("#reset");
let turn, winner, tie, board;
function init() {
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    turn = 1;
    winner = false;
    tie = false;
}
