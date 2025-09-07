/*
TODO 제목: 스도쿠
! https://www.acmicpc.net/problem/2580
*/

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const board = input.map(row => row.split(' ').map(Number));
const blankPositions = [];

for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
        if (board[row][col] === 0) {
            blankPositions.push([row, col]);
        }
    }
}

function isValid(row, col, num) {
    // 행 검사
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === num) return false;
    }
    // 열 검사
    for (let i = 0; i < 9; i++) {
        if (board[i][col] === num) return false;
    }
    // 3x3 박스 검사
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[startRow + i][startCol + j] === num) return false;
        }
    }
    return true;
}

function solveSudoku(idx) {
    if (idx === blankPositions.length) {
        // 모든 빈 칸을 채웠으면 결과 출력
        for (let row = 0; row < 9; row++) {
            console.log(board[row].join(' '));
        }
        return true; // 성공
    }

    const [row, col] = blankPositions[idx];
    for (let num = 1; num <= 9; num++) {
        if (isValid(row, col, num)) {
            board[row][col] = num;
            if (solveSudoku(idx + 1)) {
                return true; // 다음 단계로 이동하여 성공하면 계속 전파
            }
            board[row][col] = 0; // 백트래킹: 실패하면 다시 0으로
        }
    }
    return false; // 현재 위치에서 해결 불가능
}

solveSudoku(0);
