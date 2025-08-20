/*
TODO 제목: 영화감독 숌
! https://www.acmicpc.net/problem/1436
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());

let titleNumber = 666;
let series = 1;

while (series < input) {
    titleNumber += 1;
    if (String(titleNumber).includes("666")) {
        series += 1;
    }
}

console.log(titleNumber);
