/*
TODO 제목: 숫자 카드
! https://www.acmicpc.net/problem/18870
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((value) => value.split(" "));

let [n, nNumber, m, mNumber] = input;
let result = [];

const convertNumber = (array) => {
    return array.map((value) => +value);
};

// nNumber = convertNumber(nNumber).reduce((acc, value) => {
//     acc[value] = 1;
//     return acc;
// }, {});
nNumber = new Set(convertNumber(nNumber));
mNumber = convertNumber(mNumber);

mNumber.forEach((mNum) => (nNumber.has(mNum) ? result.push(1) : result.push(0)));

console.log(result.join(" "));
