/*
TODO 제목: 수 정렬하기2
! https://www.acmicpc.net/problem/2751
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((number) => Number(number))
    .slice(1);

console.log(input.sort((a, b) => a - b).join("\n"));

// console.log를 한줄씩 출력하려 하면 시간초과로 검사 진행이 안됨.
