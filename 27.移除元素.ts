/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  let indexToUpdate = 0, indexToCheck = 0
  while (indexToCheck < nums.length) {
    if (nums[indexToCheck] !== val) {
      nums[indexToUpdate] = nums[indexToCheck]
      indexToUpdate += 1
    }
    indexToCheck += 1
  }
  return indexToUpdate
};
// @lc code=end

