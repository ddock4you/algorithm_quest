// o(n^2)
const maxSubarraySum = (arr: number[], num: number) => {
    if (num > arr.length) return null;

    let max = -Infinity;

    for (let i = 0; i < arr.length - num + 1; i += 1) {
        let temp = 0;
        for (let j = 0; j < num; j += 1) {
            temp += arr[i + j];
        }
        max = Math.max(max, temp);
    }

    return max;
};

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

// o(n)
const maxSubarraySum2 = (arr: number[], num: number) => {
    if (num > arr.length) return null;

    let max = 0;
    let temp = 0;

    for (let i = 0; i < num; i += 1) {
        temp += arr[i];
    }

    max = temp;

    for (let i = num; i < arr.length; i += 1) {
        temp = temp - arr[i - num] + arr[i];

        max = Math.max(max, temp);
    }

    return max;
};

console.log(maxSubarraySum2([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
