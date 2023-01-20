/*
Frequency Counter - validAnagram

Given two strings, write a function to determine if the second string is an anagram of the first.
An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

Time Complexity - O(n)
*/
var validAnagram = function (arr1, arr2) {
    if (arr1.length !== arr2.length)
        return false;
    var arr1Object = convertObject(arr1.split(""));
    var arr2Object = convertObject(arr2.split(""));
    var result = Object.keys(arr1Object).every(function (key) {
        return arr2Object.hasOwnProperty(key) &&
            arr1Object[key] === arr2Object[key];
    });
    return result;
};
var convertObject = function (arr) {
    var convert = arr.reduce(function (acc, current) {
        current in acc ? (acc[current] += 1) : (acc[current] = 1);
        return acc;
    }, {});
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
