/*
TODO 제목: 큐2 - 연결 리스트 구현
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
    this.head = null; // 앞쪽
    this.tail = null; // 뒤쪽
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
    this.size++;
  }

  pop() {
    if (this.size === 0) return -1;

    const data = this.head.data;
    this.head = this.head.next;
    this.size--;

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

for (let i = 1; i <= N; i++) {
  const [command, number] = input[i].trim().split(" ");

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
