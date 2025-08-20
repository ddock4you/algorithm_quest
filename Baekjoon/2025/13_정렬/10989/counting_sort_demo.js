// 계수 정렬(Counting Sort) 완전 분석
console.log("🎯 계수 정렬(Counting Sort) 완전 가이드\n");

// 예시 데이터
const numbers = [4, 2, 2, 8, 3, 3, 1];
console.log("📊 정렬할 숫자들:", numbers);
console.log("📊 입력 범위: 1~8 (작은 범위!)");
console.log("📊 입력 개수:", numbers.length, "\n");

// 1단계: 카운팅 배열 생성
console.log("=== 1단계: 카운팅 배열 생성 ===");
const maxValue = 8; // 입력 범위의 최대값
const count = new Array(maxValue + 1).fill(0);
console.log("카운팅 배열 초기화:", count);
console.log("배열 크기:", maxValue + 1, "(0~8까지)\n");

// 2단계: 각 숫자의 개수 세기
console.log("=== 2단계: 각 숫자의 개수 세기 ===");
for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    count[num]++;
    console.log(`${num} 발견! count[${num}] = ${count[num]}`);
}
console.log("최종 카운팅 배열:", count);
console.log("해석: count[i] = 숫자 i가 나타난 횟수\n");

// 3단계: 정렬된 결과 생성
console.log("=== 3단계: 정렬된 결과 생성 ===");
const sorted = [];
for (let i = 0; i <= maxValue; i++) {
    for (let j = 0; j < count[i]; j++) {
        sorted.push(i);
        console.log(`숫자 ${i}를 ${j + 1}번째 추가`);
    }
}
console.log("정렬 완료:", sorted);

// 결과 비교
console.log("\n=== 결과 비교 ===");
console.log("원본:", numbers);
console.log("정렬:", sorted);
console.log("일반 정렬:", [...numbers].sort((a, b) => a - b));
console.log("결과 일치:", JSON.stringify(sorted) === JSON.stringify([...numbers].sort((a, b) => a - b)));

// 복잡도 분석
console.log("\n=== 복잡도 분석 ===");
console.log("시간복잡도: O(n + k)");
console.log("- n =", numbers.length, "(입력 개수)");
console.log("- k =", maxValue + 1, "(입력 범위)");
console.log("- 총 연산:", numbers.length + maxValue + 1, "번");
console.log("\n공간복잡도: O(k)");
console.log("- 카운팅 배열:", maxValue + 1, "개 필요");
console.log("- 메모리 사용량:", (maxValue + 1) * 4, "bytes (정수 기준)");
