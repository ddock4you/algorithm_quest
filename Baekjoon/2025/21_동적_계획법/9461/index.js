/*
TODO 제목: 파도반 수열
! https://www.acmicpc.net/problem/9461
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution() {
  const T = Number(input.shift());
  const dp = new Array(101).fill(0); // N의 최대값이 100이므로 101 크기 배열 생성

  // 초기값 설정
  dp[1] = 1;
  dp[2] = 1;
  dp[3] = 1;
  dp[4] = 2;
  dp[5] = 2;

  // 점화식 P(N) = P(N-1) + P(N-5)
  for (let i = 6; i <= 100; i++) {
    dp[i] = dp[i - 1] + dp[i - 5];
  }

  const results = [];
  for (let i = 0; i < T; i++) {
    const N = Number(input[i]);
    results.push(dp[N]);
  }

  console.log(results.join("\n"));
}

solution();





