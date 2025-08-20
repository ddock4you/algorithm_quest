/*
TODO 제목: 진법 변환 2
! https://www.acmicpc.net/problem/11005
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map((item) => Number(item));

let [number, base] = input;
let result = [];
let remainder = number;

const convert = (value) => {
    return value >= 10 ? String.fromCharCode(value + 55) : value;
};

while (number >= base) {
    remainder = number % base;
    number = Math.floor(number / base);
    result.push(convert(remainder));
}
result.push(convert(number));
console.log(result.reverse().join(""));

// console.log(number.toString(base).toUpperCase());
