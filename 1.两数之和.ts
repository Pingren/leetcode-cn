/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const validNumberMap = {}
  for (let [index, num] of nums.entries()) {
    const numDiff = target - num 
    if (validNumberMap[num] !== undefined) {
      return [validNumberMap[num], index]
    }
    validNumberMap[numDiff] = index
  }
};
// @lc code=end

