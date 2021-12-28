/*
 * @lc app=leetcode.cn id=209 lang=typescript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
function minSubArrayLen(s: number, nums: number[]) {
  if (nums.length == 0) {
    return 0;
  }
  let count = 0;
  let left = 0;
  let right = 0;
  while (count < s) {
    if (right == nums.length) {
      return 0;
    }
    count += nums[right];
    right++;
  }
  while (right < nums.length) {
    if (count < s) {
      count += nums[right];
      right++;
    }
    count -= nums[left];
    left++;
  }
  while (count >= s) {
    count -= nums[left];
    left++;
  }

  return right - left + 1;
}
function minSubArrayLen2(target: number, nums: number[]): number {
  let slideLeft = 0
  let slideRight = 0
  let sum = 0
  let minLen = Number.MAX_SAFE_INTEGER
  while (slideRight < nums.length) {
    sum += nums[slideRight]
    while (sum >= target) {
      const len = slideRight - slideLeft + 1
      minLen = Math.min(minLen, len)
      sum -= nums[slideLeft]
      slideLeft ++
    }
    slideRight += 1
  }
  return minLen === Number.MAX_SAFE_INTEGER ? 0 : minLen
};
// @lc code=end

