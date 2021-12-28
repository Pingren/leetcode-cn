/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  // pre condition: n > 0, nums[0..n) is sorted
  // invariant: if target is in nums[0..n), then target is in [left, right) and 0 <= left < right < n 
  // post condition: if target is in nums[0..n), then return index
  const n = nums.length
  let left = 0
  let right =  n
  while (left < right) {
    const middle = Math.floor((left + right) / 2)
    if (nums[middle] > target) {
      right = middle
    } 
    else if (nums[middle] < target) {
      left = middle + 1
    } 
    else {
      return middle
    } 
  }
  return right
};
// @lc code=end

