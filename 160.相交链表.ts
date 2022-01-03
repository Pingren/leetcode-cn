/*
 * @lc app=leetcode.cn id=160 lang=typescript
 *
 * [160] 相交链表
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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let lenA = getListLength(headA)
  let lenB = getListLength(headB)
  function getListLength (head: ListNode) {
    let len = 1
    while (head?.next) {
      len += 1
      head = head.next
    }
    return len
  }
  if (lenA < lenB) {
    [headA, headB] = [headB, headA];
    [lenA, lenB] = [lenB, lenA]
  }
  while(lenB < lenA) {
    headA = headA?.next
    lenB++
  }
  while(headA && headB) {
    if (headA === headB) {
      return headA
    }
    headA = headA.next
    headB = headB.next
  }
  return null
};
// @lc code=end

