/*
TODO 제목: 진법 변환
! https://www.acmicpc.net/problem/2745
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

let number = input[0].split("").reverse();
let base = Number(input[1]);
// let remainder = number;

const convert = (value) => {
    const number = value >= "A" && value <= "Z" ? value.charCodeAt() - 55 : value;
    return Number(number);
};

const result = number.reduce((sum, item, i) => {
    sum += convert(item) * Math.pow(base, i);
    return sum;
}, 0);

console.log(result);
