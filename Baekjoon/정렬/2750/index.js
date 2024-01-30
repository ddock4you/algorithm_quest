/*
TODO 제목: 수 정렬하기
! https://www.acmicpc.net/problem/2750
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

input.sort((a, b) => a - b).forEach((number) => console.log(number));
