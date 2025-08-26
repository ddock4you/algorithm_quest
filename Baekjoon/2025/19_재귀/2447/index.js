/*
TODO 제목: 별 찍기 - 10
! https://www.acmicpc.net/problem/2447
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());

const board = Array.from({
  length: input
}, () => Array(input).fill("*"));

function drawStar(x, y, size) {
  if (size === 1) {
    return;
  }

  const newSize = size / 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i === 1 && j === 1) {
        for (let row = 0; row < newSize; row++) {
          for (let col = 0; col < newSize; col++) {
            board[x + i * newSize + row][y + j * newSize + col] = ' ';
          }
        }
      } else {
        drawStar(x + i * newSize, y + j * newSize, newSize);
      }
    }
  }
}

drawStar(0, 0, input);
console.log(board.map(row => row.join('')).join('\n'));