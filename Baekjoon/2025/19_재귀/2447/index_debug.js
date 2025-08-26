/*
TODO 제목: 별 찍기 - 10 (디버그 버전)
! https://www.acmicpc.net/problem/2447
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());

console.log(`입력값: ${input}`);
console.log("=".repeat(50));

// 2차원 배열 생성 및 초기화
const board = [];
for (let i = 0; i < input; i++) {
  board[i] = [];
  for (let j = 0; j < input; j++) {
    board[i][j] = "*";
  }
}

console.log("초기 상태:");
printBoard(board);

// 재귀 함수: 별 패턴 그리기
function drawStar(x, y, size, depth = 0) {
  const indent = "  ".repeat(depth);
  console.log(`${indent}drawStar(${x}, ${y}, ${size}) 호출됨`);
  
  // 기저 사례: 크기가 1이면 더 이상 나눌 수 없음
  if (size === 1) {
    console.log(`${indent}크기가 1이므로 재귀 종료`);
    return;
  }
  
  // 현재 크기를 3으로 나누기
  const newSize = size / 3;
  console.log(`${indent}크기 ${size}를 3으로 나누어 ${newSize}×${newSize} 블록 9개로 분할`);
  
  // 3×3 블록을 순회하면서 처리
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const blockX = x + i * newSize;
      const blockY = y + j * newSize;
      
      if (i === 1 && j === 1) {
        // 가운데 블록은 공백으로 채우기
        console.log(`${indent}가운데 블록 (${i},${j}) 위치 (${blockX},${blockY})를 공백으로 채움`);
        for (let row = 0; row < newSize; row++) {
          for (let col = 0; col < newSize; col++) {
            board[blockX + row][blockY + col] = " ";
          }
        }
      } else {
        // 나머지 8개 블록은 재귀적으로 처리
        console.log(`${indent}블록 (${i},${j}) 위치 (${blockX},${blockY})에 대해 재귀 호출`);
        drawStar(blockX, blockY, newSize, depth + 1);
      }
    }
  }
  
  console.log(`${indent}drawStar(${x}, ${y}, ${size}) 완료`);
}

// 배열을 출력하는 함수
function printBoard(board) {
  for (let i = 0; i < board.length; i++) {
    let row = "";
    for (let j = 0; j < board[i].length; j++) {
      row += board[i][j];
    }
    console.log(row);
  }
  console.log();
}

console.log("재귀 함수 시작!");
drawStar(0, 0, input);

console.log("최종 결과:");
printBoard(board);
