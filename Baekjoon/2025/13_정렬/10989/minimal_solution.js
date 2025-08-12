// 백준 10989번: 극한 메모리 최적화 - 모든 불필요한 요소 제거
// Node.js 런타임 오버헤드 최소화

// 모듈 로딩 최소화: fs만 사용
const {readFileSync} = require('fs');

// 전역 변수로 메모리 최소화
let count = new Array(10001).fill(0);

// 입력 처리 최적화: Buffer 직접 파싱
let input = readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt");
let pos = 0;

// N 추출
let n = 0;
while (pos < input.length && input[pos] !== 10) {
    n = n * 10 + (input[pos] - 48);
    pos++;
}
pos++;

// 숫자들 처리
for (let i = 0; i < n; i++) {
    let num = 0;
    while (pos < input.length && input[pos] !== 10) {
        num = num * 10 + (input[pos] - 48);
        pos++;
    }
    pos++;
    count[num]++;
}

// 입력 메모리 해제
input = null;

// 출력 최적화: 단일 문자열로 구성 후 한 번에 출력
let result = '';
for (let i = 1; i <= 10000; i++) {
    if (count[i] > 0) {
        result += (i + '\n').repeat(count[i]);
    }
}

// 마지막 개행 제거 후 출력
console.log(result.slice(0, -1));
