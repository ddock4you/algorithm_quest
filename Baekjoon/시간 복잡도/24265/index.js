/*
TODO 제목: 알고리즘 수업 - 알고리즘의 수행 시간 4
! https://www.acmicpc.net/problem/24262
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());

function func(number, sum = 0) {
  if (number === 0) return sum;
  return func(number - 1, (sum += number));
}

console.log(func(input - 1));
console.log(2);
