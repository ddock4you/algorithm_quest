/*
개선 버전 1: Two Pointer 기법 (In-place 뒤집기)
시간복잡도: O(M × N/2) - 기존 대비 약 50% 빠름
공간복잡도: O(1) - 추가 메모리 불필요 (기존 O(N) → O(1))
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
if (N < 1 || N > 100 || M < 1 || M > 100) return;

// 초기 바구니 설정
const Baskets = Array.from({ length: N }, (_, i) => i + 1);

// Two Pointer를 이용한 in-place 뒤집기 함수
function reverseRange(arr, start, end) {
    let left = start;
    let right = end;
    
    while (left < right) {
        // 구조분해할당을 이용한 스왑 (ES6+)
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
}

// M번의 뒤집기 연산 수행
const changeGuide = input.slice(1).map(line => line.split(" ").map(Number));

const isValid = changeGuide.every(([i, j]) => {
    if ((i < 1 || i > N) || (j < 1 || j > N)) return false;
    
    // 1-based → 0-based 인덱스 변환
    reverseRange(Baskets, i - 1, j - 1);
    return true;
});

if (!isValid) return;
console.log(Baskets.join(" "));
