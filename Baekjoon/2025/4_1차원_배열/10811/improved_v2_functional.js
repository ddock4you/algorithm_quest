/*
개선 버전 2: 함수형 프로그래밍 스타일
시간복잡도: O(M × N/2) - Two Pointer 활용
공간복잡도: O(1) - In-place 연산
특징: 간결하고 가독성 좋은 코드
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

// 초기 바구니: [1, 2, 3, ..., N]
const baskets = Array.from({ length: N }, (_, i) => i + 1);

// 간결한 구간 뒤집기 함수
const reverseRange = (arr, start, end) => {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
};

// 연산 처리 (함수형 스타일)
input.slice(1, M + 1)
    .map(line => line.split(" ").map(Number))
    .forEach(([i, j]) => {
        reverseRange(baskets, i - 1, j - 1);
    });

console.log(baskets.join(" "));
