/*
 * @lc app=leetcode.cn id=150 lang=typescript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
function evalRPN(tokens: string[]): number {
  const stack: any = []
  const operatorSet = new Set(['+', '-', '*', '/'])
  function calc(left: string, right: string, operator: string) {
    const val = eval(`(${left})${operator}(${right})`)
    return parseInt(val)
  }
  for (let token of tokens) {
    if (operatorSet.has(token)) {
      const right = stack.pop()
      const left = stack.pop()
      stack.push(calc(left, right, token))
    }
    else {
      stack.push(token)
    }
  }
  return stack.pop()
};
// @lc code=end

