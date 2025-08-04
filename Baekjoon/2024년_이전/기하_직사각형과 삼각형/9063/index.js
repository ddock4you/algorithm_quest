/*
TODO 제목: 대지
! https://www.acmicpc.net/problem/9063
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => item.split(" ").map((num) => Number(num)))
    .slice(1);

const convert = (array) => {
    return Math.max(...array) - Math.min(...array);
};

const xArray = input.map((item) => item[0]);
const yArray = input.map((item) => item[1]);

console.log(convert(xArray) * convert(yArray));
