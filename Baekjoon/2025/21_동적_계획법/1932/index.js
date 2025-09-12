/*
TODO 제목: 정수 삼각형
! https://www.acmicpc.net/problem/1932
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const triangle = input.slice(1).map(line => line.split(' ').map(Number));

// dp 배열 초기화 (triangle과 동일한 크기)
const dp = Array.from({ length: N }, (_, i) => Array(i + 1).fill(0));

// 첫 번째 행 초기화
dp[0][0] = triangle[0][0];

// 두 번째 행부터 N-1번째 행까지 계산
for (let i = 1; i < N; i++) {
    for (let j = 0; j <= i; j++) {
        if (j === 0) { // 가장 왼쪽 끝 숫자
            dp[i][j] = triangle[i][j] + dp[i-1][j];
        } else if (j === i) { // 가장 오른쪽 끝 숫자
            dp[i][j] = triangle[i][j] + dp[i-1][j-1];
        } else { // 중간에 있는 숫자
            dp[i][j] = triangle[i][j] + Math.max(dp[i-1][j-1], dp[i-1][j]);
        }
    }
}

// 마지막 행의 값들 중 최댓값 출력
console.log(Math.max(...dp[N-1]));





