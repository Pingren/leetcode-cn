/*
 * @lc app=leetcode.cn id=367 lang=typescript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
function isPerfectSquare(num: number): boolean {
  if (num === 1){
    return true
  }
  let left = 0;
  let right = num;
  while (left < right) {
    const middle = Math.floor(left + (right - left) / 2);
    const pow = middle * middle;
    if (pow > num) {
      right = middle;
    } else if (pow < num) {
      left = middle + 1;
    } else if (pow === num) {
      return true;
    }
  }
  return false;
};
// @lc code=end

