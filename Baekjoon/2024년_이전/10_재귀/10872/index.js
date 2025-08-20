// todo 제목: 팩토리얼
// ! 문제: 0보다 크거나 같은 정수 N이 주어진다. 이때, N!을 출력하는 프로그램을 작성하시오.
// * 입력: 첫째 줄에 정수 N(0 ≤ N ≤ 12)이 주어진다.
// ? 출력: 첫째 줄에 N!을 출력한다.

/*
 *예제 출력
     3628800
 */

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = Number(fs
    .readFileSync(filePath)
    .toString());

const N = input;
// const condition = (N) => N >= 0 && N <= 12;
// let answer = 0;
// const factorial = (value) => {
//     if (answer === 0) answer = value; 
//     const answerIsOne = [0, 1];
//     if  (answerIsOne.includes(value)) {
//         // answer += 1;
//         return;
//     }

//     answer *= value - 1;
//     factorial(value - 1);
// }

// if (condition) factorial(N);

// console.log(answer);
// 하..멍청했다..


// 다른 사람 풀이
const factorial = (num) => {
    if (num <= 1) return 1;    
    return num * factorial(num - 1);
}

console.log(factorial(N));

