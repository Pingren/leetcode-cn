/*
 * @lc app=leetcode.cn id=28 lang=typescript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
function getNext(needle: string) {
  let next = [0]
  let j = 0
  for (let i = 1; i < needle.length; i++) {
    while (j > 0 && needle[i] !== needle[j]) {
      j = next[j - 1]
    }
    if (needle[i] === needle[j]) {
      j += 1
    }
    next[i] = j
  }
  return next
}
function strStr(haystack: string, needle: string): number {
  if (needle === '') {
    return 0
  }
  if (haystack === '' ) {
    return -1
  }
  let j = 0
  let next = getNext(needle)
  for (let i = 0; i < haystack.length; i++) {
    while (j > 0 && haystack[i] !== needle[j]) {
      j = next[j - 1]
    }
    if (haystack[i] === needle[j]) {
      j++
    }
    if (j === needle.length) {
      return i - needle.length + 1
    }
  }
  return -1
};
// @lc code=end

