/*
TODO 제목: 수 정렬하기 3 - 버킷 정렬(Bucket Sort)
! https://www.acmicpc.net/problem/10989
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);

// 버킷 정렬(Bucket Sort) 구현
function bucketSort() {
    // 입력 범위가 1~10,000이므로 100개의 버킷 사용 (각 버킷은 100개 범위)
    const bucketCount = 100;
    const buckets = Array.from({ length: bucketCount }, () => []);
    
    // 숫자들을 버킷에 분배
    for (let i = 1; i <= N; i++) {
        const num = parseInt(input[i]);
        const bucketIndex = Math.floor((num - 1) / 100); // 0-99 범위의 버킷 인덱스
        buckets[bucketIndex].push(num);
    }
    
    // 각 버킷 내부를 정렬하고 결과 출력
    let result = "";
    for (let i = 0; i < bucketCount; i++) {
        if (buckets[i].length > 0) {
            // 각 버킷 내부는 간단한 카운팅 정렬 사용
            const minVal = i * 100 + 1;
            const maxVal = Math.min((i + 1) * 100, 10000);
            const count = new Array(maxVal - minVal + 1).fill(0);
            
            // 버킷 내 숫자들 카운팅
            for (const num of buckets[i]) {
                count[num - minVal]++;
            }
            
            // 정렬된 결과 추가
            for (let j = 0; j < count.length; j++) {
                if (count[j] > 0) {
                    const value = minVal + j;
                    result += (value + "\n").repeat(count[j]);
                }
            }
        }
    }
    
    console.log(result.trim());
}

bucketSort();


