/*
 * @lc app=leetcode.cn id=141 lang=typescript
 *
 * [141] 环形链表
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

function hasCycle(head: ListNode | null): boolean {
  let fastNode = head?.next?.next
  let slowNode = head?.next
  while (fastNode && slowNode) {
    if (fastNode === slowNode) {
      return true
    }
    slowNode = slowNode.next
    fastNode = fastNode.next?.next
  }
  return false
};
// @lc code=end

