/*
TODO 제목: 알고리즘 수업 - 알고리즘의 수행 시간 5
! https://www.acmicpc.net/problem/24266
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());
const number = BigInt(input);
console.log(`${number * number * number}`);
console.log(3);
