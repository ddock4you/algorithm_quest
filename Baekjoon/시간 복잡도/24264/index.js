/*
TODO 제목: 알고리즘 수업 - 알고리즘의 수행 시간 3
! https://www.acmicpc.net/problem/24264
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

console.log(Math.pow(input, 2));
console.log(2);
