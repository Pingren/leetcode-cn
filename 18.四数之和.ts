/*
 * @lc app=leetcode.cn id=18 lang=typescript
 *
 * [18] 四数之和
 */

// @lc code=start
function fourSum(nums: number[], target: number): number[][] {
  const sortedNums = nums.sort((a,b) => a - b)
  let answers = []
  if (sortedNums[0] > target && sortedNums[0] > 0) {
    return []
  }
  for (let i = 0; i < sortedNums.length; i++) {
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
      continue
    }
    for (let j = i + 1; j < sortedNums.length; j++) {
      if (j > i + 1 && sortedNums[j] === sortedNums[j - 1]) {
        continue
      }
      let left = j + 1
      let right = sortedNums.length - 1
      while (left < right) {
        const sum = sortedNums[i] + sortedNums[j] + sortedNums[left] + sortedNums[right]
        if (sum === target) {
          answers.push([sortedNums[i], sortedNums[j], sortedNums[left],  sortedNums[right]])
          left++
          right--
          while (left < right && sortedNums[left] === sortedNums[left - 1]) {
            left++
          }
          while (left < right && sortedNums[right] === sortedNums[right + 1]) {
            right--
          }
        } 
        if (sum < target) {
          left++
        }
        if (sum > target) {
          right--
        }
      }
    }
  }
  return answers
};
// @lc code=end

