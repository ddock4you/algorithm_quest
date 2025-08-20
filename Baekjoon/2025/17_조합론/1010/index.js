/*
TODO 제목: 다리 놓기
! https://www.acmicpc.net/problem/1010
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = parseInt(input[0]);
const testCases = [];
for (let i = 1; i <= T; i++) {
  const [N, M] = input[i].split(" ").map(Number);
  testCases.push({ N, M });
}

const dp = Array.from({ length: 30 }, () => Array(30).fill(0));

function getCombination(n, k) {
  if (n === k || k === 0) return 1;
  if (dp[n][k]) return dp[n][k];

  return (dp[n][k] = getCombination(n - 1, k - 1) + getCombination(n - 1, k));
}

for (const { N, M } of testCases) {
  console.log(getCombination(M, N));
}




