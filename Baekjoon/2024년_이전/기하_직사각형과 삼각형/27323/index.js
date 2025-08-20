/*
TODO 제목: 직사각형
! https://www.acmicpc.net/problem/27323
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => Number(item));

const [number1, number2] = input;
const condition = (item) => {
    return item >= 1 && item <= 100;
};
if (!condition(number1) || !condition(number2)) return;

console.log(number1 * number2);
