/*
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

Time Complexity - O(n)

Space Complexity - O(n)

Bonus

You must do this with constant or O(1) space and O(n) time.
*/

const countUniqueValues = (arr: number[] = []) => {
    if (arr.length === 0) return 0;

    let n = 0;

    for (let i = 1; i < arr.length; i += 1) {
        if (arr[n] !== arr[i]) {
            n += 1;
            arr[n] = arr[i];
        }
    }

    return n + 1;
};

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4
