// todo 제목: A+B - 5
// ! 문제: 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
// * 입력: 입력은 여러 개의 테스트 케이스로 이루어져 있다.
// * 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)
// * 입력의 마지막에는 0 두 개가 들어온다.
// ? 출력: 각 테스트 케이스마다 A+B를 출력한다.

/*
 *예제 출력
        2
        5
        7
        17
        7
 */

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map((v2) => Number(v2)));

const condition = (v) => v >= 0 && v < 10;
let answer = String();
let i = 0;
while(i < input.length) {
    let [A, B] = input[i];
    if (!condition(A)) A = 0;
    if (!condition(B)) B = 0;
    if (A !== 0 || B !== 0) answer += `${A + B}\n`;
    i += 1;
}

const lastIndex = answer.lastIndexOf("\n");
console.log(answer.slice(0, lastIndex));
