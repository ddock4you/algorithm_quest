/*
TODO 제목: 단어 정렬
! https://www.acmicpc.net/problem/1181
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n").map(word => word.replace(/\r/g, ""))
    .slice(1)

let result = "";
new Set(input.sort((a,b) => a.length - b.length || a.localeCompare(b))).forEach((word) => result += `${word}\n`);
console.log(result);

// localeCompare: 두 문자열을 유니코드로 변환 후 결과를 반환해주는 메서드(앞의 문자열이 뒤의 문자열보다 숫자가 큰지 작은지 비교) 