/*
TODO 제목: 약수 구하기
! https://www.acmicpc.net/problem/2501
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map((item) => Number(item));

const [number1, number2] = input;
const divisor = [1];

for (let i = 2; i < number1; i += 1) {
    if (number1 % i === 0) {
        divisor.push(i);
    }
}

divisor.push(number1);
console.log(divisor.length >= number2 ? divisor[number2 - 1] : 0);
