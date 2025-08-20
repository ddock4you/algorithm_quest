const countUniqueValues = (array: number[]) => {
    // add whatever parameters you deem necessary - good luck!
    if (array.length === 0) return array;

    let i = 0;
    const newArray: number[] = [array[0]];

    for (let j = 1; j < array.length; j += 1) {
        if (array[i] !== array[j]) {
            newArray.push(array[j]);
            i = j;
        }
    }

    return newArray;
};

console.log(countUniqueValues([1, 1, 1, 1, 2, 2, 2, 4, 4, 5, 6, 8]));
