/*
 * @lc app=leetcode.cn id=844 lang=typescript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
function backspaceCompare(s: string, t: string): boolean {
  let sIndexToCheck = s.length - 1, tIndexToCheck = t.length - 1
  let sSkip = 0, tSkip = 0
  while (sIndexToCheck >= 0 || tIndexToCheck >= 0) {
    while (sIndexToCheck >= 0) {
      if (s[sIndexToCheck] === '#') {
        sSkip += 1
      }
      else if(sSkip > 0) {
        sSkip -= 1
      }
      else {
        break
      }
      sIndexToCheck -= 1
    }
    while (tIndexToCheck >= 0) {
      if (t[tIndexToCheck] === '#') {
        tSkip += 1
      }
      else if(tSkip > 0) {
        tSkip -= 1
      }
      else {
        break
      }
      tIndexToCheck -= 1
    }
  
    if (s[sIndexToCheck] !== t[tIndexToCheck]) {
      return false
    }
    sIndexToCheck -= 1
    tIndexToCheck -= 1
  }

  return true
};
// @lc code=end

function backspaceCompareNormal(s: string, t: string): boolean {
  function getRealString (str: string) {
    let indexToCheck = 0,
    result = []
    while (indexToCheck < str.length) {
      if (str[indexToCheck] !== '#'){
        result.push(str[indexToCheck])
      }
      else {
        result.pop()
      }
      indexToCheck += 1
    }
    return result.join('')
  }
  return getRealString(s) === getRealString(t)
};
