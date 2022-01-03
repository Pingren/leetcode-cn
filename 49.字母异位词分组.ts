/*
 * @lc app=leetcode.cn id=49 lang=typescript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
  function getCharCount(str: string) {
    const strArray = str.split('')
    const set: any = {}
    strArray.forEach(char => {
      set[char] = (set[char] ?? 0) + 1
    })
    return set
  }
  function transformLowerCaseCountObject(lowerCaseCount: any) {
    let result = ''
    for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
      const lowerCaseLetter = String.fromCharCode(i)
      result += (lowerCaseLetter + lowerCaseCount[lowerCaseLetter])
    }
    return result
  }
  function getAnagramHash(str: string) {
    return transformLowerCaseCountObject(getCharCount(str))
  }
  const result = {}

  strs.forEach(str => {
    const hash = getAnagramHash(str)
    result[hash] = (result[hash] ?? []).concat(str)
  })

  return Object.values(result)
};
// @lc code=end

