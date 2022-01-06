/*
 * @lc app=leetcode.cn id=1047 lang=typescript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
function removeDuplicates(s: string): string {
  const charArray = Array.from(s)
  const stack = []
  for(let char of charArray) {
    stack.push(char)
    const len = stack.length 
    if (len >= 2 && stack[len - 1] === stack[len - 2]) {
      stack.pop()
      stack.pop()
    }
  }
  return stack.join('')
};
// @lc code=end

