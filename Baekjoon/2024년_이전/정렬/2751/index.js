/*
TODO 제목: 소트인사이드
! https://www.acmicpc.net/problem/1427
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("")
    .map((number) => Number(number));

console.log(input.sort((a, b) => b - a).join(""));

// console.log를 한줄씩 출력하려 하면 시간초과로 검사 진행이 안됨.
