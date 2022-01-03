/*
 * @lc app=leetcode.cn id=142 lang=typescript
 *
 * [142] 环形链表 II
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

function detectCycle(head: ListNode | null): ListNode | null {
    let fastNode = head?.next?.next
    let slowNode = head?.next
    function getCycleEntry(nodeInCycle: ListNode, head: ListNode) {
      while (nodeInCycle !== head && nodeInCycle && head) {
        nodeInCycle = nodeInCycle.next
        head = head.next
      }
      return nodeInCycle
    }
    while (fastNode && slowNode) {
      if (fastNode === slowNode) {
        return getCycleEntry(fastNode, head)
      }
      slowNode = slowNode.next
      fastNode = fastNode.next?.next
    }
    return null
};
// @lc code=end

