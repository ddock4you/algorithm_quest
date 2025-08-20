// 연결 리스트 동작 시각화 데모

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // 큐 상태를 시각적으로 출력
  display() {
    if (this.size === 0) {
      console.log("큐가 비어있습니다: null");
      return;
    }

    let current = this.head;
    let result = "";
    
    while (current) {
      result += `[${current.value}]`;
      if (current.next) {
        result += " -> ";
      }
      current = current.next;
    }
    
    result += " -> null";
    console.log(`큐 상태 (크기: ${this.size}): ${result}`);
    console.log(`head: [${this.head?.value}], tail: [${this.tail?.value}]`);
  }

  push(value) {
    console.log(`\n📥 ${value} 삽입:`);
    const newNode = new Node(value);
    
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
      console.log("  → 첫 번째 노드로 설정");
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      console.log("  → tail 뒤에 연결하고 tail 갱신");
    }
    
    this.size++;
    this.display();
  }

  shift() {
    if (this.size === 0) {
      console.log("❌ 큐가 비어있어서 삭제할 수 없습니다");
      return null;
    }

    const value = this.head.value;
    console.log(`\n📤 ${value} 삭제:`);
    
    this.head = this.head.next;
    this.size--;
    
    if (this.size === 0) {
      this.tail = null;
      console.log("  → 마지막 노드 삭제, tail도 null로 설정");
    } else {
      console.log("  → head를 다음 노드로 이동");
    }
    
    this.display();
    return value;
  }
}

// 데모 실행
console.log("🔗 연결 리스트로 구현한 큐 동작 시연\n");
console.log("=" .repeat(50));

const queue = new LinkedListQueue();
queue.display();

// 카드 1, 2, 3, 4, 5 삽입
for (let i = 1; i <= 5; i++) {
  queue.push(i);
}

console.log("\n" + "=" .repeat(50));
console.log("🎮 카드게임 시뮬레이션 시작 (첫 카드 버리고, 다음 카드 맨 뒤로)");

// 카드게임 시뮬레이션
while (queue.size > 1) {
  console.log("\n🗑️  맨 위 카드 버리기:");
  queue.shift();
  
  if (queue.size > 0) {
    console.log("\n🔄 다음 카드를 맨 뒤로 이동:");
    const card = queue.shift();
    queue.push(card);
  }
}

console.log("\n" + "=" .repeat(50));
console.log("🏆 최종 결과:");
queue.display();
