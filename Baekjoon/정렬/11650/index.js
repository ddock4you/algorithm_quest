/*
TODO 제목: 좌표 정렬하기
! https://www.acmicpc.net/problem/11650
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .slice(1)
    .map((i) => i.split(" ").map((n) => Number(n)));

let result = "";

input
    .sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        }
        return a[1] - b[1];
    })
    .forEach((i) => {
        result += `${i[0]} ${i[1]}\n`;
    });

console.log(result);
