/*
 * @lc app=leetcode.cn id=347 lang=typescript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
  const numsHash = {}
  nums.forEach(num => { 
    numsHash[num] = (numsHash[num] ?? 0) + 1 
  })
  const numsHashArray : [string, number][] = Object.entries(numsHash)
  numsHashArray.sort((a, b) => b[1] - a[1])
  return numsHashArray.slice(0, k).map(v => parseInt(v[0]))
};
// @lc code=end
