/*
TODO 제목: 직사각형에서 탈출
! https://www.acmicpc.net/problem/1085
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map((item) => Number(item));

const notNumber = input.some((number) => {
    if (number === NaN || typeof number !== "number") return true;
    return false;
});

const condition1 = (number) => {
    return number >= 1 && number <= 1000;
};
const condition2 = (num1, num2) => {
    return num1 >= 1 && num1 <= num2 - 1;
};

const [x, y, w, h] = input;
if (notNumber) return;
if (!condition1(w) || !condition1(h)) return;
if (!condition2(x, w) || !condition2(y, h)) return;

console.log(Math.min(x, y, w - x, h - y));
