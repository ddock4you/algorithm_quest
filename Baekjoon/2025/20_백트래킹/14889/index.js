/*
TODO 제목: 스타트와 링크
! https://www.acmicpc.net/problem/14889
*/

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const stats = input.slice(1).map(row => row.split(' ').map(Number));

let minDifference = Infinity;
const visited = new Array(N).fill(false);

function dfs(depth, start) {
    // Base case: N/2명의 팀원이 모두 선택된 경우
    if (depth === N / 2) {
        const startTeam = [];
        const linkTeam = [];
        let startPower = 0;
        let linkPower = 0;

        // 방문 여부(visited)에 따라 스타트팀과 링크팀을 나눔
        for (let i = 0; i < N; i++) {
            if (visited[i]) {
                startTeam.push(i);
            } else {
                linkTeam.push(i);
            }
        }

        // 각 팀의 능력치를 계산
        // N/2명의 팀원 중 2명을 뽑는 모든 조합에 대해 능력치를 더함
        for (let i = 0; i < N / 2; i++) {
            for (let j = i + 1; j < N / 2; j++) {
                // 스타트팀 능력치 계산
                const p1_s = startTeam[i];
                const p2_s = startTeam[j];
                startPower += stats[p1_s][p2_s] + stats[p2_s][p1_s];

                // 링크팀 능력치 계산
                const p1_l = linkTeam[i];
                const p2_l = linkTeam[j];
                linkPower += stats[p1_l][p2_l] + stats[p2_l][p1_l];
            }
        }

        // 두 팀의 능력치 차이의 최솟값을 갱신
        const difference = Math.abs(startPower - linkPower);
        minDifference = Math.min(minDifference, difference);
        return;
    }

    // 백트래킹으로 팀 조합 생성
    // start 파라미터를 이용해 다음 탐색은 현재 선택한 사람(i) 이후부터 하도록 하여 조합을 만듦 (순열 X)
    for (let i = start; i < N; i++) {
        if (!visited[i]) {
            visited[i] = true; // i번 사람을 팀에 포함
            dfs(depth + 1, i + 1);
            visited[i] = false; // 백트래킹: i번 사람을 팀에서 제외하고 다른 경우의 수 탐색
        }
    }
}

dfs(0, 0);
console.log(minDifference);