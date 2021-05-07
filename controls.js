import { increaseSnakeSpeed, decreaseSnakeSpeed } from './snake.js'

const speedPlus = document.querySelector('.speedPlus')
const speedMinus = document.querySelector('.speedMinus')
let newInputDirection = { x: 0, y: 0 }
let lastInpurDirection = { x: 0, y: 0 }

window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowUp':
      if (lastInpurDirection.y !== 0) break
      newInputDirection = { x: 0, y: -1 }
      break
    case 'ArrowDown':
      if (lastInpurDirection.y !== 0) break
      newInputDirection = { x: 0, y: 1 }
      break
    case 'ArrowLeft':
      if (lastInpurDirection.x !== 0) break
      newInputDirection = { x: -1, y: 0 }
      break
    case 'ArrowRight':
      if (lastInpurDirection.x !== 0) break
      newInputDirection = { x: 1, y: 0 }
      break
  }
})

export function getInputs() {
  lastInpurDirection = newInputDirection
  return newInputDirection
}

speedPlus.addEventListener('click', () => {
  increaseSnakeSpeed()
})

speedMinus.addEventListener('click', () => {
  decreaseSnakeSpeed()
})
