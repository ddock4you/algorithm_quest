/*
TODO 제목: 세 막대
! https://www.acmicpc.net/problem/14215
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map((item) => Number(item))
  .sort((a, b) => a - b);

const [x, y, z] = input;

if (x + y > z) {
  console.log(x + y + z);
} else {
  console.log(2 * (x + y) - 1);
}

// console.log(remainder.join(" "));
