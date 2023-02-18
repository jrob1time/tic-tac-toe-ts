const messageEl = document.getElementById("message")

const squareEls = document.querySelector<HTMLElement>("#.sqr")!

const resetBtnEl = document.querySelector<HTMLButtonElement>("#reset")!


type winningCombos = [[0, 1, 2],[3, 4, 5],[6, 7, 8],
[0, 3, 6],[1, 4, 7],[2, 5, 8],
[0, 4, 8],[2, 4, 6]]


let turn: number, winner: boolean, tie: boolean, board: number[]

// squareEls?.addEventListener('click', handleBtnClick)


// resetBtnEl?.addEventListener('click', handleBtnClick)


function init() {
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  turn = 1
  winner = false
  tie = false
}