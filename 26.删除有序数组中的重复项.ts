/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  let flags = {}
  let indexToCheck = 0, indexToUpdate = 0
  while (indexToCheck < nums.length) {
    const valueToCheck = nums[indexToCheck] 
    if (!flags[valueToCheck]) {
      nums[indexToUpdate] = valueToCheck
      flags[valueToCheck] = true
      indexToUpdate += 1
    }
    indexToCheck += 1
  }
  return indexToUpdate
};
// @lc code=end

