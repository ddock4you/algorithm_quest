// todo 제목: 빠른 A + B
// ! 문제: 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
// * 입력: 첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)
// ? 출력: 각 테스트 케이스마다 A+B를 출력한다.

/*
    *예제 출력
        2
        46
        505
        100
        2000
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map((vv) => Number(vv)));

const array = input;
const condition = (v) => v >= 1 && v <= 1000;
let answer = String();

for (let i = 1; i < array.length; i += 1) {
    let [A, B] = array[i];
    if (!condition(A) && !condition(B)) {
        A = null;
        B = null;
    }
    answer += `${A + B}\n`;
}
const lastIndex = answer.lastIndexOf("\n");
console.log(answer.slice(0, lastIndex));
