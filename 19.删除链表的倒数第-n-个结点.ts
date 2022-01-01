/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummyHead = new ListNode(-1, head)
  let right = 0
  let rightNode = dummyHead
  while (right < n) {
    rightNode = rightNode.next
    right++
  }
  let leftNode = dummyHead
  while (rightNode?.next) {
    leftNode = leftNode.next
    rightNode = rightNode.next
  }

  leftNode.next = leftNode.next.next

  return dummyHead.next
};
// @lc code=end

