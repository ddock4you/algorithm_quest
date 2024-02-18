/*
TODO 제목: 숫자 카드 2
! https://www.acmicpc.net/problem/10816
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((value) => value.split(" ").map((n) => +n));

const [, n, , m] = input;
const objectN = n.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
}, {});
const result = m.map((value) => objectN[value] || 0);

console.log(result.join(" "));
