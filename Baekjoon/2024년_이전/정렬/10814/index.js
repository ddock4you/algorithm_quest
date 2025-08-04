/*
TODO 제목: 나이 순 정렬
! https://www.acmicpc.net/problem/10814
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n").map((array) => array.split(" ").map(word => word.replace(/\r/g, "")))
    .slice(1)

input.sort((a, b) => a[0] - b[0]).map((array) => console.log(`${array[0]} ${array[1]}`));



// localeCompare: 두 문자열을 유니코드로 변환 후 결과를 반환해주는 메서드(앞의 문자열이 뒤의 문자열보다 숫자가 큰지 작은지 비교) 