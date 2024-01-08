function linearSearch(array: number[], num: number): number | undefined {
    // add whatever parameters you deem necessary - good luck!
    if (array.length === 0) return;
    let i = 0;
    while (i < array.length) {
        if (array[i] === num) {
            return i;
        }
        i += 1;
    }
    return -1;
}

console.log(linearSearch([10, 15, 20, 25, 30], 15));
