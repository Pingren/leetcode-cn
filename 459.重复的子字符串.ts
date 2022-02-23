/*
 * @lc app=leetcode.cn id=459 lang=typescript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @description https://writings.sh/post/algorithm-repeated-string-pattern */ 
function repeatedSubstringPattern(s: string): boolean {
  return (s + s).slice(1, -1).includes(s)
};
// @lc code=end

