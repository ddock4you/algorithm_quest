/*
TODO 제목: 제로
! https://www.acmicpc.net/problem/10773
*/
console.time();
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v)
  .slice(1);

const stack = [];
let sum = 0;

input.forEach(item => {
  if (item === 0) {
    return sum -= stack.pop();
  }
  stack.push(item);
  sum += item;
})
console.log(sum);
console.timeEnd();

