// todo 제목: A + B
// ! 문제: 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
// * 입력: 첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)
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
    .map((v) => v.split(" ").map((vv) => Number(vv)));

const array = input;
const condition = (v) => v > 0 && v < 10;

for (let i = 1; i < array.length; i += 1) {
    let [A, B] = array[i];
    if (!condition(A) && !condition(B)) {
        A = null;
        B = null;
    }
    console.log(A + B);
}
