/*
TODO 제목: 수학은 비대면강의입니다
! https://www.acmicpc.net/problem/19532
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((number) => Number(number));

const [a, b, c, d, e, f] = input;

for (let x = -999; x <= 999; x += 1) {
  for (let y = -999; y <= 999; y += 1) {
    if (a * x + b * y === c && d * x + e * y === f) {
      console.log(`${x} ${y}`);
      break;
    }
  }
}
