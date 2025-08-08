/*
Two Pointer 기법의 대표적인 활용 예시들
*/

// 📌 예시 1: 배열 뒤집기 (우리가 방금 구현한 것)
function reverseArray(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;  // 👈 left pointer
        end--;    // 👉 right pointer
    }
}

// 📌 예시 2: 두 수의 합 찾기 (정렬된 배열)
function twoSum(sortedArr, target) {
    let left = 0;
    let right = sortedArr.length - 1;
    
    while (left < right) {
        const sum = sortedArr[left] + sortedArr[right];
        
        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;   // 합이 작으면 왼쪽 포인터 증가
        } else {
            right--;  // 합이 크면 오른쪽 포인터 감소
        }
    }
    return null;
}

// 📌 예시 3: 팰린드롬 체크
function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// 📌 예시 4: 중복 제거 (정렬된 배열)
function removeDuplicates(nums) {
    if (nums.length === 0) return 0;
    
    let slow = 0;  // 👈 slow pointer
    let fast = 1;  // 👉 fast pointer
    
    while (fast < nums.length) {
        if (nums[slow] !== nums[fast]) {
            slow++;
            nums[slow] = nums[fast];
        }
        fast++;
    }
    return slow + 1;
}

// 🧪 테스트
console.log("=== Two Pointer 기법 예시들 ===");

// 예시 1: 배열 뒤집기
let arr1 = [1, 2, 3, 4, 5];
reverseArray(arr1, 1, 3);
console.log("1. 배열 뒤집기 [1,2,3,4,5] → [1,4,3,2,5]:", arr1);

// 예시 2: 두 수의 합
let arr2 = [1, 2, 7, 11, 15];
console.log("2. 두 수의 합 (target=9):", twoSum(arr2, 9));

// 예시 3: 팰린드롬
console.log("3. 팰린드롬 'racecar':", isPalindrome("racecar"));
console.log("3. 팰린드롬 'hello':", isPalindrome("hello"));

// 예시 4: 중복 제거
let arr3 = [1, 1, 2, 2, 3, 4, 4, 5];
let newLength = removeDuplicates(arr3);
console.log("4. 중복 제거:", arr3.slice(0, newLength));
