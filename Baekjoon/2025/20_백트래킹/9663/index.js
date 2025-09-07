/*
TODO 제목: N-Queen
! https://www.acmicpc.net/problem/9663
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const N = Number(input);

let count = 0;
const cols = new Array(N).fill(false);
const leftDiagonal = new Array(2 * N - 1).fill(false); // row - col + N - 1
const rightDiagonal = new Array(2 * N - 1).fill(false); // row + col

function dfs(row = 0) {
  if (row === N) {
    count++;
    return;
  }

  for (let col = 0; col < N; col++) {
    if (
      !cols[col] &&
      !leftDiagonal[row - col + N - 1] &&
      !rightDiagonal[row + col]
    ) {
      cols[col] = true;
      leftDiagonal[row - col + N - 1] = true;
      rightDiagonal[row + col] = true;
      dfs(row + 1);
      cols[col] = false;
      leftDiagonal[row - col + N - 1] = false;
      rightDiagonal[row + col] = false;
    }
  }
}

dfs();
console.log(count);

