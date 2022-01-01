/*
 * @lc app=leetcode.cn id=24 lang=typescript
 *
 * [24] 两两交换链表中的节点
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

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head) {
    return null
  }
  if(!head.next) {
    return head
  }
  const newHead = head.next
  let preNode = null
  let leftNode = head
  let rightNode = head.next

  while (leftNode) {
    const nextNode = rightNode?.next
    if (preNode) {
      preNode.next = rightNode ?? leftNode
    }
    if (rightNode) {
      rightNode.next = leftNode
    }
    preNode = leftNode
    leftNode = nextNode
    rightNode = nextNode?.next
  }
  if (preNode) {
    preNode.next= null
  }
  return newHead
};
// @lc code=end

// left 1 right 2 next 3

//  1->2->3->4
//  2->1 3->4

// left 3 right 4 next null
