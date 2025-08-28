/*
TODO 제목: N과 M (2)
! https://www.acmicpc.net/problem/15650
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const [N, M] = input.map(Number);

// 백트래킹 함수: N개의 수 중 M개를 선택하는 모든 조합 생성 (오름차순)
const backtracking = (N, M) => {
  const result = [];        // 현재까지 선택된 수들을 저장
  
  const generateCombination = (start, depth) => {
    // M개를 모두 선택했으면 결과 출력
    if (depth === M) {
      console.log(result.join(" "));
      return;
    }
    
    // start부터 N까지의 수를 순회하며 선택 (오름차순 보장)
    for (let i = start; i <= N; i++) {
      // 현재 수를 선택
      result.push(i);
      
      // 다음 단계로 재귀 호출 (i+1부터 시작하여 오름차순 보장)
      generateCombination(i + 1, depth + 1);
      
      // 백트래킹: 현재 수를 선택 해제
      result.pop();
    }
  };
  
  generateCombination(1, 0);
};

backtracking(N, M);