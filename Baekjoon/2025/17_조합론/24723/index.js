/*
TODO 제목: 녹색거탑
! https://www.acmicpc.net/problem/24723
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());

if (input < 1 || input > 5) return;

console.log(2 ** input);