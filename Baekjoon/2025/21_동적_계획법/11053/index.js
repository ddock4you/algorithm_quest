/*
TODO 제목: 가장 긴 증가하는 부분 수열
! https://www.acmicpc.net/problem/11053
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input[0]);
const numbers = input[1].split(" ").map(Number);

const dp = new Array(N).fill(1); // 각 원소는 최소 길이 1의 증가하는 부분 수열이 될 수 있음

for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (numbers[i] > numbers[j]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

console.log(Math.max(...dp));
