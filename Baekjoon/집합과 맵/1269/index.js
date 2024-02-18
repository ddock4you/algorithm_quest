/*
TODO 제목: 듣보잡
! https://www.acmicpc.net/problem/1269
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((array) => array.split(" ").map((n) => +n));
const [a, b] = input;

console.log({ a, b });
