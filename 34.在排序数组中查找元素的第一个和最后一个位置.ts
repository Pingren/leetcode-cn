/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
  const n = nums.length;  
  function findFirstIndex(nums: number[], target: number): number {
    let left = 0;
    let right = n - 1;
    while (left < right) {
      const middle = Math.floor((left + right) / 2);
      if (nums[middle] < target) {
        // next [middle + 1, right]
        left = middle + 1;
      } else if(nums[middle] > target) {
        // next [left, middle - 1]
        right = middle - 1;
      } else if(nums[middle] === target) {
        // next [left, middle]
        right = middle
      }
    }
    return nums[left] === target ? left : -1
  }
  function findLastIndex(nums: number[], target: number): number {
    let left = 0;
    let right = n - 1;
    while (left < right) {
      const middle = Math.ceil((left + right) / 2);
      if (nums[middle] < target) {
        // next [middle + 1, right]
        left = middle + 1;
      } else if(nums[middle] > target) {
        // next [left, middle - 1]
        right = middle - 1;
      } else if(nums[middle] === target) {
        // next [middle, right]
        left = middle
      }
    }
    return nums[left] === target ? left : -1
  }

  let mostLeft = findFirstIndex(nums, target)
  let mostRight = findLastIndex(nums, target)

  if (
    mostLeft === -1 ||
    mostRight === -1
  ) {
    return [-1, -1];
  }
  return [mostLeft, mostRight];
}
// @lc code=end
