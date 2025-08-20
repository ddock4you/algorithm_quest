/*
TODO 제목: 큐 2
! https://www.acmicpc.net/problem/18258
*/
// console.time();
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(`\n`)
  .map((v) => (v.includes(" ") ? v.split(" ") : v.replace(/\r/g, "")));

const queue = [];
const [N, ...command] = input;
let result = "";

const commandList = {
  push: (number) => queue.push(number),
  pop: () => {
    let shift = queue.length === 0 ? -1 : queue.shift();
    return (result += `${shift}\n;`);
  },
};

console.log(N, command);
// push X: 정수 X를 큐에 넣는 연산이다.
// pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 큐에 들어있는 정수의 개수를 출력한다.
// empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
// front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.

// console.timeEnd();
