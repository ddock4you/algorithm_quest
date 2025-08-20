const maxSubarraySum = (arr: number[], num: number) => {
    if (!arr || arr.length === 0 || arr.length < num) return;

    let sum = 0;
    let max = 0;
    for (let i = 0; i < num; i += 1) {
        sum += arr[i];
    }

    max = sum;

    for (let i = num; i < arr.length; i += 1) {
        sum += arr[i] - arr[i - num];
        max = Math.max(max, sum);
    }

    return max;
};

console.log(maxSubarraySum([100, 200, 300, 400], 2));
