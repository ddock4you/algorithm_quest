/*
TODO 제목: ??!
! https://www.acmicpc.net/problem/10926
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString().trim()
  // .split(" ")
  // .map((item) => Number(item))
  // .sort((a, b) => a - b);
if (/^[a-z]+$/.test(input) && input.length < 51) {
  console.log(input + "??!");
}
