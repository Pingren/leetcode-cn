/*
 * @lc app=leetcode.cn id=92 lang=typescript
 *
 * [92] 反转链表 II
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

function reverseBetweenScanOnce(head: ListNode | null, left: number, right: number): ListNode | null {
  let index = 0
  let dummyHead = new ListNode(-1, head)
  let node : ListNode | null = dummyHead
  let mostLeftNode = null
  let mostRightNode = null
  let firstNode = null
  let lastNode = null
  let preNode = null
  while (index <= right + 1 && node) {
    const nextNode: ListNode | null  = node?.next
    if (index === left - 1) {
      mostLeftNode = node
    }
    if (index === right + 1) {
      mostRightNode = node
    }
    if (index >= left && index <= right) {
      if (index === left) {
        lastNode = node
      }
      if (index === right) {
        firstNode = node
      }
      if (preNode) {
        node.next = preNode
      }
      preNode = node
    }
    node = nextNode
    index++
  }
  if (mostLeftNode && firstNode !== mostLeftNode) {
    mostLeftNode.next = firstNode
  }
  if (lastNode && lastNode !== mostRightNode) {
    lastNode.next = mostRightNode
  }
  return dummyHead.next
};

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  let index = 0
  let dummyHead = new ListNode(-1, head)
  let node : ListNode | null = dummyHead
  let nodeStack: ListNode[] = []
  let result: ListNode[] = []
  while (node) {
    if (index >= left && index <= right) {
      nodeStack.push(node)
      if (index === right) {
        while(nodeStack.length) {
          result.push(nodeStack.pop())
        }
      }
    }
    else {
      result.push(node)
    }
    index++
    node = node.next
  }
  for (index = 0; index < result.length; index++){
    result[index].next = result?.[index + 1] ?? null
  }

  return dummyHead.next
};
// @lc code=end