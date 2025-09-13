/*
TODO 제목: 쉬운 계단 수
! https://www.acmicpc.net/problem/10844
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const N = Number(fs.readFileSync(filePath).toString().trim());

const MOD = 1000000000;

// dp[n][last_digit] : 길이가 n이고 마지막 숫자가 last_digit인 계단 수의 개수
const dp = Array.from({ length: N + 1 }, () => Array(10).fill(0));

// 길이가 1인 계단 수 초기화
for (let i = 1; i <= 9; i++) {
  dp[1][i] = 1;
}

for (let n = 2; n <= N; n++) {
  for (let last_digit = 0; last_digit <= 9; last_digit++) {
    if (last_digit === 0) {
      dp[n][0] = dp[n - 1][1] % MOD;
    } else if (last_digit === 9) {
      dp[n][9] = dp[n - 1][8] % MOD;
    } else {
      dp[n][last_digit] = (dp[n - 1][last_digit - 1] + dp[n - 1][last_digit + 1]) % MOD;
    }
  }
}

let totalCount = 0;
for (let i = 0; i <= 9; i++) {
  totalCount = (totalCount + dp[N][i]) % MOD;
}

console.log(totalCount);



