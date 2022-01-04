/*
 * @lc app=leetcode.cn id=454 lang=typescript
 *
 * [454] 四数相加 II
 */

// @lc code=start
function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
  const sumMap = {}
  let answer  = 0
  for (let n of nums1) {
    for (let m of nums2){
      const sum = n + m
      sumMap[sum] = (sumMap[sum] ?? 0) + 1 
    }
  }
  for (let n of nums3) {
    for (let m of nums4){
      const sum = n + m
      if (sumMap[-sum] !== undefined) {
        answer += sumMap[-sum]
      }
    }
  }
  return answer
};
// @lc code=end

