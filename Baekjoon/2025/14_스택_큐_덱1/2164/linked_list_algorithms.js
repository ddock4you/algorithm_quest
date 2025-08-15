// 연결 리스트 관련 알고리즘 문제 해결

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedListAlgorithms {
  
  // 배열을 연결 리스트로 변환 (테스트용)
  static arrayToList(arr) {
    if (arr.length === 0) return null;
    
    const head = new ListNode(arr[0]);
    let current = head;
    
    for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;
    }
    
    return head;
  }
  
  // 연결 리스트를 배열로 변환 (출력용)
  static listToArray(head) {
    const result = [];
    let current = head;
    
    while (current) {
      result.push(current.val);
      current = current.next;
    }
    
    return result;
  }
  
  // 1. 연결 리스트 뒤집기 (Reverse Linked List)
  static reverseList(head) {
    console.log("🔄 연결 리스트 뒤집기");
    
    let prev = null;
    let current = head;
    
    while (current) {
      const nextTemp = current.next;  // 다음 노드 저장
      current.next = prev;            // 연결 방향 뒤집기
      prev = current;                 // prev를 현재로 이동
      current = nextTemp;             // current를 다음으로 이동
    }
    
    return prev; // 새로운 head
  }
  
  // 2. 두 정렬된 연결 리스트 합병 (Merge Two Sorted Lists)
  static mergeTwoLists(l1, l2) {
    console.log("🔗 두 정렬된 연결 리스트 합병");
    
    const dummy = new ListNode(0);
    let current = dummy;
    
    while (l1 && l2) {
      if (l1.val <= l2.val) {
        current.next = l1;
        l1 = l1.next;
      } else {
        current.next = l2;
        l2 = l2.next;
      }
      current = current.next;
    }
    
    // 남은 노드들 연결
    current.next = l1 || l2;
    
    return dummy.next;
  }
  
  // 3. 연결 리스트에서 순환 감지 (Cycle Detection - Floyd's Algorithm)
  static hasCycle(head) {
    console.log("🔍 순환 감지 (토끼와 거북이 알고리즘)");
    
    if (!head || !head.next) return false;
    
    let slow = head;  // 거북이 (1칸씩)
    let fast = head;  // 토끼 (2칸씩)
    
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      
      if (slow === fast) {
        console.log("  → 순환 발견!");
        return true;
      }
    }
    
    console.log("  → 순환 없음");
    return false;
  }
  
  // 4. 연결 리스트의 중간 노드 찾기 (Find Middle Node)
  static findMiddle(head) {
    console.log("🎯 중간 노드 찾기");
    
    if (!head) return null;
    
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    
    console.log(`  → 중간 노드 값: ${slow.val}`);
    return slow;
  }
  
  // 5. 연결 리스트에서 N번째 끝 노드 제거 (Remove Nth Node From End)
  static removeNthFromEnd(head, n) {
    console.log(`🗑️  끝에서 ${n}번째 노드 제거`);
    
    const dummy = new ListNode(0);
    dummy.next = head;
    
    let first = dummy;
    let second = dummy;
    
    // first를 n+1만큼 앞으로 이동
    for (let i = 0; i <= n; i++) {
      first = first.next;
    }
    
    // first와 second를 함께 이동 (간격 유지)
    while (first) {
      first = first.next;
      second = second.next;
    }
    
    // second.next가 제거할 노드
    const removedVal = second.next ? second.next.val : null;
    second.next = second.next ? second.next.next : null;
    
    console.log(`  → 제거된 값: ${removedVal}`);
    return dummy.next;
  }
  
  // 6. 팰린드롬 연결 리스트 확인 (Palindrome Linked List)
  static isPalindrome(head) {
    console.log("🔄 팰린드롬 확인");
    
    if (!head || !head.next) return true;
    
    // 1. 중간점 찾기
    let slow = head;
    let fast = head;
    
    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    
    // 2. 뒤쪽 절반 뒤집기
    let secondHalf = this.reverseList(slow.next);
    
    // 3. 앞쪽과 뒤쪽 비교
    let firstHalf = head;
    let result = true;
    
    while (secondHalf) {
      if (firstHalf.val !== secondHalf.val) {
        result = false;
        break;
      }
      firstHalf = firstHalf.next;
      secondHalf = secondHalf.next;
    }
    
    console.log(`  → 팰린드롬: ${result ? '예' : '아니오'}`);
    return result;
  }
  
  // 7. 두 연결 리스트의 교집합 찾기 (Intersection of Two Linked Lists)
  static getIntersectionNode(headA, headB) {
    console.log("🤝 두 연결 리스트의 교집합");
    
    if (!headA || !headB) return null;
    
    let pA = headA;
    let pB = headB;
    
    // 두 포인터가 만날 때까지 반복
    while (pA !== pB) {
      pA = pA ? pA.next : headB;
      pB = pB ? pB.next : headA;
    }
    
    if (pA) {
      console.log(`  → 교집합 노드 값: ${pA.val}`);
    } else {
      console.log(`  → 교집합 없음`);
    }
    
    return pA;
  }
  
  // 8. 연결 리스트 정렬 (Merge Sort)
  static sortList(head) {
    console.log("📊 연결 리스트 정렬 (병합 정렬)");
    
    if (!head || !head.next) return head;
    
    // 중간점 찾기
    let prev = null;
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
      prev = slow;
      slow = slow.next;
      fast = fast.next.next;
    }
    
    prev.next = null; // 리스트 분할
    
    // 재귀적으로 정렬
    const left = this.sortList(head);
    const right = this.sortList(slow);
    
    // 병합
    return this.mergeTwoLists(left, right);
  }
}

// 알고리즘 테스트
console.log("🧮 연결 리스트 알고리즘 문제 해결");
console.log("=".repeat(60));

// 1. 연결 리스트 뒤집기 테스트
console.log("\n1️⃣ 연결 리스트 뒤집기:");
const list1 = LinkedListAlgorithms.arrayToList([1, 2, 3, 4, 5]);
console.log("원본:", LinkedListAlgorithms.listToArray(list1));
const reversed = LinkedListAlgorithms.reverseList(list1);
console.log("뒤집기 후:", LinkedListAlgorithms.listToArray(reversed));

// 2. 두 정렬된 리스트 합병 테스트
console.log("\n2️⃣ 두 정렬된 연결 리스트 합병:");
const list2a = LinkedListAlgorithms.arrayToList([1, 2, 4]);
const list2b = LinkedListAlgorithms.arrayToList([1, 3, 4]);
console.log("리스트 A:", LinkedListAlgorithms.listToArray(list2a));
console.log("리스트 B:", LinkedListAlgorithms.listToArray(list2b));
const merged = LinkedListAlgorithms.mergeTwoLists(list2a, list2b);
console.log("합병 결과:", LinkedListAlgorithms.listToArray(merged));

// 3. 순환 감지 테스트
console.log("\n3️⃣ 순환 감지:");
const list3 = LinkedListAlgorithms.arrayToList([3, 2, 0, -4]);
// 순환 만들기: 마지막 노드가 두 번째 노드를 가리키도록
let current = list3;
while (current.next) current = current.next;
current.next = list3.next; // 순환 생성

LinkedListAlgorithms.hasCycle(list3);

// 순환이 없는 리스트 테스트
const list3b = LinkedListAlgorithms.arrayToList([1, 2, 3, 4]);
LinkedListAlgorithms.hasCycle(list3b);

// 4. 중간 노드 찾기 테스트
console.log("\n4️⃣ 중간 노드 찾기:");
const list4 = LinkedListAlgorithms.arrayToList([1, 2, 3, 4, 5]);
console.log("리스트:", LinkedListAlgorithms.listToArray(list4));
LinkedListAlgorithms.findMiddle(list4);

const list4b = LinkedListAlgorithms.arrayToList([1, 2, 3, 4, 5, 6]);
console.log("리스트:", LinkedListAlgorithms.listToArray(list4b));
LinkedListAlgorithms.findMiddle(list4b);

// 5. 끝에서 N번째 노드 제거 테스트
console.log("\n5️⃣ 끝에서 N번째 노드 제거:");
const list5 = LinkedListAlgorithms.arrayToList([1, 2, 3, 4, 5]);
console.log("원본:", LinkedListAlgorithms.listToArray(list5));
const after_removal = LinkedListAlgorithms.removeNthFromEnd(list5, 2);
console.log("제거 후:", LinkedListAlgorithms.listToArray(after_removal));

// 6. 팰린드롬 확인 테스트
console.log("\n6️⃣ 팰린드롬 확인:");
const palindrome1 = LinkedListAlgorithms.arrayToList([1, 2, 2, 1]);
console.log("리스트:", LinkedListAlgorithms.listToArray(palindrome1));
LinkedListAlgorithms.isPalindrome(palindrome1);

const palindrome2 = LinkedListAlgorithms.arrayToList([1, 2, 3, 2, 1]);
console.log("리스트:", LinkedListAlgorithms.listToArray(palindrome2));
LinkedListAlgorithms.isPalindrome(palindrome2);

const notPalindrome = LinkedListAlgorithms.arrayToList([1, 2, 3, 4]);
console.log("리스트:", LinkedListAlgorithms.listToArray(notPalindrome));
LinkedListAlgorithms.isPalindrome(notPalindrome);

// 7. 연결 리스트 정렬 테스트
console.log("\n7️⃣ 연결 리스트 정렬:");
const unsorted = LinkedListAlgorithms.arrayToList([4, 2, 1, 3]);
console.log("정렬 전:", LinkedListAlgorithms.listToArray(unsorted));
const sorted = LinkedListAlgorithms.sortList(unsorted);
console.log("정렬 후:", LinkedListAlgorithms.listToArray(sorted));

// 복잡한 정렬 테스트
const unsorted2 = LinkedListAlgorithms.arrayToList([-1, 5, 3, 4, 0]);
console.log("정렬 전:", LinkedListAlgorithms.listToArray(unsorted2));
const sorted2 = LinkedListAlgorithms.sortList(unsorted2);
console.log("정렬 후:", LinkedListAlgorithms.listToArray(sorted2));

// 실제 코딩 테스트 문제 스타일
console.log("\n" + "=".repeat(60));
console.log("🎯 실제 코딩 테스트 문제 스타일");
console.log("=".repeat(60));

class CodingTestProblems {
  
  // LeetCode 21: Merge Two Sorted Lists
  static mergeTwoSortedLists(l1, l2) {
    const dummy = new ListNode(0);
    let current = dummy;
    
    while (l1 && l2) {
      if (l1.val <= l2.val) {
        current.next = l1;
        l1 = l1.next;
      } else {
        current.next = l2;
        l2 = l2.next;
      }
      current = current.next;
    }
    
    current.next = l1 || l2;
    return dummy.next;
  }
  
  // LeetCode 206: Reverse Linked List
  static reverseLinkedList(head) {
    let prev = null;
    let current = head;
    
    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    
    return prev;
  }
  
  // LeetCode 141: Linked List Cycle
  static hasCycle(head) {
    if (!head || !head.next) return false;
    
    let slow = head;
    let fast = head.next;
    
    while (fast && fast.next) {
      if (slow === fast) return true;
      slow = slow.next;
      fast = fast.next.next;
    }
    
    return false;
  }
}

console.log("\n✅ 모든 연결 리스트 알고리즘 테스트 완료!");
console.log(`
📚 학습한 주요 알고리즘:
1. 연결 리스트 뒤집기 - O(n) 시간, O(1) 공간
2. 두 정렬된 리스트 합병 - O(n+m) 시간, O(1) 공간
3. 순환 감지 (Floyd's Algorithm) - O(n) 시간, O(1) 공간
4. 중간 노드 찾기 - O(n) 시간, O(1) 공간
5. 끝에서 N번째 노드 제거 - O(n) 시간, O(1) 공간
6. 팰린드롬 확인 - O(n) 시간, O(1) 공간
7. 연결 리스트 정렬 (병합정렬) - O(n log n) 시간, O(log n) 공간

🎯 코딩 테스트에서 자주 나오는 패턴:
- 투 포인터 (Two Pointers)
- 빠른/느린 포인터 (Fast/Slow Pointers)
- 더미 노드 (Dummy Node) 활용
- 재귀적 분할 정복 (Divide and Conquer)
`);
