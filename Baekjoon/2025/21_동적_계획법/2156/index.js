/*
TODO 제목: 포도주 시식
! https://www.acmicpc.net/problem/2156
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input[0]);
const wines = [0, ...input.slice(1).map(Number)]; // wines 배열을 1-indexed로 사용하기 위해 앞에 0을 추가

const dp = new Array(N + 1).fill(0);

dp[1] = wines[1]; // 첫 번째 잔
if (N >= 2) {
  dp[2] = wines[1] + wines[2]; // 첫 번째 잔 + 두 번째 잔
}

for (let i = 3; i <= N; i++) {
  // i번째 잔을 마시지 않는 경우 (i-1번째까지의 최대값)
  // i번째 잔을 마시고, i-1번째 잔을 마시지 않는 경우 (i-2번째까지의 최대값 + i번째 잔)
  // i번째 잔과 i-1번째 잔을 마시고, i-2번째 잔을 마시지 않는 경우 (i-3번째까지의 최대값 + i-1번째 잔 + i번째 잔)
  dp[i] = Math.max(dp[i-1], dp[i-2] + wines[i], dp[i-3] + wines[i-1] + wines[i]);
}

console.log(dp[N]);



// 1 1 0
// 1 0 1
// 0 1 1