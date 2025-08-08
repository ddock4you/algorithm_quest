/*
개선 버전 3: JavaScript 내장 메서드 활용
시간복잡도: O(M × N) - slice, reverse, splice 사용
공간복잡도: O(구간 길이) - slice로 임시 배열 생성
특징: 가장 읽기 쉽고 직관적인 코드
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

// 초기 바구니
const baskets = Array.from({ length: N }, (_, i) => i + 1);

// 내장 메서드를 활용한 구간 뒤집기
const reverseRange = (arr, start, end) => {
    const length = end - start + 1;
    const reversed = arr.slice(start, end + 1).reverse();
    arr.splice(start, length, ...reversed);
};

// 연산 처리
input.slice(1, M + 1)
    .map(line => line.split(" ").map(Number))
    .forEach(([i, j]) => {
        reverseRange(baskets, i - 1, j - 1);
    });

console.log(baskets.join(" "));
