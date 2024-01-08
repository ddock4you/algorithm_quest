function bubbleSort(arr: number[]) {
    let noSwaps: boolean;
    for (let i = arr.length; i > 0; i -= 1) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j += 1) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
