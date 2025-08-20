/*
TODO 제목: 수 정렬하기 3 - 힙 정렬(Heap Sort)
! https://www.acmicpc.net/problem/10989
! 주의: 메모리 제한으로 인해 실제 제출시에는 사용 불가
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);

// 힙 정렬(Heap Sort) 구현
function heapSort() {
    // 모든 숫자를 배열에 저장 (메모리 제한으로 인해 큰 입력에서는 문제 발생 가능)
    const numbers = [];
    for (let i = 1; i <= N; i++) {
        numbers.push(parseInt(input[i]));
    }
    
    // 힙 정렬 수행
    buildMaxHeap(numbers);
    
    for (let i = numbers.length - 1; i > 0; i--) {
        // 최대값(루트)을 배열 끝으로 이동
        [numbers[0], numbers[i]] = [numbers[i], numbers[0]];
        
        // 힙 크기를 줄이고 다시 힙 속성 유지
        maxHeapify(numbers, 0, i);
    }
    
    console.log(numbers.join('\n'));
}

// 최대 힙 구성
function buildMaxHeap(arr) {
    const heapSize = arr.length;
    
    // 마지막 내부 노드부터 루트까지 힙 속성 유지
    for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
        maxHeapify(arr, i, heapSize);
    }
}

// 힙 속성 유지 (최대 힙)
function maxHeapify(arr, i, heapSize) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let largest = i;
    
    // 왼쪽 자식이 더 큰 경우
    if (left < heapSize && arr[left] > arr[largest]) {
        largest = left;
    }
    
    // 오른쪽 자식이 더 큰 경우
    if (right < heapSize && arr[right] > arr[largest]) {
        largest = right;
    }
    
    // 가장 큰 값이 루트가 아닌 경우 교환하고 재귀 호출
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        maxHeapify(arr, largest, heapSize);
    }
}

heapSort();


