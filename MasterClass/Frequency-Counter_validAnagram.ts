/*
Frequency Counter - validAnagram


Given two strings, write a function to determine if the second string is an anagram of the first.
An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

Time Complexity - O(n)
*/

// first Solution
type confirmType = (word1: string, word2: string) => boolean;
type convertObjectInit = { [key: string]: number };

// const validAnagram: confirmType = (word1, word2) => {
//     if (word1.length !== word2.length) return false;

//     const word1Object = convertObject(word1.split(""));
//     const word2Object = convertObject(word2.split(""));
//     const result = Object.keys(word1Object).every(
//         (key) =>
//             word2Object.hasOwnProperty(key) &&
//             word1Object[key] === word2Object[key]
//     );

//     return result;
// };

// const convertObject = (arr: string[]) => {
//     const convert = arr.reduce((acc, current) => {
//         current in acc ? (acc[current] += 1) : (acc[current] = 1);
//         return acc;
//     }, {} as convertObjectInit);

//     return convert;
// };

const validAnagram: confirmType = (word1, word2) => {
    if (word1.length !== word2.length) return false;

    const word1Object = convertObject(word1.split(""));
    const word2Array = word2.split("");

    for (let key of word2Array) {
        if (!word1Object.hasOwnProperty(key) || word1Object[key] <= 0)
            return false;

        word1Object[key] -= 1;
    }
    return true;
};

const convertObject = (arr: string[]) => {
    const convert = arr.reduce((acc, current) => {
        current in acc ? (acc[current] += 1) : (acc[current] = 1);
        return acc;
    }, {} as convertObjectInit);

    return convert;
};

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false) // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
