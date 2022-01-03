/*
 * @lc app=leetcode.cn id=383 lang=typescript
 *
 * [383] 赎金信
 */

// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {
  const ransomNoteArray = ransomNote.split('')
  const magazineArray = magazine.split('')
  const set: any = {}
  ransomNoteArray.forEach(char => {
    set[char] = (set[char] ?? 0) + 1
  })
  magazineArray.forEach(char => {
    set[char] = (set[char] ?? 0) - 1
  })
  for(let count of Object.values(set)) {
    if (count > 0) {
      return false
    }
  }
  return true
};
// @lc code=end

