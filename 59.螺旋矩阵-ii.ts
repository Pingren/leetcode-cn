/*
 * @lc app=leetcode.cn id=59 lang=typescript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
function generateMatrix(n: number): number[][] {
  const matrix = Array.from({ length: n }, () => 
  Array.from({ length: n }, () => -1))
  const directionVector = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  let directionIndex = 0
  let value = 1
  let i = 0
  let j = 0
  // i row, j column 
  while ( value <= n * n) {
    matrix[i][j] = value
    let vector = directionVector[directionIndex]
    if (matrix[i + vector[0]]?.[j + vector[1]] !== -1) {
      directionIndex = (directionIndex + 1) % 4
      vector = directionVector[directionIndex]
    }
    i += vector[0]
    j += vector[1]
    value += 1
  }
  return matrix
};
// @lc code=end


