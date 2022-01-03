/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  const sArray = s.split('')
  const tArray = t.split('')
  const set: any = {}
  sArray.forEach(char => {
    set[char] = (set[char] ?? 0) + 1
  })
  tArray.forEach(char => {
    set[char] = (set[char] ?? 0) - 1
  })
  for(let count of Object.values(set)) {
    if (count) {
      return false
    }
  }
  return true
};
// @lc code=end
