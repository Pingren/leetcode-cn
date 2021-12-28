/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let indexToCheck = 0, indexToUpdate = 0
  while (indexToCheck < nums.length) {
    if (nums[indexToCheck] !== 0) {
      nums[indexToUpdate] = nums[indexToCheck]
      indexToUpdate += 1
    }
    indexToCheck += 1
  }
  while (indexToUpdate < nums.length) {
    nums[indexToUpdate] = 0
    indexToUpdate += 1
  }
};
// @lc code=end

