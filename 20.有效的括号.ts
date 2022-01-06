/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  let stack = []
  let charArray = Array.from(s)
  const charMap = {
    '(' : ')',
    '{' : '}',
    '[' : ']'
  }
  for (let char of charArray) {
    if (charMap[char]) {
      stack.push(charMap[char])
    }
    else {
      const stackTop = stack.pop()
      if (char !== stackTop) {
        return false
      }
    } 
  }
  return !stack.length
};

// @lc code=end

