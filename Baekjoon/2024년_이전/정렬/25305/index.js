/*
TODO 제목: 커트라인
! https://www.acmicpc.net/problem/25305
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const cutline = Number(input[0].split(" ")[1]);
const scores = input[1].split(" ").sort((a, b) => b - a);
console.log(scores[cutline - 1]);
