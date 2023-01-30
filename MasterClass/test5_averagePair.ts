const averagePair = (arr: number[], num: number) => {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let avg = (arr[start] + arr[end]) / 2;
        if (avg === num) return true;
        else if (avg < num) start += 1;
        else end -= 1;
    }
    return false;
};
