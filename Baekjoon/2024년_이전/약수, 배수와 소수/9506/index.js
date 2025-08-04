/*
TODO 제목: 약수들의 합
! https://www.acmicpc.net/problem/9506
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => Number(item))
    .slice(0, -1);

input.forEach((number) => {
    let divisor = [1];
    let sum = 1;
    for (let i = 2; i < number; i += 1) {
        if (number % i === 0) {
            divisor.push(i);
            sum += i;
        }
    }
    if (number === sum) {
        console.log(`${number} = ${divisor.join(" + ")}`);
    } else {
        console.log(`${number} is NOT perfect.`);
    }
});
