/*
TODO 제목: 스택 2
! https://www.acmicpc.net/problem/28278
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => isNaN(+v) ? v.split(' ').map(n => +n) : +v)
  .slice(1);

const stack = [];
let result = '';
// 1 X: 정수 X를 스택에 넣는다. (1 ≤ X ≤ 100,000)
// 2: 스택에 정수가 있다면 맨 위의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다.
// 3: 스택에 들어있는 정수의 개수를 출력한다.
// 4: 스택이 비어있으면 1, 아니면 0을 출력한다.
// 5: 스택에 정수가 있다면 맨 위의 정수를 출력한다. 없다면 -1을 대신 출력한다.

const skill = {
  1: (x) => stack.push(x[1]),
  2: () => {
    let num = -1;
    if (stack.length > 0) {
      num = stack.pop();
    };
    result += `${num}\n`;
  },
  3: () => result += `${stack.length}\n`,
  4: () => result += `${(stack.length > 0 ? 0 : 1)}\n`,
  5: () => result += `${(stack.length > 0 ? stack[stack.length - 1] : -1)}\n`
};

input.forEach((item) => {
  Array.isArray(item)
    ? skill[item[0]](item)
    : skill[item]()
  }
);

console.log(result);