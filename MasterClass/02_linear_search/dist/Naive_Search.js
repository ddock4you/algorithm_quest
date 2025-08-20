function naiveSearch(long, short) {
    var count = 0;
    for (var i = 0; i < long.length; i += 1) {
        for (var j = 0; short.length; j += 1) {
            if (long[i + j] !== short[j])
                break;
            if (j === short.length - 1)
                count += 1;
        }
    }
    return count;
}
console.log(naiveSearch("lorie loled", "lol"));
