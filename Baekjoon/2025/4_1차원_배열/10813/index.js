/*
TODO 제목: 공 바꾸기
! https://www.acmicpc.net/problem/10813
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
if (N < 1 || N > 100 || M < 1 || M > 100) return;

const array = Array.from({ length: N }, (_, i) => i + 1);
const changeBallGuide = input
  .slice(1)
  .map((item) => item.split(" ").map(Number));

const isValid = changeBallGuide.every(([i, j]) => {
  if (i < 1 || i > N || j < 1 || j > N) return false;
  const [iBall, jBall] = [array[i - 1], array[j - 1]];
  array[i - 1] = jBall;
  array[j - 1] = iBall;
  return true;
});

if (!isValid) return;

console.log(array.join(" "));
