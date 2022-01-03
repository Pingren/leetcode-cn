/*
 * @lc app=leetcode.cn id=438 lang=typescript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
function findAnagrams(s: string, p: string): number[] {
  if (s.length < p.length) {
    return []
  }
  const sArray = s.split('')
  const pArray = p.split('')
  const set: any = {}
  pArray.forEach(char => {
    changeSetByValue(char, 1)
  })
  let leftIndex = 0
  let rightIndex = pArray.length - 1
  
  function isValidSet () {
    return Object.values(set).filter(d => d).length === 0
  }

  function changeSetByValue (char: any, val: number) {
    set[char] = (set[char] ?? 0) + val
  }

  for (let index = leftIndex; index <= rightIndex; index++) {
    changeSetByValue(s[index], -1)
  }
  const answer = []
  while (rightIndex < sArray.length) {
    if (isValidSet()) {
      answer.push(leftIndex)
    }
    changeSetByValue(s[leftIndex], 1)
    leftIndex++
    rightIndex++
    changeSetByValue(s[rightIndex], -1)
  }

  return answer
};
// @lc code=end

