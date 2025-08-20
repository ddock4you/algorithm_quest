/*
TODO 제목: 문자와 문자열
! https://www.acmicpc.net/problem/27866
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [word, index] = input;

console.log(word[index - 1]);



