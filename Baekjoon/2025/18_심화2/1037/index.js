/*
TODO 제목: 약수
! https://www.acmicpc.net/problem/1037
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const array = input[1].split(" ").map(Number);

console.log(Math.min(...array) * Math.max(...array));


