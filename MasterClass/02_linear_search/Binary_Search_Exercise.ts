function binarySearch(array: number[], num: number) {
    let start = 0;
    let end = array.length - 1;
    let mid = Math.floor((start + end) / 2);

    while (array[mid] !== num && start <= end) {
        if (array[mid] > num) {
            end = mid - 1;
        }
        if (array[mid] < num) {
            start = mid + 1;
        }
        mid = Math.floor((start + end) / 2);
    }

    return array[mid] === num ? mid : -1;
}
