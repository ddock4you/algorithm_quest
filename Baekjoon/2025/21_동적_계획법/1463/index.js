/*
TODO 제목: 1로 만들기
! https://www.acmicpc.net/problem/1463
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());

const dp = new Array(input + 1).fill(0);

for (let i = 2; i <= input; i++) {
  dp[i] = dp[i - 1] + 1; // 1을 빼는 경우

  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 2] + 1); // 2로 나누는 경우
  }
  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 3] + 1); // 3으로 나누는 경우
  }
}

console.log(dp[input]);

