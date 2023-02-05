type objProp = {
    [key: string | number]: number;
};

const findLongestSubstring = (word: string) => {
    const obj: objProp = {};
    let start = 0;
    let longest = 0;

    for (let i = 0; i < word.length; i += 1) {
        // console.log(word[i]);
        const alphabet = word[i];
        if (obj[alphabet]) {
            start = Math.max(start, obj[alphabet]);
        }
        longest = Math.max(longest, i - start + 1);
        obj[alphabet] = i + 1;
    }
    return longest;
};

// console.log(findLongestSubstring("rithmschool")); // 7
// console.log(findLongestSubstring("")); // 0
// console.log(findLongestSubstring("rithmschool")); // 7
// console.log(findLongestSubstring("thisisawesome")); // 6
// console.log(findLongestSubstring("thecatinthehat")); // 7
// console.log(findLongestSubstring("bbbbbb")); // 1
// console.log(findLongestSubstring("longestsubstring")); // 8
// console.log(findLongestSubstring("thisishowwedoit")); // 6
