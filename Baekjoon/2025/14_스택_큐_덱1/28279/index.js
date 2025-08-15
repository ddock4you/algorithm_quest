/*
TODO 제목: 덱2
! https://www.acmicpc.net/problem/28279
*/

const fs = require("fs");
const path = require("path"); // ! path 모듈 추가

// 현재 파일의 디렉토리 경로를 기준으로 input.txt 경로 설정
const filePath = process.platform === "linux" ? "/dev/stdin" : path.join(__dirname, "input.txt");
const input = fs.readFileSync(filePath).toString().trim().split("\n");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push_front(data) {
    const newNode = new Node(data);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size += 1;
  }

  push_back(data) {
    const newNode = new Node(data);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }

  pop_front() {
    if (this.size === 0) return -1;
    const data = this.head.data;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      if (this.head) {
          this.head.prev = null;
      }
    }
    this.size -= 1;
    return data;
  }

  pop_back() {
    if (this.size === 0) return -1;
    const data = this.tail.data;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      if (this.tail) {
          this.tail.next = null;
      }
    }
    this.size -= 1;
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
const deque = new Deque();
const result = [];

if (N < 1 || N > 100000) return;

for (const line of input.slice(1)) {
  const [command, number] = line.trim().split(" ");

  switch (Number(command)) {
    case 1:
      deque.push_front(Number(number));
      break;
    case 2:
      deque.push_back(Number(number));
      break;
    case 3:
      result.push(deque.pop_front());
      break;
    case 4:
      result.push(deque.pop_back());
      break;
    case 5:
      result.push(deque.getSize());
      break;
    case 6:
      result.push(deque.empty());
      break;
    case 7:
      result.push(deque.front());
      break;
    case 8:
      result.push(deque.back());
      break;
  }
}

console.log(result.join("\n"));
