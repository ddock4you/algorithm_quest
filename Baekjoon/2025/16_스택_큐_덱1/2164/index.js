/*
TODO 제목: 카드2
! https://www.acmicpc.net/problem/2164
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());

if (input < 1 || input > 500000) return;

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  shift() {
    const value = this.head.value;
    this.head = this.head.next;
    this.size -= 1;

    return value;
  }
}

const queue = new Queue();

for (let i = 1; i <= input; i++) {
  queue.push(i);
}

while (queue.size > 1) {
  queue.shift();
  queue.push(queue.shift());
}

console.log(queue.head.value);