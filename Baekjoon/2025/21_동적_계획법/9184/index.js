/*
TODO 제목: 신나는 함수 실행
! https://www.acmicpc.net/problem/9184
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let result = [];

const dp = Array.from({ length: 21 }, () =>
  Array.from({ length: 21 }, () => Array(21).fill(0))
);


function w(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return 1;
  }
  if (a > 20 || b > 20 || c > 20) {
    return w(20, 20, 20);
  }
  if (dp[a][b][c] !== 0) {
    return dp[a][b][c];
  }

  if (a < b && b < c) {
    dp[a][b][c] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
  } else {
    dp[a][b][c] =
      w(a - 1, b, c) +
      w(a - 1, b - 1, c) +
      w(a - 1, b, c - 1) -
      w(a - 1, b - 1, c - 1);
  }
  return dp[a][b][c];
}

input.forEach((item) => {
  const [a, b, c] = item.split(" ").map(Number);
  if (a === -1 && b === -1 && c === -1) {
    return;
  }
  const res = w(a, b, c);
  result.push(`w(${a}, ${b}, ${c}) = ${res}`);
});

console.log(result.join("\n"));

