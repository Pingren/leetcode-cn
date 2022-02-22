/*
 * @lc app=leetcode.cn id=239 lang=typescript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
class DescendingQueue {
  queue: number[]
  constructor () {
    this.queue = []
  }
  push (x: number) {
    if (this.queue.length === 0 || this.queue[0] < x) {
      this.queue = [x]
      return
    }
    for (let i = this.queue.length - 1; this.queue[i] < x; i--) {
      this.queue.pop()
    }
    this.queue.push(x)
  }
  pop (x?: number) {
    this.queue[0] == x && this.queue.shift()
  }
  top () {
    return this.queue[0]
  } 
}
function maxSlidingWindow(nums: number[], k: number): number[] {
  const maxNumsQueue = new DescendingQueue()
  const window = nums.slice(0, k)
  const answer = []
  for (let i = 0; i < nums.length; i++) {
    maxNumsQueue.push(nums[i])
    if (i >= k - 1) {
      maxNumsQueue.pop(nums[i - k])
      answer.push(maxNumsQueue.top())
    }
  } 
  return answer
};
// @lc code=end