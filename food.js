import { onSnake, expandSnake } from './snake.js'
import { randomBoardPosition } from './board.js'

const EXPANSION_SIZE = 1
let food = getFoodPosition()

export function updateFood() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_SIZE)
    food = getFoodPosition()
  }
}

export function drawFood(gameBoard) {
  const foodElement = document.createElement('div')
  foodElement.style.gridColumnStart = food.x
  foodElement.style.gridRowStart = food.y
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)
}

function getFoodPosition() {
  let newFoodPosition
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomBoardPosition()
  }
  return newFoodPosition
}
