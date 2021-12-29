/*
 * @lc app=leetcode.cn id=54 lang=typescript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
function spiralOrder(matrix: number[][]): number[] {
  const directionVector = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  let directionIndex = 0
  let matrixSize =  matrix.length * matrix[0].length
  let value = 1
  let i = 0
  let j = 0
  // i row, j column 
  const result = []
  while (value <= matrixSize) {
    result.push(matrix[i][j])
    matrix[i][j] = undefined
    let vector = directionVector[directionIndex]
    if (!matrix[i + vector[0]]?.[j + vector[1]]) {
      directionIndex = (directionIndex + 1) % 4
      vector = directionVector[directionIndex]
    }
    i += vector[0]
    j += vector[1]
    value += 1
  }
  return result
};
// @lc code=end

