function insertionSort(array: number[]) {
    for (let i = 1; i < array.length; i += 1) {
        let currentValue = array[i];
        for (let j = i - 1; j >= 0 && array[j] > currentValue; j -= 1) {
            array[j + 1] = array[j];
        }
        array[j + 1] = currentValue;
    }
    return array;
}

insertionSort([2, 1, 9, 76, 4]);
