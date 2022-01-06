/*
 * @lc app=leetcode.cn id=225 lang=typescript
 *
 * [225] 用队列实现栈
 */

// @lc code=start
class MyStack {
  queueMain: number[]
  queueBackup: number[]
  constructor() {
    this.queueMain = []
    this.queueBackup = []
  }

  push(x: number): void {
    this.queueMain.push(x)
  }

  pop(): number {
    while (this.queueMain.length > 1) {
      this.queueBackup.push(this.queueMain.shift())
    }
    const val = this.queueMain.shift()
    this.queueMain = this.queueBackup
    this.queueBackup = []
    return val
  }

  top(): number {
    const val = this.pop()
    if(val !== undefined) {
      this.queueMain.push(val)
    }
    return val
  }

  empty(): boolean {
    return !this.queueMain.length
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

