// todo 제목: 골드바흐의 추측
// ! 문제: 1보다 큰 자연수 중에서  1과 자기 자신을 제외한 약수가 없는 자연수를 소수라고 한다. 예를 들어, 5는 1과 5를 제외한 약수가 없기 때문에 소수이다. 하지만, 6은 6 = 2 × 3 이기 때문에 소수가 아니다.
// ! 골드바흐의 추측은 유명한 정수론의 미해결 문제로, 2보다 큰 모든 짝수는 두 소수의 합으로 나타낼 수 있다는 것이다.
// ! 이러한 수를 골드바흐 수라고 한다. 또, 짝수를 두 소수의 합으로 나타내는 표현을 그 수의 골드바흐 파티션이라고 한다.
// ! 예를 들면, 4 = 2 + 2, 6 = 3 + 3, 8 = 3 + 5, 10 = 5 + 5, 12 = 5 + 7, 14 = 3 + 11, 14 = 7 + 7이다.
// ! 10000보다 작거나 같은 모든 짝수 n에 대한 골드바흐 파티션은 존재한다.
// ! 2보다 큰 짝수 n이 주어졌을 때, n의 골드바흐 파티션을 출력하는 프로그램을 작성하시오.
// ! 만약 가능한 n의 골드바흐 파티션이 여러 가지인 경우에는 두 소수의 차이가 가장 작은 것을 출력한다.
// * 입력: 첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있고 짝수 n이 주어진다.
// ? 출력: 각 테스트 케이스에 대해서 주어진 n의 골드바흐 파티션을 출력한다.
// ? 출력하는 소수는 작은 것부터 먼저 출력하며, 공백으로 구분한다.
// * 제한 : 4 ≤ n ≤ 10,000

/*
 *예제 출력
    3 5
    5 5
    5 11
 */

// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs
//     .readFileSync(filePath)
//     .toString()
//     .split("\n")
//     .map((v) => Number(v));

// const isPrime = (num) => {
//     if (num === 1) return;
//     for (let i = 2; i <= Math.sqrt(num); i += 1) {
//         if (num % i === 0) return;
//     }
//     return true;
// };

// const INPUT_ARRAY = input.slice(1);
// const MAX_NUMBER = Math.max(...INPUT_ARRAY);
// const NUMBER_ARRAY = Array(MAX_NUMBER + 1)
//     .fill()
//     .map((v, i) => Number(i))
//     .slice(1);
// const PRIME_NUMBER_ARRAY = NUMBER_ARRAY.reduce((acc, number) => {
//     isPrime(number) ? acc.push(number) : null;
//     return acc;
// }, []);

// const condition = (v) => v >= 4 && v <= 10000;
// console.log({PRIME_NUMBER_ARRAY});
// INPUT_ARRAY.forEach(v => {
//     if (condition(v)) {
//         let a, b;
//         PRIME_NUMBER_ARRAY.forEach((prime, i) => {
//             let sum;
//             for (let j = i; j < PRIME_NUMBER_ARRAY.length; j += 1) {
//                 sum = prime + PRIME_NUMBER_ARRAY[j];
//                 if (sum > v) {
//                     break;
//                 }
//                 if (sum === v) {
//                     console.log({prime1: prime, prime2: PRIME_NUMBER_ARRAY[j]});
//                     a = prime;
//                     b = PRIME_NUMBER_ARRAY[j];
//                     break;
//                 }
//             }
//             // console.log({prime});
//         })
//         console.log(`${a} ${b}`);
//     }
// })

// 또다른 풀이
const fs = require("fs");
const input = fs
    .readFileSync("./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((v) => +v);
input.shift();
const MAX = Math.max(...input);
const answer = [];
let prime = new Array(MAX + 1).fill(true);
prime[0] = false;
prime[1] = false;
for (let i = 2; i * i <= MAX + 1; i++) {
    if (prime[i]) {
        for (let j = i * i; j <= MAX + 1; j += i) {
            // console.log({i, j});
            prime[j] = false;
        }
    }
}

input.forEach((v) => {
    for (let i = Math.ceil(v / 2); i > 1; i--) {
        //   console.log({prime1: `${prime[i]}, ${i}`, prime2: `${prime[v - i]}, ${v - i}`});
        if (prime[i] && prime[v - i]) {
            answer.push(`${i} ${v - i}`);
            break;
        }
    }
});

console.log(answer.join("\n"));
