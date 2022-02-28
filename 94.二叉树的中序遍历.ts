/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/**@description idea from http://jyywiki.cn/OS/2022/slides/2.slides#/2/3/0 */
function inorderTraversal(root: TreeNode | null, result = []): number[] {
  const callStack = []
  let retrunValue
  callStack.push({
    pc: 0,
    root,
    result
  })

  function handleStack(pc, root, result) {
    if (pc === 0) {
      if (!root) {
        callStack.pop()
        return result
      }
    }
    else if(pc === 1) {
      callStack.push({
        pc: 0,
        root: root.left,
        result: result
      })
    }
    else if(pc === 2) {
      result.push(root.val)
    }
    else if(pc === 3) {
      callStack.push({
        pc: 0,
        root: root.right,
        result: result
      })
    }
    else if(pc === 4) {
      callStack.pop()
      return result
    }
  }

  while (callStack[callStack.length - 1]) {
    const f = callStack[callStack.length - 1]
    retrunValue = handleStack(f.pc, f.root, f.result)
    f.pc = f.pc + 1
  }
  return retrunValue
}

function inorderTraversalR(root: TreeNode | null, result = []): number[] {
  if (!root) {
    return result
  }
  inorderTraversal(root.left, result)
  result.push(root.val)
  inorderTraversal(root.right, result)
  return result
};
// @lc code=end

