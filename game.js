import { SNAKE_SPEED, updateSnake, drawSnake, getSnakeHead, snakeIntersection } from './snake.js'
import { updateFood, drawFood } from './food.js'
import { outSideGrid } from './board.js'

const gameBoard = document.querySelector('.gameBoard')
let lastRenderTime
let gameEnd = false

function main(currentTime) {
  if (gameEnd) {
    if (confirm('You Lose. Press ok to restart')) {
      window.location = '/'
    }
    return
  }

  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
  lastRenderTime = currentTime

  updateGame()
  drawGame()
}

window.requestAnimationFrame(main)

function updateGame() {
  checkDeath()
  updateSnake()
  updateFood()
}

function drawGame() {
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawFood(gameBoard)
}

function checkDeath() {
  gameEnd = outSideGrid(getSnakeHead()) || snakeIntersection()
}
