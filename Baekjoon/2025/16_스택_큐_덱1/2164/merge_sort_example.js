/**
 * 병합 정렬 (Merge Sort) 구현
 *
 * 병합 정렬은 분할 정복(Divide and Conquer) 알고리즘의 하나로,
 * 데이터를 절반으로 계속 나누어 정렬된 부분 리스트로 만든 후,
 * 다시 합쳐나가면서 전체 리스트를 정렬하는 방식입니다.
 */

/**
 * 두 개의 정렬된 배열을 하나로 병합하는 함수
 * @param {number[]} left - 왼쪽 부분 배열
 * @param {number[]} right - 오른쪽 부분 배열
 * @returns {number[]} 병합된 정렬된 배열
 */
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // left 또는 right 배열 중 하나라도 끝날 때까지 반복
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // 남아있는 요소들을 결과 배열에 추가
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

/**
 * 병합 정렬 알고리즘
 * @param {number[]} arr - 정렬할 배열
 * @returns {number[]} 정렬된 배열
 */
function mergeSort(arr) {
    // 배열의 길이가 1 이하이면 이미 정렬된 것으로 간주하고 반환
    if (arr.length <= 1) {
        return arr;
    }

    // 배열을 절반으로 분할
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // 재귀적으로 각 부분 배열을 정렬한 후 병합
    return merge(mergeSort(left), mergeSort(right));
}

// 예제 사용
const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(unsortedArray);
console.log("원본 배열:", unsortedArray);
console.log("정렬된 배열:", sortedArray);

// 시각적 시연을 위한 단계별 출력
function mergeSortWithSteps(arr) {
    if (arr.length <= 1) {
        console.log(`  -> 기본 케이스: [${arr}]`);
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    console.log(`분할: [${arr}] -> 왼쪽: [${left}], 오른쪽: [${right}]`);

    const sortedLeft = mergeSortWithSteps(left);
    const sortedRight = mergeSortWithSteps(right);

    const merged = merge(sortedLeft, sortedRight);
    console.log(`병합: [${sortedLeft}] + [${sortedRight}] -> [${merged}]`);
    return merged;
}

console.log("\n--- 병합 정렬 단계별 시연 ---");
const demoArray = [5, 2, 4, 6, 1, 3];
console.log("시작 배열:", demoArray);
mergeSortWithSteps(demoArray);
console.log("최종 정렬된 배열:", mergeSortWithSteps([5, 2, 4, 6, 1, 3]));


// 성능 측정을 위한 코드
function generateRandomArray(size) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * size));
}

console.log("\n--- 병합 정렬 성능 측정 ---");

const sizes = [1000, 10000, 100000];

sizes.forEach(size => {
    const arr = generateRandomArray(size);
    const startTime = process.hrtime.bigint();
    mergeSort(arr);
    const endTime = process.hrtime.bigint();
    const durationMs = Number(endTime - startTime) / 1_000_000;
    console.log(`크기 ${size} 배열 정렬 시간: ${durationMs.toFixed(3)} ms`);
});
