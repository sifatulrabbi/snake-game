const BOARD_SIZE = 21

export function randomBoardPosition() {
  return {
    x: Math.floor(Math.random() * BOARD_SIZE) + 1,
    y: Math.floor(Math.random() * BOARD_SIZE) + 1,
  }
}

export function outSideGrid(position) {
  return position.x < 1 || position.x > 21 || position.y < 1 || position.y > 21
}
