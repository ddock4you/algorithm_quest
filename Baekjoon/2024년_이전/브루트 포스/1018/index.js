/*
TODO 제목: 블랙잭
! https://www.acmicpc.net/problem/2798
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [row, col] = input
    .shift(0, 1)
    .split(" ")
    .map((number) => Number(number));
const board = input.map((value) => value.replace(/\r/g, "").split(""));

const result = [];
for (let i = 0; i <= row - 8; i += 1) {
    for (let j = 0; j <= col - 8; j += 1) {
        // 처음 색깔이 흰색인지 검정색인지 결정하는 반복문 필요
        ["W", "B"].forEach((color) => {
            let count = 0;
            let nowColor = color;
            for (let k = i; k < i + 8; k += 1) {
                for (let l = j; l < j + 8; l += 1) {
                    if (board[k][l] !== nowColor) {
                        count += 1;
                    }
                    nowColor = nowColor === "W" ? "B" : "W";
                }
                nowColor = nowColor === "W" ? "B" : "W";
            }
            result.push(count);
        });
    }
}

console.log(Math.min(...result));
