/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  let sortedNums = nums.sort((a,b) => a - b)
  if (sortedNums[0] > 0) {
    return []
  }
  let answers = []
  for (let [index, firstNum] of sortedNums.entries()) {
    let left = index + 1
    let right = sortedNums.length - 1
    while (left < right && firstNum !== sortedNums[index - 1]) {
      const sum = firstNum + sortedNums[left] + sortedNums[right]
      if (sum === 0) {
        answers.push([firstNum, sortedNums[left],  sortedNums[right]])
        left++
        right--
        while (left < right && sortedNums[left] === sortedNums[left - 1]) {
          left++
        }
        while (left < right && sortedNums[right] === sortedNums[right + 1]) {
          right--
        }
      } 
      if (sum < 0) {
        left++
      }
      if (sum > 0) {
        right--
      }
    }
  }
  return answers
};

// @lc code=end

