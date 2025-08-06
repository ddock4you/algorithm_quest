/*
TODO 제목: 주사위 세개
! https://www.acmicpc.net/problem/2480
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString().trim()
  .split(" ");

const [A, B, C] = input.map(Number);

let result = 0;

if (A === B && B === C) {
  result = 10000 + A * 1000;
} else if (A === B || B === C || A === C) {
  let sameNumber;
  if (A === B) sameNumber = A;
  else if (B === C) sameNumber = B;
  else sameNumber = A;
  
  result = 1000 + sameNumber * 100;
} else {
  const maxNumber = Math.max(A, B, C);
  result = maxNumber * 100;
}

console.log(result);


