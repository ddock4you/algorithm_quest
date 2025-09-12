/*
TODO 제목: RGB거리
! https://www.acmicpc.net/problem/1149
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const costs = input.slice(1).map(line => line.split(' ').map(Number));

const dp = Array.from({ length: N }, () => Array(3).fill(0));

// 첫 번째 집 초기화
dp[0][0] = costs[0][0]; // 0: 빨강
dp[0][1] = costs[0][1]; // 1: 초록
dp[0][2] = costs[0][2]; // 2: 파랑

for (let i = 1; i < N; i++) {
    // 현재 집을 빨강으로 칠할 경우
    dp[i][0] = costs[i][0] + Math.min(dp[i-1][1], dp[i-1][2]);
    // 현재 집을 초록으로 칠할 경우
    dp[i][1] = costs[i][1] + Math.min(dp[i-1][0], dp[i-1][2]);
    // 현재 집을 파랑으로 칠할 경우
    dp[i][2] = costs[i][2] + Math.min(dp[i-1][0], dp[i-1][1]);
}

console.log(Math.min(dp[N-1][0], dp[N-1][1], dp[N-1][2]));



