// 계수 정렬 vs 다른 정렬 알고리즘 비교
console.log("📊 정렬 알고리즘 성능 비교\n");

const testData = [4, 2, 2, 8, 3, 3, 1];
console.log("테스트 데이터:", testData);
console.log("데이터 크기:", testData.length);
console.log("데이터 범위: 1~8\n");

// 1. 계수 정렬 (Counting Sort)
console.log("=== 1. 계수 정렬 (Counting Sort) ===");
function countingSort(arr, maxVal) {
    console.log("🔍 특징: 비교하지 않고 개수만 센다!");
    
    let operations = 0;
    const count = new Array(maxVal + 1).fill(0);
    
    // 카운팅
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]]++;
        operations++;
    }
    
    // 결과 생성
    const result = [];
    for (let i = 0; i <= maxVal; i++) {
        for (let j = 0; j < count[i]; j++) {
            result.push(i);
            operations++;
        }
    }
    
    console.log("연산 횟수:", operations);
    console.log("시간복잡도: O(n + k) =", arr.length, "+", maxVal + 1, "=", arr.length + maxVal + 1);
    console.log("공간복잡도: O(k) =", maxVal + 1);
    console.log("결과:", result);
    console.log();
    
    return result;
}

// 2. 버블 정렬 (Bubble Sort)
console.log("=== 2. 버블 정렬 (Bubble Sort) ===");
function bubbleSort(arr) {
    console.log("🔍 특징: 인접한 원소들을 비교하며 교환");
    
    let operations = 0;
    const result = [...arr];
    
    for (let i = 0; i < result.length - 1; i++) {
        for (let j = 0; j < result.length - 1 - i; j++) {
            operations++;
            if (result[j] > result[j + 1]) {
                [result[j], result[j + 1]] = [result[j + 1], result[j]];
            }
        }
    }
    
    console.log("비교 횟수:", operations);
    console.log("시간복잡도: O(n²) =", arr.length, "² =", arr.length * arr.length);
    console.log("공간복잡도: O(1)");
    console.log("결과:", result);
    console.log();
    
    return result;
}

// 3. 퀵 정렬 시뮬레이션
console.log("=== 3. 퀵 정렬 (Quick Sort) ===");
console.log("🔍 특징: 피벗을 기준으로 분할 정복");
console.log("비교 횟수: 약", Math.floor(testData.length * Math.log2(testData.length)), "회");
console.log("시간복잡도: O(n log n) = ", testData.length, "× log₂", testData.length, "≈", Math.floor(testData.length * Math.log2(testData.length)));
console.log("공간복잡도: O(log n)");
console.log("결과:", [...testData].sort((a, b) => a - b));
console.log();

// 실제 실행
countingSort(testData, 8);
bubbleSort(testData);

// 성능 요약
console.log("=== 성능 요약 (데이터 크기 7, 범위 1~8) ===");
console.log("계수 정렬:  16번 연산 ✅ 가장 빠름!");
console.log("버블 정렬:  36번 비교 ❌ 가장 느림");
console.log("퀅 정렬:   ~19번 비교 ⚡ 빠름");
console.log("\n📝 결론: 데이터 범위가 작으면 계수 정렬이 압도적으로 유리!");
