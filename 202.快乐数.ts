/*
 * @lc app=leetcode.cn id=202 lang=typescript
 *
 * [202] 快乐数
 */

// @lc code=start
function isHappy(n: number): boolean {
  function getHappyValue(n: number): number {
    const digits = n.toString().split("").map(c => parseInt(c))
    let sum = 0
    digits.forEach(d => {
      sum += d * d
    }) 
    return sum
  }
  let value = n
  let valueSet = new Set()
  while (value !== 1) {
    valueSet.add(value)
    value = getHappyValue(value)
    if (valueSet.has(value)) {
      return false
    }
  }
  return true
};
// @lc code=end

