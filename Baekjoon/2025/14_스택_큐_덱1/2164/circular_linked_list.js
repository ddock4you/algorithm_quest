// 원형 연결 리스트 구현 및 요세푸스 문제 해결

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // 삽입 - O(1)
  append(value) {
    const newNode = new Node(value);
    
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = newNode; // 자기 자신을 가리킴
    } else {
      newNode.next = this.head;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    
    this.size++;
    console.log(`Add ${value}: ${this.display()}`);
  }

  // 특정 위치의 노드 삭제 - O(n)
  removeAt(index) {
    if (this.size === 0 || index < 0 || index >= this.size) {
      console.log("❌ 잘못된 인덱스");
      return null;
    }

    if (this.size === 1) {
      const value = this.head.value;
      this.head = null;
      this.tail = null;
      this.size = 0;
      console.log(`Remove ${value}: empty`);
      return value;
    }

    let current = this.head;
    let prev = this.tail;

    // 삭제할 노드까지 이동
    for (let i = 0; i < index; i++) {
      prev = current;
      current = current.next;
    }

    const value = current.value;

    // 연결 재구성
    prev.next = current.next;

    // head나 tail이 삭제되는 경우 업데이트
    if (current === this.head) {
      this.head = current.next;
    }
    if (current === this.tail) {
      this.tail = prev;
    }

    this.size--;
    console.log(`Remove ${value}: ${this.display()}`);
    return value;
  }

  // 특정 값 삭제
  remove(value) {
    const index = this.indexOf(value);
    if (index !== -1) {
      return this.removeAt(index);
    }
    return null;
  }

  // 값의 인덱스 찾기
  indexOf(value) {
    if (this.size === 0) return -1;

    let current = this.head;
    for (let i = 0; i < this.size; i++) {
      if (current.value === value) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  // 리스트 순회 (무한루프 방지를 위해 size만큼만)
  display() {
    if (this.size === 0) return "empty";

    const result = [];
    let current = this.head;
    
    for (let i = 0; i < this.size; i++) {
      result.push(current.value);
      current = current.next;
    }
    
    return result.join(' -> ') + ' -> (원형)';
  }

  // 특정 위치부터 k번째마다 제거하는 요세푸스 문제 해결
  josephus(k) {
    if (this.size === 0) return [];
    
    const eliminated = [];
    let current = this.head;
    let currentIndex = 0;

    console.log(`\n🎯 요세푸스 문제 시작 (k=${k})`);
    console.log(`초기 상태: ${this.display()}`);

    while (this.size > 0) {
      // k-1번 이동 (현재 위치에서 k번째를 찾기 위함)
      for (let i = 1; i < k; i++) {
        current = current.next;
        currentIndex = (currentIndex + 1) % this.size;
      }

      console.log(`\n제거할 위치: ${currentIndex} (값: ${current.value})`);
      eliminated.push(current.value);
      
      // 현재 노드를 제거하고 다음 노드로 이동
      const nextNode = current.next;
      this.removeAt(currentIndex);
      
      // 리스트가 비어있지 않으면 다음 노드로 이동
      if (this.size > 0) {
        current = nextNode;
        // 인덱스 조정 (하나 제거되었으므로)
        if (currentIndex >= this.size) {
          currentIndex = 0;
          current = this.head;
        }
      }
    }

    return eliminated;
  }
}

// 원형 연결 리스트 데모
console.log("🔄 원형 연결 리스트 데모\n");

const cll = new CircularLinkedList();

// 요소 추가
console.log("🔸 요소들 추가:");
for (let i = 1; i <= 7; i++) {
  cll.append(i);
}

// 요세푸스 문제 해결 (매 3번째 사람 제거)
console.log("\n" + "=".repeat(50));
const result = cll.josephus(3);
console.log(`\n🏆 제거 순서: ${result.join(' -> ')}`);
console.log(`🏆 최후의 생존자: ${result[result.length - 1]}`);

// 새로운 리스트로 다른 k값 테스트
console.log("\n" + "=".repeat(50));
console.log("🔸 다른 k값으로 테스트");

const cll2 = new CircularLinkedList();
for (let i = 1; i <= 5; i++) {
  cll2.append(i);
}

const result2 = cll2.josephus(2);
console.log(`\nk=2일 때 제거 순서: ${result2.join(' -> ')}`);

// 실제 요세푸스 문제 시나리오
console.log("\n" + "=".repeat(50));
console.log("📖 실제 요세푸스 문제 시나리오");
console.log(`
요세푸스 문제는 다음과 같은 역사적 배경을 가집니다:

🏺 배경:
- 서기 67년, 유대-로마 전쟁 중
- 요세푸스와 40명의 유대 병사들이 동굴에 포위됨
- 로마군에게 항복하느냐, 자결하느냐의 선택
- 자결을 선택하되, 서로 죽이는 방식으로 결정

🔄 규칙:
- 41명이 원형으로 서서
- 매 3번째 사람을 죽임
- 요세푸스는 마지막까지 살아남고 싶어함

🎯 목표:
- 어느 위치에 서야 마지막까지 살아남을 수 있는가?
`);

const josephusProblem = new CircularLinkedList();
for (let i = 1; i <= 41; i++) {
  josephusProblem.append(i);
}

console.log("🎭 41명의 요세푸스 문제 시뮬레이션:");
const historicalResult = josephusProblem.josephus(3);
const survivor = historicalResult[historicalResult.length - 1];
const secondSurvivor = historicalResult[historicalResult.length - 2];

console.log(`\n🏆 결과:`);
console.log(`- 마지막 생존자 (요세푸스): ${survivor}번 위치`);
console.log(`- 끝에서 두 번째: ${secondSurvivor}번 위치`);
console.log(`\n💡 요세푸스는 ${survivor}번 위치에 서서 살아남았고,`);
console.log(`   마지막에 ${secondSurvivor}번 위치의 사람과 함께 로마군에 항복했습니다.`);

// 현대적 응용 예제
console.log("\n" + "=".repeat(50));
console.log("🚀 현대적 응용 예제");

class GameElimination {
  constructor(players) {
    this.cll = new CircularLinkedList();
    players.forEach(player => this.cll.append(player));
  }
  
  eliminateEveryKth(k) {
    console.log(`\n🎮 ${k}번째마다 플레이어 제거:`);
    return this.cll.josephus(k);
  }
}

// 온라인 게임 토너먼트
const players = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank'];
const game = new GameElimination(players);
const eliminationOrder = game.eliminateEveryKth(3);

console.log(`\n🏆 토너먼트 결과:`);
console.log(`제거 순서: ${eliminationOrder.slice(0, -1).join(' -> ')}`);
console.log(`🥇 우승자: ${eliminationOrder[eliminationOrder.length - 1]}`);

// 다양한 k값에 대한 생존자 위치 계산
console.log("\n" + "=".repeat(50));
console.log("📊 다양한 조건에서의 생존자 위치");

function josephusSurvivor(n, k) {
  const cll = new CircularLinkedList();
  for (let i = 1; i <= n; i++) {
    cll.append(i);
  }
  const result = cll.josephus(k);
  return result[result.length - 1];
}

console.log("\nn명의 사람, k번째마다 제거할 때 생존자 위치:");
console.log("n\\k\t2\t3\t4\t5");
console.log("-".repeat(30));

for (let n = 5; n <= 10; n++) {
  let row = `${n}\t`;
  for (let k = 2; k <= 5; k++) {
    const survivor = josephusSurvivor(n, k);
    row += `${survivor}\t`;
  }
  console.log(row);
}
