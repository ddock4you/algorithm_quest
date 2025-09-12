/*
TODO 제목: 연속합
! https://www.acmicpc.net/problem/1912
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const numbers = input[1].split(" ").map(Number);

const dp = new Array(N).fill(0);
dp[0] = numbers[0];
for (let i = 1; i < N; i++) {
  dp[i] = Math.max(numbers[i], dp[i - 1] + numbers[i]);
}
// console.log(numbers);
// 2 1 -4 3 4 -4 6 5 -5 1
// console.log(dp);
console.log(Math.max(...dp));

