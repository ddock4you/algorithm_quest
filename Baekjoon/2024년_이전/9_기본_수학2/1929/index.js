// todo 제목: 소수 구하기
// ! 문제: M이상 N이하의 소수를 모두 출력하는 프로그램을 작성하시오.
// * 입력: 첫째 줄에 자연수 M과 N이 빈 칸을 사이에 두고 주어진다.
// * (1 ≤ M ≤ N ≤ 1,000,000) M이상 N이하의 소수가 하나 이상 있는 입력만 주어진다.
// ? 출력: 한 줄에 하나씩, 증가하는 순서대로 소수를 출력한다.

/*
 *예제 출력
     3
     5
     7
     11
     13
 */

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
    .readFileSync(filePath)
    .toString()
    .split(" ")
    .map((v) => Number(v));

const [M, N] = input;
const condition = (m, n) => m >= 1 && n >= m && n <= 1000000;

if (condition(M, N)) {
    //     let answer = "";
    //     for (let i = M; i <= N; i += 1) {
    //         const primeCheck = [2, 3, 5, 7];
    //         if (primeCheck.some((v) => i === v)) {
    //             answer += `${i}\n`;
    //             continue;
    //         }
    //         if (primeCheck.some((v) => i % v === 0)) {
    //             continue;
    //         }
    //         answer += `${i}\n`;
    //     }
    //     const lastIndex = answer.lastIndexOf("\n");
    //     console.log(answer.slice(0, lastIndex));

    //    2~ 제곱근까지 나눠보기
     const isPrime = (num) => {
          if (num === 1) return;
          for (var i = 2; i <= Math.sqrt(num); i += 1) {
               if (num % i == 0) return;
          }
          return true;
     };
     for (var i = M; i <= N; i += 1) isPrime(i) ? console.log(i) : null;

    // 에라토스체네스의 체
//     const arr = Array(N + 1)
//         .fill()
//         .map((v, i) => i);

//     for (let i = 2; i <= Math.sqrt(N); i++) {
//         if (arr[i]) for (let j = i * i; j <= N; j += i) arr[j] = false;
//     }
//     arr.splice(0, 2, false, false);
//     for (let i = M; i <= N; i++) {
//         if (arr[i]) console.log(arr[i]);
//     }
}
