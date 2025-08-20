function bubbleSort(arr) {
    var noSwaps;
    for (var i = arr.length; i > 0; i -= 1) {
        noSwaps = true;
        for (var j = 0; j < i - 1; j += 1) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}
console.log(bubbleSort([8, 1, 5, 3, 9, 5, 4, 7]));
