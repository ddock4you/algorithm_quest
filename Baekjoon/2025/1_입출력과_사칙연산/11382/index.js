/*
TODO 제목: 꼬마 정민
! https://www.acmicpc.net/problem/11382
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString().trim()
  .split(" ")
  .map((item) => Number(item))
  // .sort((a, b) => a - b);
const min = 1;
const max = Math.pow(10, 12);
const [A, B, C] = input;

if ((A >= min && A <= max) && (B >= min && B <= max) && (C >= min && C <= max)) {
  console.log(A + B + C);
}
