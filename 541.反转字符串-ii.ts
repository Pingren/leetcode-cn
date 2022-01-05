/*
 * @lc app=leetcode.cn id=541 lang=typescript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
function reverseStr(s: string, k: number): string {
  const step = 2 * k
  const strArray = s.split('')
  for (let i = 0; i < s.length; i += step) {
    let left = i
    let right = i + k - 1
    if (right >= s.length) {
      right = s.length - 1
    }
    while (left < right) {
      [strArray[left], strArray[right]] = [strArray[right], strArray[left]]
      left++
      right--
    }
  }
  return strArray.join('')
};
// @lc code=end

