function merge(left: number[], right: number[]) {
    let i = 0;
    let j = 0;
    let newArray: number[] = [];

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            newArray.push(left[i]);
            i += 1;
        } else {
            newArray.push(right[j]);
            j += 1;
        }
    }

    while (i < left.length) {
        newArray.push(left[i]);
        i += 1;
    }

    while (j < right.length) {
        newArray.push(right[j]);
        j += 1;
    }

    return newArray;
}

function mergeSort(array: number[]) {
    if (array.length <= 1) return array;

    let midNumber = Math.floor(array.length / 2);
    let left: number[] = mergeSort(array.slice(0, midNumber));
    let right: number[] = mergeSort(array.slice(midNumber));

    return merge(left, right);
}

console.log(mergeSort([22, 11, 99, 18, 1, 66, 5]));
