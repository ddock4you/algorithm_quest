/*
TODO 제목: 수 정렬하기 3 - 기수 정렬(Radix Sort)
! https://www.acmicpc.net/problem/10989
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);

// 실제 기수 정렬(Radix Sort) - 자릿수별 정렬
function radixSort() {
    // 메모리 제한으로 인해 카운팅 방식 사용
    // 1의 자리, 10의 자리, 100의 자리, 1000의 자리, 10000의 자리 순으로 정렬
    
    const numbers = [];
    for (let i = 1; i <= N; i++) {
        numbers.push(parseInt(input[i]));
    }
    
    // 최대 자릿수 구하기 (10000 = 5자리)
    const maxDigits = 5;
    
    // 각 자릿수별로 카운팅 정렬 수행
    for (let digit = 0; digit < maxDigits; digit++) {
        const count = new Array(10).fill(0);
        const output = new Array(numbers.length);
        
        // 현재 자릿수의 숫자별 개수 세기
        for (let i = 0; i < numbers.length; i++) {
            const digitValue = Math.floor(numbers[i] / Math.pow(10, digit)) % 10;
            count[digitValue]++;
        }
        
        // 누적 카운트 계산
        for (let i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }
        
        // 뒤에서부터 정렬 (안정 정렬 유지)
        for (let i = numbers.length - 1; i >= 0; i--) {
            const digitValue = Math.floor(numbers[i] / Math.pow(10, digit)) % 10;
            output[count[digitValue] - 1] = numbers[i];
            count[digitValue]--;
        }
        
        // 결과를 원본 배열에 복사
        for (let i = 0; i < numbers.length; i++) {
            numbers[i] = output[i];
        }
    }
    
    // 결과 출력
    console.log(numbers.join('\n'));
}

radixSort();
