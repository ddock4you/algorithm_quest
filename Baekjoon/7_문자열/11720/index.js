// todo 제목: 숫자의 합
// ! 문제: N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.
// * 입력: 첫째 줄에 숫자의 개수 N (1 ≤ N ≤ 100)이 주어진다. 둘째 줄에 숫자 N개가 공백없이 주어진다.
// ? 출력: 입력으로 주어진 숫자 N개의 합을 출력한다.
/*
 *예제 출력
    15
 */

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split('\n');


const N = Number(input[0]);
const arr = input[1].split('').map(v => Number(v));

const condition = (v) => v >= 1 && v <= 100;

if (condition(N)) {
    const sum = arr.reduce((acc, current) => acc + current);
    console.log(sum);
}