function naiveSearch(long: string, short: string) {
    let count = 0;
    for (let i = 0; i < long.length; i += 1) {
        for (let j = 0; short.length; j += 1) {
            if (long[i + j] !== short[j]) break;
            if (j === short.length - 1) count += 1;
        }
    }
    return count;
}

console.log(naiveSearch("lorie loled", "lol"));
