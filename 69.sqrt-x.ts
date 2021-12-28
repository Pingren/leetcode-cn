/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
function mySqrt(x: number): number {
  if (x <= 1) {
    return x
  }
  let left = 0
  let right = x
  while (left < right)  {
    const middle = Math.floor(left + (right - left) / 2)
    const pow = middle * middle
    if(pow > x) {
      right = middle
    }
    else if(pow < x) {
      left = middle + 1
    }
    else if (pow === x) {
      return middle
    }
  }
  return left - 1
};
// @lc code=end

