// todo 제목: A+B - 8
// ! 문제: 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
// * 입력: 첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)
// ? 출력: 각 테스트 케이스마다 "Case #x: "를 출력한 다음, A+B를 출력한다. 테스트 케이스 번호는 1부터 시작한다.

/*
    *예제 출력
        Case #1: 1 + 1 = 2
        Case #2: 2 + 3 = 5
        Case #3: 3 + 4 = 7
        Case #4: 9 + 8 = 17
        Case #5: 5 + 2 = 7
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map((v2) => Number(v2)));

const condition = (v) => v > 0 && v < 10;
let answer = String();

for (let i = 1; i < input.length; i += 1) {
    const [A, B] = input[i];
    if (condition(A) && condition(B)) {
        answer += `Case #${i}: ${A} + ${B} = ${A + B}\n`;
    } else {
        answer += `Case #${i}: false\n`;
    }
}

const lastIndex = answer.lastIndexOf("\n");
console.log(answer.slice(0, lastIndex));
