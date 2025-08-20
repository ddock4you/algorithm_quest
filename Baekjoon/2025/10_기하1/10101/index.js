/*
TODO 제목: 삼각형 외우기
! https://www.acmicpc.net/problem/10101
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const [a, b, c] = input;

const isValid = input.every((angle) => angle > 0 && angle < 180);
if (!isValid) return;

if (a === 60 && b === 60 && c === 60) {
  console.log("Equilateral");
} else if (a + b + c === 180) {
  if (a === b || b === c || c === a) {
    console.log("Isosceles");
  } else {
    console.log("Scalene");
  }
} else {
  console.log("Error");
}


