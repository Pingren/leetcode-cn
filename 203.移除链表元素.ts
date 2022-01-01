/*
 * @lc app=leetcode.cn id=203 lang=typescript
 *
 * [203] 移除链表元素
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

function removeElements(head: ListNode | null, val: number): ListNode | null {
    const listNode = new ListNode(0, head)
    let currentNode = listNode 
    while (currentNode?.next) {
      if (currentNode.next.val === val) {
        currentNode.next = currentNode.next.next
      }
      else {
        currentNode = currentNode.next
      }
    }
    return listNode.next
};
// @lc code=end

