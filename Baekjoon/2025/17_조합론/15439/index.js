/*
TODO 제목: 베라의 패션
! https://www.acmicpc.net/problem/15439
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());

console.log(input * (input - 1));


