/*
TODO 제목: 01타일
! https://www.acmicpc.net/problem/1904
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());

const dp = new Array(input + 1).fill(0);

dp[1] = 1;
dp[2] = 2; // N이 1인 경우와 2인 경우를 따로 처리합니다.

for (let i = 3; i <= input; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
}

console.log(dp[input]);

