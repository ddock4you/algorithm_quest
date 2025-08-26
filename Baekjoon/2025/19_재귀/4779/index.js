/*
TODO 제목: 칸토어 집합
! https://www.acmicpc.net/problem/4779
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const result = [];
function cantor(n) {
  if (n === 0) return "-";
  const prev = cantor(n - 1);
  return prev + " ".repeat(3 ** (n - 1)) + prev;
}

input.forEach((n) => {
  result.push(cantor(n));
});

console.log(result.join("\n"));
