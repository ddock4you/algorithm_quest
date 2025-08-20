/*
TODO 제목: 1998년생인 내가 태국에서는 2541년생?!
! https://www.acmicpc.net/problem/18108
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString().trim()
  // .split(" ")
  // .map((item) => Number(item))
  // .sort((a, b) => a - b);
const BE = 543;

if (Number(input) >= 1000 && Number(input) <= 3000) {
  console.log(Number(input) - BE);
}
