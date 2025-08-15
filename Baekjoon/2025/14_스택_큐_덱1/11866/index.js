/*
TODO 제목: 요세푸스 문제 0
! https://www.acmicpc.net/problem/11866
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const [N, K] = input;
if (K < 1 || K > N || N > 1000) return;

const result = [];
const array = Array.from({ length: N }, (_, i) => i + 1);
let index = 0;

for (let i = N; i > 0; i--) {
  index = (index + K - 1) % i;
  result.push(array[index]);
  array.splice(index, 1);
}

console.log(`<${result.join(", ")}>`);
