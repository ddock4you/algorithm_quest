/*
TODO 제목: 블랙잭
! https://www.acmicpc.net/problem/2798
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map((item) => Number(item)));

const goal = input[0][1];
const cards = input[1];

let sum = 0;

console.log(input);
