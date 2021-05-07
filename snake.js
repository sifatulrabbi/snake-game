import { getInputs } from './controls.js'

export let SNAKE_SPEED = 5
const snakeBody = [{ x: 11, y: 11 }]
let newSegement = 0

export function updateSnake() {
  addSegements()

  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] }
  }

  snakeBody[0].x += getInputs().x
  snakeBody[0].y += getInputs().y
}

export function drawSnake(gameBoard) {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement('div')
    snakeElement.style.gridColumnStart = segment.x
    snakeElement.style.gridRowStart = segment.y
    snakeElement.classList.add('snake')
    gameBoard.appendChild(snakeElement)
  })
}

export function expandSnake(amount) {
  newSegement += amount
}

export function onSnake(position, { ignoreHead = false } = {}) {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false

    return checkPosition(segment, position)
  })
}

function checkPosition(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegements() {
  for (let i = 0; i < newSegement; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
  }

  newSegement = 0
}

export function getSnakeHead() {
  return snakeBody[0]
}

export function snakeIntersection() {
  return onSnake(snakeBody[0], { ignoreHead: true })
}

export function increaseSnakeSpeed() {
  if (SNAKE_SPEED >= 8) return
  SNAKE_SPEED += 1
}

export function decreaseSnakeSpeed() {
  if (SNAKE_SPEED <= 2) return
  SNAKE_SPEED -= 1
}
