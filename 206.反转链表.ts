/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
  let leftNode = null
  let rightNode = head
  if (!rightNode) {
    return leftNode
  }
  while (rightNode) {
    const nextNode = rightNode.next
    // reverse to left <- right
    rightNode.next = leftNode
    leftNode = rightNode
    rightNode = nextNode
  }
  return leftNode
};
// @lc code=end

