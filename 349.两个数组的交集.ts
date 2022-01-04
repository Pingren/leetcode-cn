/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
  const set1 = new Set(nums1)
  const set2 = new Set(nums2)
  const intersection = new Set<number>()
  for (let value of set1) {
    set2.has(value) && intersection.add(value)
  }
  return [...intersection]
};
// @lc code=end
