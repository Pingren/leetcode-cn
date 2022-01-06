/*
 * @lc app=leetcode.cn id=232 lang=typescript
 *
 * [232] 用栈实现队列
 */

// @lc code=start
class MyQueue {
  stackIn: number[]
  stackOut: number[]
  constructor() {
    this.stackIn = []
    this.stackOut = []
  }

  push(x: number): void {
    this.stackIn.push(x)
  }

  pop(): number {
    if (!this.stackOut.length) {
      while (this.stackIn.length) {
        this.stackOut.push(this.stackIn.pop())
      }
    }
    return this.stackOut.pop()
  }

  peek(): number {
    let val = this.pop()
    this.stackOut.push(val)
    return val
  }

  empty(): boolean {
    return !this.stackIn.length && !this.stackOut.length 
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

