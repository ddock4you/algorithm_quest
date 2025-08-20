/*
TODO 제목: 삼각형 외우기
! https://www.acmicpc.net/problem/10101

세 각의 크기가 모두 60이면, Equilateral
세 각의 합이 180이고, 두 각이 같은 경우에는 Isosceles
세 각의 합이 180이고, 같은 각이 없는 경우에는 Scalene
세 각의 합이 180이 아닌 경우에는 Error
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => Number(item));

let sum = 0;
let typeOfValue = {};

for (let i = 0; i < input.length; i += 1) {
    sum += input[i];
    typeOfValue[input[i]] = (typeOfValue[input[i]] || 0) + 1;
}

const result =
    Object.keys(typeOfValue).length === 1
        ? "Equilateral"
        : Object.keys(typeOfValue).length === 2 && sum === 180
        ? "Isosceles"
        : Object.keys(typeOfValue).length === 3 && sum === 180
        ? "Scalene"
        : "Error";
console.log(result);
