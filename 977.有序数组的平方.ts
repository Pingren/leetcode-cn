/*
 * @lc app=leetcode.cn id=977 lang=typescript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
function sortedSquares(nums: number[]): number[] {
  let startIndex = 0
  let endIndex = nums.length - 1
  const result = []
  while (startIndex <= endIndex) {
    const startValue = Math.abs(nums[startIndex])
    const endValue = Math.abs(nums[endIndex])
    if (startValue >= endValue) {
      result.push(startValue * startValue)
      startIndex += 1
    }
    else {
      result.push(endValue * endValue)
      endIndex -= 1
    }
  }
  result.reverse()
  return result
};
// @lc code=end

