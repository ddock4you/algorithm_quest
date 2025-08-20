/*
TODO 제목: 큐2 - 두 개의 스택으로 큐 구현
! https://www.acmicpc.net/problem/18258
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

class Queue {
  constructor() {
    this.inbox = []; // 새로운 요소가 들어가는 스택
    this.outbox = []; // 나가는 요소들을 위한 스택
  }

  push(data) {
    this.inbox.push(data);
  }

  pop() {
    this._move();
    return this.outbox.length > 0 ? this.outbox.pop() : -1;
  }

  size() {
    return this.inbox.length + this.outbox.length;
  }

  empty() {
    return this.inbox.length + this.outbox.length === 0 ? 1 : 0;
  }

  front() {
    this._move();
    return this.outbox.length > 0 ? this.outbox[this.outbox.length - 1] : -1;
  }

  back() {
    return this.inbox.length > 0
      ? this.inbox[this.inbox.length - 1]
      : this.outbox.length > 0
      ? this.outbox[0]
      : -1;
  }

  _move() {
    // outbox가 비어있을 때만 inbox의 모든 요소를 outbox로 이동
    if (this.outbox.length === 0) {
      while (this.inbox.length > 0) {
        this.outbox.push(this.inbox.pop());
      }
    }
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
      result.push(queue.size());
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
