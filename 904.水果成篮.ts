/*
 * @lc app=leetcode.cn id=904 lang=typescript
 *
 * [904] 水果成篮
 */

// @lc code=start

class Basket {
  basket: Set<number>
  counter: any
  total: number

  constructor() {
    this.counter = {}
    this.total = 0
    this.basket = new Set()
  }

  isFull(): boolean {
    return this.basket.size >= 2
  }

  hasFruit(fruit): boolean {
    return this.basket.has(fruit)
  }

  addFruit(fruit: number) {
    if (this.isFull() && !this.hasFruit(fruit)) {
      return
    }
    this.basket.add(fruit)
    this.counter[fruit] = (this.counter[fruit] ?? 0) + 1
    this.total += 1
  }

  removeFruit(fruit: number) {
    if (this.counter[fruit]) {
      this.counter[fruit] -= 1
      this.total -= 1
      if (this.counter[fruit] <= 0) {
        this.basket.delete(fruit)
      }
    }
  }

  getTotal(){
    return this.total
  }
}

function totalFruit(fruits: number[]): number {
  let left = 0
  let right = 0
  let total = 0
  let basket = new Basket()
  while (right < fruits.length) {
    const nextFruit = fruits[right]
    while (basket.isFull() && !basket.hasFruit(nextFruit) && left < fruits.length) {
      const fruitToRemove = fruits[left]
      basket.removeFruit(fruitToRemove)
      left += 1
    }
    basket.addFruit(nextFruit)
    total = Math.max(basket.getTotal(), total)
    right += 1 
  }
  return total
};
// @lc code=end

