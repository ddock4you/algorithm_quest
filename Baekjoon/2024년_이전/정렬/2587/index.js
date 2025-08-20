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
    .sort((a, b) => a - b);

const average = input.reduce((acc, number) => acc + number, 0) / input.length;
console.log(average);
console.log(input[2]);
