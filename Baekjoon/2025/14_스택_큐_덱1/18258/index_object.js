/*
TODO 제목: 큐2 - Object 해시맵 구현
! https://www.acmicpc.net/problem/18258
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  push(data) {
    this.items[this.rear] = data;
    this.rear++;
  }

  pop() {
    if (this.front >= this.rear) return -1;

    const data = this.items[this.front];
    delete this.items[this.front]; // 실제로 삭제
    this.front++;
    return data;
  }

  size() {
    return this.rear - this.front;
  }

  empty() {
    return this.front >= this.rear ? 1 : 0;
  }

  getFront() {
    return this.front >= this.rear ? -1 : this.items[this.front];
  }

  back() {
    return this.front >= this.rear ? -1 : this.items[this.rear - 1];
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
      result.push(queue.getFront());
      break;

    case "back":
      result.push(queue.back());
      break;
  }
}

console.log(result.join("\n"));
