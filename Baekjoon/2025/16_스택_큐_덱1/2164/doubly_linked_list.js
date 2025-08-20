// 양방향 연결 리스트 구현

class DoublyNode {
  constructor(value) {
    this.value = value;
    this.next = null;  // 다음 노드
    this.prev = null;  // 이전 노드
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // 뒤에 삽입 - O(1)
  append(value) {
    const newNode = new DoublyNode(value);
    
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
    console.log(`Append ${value}: ${this.displayForward()}`);
  }

  // 앞에 삽입 - O(1)
  prepend(value) {
    const newNode = new DoublyNode(value);
    
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
    console.log(`Prepend ${value}: ${this.displayForward()}`);
  }

  // 특정 위치에 삽입 - O(n)
  insertAt(index, value) {
    if (index < 0 || index > this.size) {
      console.log("❌ 잘못된 인덱스");
      return false;
    }
    
    if (index === 0) {
      this.prepend(value);
      return true;
    }
    
    if (index === this.size) {
      this.append(value);
      return true;
    }
    
    const newNode = new DoublyNode(value);
    let current;
    
    // 효율적인 탐색: 중간보다 앞이면 head부터, 뒤면 tail부터
    if (index <= this.size / 2) {
      current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = this.size - 1; i > index; i--) {
        current = current.prev;
      }
    }
    
    newNode.next = current;
    newNode.prev = current.prev;
    current.prev.next = newNode;
    current.prev = newNode;
    
    this.size++;
    console.log(`Insert ${value} at index ${index}: ${this.displayForward()}`);
    return true;
  }

  // 뒤에서 삭제 - O(1) (양방향이므로 가능!)
  removeLast() {
    if (this.size === 0) {
      console.log("❌ 리스트가 비어있습니다");
      return null;
    }
    
    const value = this.tail.value;
    
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    
    this.size--;
    console.log(`Remove last ${value}: ${this.displayForward()}`);
    return value;
  }

  // 앞에서 삭제 - O(1)
  removeFirst() {
    if (this.size === 0) {
      console.log("❌ 리스트가 비어있습니다");
      return null;
    }
    
    const value = this.head.value;
    
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    
    this.size--;
    console.log(`Remove first ${value}: ${this.displayForward()}`);
    return value;
  }

  // 특정 값 검색 - O(n)
  find(value) {
    let current = this.head;
    let index = 0;
    
    while (current) {
      if (current.value === value) {
        return { node: current, index };
      }
      current = current.next;
      index++;
    }
    
    return null;
  }

  // 특정 값 삭제 - O(n)
  remove(value) {
    const found = this.find(value);
    if (!found) {
      console.log(`❌ ${value}를 찾을 수 없습니다`);
      return false;
    }
    
    const node = found.node;
    
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else if (node === this.head) {
      this.head = node.next;
      this.head.prev = null;
    } else if (node === this.tail) {
      this.tail = node.prev;
      this.tail.next = null;
    } else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }
    
    this.size--;
    console.log(`Remove ${value}: ${this.displayForward()}`);
    return true;
  }

  // 정방향 출력
  displayForward() {
    if (this.size === 0) return "empty";
    
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result.join(' <-> ');
  }

  // 역방향 출력
  displayBackward() {
    if (this.size === 0) return "empty";
    
    const result = [];
    let current = this.tail;
    while (current) {
      result.push(current.value);
      current = current.prev;
    }
    return result.join(' <-> ');
  }

  // 리스트 정보 출력
  info() {
    console.log(`크기: ${this.size}`);
    console.log(`Head: ${this.head?.value || 'null'}`);
    console.log(`Tail: ${this.tail?.value || 'null'}`);
    console.log(`정방향: ${this.displayForward()}`);
    console.log(`역방향: ${this.displayBackward()}`);
    console.log("-".repeat(40));
  }
}

// 양방향 연결 리스트 데모
console.log("🔗 양방향 연결 리스트 예제\n");

const dll = new DoublyLinkedList();
dll.info();

console.log("🔸 요소들 추가:");
dll.append(1);
dll.append(2);
dll.prepend(0);
dll.append(3);

console.log("\n🔸 중간에 삽입:");
dll.insertAt(2, 1.5);

console.log("\n🔸 검색 테스트:");
const found = dll.find(1.5);
console.log(`1.5 검색 결과: ${found ? `인덱스 ${found.index}에서 발견` : '없음'}`);

console.log("\n🔸 삭제 테스트:");
dll.remove(1.5);
dll.removeLast();
dll.removeFirst();

console.log("\n🔸 최종 상태:");
dll.info();

// 실제 활용 예제: 브라우저 히스토리
console.log("=" .repeat(50));
console.log("🔸 실제 활용 예제: 브라우저 히스토리");

class BrowserHistory {
  constructor() {
    this.current = null;
    this.list = new DoublyLinkedList();
  }
  
  visit(url) {
    console.log(`🌐 방문: ${url}`);
    
    // 현재 위치 이후의 모든 히스토리 삭제 (새 페이지 방문 시)
    if (this.current && this.current.next) {
      let toDelete = this.current.next;
      while (toDelete) {
        const next = toDelete.next;
        this.list.remove(toDelete.value);
        toDelete = next;
      }
    }
    
    this.list.append(url);
    this.current = this.list.tail;
  }
  
  back() {
    if (this.current && this.current.prev) {
      this.current = this.current.prev;
      console.log(`⬅️  뒤로: ${this.current.value}`);
      return this.current.value;
    }
    console.log("❌ 더 이상 뒤로 갈 수 없습니다");
    return null;
  }
  
  forward() {
    if (this.current && this.current.next) {
      this.current = this.current.next;
      console.log(`➡️  앞으로: ${this.current.value}`);
      return this.current.value;
    }
    console.log("❌ 더 이상 앞으로 갈 수 없습니다");
    return null;
  }
  
  currentPage() {
    return this.current ? this.current.value : null;
  }
}

const browser = new BrowserHistory();
browser.visit("google.com");
browser.visit("naver.com");
browser.visit("github.com");
browser.back();
browser.back();
browser.forward();
browser.visit("stackoverflow.com"); // 새 페이지 방문 (github.com 히스토리 삭제됨)
browser.forward(); // 실패해야 함
