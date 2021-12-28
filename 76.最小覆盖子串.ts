/*
 * @lc app=leetcode.cn id=76 lang=typescript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
function minWindow(s: string, t: string): string {
  const targetKeys = t.split('')
  const hash = {}
  targetKeys.forEach(key => {
    hash[key] = (hash[key] ?? 0) + 1
  })
  
  let left = 0
  let right = 0
  let matchCount = 0
  let minLength = Number.MAX_SAFE_INTEGER
  let minResult = ''
  while (right < s.length) {
    const char = s[right]
    if (hash[char] !== undefined) {
      hash[char] -= 1
      if (hash[char] >= 0) {
        matchCount += 1
      }
    }
    while (matchCount === t.length && left <= right) {
      const length = right - left + 1
      if (minLength > length) {
        minLength = length
        minResult = s.substring(left, right + 1)
      }
      const char = s[left]
      if (hash[char] !== undefined) {
        hash[char] += 1
        if (hash[char] > 0) {
          matchCount -= 1
        }
      }
      left += 1
    }
    right += 1
  }
  return minResult
};
// @lc code=end
