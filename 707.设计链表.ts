/*
 * @lc app=leetcode.cn id=707 lang=typescript
 *
 * [707] 设计链表
 */

// @lc code=start
// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.next = (next===undefined ? null : next)
//     }
// }
class MyLinkedList {
  head: ListNode | null
  tail: ListNode | null
  size: number
  constructor() {
    this.size = 0
    this.head = null
    this.tail = null
  }

  get(index: number): number {
    if (index < 0 || index > this.size - 1) {
      return -1
    }
    let node = this.getNode(index)
    return node.val
  }

  addAtHead(val: number): void {
    let node = new ListNode(val, this.head)
    if (this.size === 0) {
      this.tail = node
    }
    this.head = node
    this.size++
  }

  addAtTail(val: number): void {
    let node = new ListNode(val)
    if (this.size === 0) {
      this.head = node
    }
    else {
      this.tail.next = node
    }
    this.tail = node
    this.size++
  }

  addAtIndex(index: number, val: number): void {
    if (index > this.size) {
      return
    }
    if (index === this.size) {
      this.addAtTail(val)
      return
    }
    if (index <= 0) {
      this.addAtHead(val)
      return
    }
    let node = this.getNode(index - 1)
    let oldNext = node.next
    let newNode = new ListNode(val, oldNext)
    node.next = newNode
    this.size++
  }

  deleteAtIndex(index: number): void {
    if (index > this.size - 1 || index < 0) {
      return
    }
    if (index == 0) {
      if (this.size >= 1) {
        this.head = this.head.next
        this.size--
      }
      return
    }
    let node = this.getNode(index - 1)
    node.next = node.next?.next
    if (index === this.size - 1) {
      this.tail = node
    }
    this.size--
  }

  private getNode(index: number): ListNode {
    let currentNode: ListNode = new ListNode(0, this.head)
    let currentIndex = 0
    while (currentIndex <= index) {
      currentNode = currentNode.next
      currentIndex++
    }
    return currentNode
  }
}
/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

