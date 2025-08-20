function binarySearch(array, num) {
    var start = 0;
    var end = array.length - 1;
    var mid = Math.floor((start + end) / 2);
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
