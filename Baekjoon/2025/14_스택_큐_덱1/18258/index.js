/*
TODO 제목: 큐2
! https://www.acmicpc.net/problem/18258
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(data) {
    const newNode = new Node(data);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }

  pop() {
    if (this.size === 0) return -1;
    const data = this.head.data;
    this.head = this.head.next;
    this.size -= 1;

    if (this.size === 0) {
      this.tail = null;
    }

    return data;
  }

  getSize() {
    return this.size;
  }

  empty() {
    return this.size === 0 ? 1 : 0;
  }

  front() {
    return this.size === 0 ? -1 : this.head.data;
  }

  back() {
    return this.size === 0 ? -1 : this.tail.data;
  }
}

const N = Number(input[0]);
const queue = new Queue();
const result = [];

if (N < 1 || N > 2000000) return;

for (const line of input.slice(1)) {
  const [command, number] = line.trim().split(" ");

  switch (command) {
    case "push":
      queue.push(Number(number));
      break;
    case "pop":
      result.push(queue.pop());
      break;
    case "size":
      result.push(queue.getSize());
      break;
    case "empty":
      result.push(queue.empty());
      break;
    case "front":
      result.push(queue.front());
      break;
    case "back":
      result.push(queue.back());
      break;
  }
}

console.log(result.join("\n"));
